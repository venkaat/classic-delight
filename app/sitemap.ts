import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.classicdelight.in";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/curtains`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/curtains/pleated`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/curtains/ripple`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/curtains/eyelet`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/curtains/sheer-curtain`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/curtains/hospital`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/curtains/blackout`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blinds`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blinds/roman`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blinds/roller`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blinds/zebra`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/nets`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/curtain-visualizer`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/window-solutions`,
      lastModified: new Date(),
      priority: 0.95,
    },
    {
      url: `${baseUrl}/landing`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/visualizer`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ai`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pleated-curtains-chennai`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/chennai`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/chennai/curtains`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/chennai/blinds`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/chennai/mosquito-nets`,
      lastModified: new Date(),
      priority: 0.9,
    },
  ];

  // Fetch dynamic blog routes
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const posts = getPosts();
    blogRoutes = [
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        priority: 0.8,
      },
      ...posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        priority: 0.7,
      })),
    ];
  } catch (e) {
    console.error("Failed to compile blog posts for sitemap:", e);
  }

  return [...staticRoutes, ...blogRoutes];
}