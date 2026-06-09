import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import { getPosts } from "@/lib/blog";
import Image from "next/image";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Window Styling Blog & Design Guides | Classic Delight",
  description: "Read our custom curtains, window blinds, and mosquito net guides. Find interior styling inspiration, fabric tips, and home improvement ideas in Chennai.",
};

export default function BlogPage() {
  const posts = getPosts();
  // Sort posts by date descending
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#f26522]/30 overflow-hidden">
      <Header />
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-16">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f26522]/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[5px] text-[#f26522] text-xs font-semibold mb-4">
            Classic Delight Blog
          </p>
          <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Insights & Guides
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Design trends, measurement tips, and expert guides to help you style the perfect custom curtains, blinds, and mosquito nets.
          </p>
        </div>
      </section>

      {/* BLOG POSTS LIST */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {sortedPosts.length === 0 ? (
            <div className="text-center py-20 bg-neutral-900/40 rounded-[28px] border border-white/5">
              <p className="text-white/40 text-lg">No blog posts found. Check back later!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedPosts.map((post) => (
                <article 
                  key={post.id}
                  className="bg-neutral-950 border border-white/10 rounded-[32px] overflow-hidden flex flex-col group hover:border-[#f26522]/30 transition-all duration-500 hover:scale-[1.01] shadow-lg shadow-black/45"
                >
                  {/* Cover Image */}
                  <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] overflow-hidden block border-b border-white/5">
                    <Image
                      src={post.coverImage || "/images/curtains.png"}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition duration-700"
                    />
                    <span className="absolute top-4 left-4 bg-black/75 backdrop-blur-md border border-white/10 text-white text-[10px] font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-widest">
                      {post.category}
                    </span>
                  </Link>

                  {/* Body Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <p className="text-white/40 text-[10px] font-mono mb-2">{post.date}</p>
                    <h3 className="text-white text-xl md:text-2xl font-bold leading-snug mb-3 group-hover:text-[#f26522] transition duration-300">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                      {post.excerpt}
                    </p>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs text-[#f26522] font-black uppercase tracking-wider group-hover:translate-x-1.5 transition duration-300"
                    >
                      <span>Read Article</span>
                      <span>→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
