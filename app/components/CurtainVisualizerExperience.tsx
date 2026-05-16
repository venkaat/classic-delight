"use client";

import React, {
  useState,
  ChangeEvent,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { Canvas, FabricImage } from "fabric";
import Image from "next/image";

// ─── Overlay map ────────────────────────────────────────────────────────────
const overlays: Record<string, { src: string; label: string; hint: string }> = {
  Sheer: {
    src: "/images/visualizer/overlays/beige.png",
    label: "Sheer",
    hint: "Light & airy",
  },
  Blackout: {
    src: "/images/visualizer/overlays/grey-velvet.png",
    label: "Blackout",
    hint: "Full privacy",
  },
  Velvet: {
    src: "/images/visualizer/overlays/sheer-white-open.png",
    label: "Velvet",
    hint: "Luxury feel",
  },
};

const DEFAULT_ROOM = "/images/visualizer/default-room.jpg";

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Scale and place a FabricImage to cover the full canvas */
function coverCanvas(canvas: Canvas, img: FabricImage) {
  const scaleX = canvas.width! / img.width!;
  const scaleY = canvas.height! / img.height!;
  const scale = Math.max(scaleX, scaleY);
  img.set({ scaleX: scale, scaleY: scale, originX: "left", originY: "top", left: 0, top: 0 });
}

/** Center a FabricImage overlay on the canvas at a given scale */
function centerOverlay(canvas: Canvas, img: FabricImage, widthRatio = 0.58) {
  const targetWidth = canvas.width! * widthRatio;
  img.scaleToWidth(targetWidth);
  img.set({
    left: (canvas.width! - targetWidth) / 2,
    top: canvas.height! * 0.05,
    cornerColor: "#f26522",
    cornerStyle: "circle",
    transparentCorners: false,
    borderColor: "#f26522",
    padding: 6,
  });
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function CurtainVisualizerExperience() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selected, setSelected] = useState("Sheer");
  const [isLoadingOverlay, setIsLoadingOverlay] = useState(false);
  const [isLoadingBg, setIsLoadingBg] = useState(false);
  const [canvasReady, setCanvasReady] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const fabricCanvasRef = useRef<Canvas | null>(null);
  const currentOverlayRef = useRef<FabricImage | null>(null);

  // ── Sync canvas pixel size to its CSS rendered size ──────────────────────
  const syncCanvasSize = useCallback(() => {
    const canvas = fabricCanvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const { width } = wrapper.getBoundingClientRect();
    const height = Math.round((width * 9) / 16); // maintain 16:9

    canvas.width = width;
    canvas.height = height;
    // Also resize the underlying HTML canvas element
    const el = canvas.getElement();
    el.width = width;
    el.height = height;
    canvas.renderAll();
  }, []);

  // ── Update background ────────────────────────────────────────────────────
  const updateBackground = useCallback((url: string) => {
    const canvas = fabricCanvasRef.current;
    if (!canvas) return;

    setIsLoadingBg(true);
    FabricImage.fromURL(url, { crossOrigin: "anonymous" }).then((img) => {
      coverCanvas(canvas, img);
      canvas.backgroundImage = img;
      canvas.renderAll();
      setIsLoadingBg(false);
    }).catch(() => setIsLoadingBg(false));
  }, []);

  // ── Init Fabric canvas ────────────────────────────────────────────────────
  useEffect(() => {
    if (!canvasRef.current || !wrapperRef.current) return;

    const { width } = wrapperRef.current.getBoundingClientRect();
    const height = Math.round((width * 9) / 16);

    const canvas = new Canvas(canvasRef.current, {
      width,
      height,
      selection: true,
    });

    fabricCanvasRef.current = canvas;
    setCanvasReady(true);

    // Load default background
    updateBackground(DEFAULT_ROOM);

    // Resize observer
    const ro = new ResizeObserver(() => syncCanvasSize());
    ro.observe(wrapperRef.current!);

    return () => {
      ro.disconnect();
      canvas.dispose();
      fabricCanvasRef.current = null;
      setCanvasReady(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── React to uploaded image ───────────────────────────────────────────────
  useEffect(() => {
    if (uploadedImage) updateBackground(uploadedImage);
  }, [uploadedImage, updateBackground]);

  // ── React to overlay selection ────────────────────────────────────────────
  useEffect(() => {
    if (!canvasReady || !fabricCanvasRef.current) return;
    const canvas = fabricCanvasRef.current;
    setIsLoadingOverlay(true);

    FabricImage.fromURL(overlays[selected].src, { crossOrigin: "anonymous" })
      .then((img) => {
        if (currentOverlayRef.current) {
          canvas.remove(currentOverlayRef.current);
        }
        centerOverlay(canvas, img);
        currentOverlayRef.current = img;
        canvas.add(img);
        canvas.setActiveObject(img);
        canvas.renderAll();
      })
      .catch(console.error)
      .finally(() => setIsLoadingOverlay(false));
  }, [selected, canvasReady]);

  // ── Handlers ──────────────────────────────────────────────────────────────
  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setUploadedImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleDownload = () => {
    const canvas = fabricCanvasRef.current;
    if (!canvas) return;
    // Deselect active object so handles don't appear in export
    canvas.discardActiveObject();
    canvas.renderAll();
    const dataURL = canvas.toDataURL({ format: "png", multiplier: 2 });
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "curtain-preview.png";
    link.click();
  };

  const handleReset = () => {
    setUploadedImage(null);
    updateBackground(DEFAULT_ROOM);
  };

  const isLoading = isLoadingOverlay || isLoadingBg;

  return (
    <section className="relative py-16 md:py-32 bg-black overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#f26522]/20 blur-[120px] md:blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#f26522]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
          <p className="uppercase tracking-[4px] md:tracking-[5px] text-[#f26522] text-xs md:text-sm font-semibold mb-4 md:mb-6">
            Room Visualizer
          </p>
          <h2 className="text-white text-4xl sm:text-5xl md:text-7xl leading-[0.92] font-semibold tracking-[-0.04em] mb-5 md:mb-8">
            Preview Curtains
            <br />
            In Your Space
          </h2>
          <p className="text-white/60 text-base md:text-xl leading-relaxed max-w-xl mx-auto">
            Upload your room photo, pick a fabric, then drag and resize the
            curtain overlay before saving your preview.
          </p>
        </div>

        {/* CONTROLS ROW */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6 md:mb-10">

          {/* STYLE BUTTONS */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {Object.entries(overlays).map(([key, { label, hint }]) => (
              <button
                key={key}
                onClick={() => setSelected(key)}
                disabled={isLoading}
                className={`group relative px-5 md:px-7 py-2.5 md:py-3 rounded-2xl border transition-all duration-400 text-sm md:text-base ${
                  selected === key
                    ? "bg-[#f26522] border-[#f26522] text-white shadow-lg shadow-[#f26522]/20"
                    : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span>{label}</span>
                <span
                  className={`ml-1.5 text-xs hidden sm:inline transition-opacity ${
                    selected === key ? "opacity-70" : "opacity-0 group-hover:opacity-50"
                  }`}
                >
                  {hint}
                </span>
              </button>
            ))}
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex gap-2 md:gap-3">

            {/* Reset */}
            {uploadedImage && (
              <button
                onClick={handleReset}
                className="px-4 md:px-5 py-2.5 md:py-3 rounded-2xl border border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm"
              >
                Reset Room
              </button>
            )}

            {/* Download */}
            <button
              onClick={handleDownload}
              className="px-4 md:px-6 py-2.5 md:py-3 rounded-2xl border border-[#f26522]/30 bg-[#f26522]/10 text-[#f26522] hover:bg-[#f26522]/20 transition-all duration-300 text-sm md:text-base font-medium"
            >
              ↓ Save Preview
            </button>

            {/* Upload */}
            <label className="cursor-pointer">
              <div className="bg-white text-black px-5 md:px-8 py-2.5 md:py-3 rounded-2xl font-medium hover:scale-105 active:scale-95 transition-all duration-300 text-sm md:text-base whitespace-nowrap">
                Upload Room
              </div>
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleUpload}
              />
            </label>

          </div>
        </div>

        {/* CANVAS WRAPPER */}
        <div className="relative max-w-6xl mx-auto">
          <div
            ref={wrapperRef}
            className="relative w-full aspect-video rounded-[24px] md:rounded-[40px] overflow-hidden bg-[#111] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
          >
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

            {/* Loading overlay */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-20 pointer-events-none">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-8 border-2 border-[#f26522] border-t-transparent rounded-full animate-spin" />
                  <p className="text-white/70 text-sm">Loading...</p>
                </div>
              </div>
            )}

            {/* Drag hint badge */}
            {!isLoading && canvasReady && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-white/50 text-xs pointer-events-none select-none">
                Drag · Resize · Rotate the curtain overlay
              </div>
            )}
          </div>

          {/* Corner label */}
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-white/60 text-xs pointer-events-none">
            {selected} Curtain
          </div>
        </div>

        {/* TIP ROW */}
        <div className="max-w-6xl mx-auto mt-5 md:mt-6 flex flex-wrap gap-3 md:gap-6 justify-center text-white/30 text-xs md:text-sm">
          {[
            "📸 Upload your own room for accurate preview",
            "↔ Drag corners to resize the curtain",
            "💾 Save Preview to download your design",
          ].map((tip) => (
            <span key={tip} className="flex items-center gap-1.5">{tip}</span>
          ))}
        </div>

      </div>
    </section>
  );
}
