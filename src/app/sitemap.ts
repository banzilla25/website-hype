import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { portfolioItems } from "@/lib/dummy-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/untuk-kreator`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/untuk-merchant`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/portofolio`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/tiktok-go`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tentang-kami`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/kontak`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const portfolioRoutes: MetadataRoute.Sitemap = portfolioItems.map((item) => ({
    url: `${base}/portofolio/${item.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const kotaRoutes: MetadataRoute.Sitemap = siteConfig.kotaList.map((kota) => ({
    url: `${base}/tiktok-go/${kota}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...portfolioRoutes, ...kotaRoutes];
}
