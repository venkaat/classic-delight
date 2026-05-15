import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://classicdelight.in";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
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
      url: `${baseUrl}/curtains`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/blinds`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/curtain-visualizer`,
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: `${baseUrl}/mosquito-nets`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/zebra-blinds`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/wooden-blinds`,
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
  ];
}