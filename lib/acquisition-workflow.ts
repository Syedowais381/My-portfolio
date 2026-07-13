import type { OperationBlock, PipelineStage, PlatformIcon } from "@/lib/workflow-types";

export type { OperationBlock, PipelineStage, PlatformIcon };

export const pipelineStages: PipelineStage[] = [
  {
    id: "paid-ads",
    title: "Paid Ads",
    subtitle: "Facebook · Instagram · Google · LinkedIn",
    platforms: [
      { id: "meta", name: "Meta", slug: "meta", color: "0081FB" },
      { id: "instagram", name: "Instagram", slug: "instagram", color: "E4405F" },
      { id: "google", name: "Google Ads", slug: "google", color: "FFFFFF" },
      { id: "linkedin", name: "LinkedIn", local: "/tools/linkedin.svg" },
    ],
  },
  {
    id: "lead-capture",
    title: "Lead Capture",
    subtitle: "Typeform · Landing Page",
    platforms: [{ id: "typeform", name: "Typeform", local: "/tools/typeform.svg", wide: true }],
  },
  {
    id: "lead-qualification",
    title: "Lead Qualification",
    subtitle: "Custom algorithm · scored & routed automatically",
    platforms: [{ id: "airtable", name: "Airtable", local: "/tools/airtable.svg", wide: true }],
    items: ["Custom Scoring Rules", "Auto Qualification", "Lead Grading"],
  },
  {
    id: "call-booking",
    title: "Call Booking",
    subtitle: "Instant calendar scheduling",
    platforms: [{ id: "calendly", name: "Calendly", slug: "calendly", color: "006BFF" }],
  },
  {
    id: "automation-engine",
    title: "Automation Engine",
    subtitle: "Orchestration · routing · triggers",
    platforms: [
      { id: "make", name: "Make", slug: "make", color: "FFFFFF" },
      { id: "n8n", name: "n8n", slug: "n8n", color: "FFFFFF" },
      { id: "zapier", name: "Zapier", slug: "zapier", color: "FF4A00" },
    ],
  },
];

export const operationBlocks: OperationBlock[] = [
  {
    id: "crm",
    title: "CRM Management",
    platforms: [
      { id: "ghl", name: "GoHighLevel", local: "/tools/gohighlevel.svg", wide: true },
      { id: "close", name: "Close CRM", local: "/tools/close.svg", wide: true },
      { id: "pipedrive", name: "Pipedrive", local: "/tools/pipedrive.svg", wide: true },
    ],
    items: ["Contact Creation", "Pipeline Updates", "Tagging & Segmentation"],
  },
  {
    id: "alerts",
    title: "Instant Alerts",
    platforms: [
      { id: "slack", name: "Slack", local: "/tools/slack.svg" },
      { id: "discord", name: "Discord", local: "/tools/discord.svg" },
      { id: "gmail", name: "Email", slug: "gmail", color: "EA4335" },
      { id: "whatsapp", name: "WhatsApp", slug: "whatsapp", color: "25D366" },
    ],
    items: ["New Lead", "Call Booked", "Form Abandoned"],
  },
  {
    id: "sales-ops",
    title: "Sales Operations",
    platforms: [{ id: "clickup", name: "ClickUp", local: "/tools/clickup.svg", wide: true }],
    items: ["Setter Tasks", "Closer Tasks", "Dialer Tracking", "Daily Reports", "Performance Tracking"],
  },
  {
    id: "reporting",
    title: "Reporting & Internal Systems",
    platforms: [
      { id: "sheets", name: "Google Sheets", slug: "googlesheets", color: "34A853" },
      { id: "forms", name: "Google Forms", slug: "googleforms", color: "7248B9" },
    ],
    items: ["KPI Dashboard", "Team Logs", "Analytics"],
  },
];

export function getPlatformLogoSrc(platform: PlatformIcon) {
  if (platform.local) {
    return platform.local;
  }

  return `https://cdn.simpleicons.org/${platform.slug}/${platform.color}`;
}