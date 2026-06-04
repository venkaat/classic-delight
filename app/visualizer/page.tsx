"use client";

import { useState, useEffect, useRef } from "react";
import { 
  UploadCloud, 
  Sparkles, 
  RefreshCw, 
  Download, 
  Image as ImageIcon, 
  X, 
  AlertTriangle, 
  ArrowRight,
  HelpCircle
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import Script from "next/script";

export default function VisualizerPage() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [uploadedImage, setUploadedImage] = useState<string>("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Pre-populate prompt from URL query parameter
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const urlPrompt = params.get("prompt");
      if (urlPrompt) {
        setPrompt(urlPrompt);
      }
    }
  }, []);

  // Cycle through creative loading stages to engage the user
  useEffect(() => {
    if (!loading) {
      setLoadingStep(0);
      return;
    }
    const interval = setInterval(() => {
      setLoadingStep((prev) => (prev < 3 ? prev + 1 : prev));
    }, 5500);
    return () => clearInterval(interval);
  }, [loading]);

  // Countdown timer for automatic retry on model cold start (503 status code)
  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Automated retry!
          generateImage();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  const handleFileChange = (file: File | null) => {
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);
    setUploadedFile(file);
    setError("");
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      handleFileChange(file);
    } else {
      setError("Please drop a valid image file.");
    }
  };

  const resetUploader = () => {
    setUploadedImage("");
    setUploadedFile(null);
    setImage("");
    setError("");
    setCountdown(0);
  };

  const generateImage = async () => {
    if (!prompt) {
      setError("Please specify your curtain prompt.");
      return;
    }

    setLoading(true);
    setError("");
    setCountdown(0);

    const fileToUse = uploadedFile;

    // Mode: Text-to-Image (Puter.js client-side)
    if (!fileToUse) {
      try {
        console.log("No room image uploaded. Generating purely via Puter.js Text-to-Image...");
        if (typeof window !== "undefined" && (window as any).puter) {
          const puterObj = (window as any).puter;
          // Apply enhanced styling descriptors for photorealism
          const finalPrompt = `${prompt}. Professional masterwork interior design showcase, architectural photography, realistic fabric textures, cozy elegant lighting, photorealistic.`;
          
          const imageElement = await puterObj.ai.txt2img(finalPrompt, { model: "gpt-image-2" });
          if (imageElement && imageElement.src) {
            setImage(imageElement.src);
          } else {
            throw new Error("Puter AI engine did not return a valid image.");
          }
        } else {
          throw new Error("Puter AI library is loading. Please try again in a second.");
        }
      } catch (err: any) {
        console.warn("Puter Text-to-Image generation failed:", err);
        setError(err.message || "Failed to generate AI concept. Please try again.");
      } finally {
        setLoading(false);
      }
      return;
    }

    // Mode: Image-to-Image (Server-side overlay pipeline)
    try {
      const formData = new FormData();
      formData.append("image", fileToUse);
      formData.append("prompt", prompt);

      const response = await fetch("/api/img2img", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorJson = await response.json().catch(() => ({}));
        
        // Check for specific warming-up (503) states
        if (response.status === 503 && errorJson.loading) {
          const waitTime = Math.ceil(errorJson.estimated_time || 20.0);
          setCountdown(waitTime);
          throw new Error(
            errorJson.error || "The AI visualizer model is currently warming up."
          );
        }

        // Try Puter fallback before throwing
        if (typeof window !== "undefined" && (window as any).puter) {
          console.warn("Backend server failed. Falling back to Puter client-side text-to-image...");
          const puterObj = (window as any).puter;
          const finalPrompt = `${prompt}. Professional masterwork interior design showcase, architectural photography, realistic fabric textures, cozy elegant lighting, photorealistic.`;
          const imageElement = await puterObj.ai.txt2img(finalPrompt, { model: "gpt-image-2" });
          if (imageElement && imageElement.src) {
            setImage(imageElement.src);
            setError("Note: Room-overlay visualization failed due to server capacity. Showing AI conceptual design matching your prompt.");
            return;
          }
        }

        throw new Error(
          errorJson.error || "We encountered an issue during generation. Please try again."
        );
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setImage(imageUrl);
    } catch (err: any) {
      console.warn("Image-to-image generation failed, trying Puter fallback:", err);
      
      // Attempt client-side Puter.js as a final fallback
      if (typeof window !== "undefined" && (window as any).puter) {
        try {
          const puterObj = (window as any).puter;
          const finalPrompt = `${prompt}. Professional masterwork interior design showcase, architectural photography, realistic fabric textures, cozy elegant lighting, photorealistic.`;
          const imageElement = await puterObj.ai.txt2img(finalPrompt, { model: "gpt-image-2" });
          if (imageElement && imageElement.src) {
            setImage(imageElement.src);
            setError("Note: Room-overlay visualization failed. Showing AI conceptual design matching your prompt.");
            return;
          }
        } catch (puterErr: any) {
          console.warn("Puter final fallback failed:", puterErr);
        }
      }
      
      setError(err.message || "Failed to connect to the AI service. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const loadingStages = [
    "Uploading your room workspace...",
    "Scanning windows & calculating lighting channels...",
    "Styling drapery folds & matching textures...",
    "Applying professional fabrics & cinematic ambient shadows..."
  ];

  const presets = [
    "Luxury beige curtains",
    "Modern blackout curtains",
    "Minimal Scandinavian blinds",
    "Elegant white sheer curtains",
    "Premium wooden blinds"
  ];

  return (
    <main className="bg-black min-h-screen">
      <Script src="https://js.puter.com/v2/" strategy="afterInteractive" />
      <Header />
      <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-amber-500/30 pt-28 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/[0.03] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-yellow-600/[0.03] blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Luxury Elegant Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4 animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            Atelier AI Design Engine
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 bg-clip-text text-transparent mb-4">
            AI Room Curtain Visualizer
          </h1>
          <p className="text-neutral-400 max-w-xl mx-auto text-base md:text-lg">
            Upload a photo of your living room or window, choose a high-end style, and preview beautiful customized curtains or blinds instantly.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Upload & Configurations (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Upload Card */}
            <div className="bg-neutral-900/60 backdrop-blur-xl border border-neutral-800/80 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
              <h2 className="text-lg font-bold text-neutral-200 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 rounded-full bg-amber-500" />
                1. Upload Your Room Canvas (Optional)
              </h2>

              {!uploadedImage ? (
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 flex flex-col items-center justify-center min-h-[220px] ${
                    isDragging 
                      ? "border-amber-500/60 bg-amber-500/[0.02]" 
                      : "border-neutral-800 hover:border-neutral-700 bg-neutral-950/40 hover:bg-neutral-950/60"
                  }`}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
                    accept="image/*"
                    className="hidden"
                  />
                  <div className="w-14 h-14 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    <UploadCloud className="w-7 h-7 text-amber-500/80" />
                  </div>
                  <p className="font-semibold text-neutral-300 mb-1">
                    Drag and drop your room photo
                  </p>
                  <p className="text-xs text-neutral-500 max-w-xs">
                    Supports JPG, PNG or WEBP. Upload a photo to style curtains in your own room, or skip to generate a design from scratch.
                  </p>
                  <button type="button" className="mt-4 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold rounded-lg transition-all">
                    Browse Files
                  </button>
                </div>
              ) : (
                <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950/60 group">
                  <img
                    src={uploadedImage}
                    alt="Source Workspace"
                    className="w-full h-auto max-h-[360px] object-contain mx-auto"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={resetUploader}
                      className="px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-red-900/20 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <X className="w-4 h-4" /> Remove Image
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* AI Designer Style Card */}
            <div className="bg-neutral-900/60 backdrop-blur-xl border border-neutral-800/80 rounded-3xl p-6 shadow-2xl">
              <h2 className="text-lg font-bold text-neutral-200 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 rounded-full bg-amber-500" />
                2. Design Prompt & Presets
              </h2>

              <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                Curtain / Blind Specifications
              </label>
              <textarea
                value={prompt}
                onChange={(e) => {
                  setPrompt(e.target.value);
                  setError("");
                }}
                placeholder="Describe your perfect style. Example: Luxury modern gold satin curtains hanging elegantly from the ceiling, realistic lighting..."
                className="w-full bg-neutral-950 border border-neutral-800 hover:border-neutral-700 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 rounded-2xl p-4 text-sm text-neutral-200 placeholder-neutral-600 transition-all duration-300 resize-none h-32 focus:outline-none"
              />

              <div className="mt-4">
                <span className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">
                  Quick Fabric Presets:
                </span>
                <div className="flex gap-2.5 flex-wrap">
                  {presets.map((preset) => {
                    const isActive = prompt === preset;
                    return (
                      <button
                        key={preset}
                        onClick={() => {
                          setPrompt(preset);
                          setError("");
                        }}
                        className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all duration-300 ${
                          isActive
                            ? "bg-amber-500/10 border-amber-500/40 text-amber-400 shadow-md shadow-amber-500/[0.05]"
                            : "bg-neutral-950 hover:bg-neutral-800 border-neutral-800/80 text-neutral-400 hover:text-neutral-200"
                        }`}
                      >
                        {preset}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Dynamic Interactive Warnings & Progress Alerts */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 flex gap-3.5 items-start">
                <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div className="space-y-1.5">
                  <h4 className="text-sm font-bold text-red-400">Visualization Blocked</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">{error}</p>
                  
                  {countdown > 0 && (
                    <div className="mt-2 flex items-center gap-2">
                      <div className="px-2 py-0.5 bg-amber-500/20 border border-amber-500/30 text-amber-300 text-[10px] font-bold rounded uppercase tracking-wider animate-pulse">
                        Model Cold-Start
                      </div>
                      <span className="text-xs text-amber-400 font-semibold">
                        Auto-retrying in <span className="underline font-extrabold">{countdown}s</span>...
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Main CTA Design Action Button */}
            <button
              onClick={generateImage}
              disabled={loading || !prompt}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-neutral-950 font-bold py-4 px-8 rounded-2xl shadow-xl shadow-amber-500/5 hover:shadow-amber-500/15 disabled:opacity-30 active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  Generating Custom Atelier Art...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 text-neutral-950 transition-transform duration-300 group-hover:rotate-12" />
                  Generate Custom Design
                </>
              )}
            </button>

          </div>

          {/* RIGHT: Visualizer Rendering & Inspiration Showcase (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Loading/Render Card Container */}
            <div className="bg-neutral-900/60 backdrop-blur-xl border border-neutral-800/80 rounded-3xl p-6 shadow-2xl min-h-[400px] flex flex-col justify-between relative overflow-hidden">
              
              <h2 className="text-lg font-bold text-neutral-200 flex items-center gap-2">
                <span className="w-1.5 h-6 rounded-full bg-amber-500" />
                3. AI Inspiration Preview
              </h2>

              {/* Central Dynamic Render Area */}
              <div className="my-6 flex-1 flex flex-col items-center justify-center relative min-h-[280px]">
                
                {loading ? (
                  // Elegant Step-by-Step Loader
                  <div className="text-center p-6 space-y-6 max-w-sm w-full">
                    
                    {/* Glowing circular loader */}
                    <div className="relative w-20 h-20 mx-auto">
                      <div className="absolute inset-0 rounded-full border-4 border-neutral-800" />
                      <div className="absolute inset-0 rounded-full border-4 border-amber-500 border-t-transparent animate-spin" />
                      <div className="absolute inset-2 rounded-full bg-neutral-950 flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-amber-500/80 animate-pulse" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-neutral-200">
                        Atelier Designing Room...
                      </h4>
                      <p className="text-xs text-neutral-400 font-medium transition-all duration-300 animate-pulse min-h-[2rem] leading-relaxed">
                        {loadingStages[loadingStep]}
                      </p>
                    </div>

                    {/* Progress indicators dots */}
                    <div className="flex justify-center gap-1.5">
                      {loadingStages.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-500 ${
                            i === loadingStep 
                              ? "w-6 bg-amber-500" 
                              : i < loadingStep 
                                ? "w-1.5 bg-amber-500/40" 
                                : "w-1.5 bg-neutral-800"
                          }`}
                        />
                      ))}
                    </div>

                  </div>
                ) : image ? (
                  // Polished Result Display inside Luxury Frame
                  <div className="space-y-4 w-full animate-fade-in">
                    <div className="relative group overflow-hidden rounded-2xl border border-amber-500/20 shadow-2xl">
                      
                      {/* Luxury gold highlight border glow */}
                      <div className="absolute inset-0 border border-amber-500/20 rounded-2xl pointer-events-none z-10" />
                      
                      <img
                        src={image}
                        alt="AI Generated Atelier Inspiration"
                        className="w-full h-auto rounded-2xl object-cover"
                      />
                    </div>
                    
                    <a
                      href={image}
                      download="classic-delight-atelier.png"
                      className="w-full py-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-semibold rounded-xl text-xs flex items-center justify-center gap-2 border border-neutral-700/60 shadow-lg shadow-neutral-950/20 active:scale-[0.98] transition-all duration-200"
                    >
                      <Download className="w-4 h-4 text-amber-500" />
                      Download High-Res Inspiration
                    </a>
                  </div>
                ) : (
                  // Beautiful placeholder state
                  <div className="text-center p-8 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-neutral-950 border border-neutral-800/80 flex items-center justify-center mx-auto text-neutral-600">
                      <ImageIcon className="w-8 h-8 text-neutral-700" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-neutral-400">
                        Design Canvas Empty
                      </h4>
                      <p className="text-xs text-neutral-500 max-w-[200px] mx-auto leading-relaxed">
                        Configure your room canvas and prompt above to project custom designs.
                      </p>
                    </div>
                  </div>
                )}

              </div>

              {/* Footnote branding */}
              <div className="pt-4 border-t border-neutral-800/60 text-center">
                <p className="text-[10px] text-neutral-500 leading-normal flex items-center justify-center gap-1">
                  <HelpCircle className="w-3.5 h-3.5" />
                  Premium visual rendering powered by Classic Delight Design Labs.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
    <Footer />
    <FloatingCTA />
  </main>
  );
}