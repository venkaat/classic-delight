import fs from "fs";
import path from "path";

const postsFilePath = path.join(process.cwd(), "data", "posts.json");

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  category: string;
}

export function getPosts(): BlogPost[] {
  if (!fs.existsSync(postsFilePath)) {
    const dir = path.dirname(postsFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(postsFilePath, JSON.stringify([]));
    return [];
  }
  
  try {
    const fileContent = fs.readFileSync(postsFilePath, "utf8");
    return JSON.parse(fileContent);
  } catch (e) {
    console.error("Failed to read blog posts database:", e);
    return [];
  }
}

export function savePosts(posts: BlogPost[]): void {
  const dir = path.dirname(postsFilePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2), "utf8");
}
