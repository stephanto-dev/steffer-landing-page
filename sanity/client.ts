import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "s547n7p3";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";
const readToken = process.env.SANITY_API_READ_TOKEN;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // "false" = dados frescos sempre (bom para dev). "true" = cache rápido (bom para prod).
});

export const getClient = (preview: boolean) => {
  if (!preview) return client;
  if (!readToken) {
    throw new Error("Missing SANITY_API_READ_TOKEN for draft mode");
  }

  return client.withConfig({
    token: readToken,
    useCdn: false,
    perspective: "previewDrafts",
  });
};
