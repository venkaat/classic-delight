"use client";

import React, {
  useState,
  ChangeEvent,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { Canvas, FabricImage, filters } from "fabric";
import Image from "next/image";

// ─── Fabric Textures Map ──────────────────────────────────────────────────
const textures: Record<
  string,
  {
    src: string;
    label: string;
    hint: string;
    defaultBlend: "multiply" | "tint";
    defaultAlpha: number;
    defaultOpacity: number;
  }
> = {
  "Luxe Velvet": {
    src: "/images/visualizer/overlays/grey-velvet.png",
    label: "Luxe Velvet",
    hint: "Heavy luxury drape",
    defaultBlend: "multiply",
    defaultAlpha: 0.9,
    defaultOpacity: 0.95,
  },
  "Classic Linen": {
    src: "/images/visualizer/overlays/beige.png",
    label: "Classic Linen",
    hint: "Natural woven feel",
    defaultBlend: "multiply",
    defaultAlpha: 0.85,
    defaultOpacity: 0.9,
  },
  "Textured Sheer": {
    src: "/images/visualizer/overlays/beige-linen-sheer.png",
    label: "Textured Sheer",
    hint: "Soft textured filter",
    defaultBlend: "tint",
    defaultAlpha: 0.75,
    defaultOpacity: 0.6,
  },
  "Airy Sheer": {
    src: "/images/visualizer/overlays/sheer-white-open.png",
    label: "Airy Sheer",
    hint: "Light translucent sheer",
    defaultBlend: "tint",
    defaultAlpha: 0.65,
    defaultOpacity: 0.45,
  },
};

const DEFAULT_ROOM = "/images/visualizer/demo-room.png";

// ─── Curated Color Palettes ──────────────────────────────────────────────
const COLOR_THEMES = [
  {
    name: "Classic Neutrals",
    colors: [
      { name: "Alabaster White", hex: "#F5F5F0" },
      { name: "Creamy Ivory", hex: "#FFFDF6" },
      { name: "Warm Sand", hex: "#D8C9B5" },
      { name: "Soft Taupe", hex: "#B8A48F" },
      { name: "Charcoal Grey", hex: "#404040" },
    ],
  },
  {
    name: "Earth & Forest",
    colors: [
      { name: "Olive Moss", hex: "#556B2F" },
      { name: "Sage Mist", hex: "#8F9779" },
      { name: "Terracotta Clay", hex: "#C17F5F" },
      { name: "Warm Ochre", hex: "#D4A373" },
      { name: "Rust Brown", hex: "#8B4513" },
    ],
  },
  {
    name: "Royal & Bold",
    colors: [
      { name: "Deep Navy", hex: "#1F305E" },
      { name: "Emerald Luxe", hex: "#046307" },
      { name: "Dusty Rose", hex: "#C08A8A" },
      { name: "Teal Oceans", hex: "#1B4D4F" },
      { name: "Rich Crimson", hex: "#8B0000" },
    ],
  },
];

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
  const [selectedTexture, setSelectedTexture] = useState("Luxe Velvet");
  const [selectedColor, setSelectedColor] = useState("#F5F5F0");
  const [customColor, setCustomColor] = useState("#D8C9B5");
  const [isLoadingOverlay, setIsLoadingOverlay] = useState(false);
  const [isLoadingBg, setIsLoadingBg] = useState(false);
  const [canvasReady, setCanvasReady] = useState(false);
  const [opacity, setOpacity] = useState(0.95); // Default for Velvet

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

  // ── Set default opacity when texture changes ─────────────────────────────
  useEffect(() => {
    const textureInfo = textures[selectedTexture];
    if (textureInfo) {
      setOpacity(textureInfo.defaultOpacity);
    }
  }, [selectedTexture]);

  // ── Read texture query parameter from URL ───────────────────────────────
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const urlTexture = params.get("texture");
      if (urlTexture && textures[urlTexture]) {
        setSelectedTexture(urlTexture);
      }
    }
  }, [canvasReady]);

  // ── React to overlay selection ────────────────────────────────────────────
  useEffect(() => {
    if (!canvasReady || !fabricCanvasRef.current) return;
    const canvas = fabricCanvasRef.current;
    setIsLoadingOverlay(true);

    const textureInfo = textures[selectedTexture];
    FabricImage.fromURL(textureInfo.src, { crossOrigin: "anonymous" })
      .then((img) => {
        if (currentOverlayRef.current) {
          canvas.remove(currentOverlayRef.current);
        }
        centerOverlay(canvas, img);
        img.set({ opacity }); // Set dynamic opacity on initial load

        // Apply Grayscale and BlendColor filters
        const grayscaleFilter = new filters.Grayscale();
        const blendFilter = new filters.BlendColor({
          color: selectedColor,
          mode: textureInfo.defaultBlend,
          alpha: textureInfo.defaultAlpha,
        });

        img.filters = [grayscaleFilter, blendFilter];
        img.applyFilters();

        currentOverlayRef.current = img;
        canvas.add(img);
        canvas.setActiveObject(img);
        canvas.renderAll();
      })
      .catch(console.error)
      .finally(() => setIsLoadingOverlay(false));
  }, [selectedTexture, canvasReady]);

  // ── React to color/blend parameter changes ────────────────────────────────
  useEffect(() => {
    const canvas = fabricCanvasRef.current;
    const overlay = currentOverlayRef.current;
    if (!canvas || !overlay) return;

    const textureInfo = textures[selectedTexture];

    // Reapply both filters on the active overlay
    overlay.filters = [
      new filters.Grayscale(),
      new filters.BlendColor({
        color: selectedColor,
        mode: textureInfo.defaultBlend,
        alpha: textureInfo.defaultAlpha,
      }),
    ];

    overlay.applyFilters();
    canvas.renderAll();
  }, [selectedColor, selectedTexture]);

  // ── React to opacity state changes ─────────────────────────────────────────
  useEffect(() => {
    const canvas = fabricCanvasRef.current;
    const overlay = currentOverlayRef.current;
    if (!canvas || !overlay) return;
    overlay.set({ opacity });
    canvas.renderAll();
  }, [opacity]);

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
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <p className="uppercase tracking-[4px] md:tracking-[5px] text-[#f26522] text-xs md:text-sm font-semibold mb-4 md:mb-6">
            Room Visualizer
          </p>
          <h2 className="text-white text-4xl sm:text-5xl md:text-7xl leading-[0.92] font-semibold tracking-[-0.04em] mb-5 md:mb-8">
            Preview Curtains
            <br />
            In Your Space
          </h2>
          <p className="text-white/60 text-base md:text-xl leading-relaxed max-w-xl mx-auto">
            Select a premium fabric texture, personalize it with a dynamic natural color overlay,
            and preview it instantly in any room.
          </p>
        </div>

        {/* ACTIONS & CONTROLS ROW */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6 md:mb-8">
          <div className="text-white/40 text-xs md:text-sm font-medium">
            Customize fabric & shades for a lifelike draping preview
          </div>

          {/* ACTIONS */}
          <div className="flex gap-2 md:gap-3">
            {/* Reset */}
            {uploadedImage && (
              <button
                onClick={handleReset}
                className="px-4 md:px-5 py-2.5 md:py-3 rounded-2xl border border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm font-medium"
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
              <div className="bg-white text-black px-5 md:px-8 py-2.5 md:py-3 rounded-2xl font-medium hover:scale-105 active:scale-95 transition-all duration-300 text-sm md:text-base whitespace-nowrap text-center">
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

        {/* MAIN VISUALIZER CONTROLS PANEL */}
        <div className="flex flex-col gap-8 bg-white/5 border border-white/10 rounded-[32px] p-6 md:p-8 mb-8">
          
          {/* STEP 1: TEXTURE */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span>1. Select Curtain Fabric</span>
              <span className="text-xs text-white/40 font-normal">(Updates texture and weight)</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {Object.entries(textures).map(([key, { label, hint }]) => (
                <button
                  key={key}
                  onClick={() => setSelectedTexture(key)}
                  disabled={isLoading}
                  className={`group flex flex-col text-left px-5 py-4 rounded-2xl border transition-all duration-300 ${
                    selectedTexture === key
                      ? "bg-[#f26522] border-[#f26522] text-white shadow-lg shadow-[#f26522]/20"
                      : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                  }`}
                >
                  <span className="font-semibold text-sm md:text-base">{label}</span>
                  <span
                    className={`text-xs mt-1 transition-opacity ${
                      selectedTexture === key ? "text-white/80" : "text-white/40 group-hover:text-white/60"
                    }`}
                  >
                    {hint}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* DIVIDER */}
          <div className="h-[1px] bg-white/10" />

          {/* STEP 2 & 3: COLOR & OPACITY GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* COLOR PALETTE PANEL (8/12) */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                <span>2. Select Fabric Color</span>
                <span className="text-xs text-white/40 font-normal">(Dynamic natural overlay)</span>
              </h3>

              <div className="flex flex-col gap-5">
                {COLOR_THEMES.map((theme) => (
                  <div key={theme.name} className="flex flex-col gap-2">
                    <span className="text-white/40 text-xs font-semibold uppercase tracking-wider">
                      {theme.name}
                    </span>
                    <div className="flex flex-wrap gap-3">
                      {theme.colors.map((color) => {
                        const isSelected = selectedColor === color.hex;
                        return (
                          <button
                            key={color.name}
                            onClick={() => setSelectedColor(color.hex)}
                            title={color.name}
                            className={`group relative flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 ${
                              isSelected
                                ? "border-white scale-110 shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                                : "border-white/10 hover:scale-105 hover:border-white/30"
                            }`}
                            style={{ backgroundColor: color.hex }}
                          >
                            {/* Inner selection indicator */}
                            {isSelected && (
                              <div className={`w-2.5 h-2.5 rounded-full ${
                                color.hex.toLowerCase() === "#fffdf6" || color.hex.toLowerCase() === "#f5f5f0"
                                  ? "bg-black"
                                  : "bg-white"
                              }`} />
                            )}
                            {/* Premium tooltip */}
                            <span className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 bg-black/95 text-white text-[10px] px-2.5 py-1 rounded-lg border border-white/10 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-50 shadow-xl">
                              {color.name}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {/* CUSTOM COLOR PICKER */}
                <div className="flex flex-col gap-2 mt-1">
                  <span className="text-white/40 text-xs font-semibold uppercase tracking-wider">
                    Custom Color
                  </span>
                  <div className="flex items-center gap-4">
                    <label className="group relative flex items-center justify-center w-12 h-12 rounded-2xl border border-white/10 hover:border-white/30 cursor-pointer overflow-hidden transition-all duration-300">
                      {/* Styled background colored box */}
                      <div
                        className="absolute inset-0 w-full h-full"
                        style={{ backgroundColor: customColor }}
                      />
                      {/* Subtle gradient accent overlay */}
                      <div className="absolute inset-0 opacity-20 bg-gradient-to-tr from-red-500 via-green-500 to-blue-500 pointer-events-none" />
                      
                      <input
                        type="color"
                        value={customColor}
                        onChange={(e) => {
                          setCustomColor(e.target.value);
                          setSelectedColor(e.target.value);
                        }}
                        className="sr-only"
                      />
                      {/* Center dot for custom selection */}
                      {selectedColor === customColor && (
                        <div className="relative z-10 w-3 h-3 rounded-full bg-white shadow-md border border-black/10 animate-scaleUp" />
                      )}
                    </label>

                    <div className="flex flex-col">
                      <span className="text-white font-semibold text-sm">Artist Palette</span>
                      <span className="text-white/50 text-xs">
                        Hex: <span className="text-[#f26522] font-mono">{selectedColor.toUpperCase()}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* OPACITY / TRANSPARENCY CARD (4/12) */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-6 bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex flex-col gap-1.5">
                <h3 className="text-white font-semibold text-lg">3. Fabric Sheerness</h3>
                <span className="text-white/40 text-xs leading-relaxed">
                  Fine-tune the opacity to visualize sheer light-filtering vs luxury thick drapes.
                </span>
              </div>

              <div className="flex flex-col gap-4 mt-auto">
                <div className="flex items-center justify-between text-xs text-white/50 font-medium">
                  <span>Transparent</span>
                  <span>Opaque</span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0.05"
                    max="1.0"
                    step="0.05"
                    value={opacity}
                    onChange={(e) => setOpacity(parseFloat(e.target.value))}
                    disabled={isLoading}
                    className="w-full accent-[#f26522] h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="bg-[#f26522]/10 border border-[#f26522]/20 text-[#f26522] px-2.5 py-1 rounded-xl text-xs font-semibold whitespace-nowrap min-w-[55px] text-center">
                    {Math.round(opacity * 100)}%
                  </span>
                </div>
              </div>
            </div>

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
                  <p className="text-white/70 text-sm">Colorizing Fabric...</p>
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
            {selectedTexture} Curtain
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
