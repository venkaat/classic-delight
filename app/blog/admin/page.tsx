"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingCTA from "../../components/FloatingCTA";
import { Lock, Sparkles, Send, CheckCircle2, AlertCircle, Eye } from "lucide-react";

export default function BlogAdminPage() {
  const router = useRouter();
  const [passcode, setPasscode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Curtains");
  const [coverImage, setCoverImage] = useState("/images/curtains.png");
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === "delight2026") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid admin passcode. Please try again.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          excerpt,
          content,
          category,
          coverImage,
          passcode,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to publish post.");
      }

      setSuccess(true);
      setTitle("");
      setExcerpt("");
      setContent("");
      
      // Redirect to the newly created blog post after a short delay
      setTimeout(() => {
        router.push(`/blog/${data.post.slug}`);
      }, 1500);
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col justify-between overflow-hidden">
        <Header />
        
        <div className="flex-1 flex items-center justify-center pt-32 pb-16 px-6">
          <div className="max-w-md w-full bg-neutral-950 border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#f26522]/10 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="text-center mb-8">
              <div className="w-14 h-14 bg-[#f26522]/15 border border-[#f26522]/30 rounded-2xl flex items-center justify-center mx-auto text-[#f26522] mb-4">
                <Lock className="w-6 h-6 animate-pulse" />
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-2">
                Admin Access
              </h1>
              <p className="text-white/50 text-xs md:text-sm">
                Enter your passcode to manage and publish blog posts.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="text-white/50 text-[10px] uppercase tracking-wider font-semibold mb-2 block">
                  Passcode
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#f26522] focus:ring-1 focus:ring-[#f26522]/20 transition"
                  required
                />
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs px-4 py-3 rounded-xl flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[#f26522] hover:bg-[#ff7b3d] text-white text-sm font-extrabold py-3.5 rounded-xl transition-all duration-300 shadow-md shadow-[#f26522]/15 active:scale-98 cursor-pointer"
              >
                Access Dashboard
              </button>
            </form>
          </div>
        </div>

        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#f26522]/30 overflow-hidden">
      <Header />
      
      <div className="pt-32 pb-24 max-w-5xl mx-auto px-6">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#f26522]/10 border border-[#f26522]/20 px-3 py-1 rounded-full text-[#f26522] text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#f26522]" />
              Blog Dashboard
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Create New Post
            </h1>
          </div>
          
          <button
            onClick={() => setIsPreviewMode(!isPreviewMode)}
            className="px-4 py-2 border border-white/10 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-bold transition flex items-center gap-1.5 self-start cursor-pointer"
          >
            <Eye className="w-4 h-4" />
            <span>{isPreviewMode ? "Edit Post" : "Preview Format"}</span>
          </button>
        </div>

        {/* Dash Alerts */}
        {success && (
          <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm px-5 py-4 rounded-2xl flex items-center gap-3 mb-8 animate-fade-in">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span className="font-bold">Post published successfully! Redirecting you now...</span>
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm px-5 py-4 rounded-2xl flex items-start gap-3 mb-8 animate-fade-in">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* Dashboard Split Panel */}
        {isPreviewMode ? (
          <div className="bg-neutral-950 border border-white/10 rounded-[32px] p-6 md:p-10 shadow-2xl space-y-6">
            <h2 className="text-white/40 text-xs uppercase tracking-wider font-mono">Real-time Layout Preview</h2>
            <h1 className="text-white text-3xl md:text-5xl font-extrabold tracking-tight">{title || "Untitled Article"}</h1>
            <p className="text-white/40 text-xs font-mono">{category} • Just Now</p>
            <div className="border border-white/10 rounded-2xl aspect-[16/9] w-full relative overflow-hidden bg-neutral-900 flex items-center justify-center text-white/30 text-sm font-semibold">
              {coverImage ? <img src={coverImage} alt={title} className="object-cover w-full h-full" /> : "Cover Image Preview"}
            </div>
            <div 
              className="text-white/80 text-base md:text-lg leading-relaxed space-y-6 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:border-b [&>h2]:border-white/10 [&>h2]:pb-2 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:mt-8 [&>h3]:mb-3 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul]:space-y-2 [&>li]:mb-1 [&>strong]:text-white" 
              dangerouslySetInnerHTML={{ __html: content || "<p className='text-white/30 italic'>No content written yet.</p>" }} 
            />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-neutral-950 border border-white/10 rounded-[32px] p-6 md:p-10 shadow-2xl space-y-6">
            
            {/* Title */}
            <div>
              <label className="text-white/50 text-[10px] uppercase tracking-wider font-semibold mb-2 block">
                Article Title
              </label>
              <input
                type="text"
                placeholder="e.g. Modern Curtain Pleats Guide for Living Rooms"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#f26522] focus:ring-1 focus:ring-[#f26522]/20 transition"
                required
              />
            </div>

            {/* Category and Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Category */}
              <div>
                <label className="text-white/50 text-[10px] uppercase tracking-wider font-semibold mb-2 block">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#f26522] transition cursor-pointer"
                >
                  <option value="Curtains">Curtains</option>
                  <option value="Blinds">Blinds</option>
                  <option value="Mosquito Nets">Mosquito Nets</option>
                  <option value="General">General/Interior Design</option>
                </select>
              </div>

              {/* Cover Image Preset Selector */}
              <div>
                <label className="text-white/50 text-[10px] uppercase tracking-wider font-semibold mb-2 block">
                  Cover Image
                </label>
                <select
                  value={coverImage}
                  onChange={(e) => setCoverImage(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#f26522] transition cursor-pointer"
                >
                  <option value="/images/curtains.png">Curtains Banner (/images/curtains.png)</option>
                  <option value="/images/blinds.png">Blinds Banner (/images/blinds.png)</option>
                  <option value="/images/nets.png">Mosquito Nets Banner (/images/nets.png)</option>
                  <option value="/images/hero.webp">Hero Image (/images/hero.webp)</option>
                </select>
              </div>

            </div>

            {/* Excerpt */}
            <div>
              <label className="text-white/50 text-[10px] uppercase tracking-wider font-semibold mb-2 block">
                Short Excerpt
              </label>
              <textarea
                placeholder="Provide a brief 1-2 sentence description of the article to show in the cards/social previews..."
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#f26522] focus:ring-1 focus:ring-[#f26522]/20 transition min-h-[80px]"
                required
              />
            </div>

            {/* HTML Body Editor */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-white/50 text-[10px] uppercase tracking-wider font-semibold block">
                  Article Content (HTML Format)
                </label>
                <div className="text-[10px] text-white/40 flex gap-2">
                  <span>Tags: &lt;p&gt;, &lt;h3&gt;, &lt;strong&gt;, &lt;ul&gt;, &lt;li&gt;</span>
                </div>
              </div>
              <textarea
                placeholder="<p>Write your article paragraphs here...</p><h3>Subheading here</h3><p>More details...</p><ul><li>Bullet point one</li><li>Bullet point two</li></ul>"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#f26522] focus:ring-1 focus:ring-[#f26522]/20 transition min-h-[300px] font-mono"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-end">
              <button
                type="submit"
                disabled={loading || success}
                className="bg-[#f26522] hover:bg-[#ff7b3d] disabled:opacity-50 text-white text-sm font-extrabold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md shadow-[#f26522]/15 flex items-center gap-2 cursor-pointer active:scale-98"
              >
                {loading ? (
                  <span>Publishing...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Publish Post</span>
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
