import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.GITHUB_BRANCH || "lab4",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "assets",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "home",
        label: "Home Page",
        path: "content/home",
        format: "md",
        fields: [
          { type: "string", name: "hero_badge", label: "Hero Badge" },
          { type: "string", name: "hero_title_1", label: "Hero Title Line 1" },
          { type: "string", name: "hero_title_2", label: "Hero Title Line 2 (accent)" },
          { type: "string", name: "hero_title_3", label: "Hero Title Line 3" },
          { type: "string", name: "hero_desc", label: "Hero Description", ui: { component: "textarea" } },
          { type: "string", name: "hero_cta_offer", label: "CTA Button: Offer" },
          { type: "string", name: "hero_cta_services", label: "CTA Button: Services" },
          { type: "string", name: "stat_founded", label: "Stat: Founded Year" },
          { type: "string", name: "stat_founded_label", label: "Stat: Founded Label" },
          { type: "string", name: "stat_projects", label: "Stat: Projects Count" },
          { type: "string", name: "stat_projects_label", label: "Stat: Projects Label" },
          { type: "string", name: "stat_clients", label: "Stat: Clients %" },
          { type: "string", name: "stat_clients_label", label: "Stat: Clients Label" },
          { type: "string", name: "hero_feat_1", label: "Feature 1" },
          { type: "string", name: "hero_feat_2", label: "Feature 2" },
          { type: "string", name: "hero_feat_3", label: "Feature 3" },
        ],
      },
    ],
  },
});