import type { MetadataRoute } from "next";

import { client } from "@/sanity/client";
import { postSlugsQuery } from "@/sanity/queries";

type PostSlugEntry = {
  slug: string;
  _updatedAt?: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.steffer.com.br";
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/servicos`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
  ];

  const posts = await client.fetch<PostSlugEntry[]>(postSlugsQuery);
  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post._updatedAt ? new Date(post._updatedAt) : new Date(),
  }));

  return [...staticRoutes, ...postRoutes];
}
