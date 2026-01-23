import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "s547n7p3";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

const builder = imageUrlBuilder({ projectId, dataset });

export const urlFor = (source: unknown) => builder.image(source);
