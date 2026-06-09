import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingCTA from "../../components/FloatingCTA";
import { getPosts } from "@/lib/blog";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const posts = getPosts();
  const post = posts.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: "Post Not Found | Classic Delight",
    };
  }

  return {
    title: `${post.title} | Classic Delight Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const posts = getPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#f26522]/30 overflow-hidden">
      <Header />

      <article className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-white/50 hover:text-[#f26522] text-xs font-black uppercase tracking-wider mb-8 transition duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>

        {/* Categories and Date */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-white/40 mb-6 font-mono">
          <span className="flex items-center gap-1.5 bg-[#f26522]/10 border border-[#f26522]/30 px-3.5 py-1.5 rounded-full text-[#f26522] uppercase tracking-widest font-extrabold">
            <Tag className="w-3.5 h-3.5" />
            {post.category}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-8">
          {post.title}
        </h1>

        {/* Large Cover Image */}
        <div className="relative aspect-[16/9] w-full rounded-[32px] overflow-hidden border border-white/10 mb-12 shadow-2xl">
          <Image
            src={post.coverImage || "/images/curtains.png"}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Post Content */}
        <div 
          className="text-white/80 text-base md:text-lg leading-relaxed space-y-6 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:border-b [&>h2]:border-white/10 [&>h2]:pb-2 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:mt-8 [&>h3]:mb-3 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul]:space-y-2 [&>li]:mb-1 [&>strong]:text-white [&>strong]:font-semibold" 
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </article>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
