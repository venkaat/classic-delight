import { NextResponse } from "next/server";
import { getPosts, savePosts, BlogPost } from "@/lib/blog";

const ADMIN_PASSCODE = "delight2026"; // Passcode to prevent unauthorized spam posts

export async function GET() {
  try {
    const posts = getPosts();
    // Sort by date descending
    const sorted = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return NextResponse.json(sorted);
  } catch (e) {
    return NextResponse.json({ error: "Failed to load posts" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, excerpt, content, coverImage, category, passcode } = body;

    // Validation
    if (!title || !excerpt || !content || !category) {
      return NextResponse.json(
        { error: "Missing required fields: title, excerpt, content, or category" },
        { status: 400 }
      );
    }

    if (passcode !== ADMIN_PASSCODE) {
      return NextResponse.json(
        { error: "Invalid admin passcode. Access denied." },
        { status: 401 }
      );
    }

    // Auto-generate slug
    const slug = title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "") // remove special chars
      .replace(/[\s_]+/g, "-") // replace spaces with hyphens
      .replace(/-+/g, "-") // replace multiple hyphens
      .replace(/^-+|-+$/g, ""); // trim hyphens

    const posts = getPosts();

    // Check duplicate slug
    if (posts.some((p) => p.slug === slug)) {
      return NextResponse.json(
        { error: "A post with this title/slug already exists. Please choose a different title." },
        { status: 400 }
      );
    }

    const newPost: BlogPost = {
      id: Date.now().toString(),
      title,
      slug,
      excerpt,
      content,
      coverImage: coverImage || "/images/curtains.png",
      date: new Date().toISOString().split("T")[0],
      category,
    };

    posts.push(newPost);
    savePosts(posts);

    return NextResponse.json({ success: true, post: newPost });
  } catch (e) {
    console.error("Error writing new blog post:", e);
    return NextResponse.json({ error: "Server error creating post" }, { status: 500 });
  }
}
