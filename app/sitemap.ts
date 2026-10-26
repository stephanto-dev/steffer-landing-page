import type { MetadataRoute } from "next";

import { client } from "@/sanity/client";
import { postSlugsQuery } from "@/sanity/queries";

type PostSlugEntry = {
  slug: string;
  _updatedAt?: string;
};

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.steffer.com.br";
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/sobre`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/servicos/desenvolvimento-de-software`, lastModified: new Date() },
    { url: `${baseUrl}/servicos/sites-e-landing-pages`, lastModified: new Date() },
    { url: `${baseUrl}/servicos/consultoria-automacao`, lastModified: new Date() },
    { url: `${baseUrl}/servicos/dados-dashboards`, lastModified: new Date() },
    { url: `${baseUrl}/teko`, lastModified: new Date() },
    { url: `${baseUrl}/cases/hospital-felicio-rocho`, lastModified: new Date() },
    { url: `${baseUrl}/diagnostico-gratuito`, lastModified: new Date() },
    { url: `${baseUrl}/solucoes/atendimento-whatsapp-com-ia`, lastModified: new Date() },
    { url: `${baseUrl}/solucoes/automacao-com-ia-para-ecommerce`, lastModified: new Date() },
    { url: `${baseUrl}/solucoes/software-sob-medida-para-pme`, lastModified: new Date() },
    { url: `${baseUrl}/solucoes/dev-agencia-ou-consultoria`, lastModified: new Date() },
  ];

  try {
    const posts = await client.fetch<PostSlugEntry[]>(postSlugsQuery);
    const postRoutes = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post._updatedAt ? new Date(post._updatedAt) : new Date(),
    }));

    return [...staticRoutes, ...postRoutes];
  } catch (error) {
    console.error("Error fetching blog posts for sitemap:", error);
    return staticRoutes;
  }
}
