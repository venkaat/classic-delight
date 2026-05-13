"use client";

import React, {
  useState,
  ChangeEvent,
  useRef,
  useEffect,
} from "react";
import { Canvas, FabricImage } from "fabric";
import Image from "next/image";


const overlays: Record<string, string> = {
  Sheer: "/images/visualizer/overlays/beige.png",
  Blackout: "/images/visualizer/overlays/grey-velvet.png",
  Velvet: "/images/visualizer/overlays/sheer-white-open.png",
};


const DEFAULT_ROOM = "/images/visualizer/default-room.jpg";

export default function CurtainVisualizerExperience() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selected, setSelected] = useState("Sheer");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fabricCanvasRef = useRef<Canvas | null>(null);
  const currentOverlayRef = useRef<FabricImage | null>(null);

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize Fabric Canvas
    const canvas = new Canvas(canvasRef.current, {
      width: 1200,
      height: 675, // Maintains 16:9 aspect ratio
    });

    fabricCanvasRef.current = canvas;

    // Set initial background
    updateBackground(canvas, DEFAULT_ROOM);

    return () => {
      canvas.dispose();
      fabricCanvasRef.current = null;
    };
  }, []);

  // Helper to update background image
  const updateBackground = (canvas: Canvas, url: string) => {
    FabricImage.fromURL(url).then((img) => {
      // Scale background to cover canvas
      const scale = Math.max(
        canvas.width! / img.width!,
        canvas.height! / img.height!
      );
      
      canvas.backgroundImage = img;
      img.set({
        scaleX: scale,
        scaleY: scale,
        originX: "left",
        originY: "top",
        left: 0,
        top: 0,
      });
      canvas.renderAll();
    });
  };

  // Handle Background Uploads
  useEffect(() => {
    if (fabricCanvasRef.current && uploadedImage) {
      updateBackground(fabricCanvasRef.current, uploadedImage);
    }
  }, [uploadedImage]);

  // Handle Overlay Selection
  useEffect(() => {
    if (!fabricCanvasRef.current) return;
    const canvas = fabricCanvasRef.current;

    FabricImage.fromURL(overlays[selected]).then((img) => {
      // Remove previous overlay if it exists
      if (currentOverlayRef.current) {
        canvas.remove(currentOverlayRef.current);
      }

      img.set({
        left: 300,
        top: 100,
        cornerColor: "#f26522",
        cornerStyle: "circle",
        transparentCorners: false,
      });
      img.scaleToWidth(700);
      currentOverlayRef.current = img;
      canvas.add(img);
      canvas.setActiveObject(img);
      canvas.renderAll();
    });
  }, [selected]);

  return (
    <section className="relative py-32 bg-black overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f26522]/20 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-20">

          <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
            Room Visualizer
          </p>

          <h2 className="text-white text-5xl md:text-7xl leading-[0.92] font-semibold tracking-[-0.04em] mb-8">
            Preview Curtains
            <br />
            In Your Space
          </h2>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed">
            Upload your room image and explore premium curtain
            styles before installation.
          </p>

        </div>

        {/* CONTROLS */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">

          {/* STYLE BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4">

            {Object.keys(overlays).map((item) => (

              <button
                key={item}
                onClick={() => setSelected(item)}
                className={`px-7 py-3 rounded-2xl border transition-all duration-500 ${
                  selected === item
                    ? "bg-[#f26522] border-[#f26522] text-white shadow-lg shadow-[#f26522]/20"
                    : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
                }`}
              >
                {item}
              </button>

            ))}

          </div>

          {/* UPLOAD BUTTON */}
          <label className="cursor-pointer">

            <div className="bg-white text-black px-8 py-4 rounded-2xl font-medium hover:scale-105 transition-all duration-500">

              Upload Your Room

            </div>

            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleUpload}
            />

          </label>

        </div>

        {/* VISUALIZER */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative aspect-video rounded-[40px] overflow-hidden bg-[#111] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
            <canvas
              ref={canvasRef}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}