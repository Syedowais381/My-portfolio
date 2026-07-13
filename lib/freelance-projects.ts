import { operationBlocks, pipelineStages } from "@/lib/acquisition-workflow";
import type { WorkflowConfig } from "@/lib/workflow-types";

export type FreelanceProject = {
  id: string;
  title: string;
  market: string;
  summary: string;
  impact: string[];
  workflow: WorkflowConfig;
};

const acquisitionOverview: WorkflowConfig = {
  pipelineStages,
  operationBlocks,
  hubStageId: "automation-engine",
};

const realEstateWorkflow: WorkflowConfig = {
  pipelineStages: [
    {
      id: "paid-ads",
      title: "Paid Ads",
      subtitle: "Facebook & Instagram lead forms",
      platforms: [
        { id: "meta", name: "Meta", slug: "meta", color: "0081FB" },
        { id: "instagram", name: "Instagram", slug: "instagram", color: "E4405F" },
      ],
    },
    {
      id: "lead-capture",
      title: "Lead Capture",
      subtitle: "Instant form submission triggers",
      platforms: [{ id: "meta", name: "Meta Forms", slug: "meta", color: "0081FB" }],
    },
    {
      id: "crm-entry",
      title: "CRM Entry",
      subtitle: "Contact creation & segmentation",
      platforms: [{ id: "ghl", name: "GoHighLevel", local: "/tools/gohighlevel.svg", wide: true }],
    },
    {
      id: "speed-outreach",
      title: "Speed-to-Lead",
      subtitle: "Personalized outreach within 90 seconds",
      platforms: [{ id: "whatsapp", name: "WhatsApp", slug: "whatsapp", color: "25D366" }],
      items: ["Sub-90s Response", "Hot Lead Routing"],
    },
    {
      id: "booking",
      title: "Call Booking",
      subtitle: "Qualified leads schedule instantly",
      platforms: [{ id: "calendly", name: "Calendly", slug: "calendly", color: "006BFF" }],
    },
  ],
  operationBlocks: [
    {
      id: "crm",
      title: "CRM Management",
      platforms: [{ id: "ghl", name: "GoHighLevel", local: "/tools/gohighlevel.svg", wide: true }],
      items: ["Contact Creation", "Pipeline Updates", "Lead Segmentation"],
    },
    {
      id: "alerts",
      title: "Instant Outreach",
      platforms: [{ id: "whatsapp", name: "WhatsApp", slug: "whatsapp", color: "25D366" }],
      items: ["First Response", "Hot Lead Alerts", "Follow-up Sequences"],
    },
    {
      id: "reporting",
      title: "Reporting & QA",
      platforms: [{ id: "airtable", name: "Airtable", local: "/tools/airtable.svg", wide: true }],
      items: ["Lead Logging", "Response QA", "Conversion Tracking"],
    },
    {
      id: "orchestration",
      title: "Automation Engine",
      platforms: [{ id: "n8n", name: "n8n", slug: "n8n", color: "FFFFFF" }],
      items: ["Trigger Routing", "Field Mapping", "SLA Timers"],
    },
  ],
  hubStageId: "speed-outreach",
};

const travelAgencyWorkflow: WorkflowConfig = {
  pipelineStages: [
    {
      id: "sourcing",
      title: "Lead Sourcing",
      subtitle: "Automated travel data ingestion",
      platforms: [{ id: "python", name: "Python", slug: "python", color: "3776AB" }],
    },
    {
      id: "enrichment",
      title: "Enrichment & Scoring",
      subtitle: "Deduplication and lead grading",
      platforms: [{ id: "airtable", name: "Airtable", local: "/tools/airtable.svg", wide: true }],
    },
    {
      id: "automation-engine",
      title: "Automation Engine",
      subtitle: "Pipeline orchestration & routing",
      platforms: [
        { id: "n8n", name: "n8n", slug: "n8n", color: "FFFFFF" },
        { id: "make", name: "Make", slug: "make", color: "FFFFFF" },
      ],
    },
    {
      id: "crm-sync",
      title: "CRM Sync",
      subtitle: "Qualified leads into pipeline",
      platforms: [{ id: "ghl", name: "GoHighLevel", local: "/tools/gohighlevel.svg", wide: true }],
    },
    {
      id: "nurture",
      title: "Nurture Sequences",
      subtitle: "Multi-step outbound orchestration",
      platforms: [{ id: "make", name: "Make", slug: "make", color: "FFFFFF" }],
    },
  ],
  operationBlocks: [
    {
      id: "data-ops",
      title: "Data Operations",
      platforms: [
        { id: "python", name: "Python", slug: "python", color: "3776AB" },
        { id: "airtable", name: "Airtable", local: "/tools/airtable.svg", wide: true },
      ],
      items: ["Sourcing Jobs", "Dedup Rules", "Lead Scoring"],
    },
    {
      id: "orchestration",
      title: "Workflow Orchestration",
      platforms: [
        { id: "n8n", name: "n8n", slug: "n8n", color: "FFFFFF" },
        { id: "make", name: "Make", slug: "make", color: "FFFFFF" },
      ],
      items: ["Batch Processing", "Nurture Flows", "Error Handling"],
    },
    {
      id: "crm",
      title: "CRM Management",
      platforms: [{ id: "ghl", name: "GoHighLevel", local: "/tools/gohighlevel.svg", wide: true }],
      items: ["Pipeline Sync", "Stage Updates", "Owner Assignment"],
    },
    {
      id: "performance",
      title: "Performance Feedback",
      items: ["Outreach Quality", "Source Attribution", "Campaign Metrics"],
    },
  ],
  hubStageId: "automation-engine",
};

const scraperWorkflow: WorkflowConfig = {
  pipelineStages: [
    {
      id: "source-rules",
      title: "Source Definition",
      subtitle: "Ideal profile & niche targeting rules",
      items: ["Niche Filters", "Profile Criteria", "Sourcing Rules"],
    },
    {
      id: "scraping",
      title: "Scraping Engine",
      subtitle: "Apify & Playwright jobs across social platforms",
      platforms: [
        { id: "apify", name: "Apify", local: "/tools/apify.svg", wide: true },
        { id: "playwright", name: "Playwright", local: "/tools/playwright.svg", wide: true },
        { id: "youtube", name: "YouTube", slug: "youtube", color: "FF0000" },
        { id: "instagram", name: "Instagram", slug: "instagram", color: "E4405F" },
      ],
    },
    {
      id: "parse",
      title: "Parse & Classify",
      subtitle: "Custom logic validates creator leads",
      platforms: [{ id: "python", name: "Python", slug: "python", color: "3776AB" }],
    },
    {
      id: "storage",
      title: "Data Store",
      subtitle: "Deduplicated records for campaigns",
      platforms: [{ id: "airtable", name: "Airtable", local: "/tools/airtable.svg", wide: true }],
    },
    {
      id: "handoff",
      title: "Outreach Handoff",
      subtitle: "Enriched lists to automation workflows",
      platforms: [
        { id: "n8n", name: "n8n", slug: "n8n", color: "FFFFFF" },
        { id: "make", name: "Make", slug: "make", color: "FFFFFF" },
      ],
    },
  ],
  operationBlocks: [
    {
      id: "scraping",
      title: "Scraping Ops",
      platforms: [
        { id: "apify", name: "Apify", local: "/tools/apify.svg", wide: true },
        { id: "playwright", name: "Playwright", local: "/tools/playwright.svg", wide: true },
        { id: "youtube", name: "YouTube", slug: "youtube", color: "FF0000" },
        { id: "instagram", name: "Instagram", slug: "instagram", color: "E4405F" },
      ],
      items: ["Scrape Jobs", "Browser Automation", "Volume Scaling"],
    },
    {
      id: "data",
      title: "Data Quality",
      platforms: [{ id: "airtable", name: "Airtable", local: "/tools/airtable.svg", wide: true }],
      items: ["Validation", "Deduplication", "Lead Classification"],
    },
    {
      id: "automation",
      title: "Automation Layer",
      platforms: [
        { id: "n8n", name: "n8n", slug: "n8n", color: "FFFFFF" },
        { id: "make", name: "Make", slug: "make", color: "FFFFFF" },
      ],
      items: ["List Routing", "Campaign Prep", "Outreach Triggers"],
    },
    {
      id: "growth",
      title: "Growth Outcomes",
      items: ["~70k Leads Captured", "Campaign Readiness", "Structured Data Quality"],
    },
  ],
  hubStageId: "scraping",
};

export const freelanceProjects: FreelanceProject[] = [
  {
    id: "acquisition-overview",
    title: "Client Acquisition & Sales Automation",
    market: "System Overview",
    summary:
      "A high-level architecture for coaches, agencies, and service businesses — from paid ads to booked calls, CRM pipelines, instant alerts, and sales operations.",
    impact: ["Speed-to-Lead", "CRM Setup", "Database Reactivation", "Full Automation Build"],
    workflow: acquisitionOverview,
  },
  {
    id: "real-estate-speed-to-lead",
    title: "Speed-to-Lead Funnel for Real Estate Agency",
    market: "Real Estate",
    summary:
      "Built a low-latency lead response engine that captures ad leads, triggers WhatsApp outreach, and routes hot prospects directly to scheduling.",
    impact: ["Sub-90s first response", "Higher lead contact rate", "Lower manual follow-up load"],
    workflow: realEstateWorkflow,
  },
  {
    id: "travel-data-pipeline",
    title: "Travel Agency Data Pipeline and Outreach Engine",
    market: "Travel",
    summary:
      "Implemented an automated sourcing and nurture pipeline that cleans, deduplicates, and activates outbound leads from multiple travel data sources.",
    impact: ["80% faster sourcing cycle", "Scalable outbound execution", "Improved database hygiene"],
    workflow: travelAgencyWorkflow,
  },
  {
    id: "creator-lead-scraper",
    title: "YouTube and Instagram Lead Scraper for Growth Ops",
    market: "Creator / Growth Operations",
    summary:
      "Built an Apify and Playwright-powered lead scraping system to source high-intent creator and audience-growth leads across YouTube and Instagram at scale.",
    impact: ["~70k leads captured rapidly", "Faster campaign launch readiness", "High-volume structured sourcing"],
    workflow: scraperWorkflow,
  },
];
