import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

import { schemaTypes } from "./schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "s547n7p3";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export default defineConfig({
  name: "steffer",
  title: "Steffer Blog",
  projectId,
  dataset,
  apiVersion,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
