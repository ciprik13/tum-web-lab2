import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.GITHUB_BRANCH || "master",
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
        name: "hero",
        label: "Hero Section",
        path: "content/hero",
        format: "md",
        fields: [
          { type: "string", name: "hero_badge", label: "Badge" },
          { type: "string", name: "hero_title_1", label: "Title Line 1" },
          {
            type: "string",
            name: "hero_title_2",
            label: "Title Line 2 (accent)",
          },
          { type: "string", name: "hero_title_3", label: "Title Line 3" },
          {
            type: "string",
            name: "hero_desc",
            label: "Description",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "hero_cta_offer",
            label: "CTA: Offer Button",
          },
          {
            type: "string",
            name: "hero_cta_services",
            label: "CTA: Services Button",
          },
          { type: "string", name: "stat_founded", label: "Stat: Founded Year" },
          {
            type: "string",
            name: "stat_founded_label",
            label: "Stat: Founded Label",
          },
          {
            type: "string",
            name: "stat_projects",
            label: "Stat: Projects Count",
          },
          {
            type: "string",
            name: "stat_projects_label",
            label: "Stat: Projects Label",
          },
          { type: "string", name: "stat_clients", label: "Stat: Clients %" },
          {
            type: "string",
            name: "stat_clients_label",
            label: "Stat: Clients Label",
          },
          { type: "string", name: "hero_feat_1", label: "Feature 1" },
          { type: "string", name: "hero_feat_2", label: "Feature 2" },
          { type: "string", name: "hero_feat_3", label: "Feature 3" },
        ],
      },
      {
        name: "despre",
        label: "Despre Noi",
        path: "content/despre",
        format: "md",
        fields: [
          { type: "string", name: "about_badge", label: "Badge" },
          { type: "string", name: "about_title", label: "Title" },
          { type: "string", name: "about_sub", label: "Subtitle" },
          { type: "string", name: "about_story_title", label: "Story Title" },
          {
            type: "string",
            name: "about_story_p1",
            label: "Story Paragraph 1",
          },
          {
            type: "string",
            name: "about_story_p2",
            label: "Story Paragraph 2",
            ui: { component: "textarea" },
          },
          { type: "string", name: "about_feat_1", label: "Feature 1" },
          { type: "string", name: "about_feat_2", label: "Feature 2" },
          { type: "string", name: "about_feat_3", label: "Feature 3" },
          {
            type: "string",
            name: "feature_box_1_title",
            label: "Feature Box 1 Title",
          },
          {
            type: "string",
            name: "feature_box_1_desc",
            label: "Feature Box 1 Description",
          },
          {
            type: "string",
            name: "feature_box_2_title",
            label: "Feature Box 2 Title",
          },
          {
            type: "string",
            name: "feature_box_2_desc",
            label: "Feature Box 2 Description",
          },
          { type: "string", name: "stat_founded", label: "Stat: Founded" },
          {
            type: "string",
            name: "stat_founded_label",
            label: "Stat: Founded Label",
          },
          { type: "string", name: "stat_projects", label: "Stat: Projects" },
          {
            type: "string",
            name: "stat_projects_label",
            label: "Stat: Projects Label",
          },
          { type: "string", name: "stat_clients", label: "Stat: Clients" },
        ],
      },
      {
        name: "servicii",
        label: "Servicii",
        path: "content/servicii",
        format: "md",
        ui: {
          allowedActions: { create: false, delete: false },
        },
        fields: [
          { type: "string", name: "services_badge", label: "Badge" },
          { type: "string", name: "services_title", label: "Title" },
          { type: "string", name: "services_sub", label: "Subtitle" },
          { type: "string", name: "service_cta", label: "CTA Button" },
          {
            type: "object",
            name: "services",
            label: "Servicii",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.title }),
            },
            fields: [
              { type: "string", name: "title", label: "Titlu" },
              {
                type: "string",
                name: "desc",
                label: "Descriere",
                ui: { component: "textarea" },
              },
              {
                type: "boolean",
                name: "hidden",
                label: "Ascunde acest element",
              },
            ],
          },
          { type: "string", name: "spec_badge", label: "Specializări Badge" },
          { type: "string", name: "spec_title", label: "Specializări Title" },
          { type: "string", name: "spec_sub", label: "Specializări Subtitle" },
        ],
      },
      {
        name: "proces",
        label: "Cum Lucrăm",
        path: "content/proces",
        format: "md",
        fields: [
          { type: "string", name: "process_badge", label: "Badge" },
          { type: "string", name: "process_title", label: "Title" },
          { type: "string", name: "process_sub", label: "Subtitle" },
          { type: "string", name: "process_1_title", label: "Step 1 Title" },
          {
            type: "string",
            name: "process_1_desc",
            label: "Step 1 Description",
            ui: { component: "textarea" },
          },
          { type: "string", name: "process_2_title", label: "Step 2 Title" },
          {
            type: "string",
            name: "process_2_desc",
            label: "Step 2 Description",
            ui: { component: "textarea" },
          },
          { type: "string", name: "process_3_title", label: "Step 3 Title" },
          {
            type: "string",
            name: "process_3_desc",
            label: "Step 3 Description",
            ui: { component: "textarea" },
          },
          { type: "string", name: "process_4_title", label: "Step 4 Title" },
          {
            type: "string",
            name: "process_4_desc",
            label: "Step 4 Description",
            ui: { component: "textarea" },
          },
        ],
      },
      {
        name: "avantaje",
        label: "Avantaje",
        path: "content/avantaje",
        format: "md",
        ui: {
          allowedActions: { create: false, delete: false },
        },
        fields: [
          { type: "string", name: "adv_badge", label: "Badge" },
          { type: "string", name: "adv_title", label: "Title" },
          { type: "string", name: "adv_sub", label: "Subtitle" },
          {
            type: "object",
            name: "advantages",
            label: "Avantaje",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.title }),
            },
            fields: [
              { type: "string", name: "title", label: "Titlu" },
              { type: "string", name: "desc", label: "Descriere" },
              {
                type: "boolean",
                name: "hidden",
                label: "Ascunde acest element",
              },
            ],
          },
        ],
      },
      {
        name: "testimoniale",
        label: "Testimoniale & CTA",
        path: "content/testimoniale",
        format: "md",
        fields: [
          { type: "string", name: "testim_badge", label: "Testimoniale Badge" },
          { type: "string", name: "testim_title", label: "Testimoniale Title" },
          {
            type: "string",
            name: "testim_sub",
            label: "Testimoniale Subtitle",
          },
          { type: "string", name: "clients_title", label: "Clients Title" },
          { type: "string", name: "clients_sub", label: "Clients Subtitle" },
          { type: "string", name: "cta_title", label: "CTA Title" },
          {
            type: "string",
            name: "cta_desc",
            label: "CTA Description",
            ui: { component: "textarea" },
          },
          { type: "string", name: "cta_btn_offer", label: "CTA Button: Offer" },
          { type: "string", name: "cta_btn_call", label: "CTA Button: Call" },
        ],
      },
      {
        name: "contact",
        label: "Contact & Footer",
        path: "content/contact",
        format: "md",
        fields: [
          { type: "string", name: "contact_badge", label: "Badge" },
          { type: "string", name: "contact_title", label: "Title" },
          { type: "string", name: "contact_sub", label: "Subtitle" },
          {
            type: "string",
            name: "contact_address_label",
            label: "Address Label",
          },
          {
            type: "string",
            name: "contact_address_text",
            label: "Address Text",
          },
          { type: "string", name: "contact_email_label", label: "Email Label" },
          { type: "string", name: "contact_phone_label", label: "Phone Label" },
          {
            type: "string",
            name: "contact_schedule_label",
            label: "Schedule Label",
          },
          {
            type: "string",
            name: "contact_schedule_text",
            label: "Schedule Text",
          },
          {
            type: "string",
            name: "form_name_label",
            label: "Form: Name Label",
          },
          {
            type: "string",
            name: "form_email_label",
            label: "Form: Email Label",
          },
          {
            type: "string",
            name: "form_phone_label",
            label: "Form: Phone Label",
          },
          {
            type: "string",
            name: "form_service_label",
            label: "Form: Service Label",
          },
          {
            type: "string",
            name: "form_message_label",
            label: "Form: Message Label",
          },
          { type: "string", name: "form_submit", label: "Form: Submit Button" },
          { type: "string", name: "footer_desc", label: "Footer Description" },
          {
            type: "string",
            name: "footer_services_heading",
            label: "Footer: Services Heading",
          },
          {
            type: "string",
            name: "footer_company_heading",
            label: "Footer: Company Heading",
          },
          {
            type: "string",
            name: "footer_quick_contact",
            label: "Footer: Quick Contact Heading",
          },
          {
            type: "string",
            name: "footer_copyright",
            label: "Footer: Copyright Text",
          },
        ],
      },
    ],
  },
});
