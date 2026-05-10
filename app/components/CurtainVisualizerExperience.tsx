"use client";

import React, { useState, ChangeEvent } from "react";


const overlays: Record<string, string> = {
  Sheer: "/images/visualizer/overlays/beige.png",
  Blackout: "/images/visualizer/overlays/grey-velvet.png",
  Velvet: "/images/visualizer/overlays/sheer-white-open.png",
};

const DEFAULT_ROOM = "/images/visualizer/default-room.jpg";

export default function RoomVisualizer() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selected, setSelected] = useState("Sheer");

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

            {/* ROOM IMAGE */}
            <img
              src={uploadedImage || DEFAULT_ROOM}
              alt="Room"
              className="absolute inset-0 w-full h-full object-cover z-10"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-20 pointer-events-none" />

            {/* CURTAIN OVERLAY */}
            <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">

              <img
                key={selected}
                src={overlays[selected]}
  alt="Curtain Overlay"
  className="transition-all duration-700"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "contain",
    opacity: 1,
    mixBlendMode: "multiply",
    filter: "drop-shadow(0px 20px 40px rgba(0,0,0,0.35))",
  }}
              />

            </div>

            {/* INFO CARD */}
            <div className="absolute bottom-6 left-6 z-40 bg-white/10 border border-white/10 backdrop-blur-2xl rounded-2xl px-5 py-4">

              <p className="text-white text-sm font-medium mb-1">
                Current Style
              </p>

              <p className="text-white/70 text-sm">
                {selected} Curtains
              </p>

            </div>

            {/* EMPTY STATE */}
            {!uploadedImage && (

              <div className="absolute top-6 right-6 z-40 bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 max-w-xs">

                <p className="text-white text-sm leading-relaxed">
                  Upload your own room image to preview how
                  curtains transform your interiors.
                </p>

              </div>

            )}

          </div>

        </div>

      </div>

    </section>
  );
}