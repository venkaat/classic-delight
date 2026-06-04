import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.classicdelight.in";

  return [
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
      url: `${baseUrl}/blinds`,
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
}