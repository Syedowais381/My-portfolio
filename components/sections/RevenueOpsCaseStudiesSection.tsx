import Reveal from "@/components/Reveal";

type CaseStudy = {
  title: string;
  market: string;
  summary: string;
  stack: string[];
  pipeline: string[];
  impact: string[];
  image: string;
  imageAlt: string;
};

const studies: CaseStudy[] = [
  {
    title: "Speed-to-Lead Funnel for Real Estate Agency",
    market: "Real Estate",
    summary:
      "Built a low-latency lead response engine that captures ad leads, triggers WhatsApp outreach, and routes hot prospects directly to scheduling.",
    stack: ["GHL", "n8n", "Airtable", "Calendly", "WhatsApp API"],
    pipeline: [
      "Facebook/Instagram lead form capture",
      "Instant CRM creation and segmentation in GHL",
      "Personalized WhatsApp outreach within 90 seconds",
      "Airtable logging for reporting and QA",
      "Calendly booking for qualified leads",
    ],
    impact: ["Sub-90s first response", "Higher lead contact rate", "Lower manual follow-up load"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Automation dashboard showing growth analytics",
  },
  {
    title: "Travel Agency Data Pipeline and Outreach Engine",
    market: "Travel",
    summary:
      "Implemented an automated sourcing and nurture pipeline that cleans, deduplicates, and activates outbound leads from multiple travel data sources.",
    stack: ["Python", "n8n", "Airtable", "GHL", "Make"],
    pipeline: [
      "Automated lead sourcing and enrichment",
      "Deduplication and scoring in Airtable",
      "Qualified lead sync into GHL pipeline",
      "Multi-step nurture orchestration in Make",
      "Performance feedback loop for outreach quality",
    ],
    impact: ["80% faster sourcing cycle", "Scalable outbound execution", "Improved database hygiene"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Team planning workflows with laptops and charts",
  },
  {
    title: "Sales Backend Buildout",
    market: "Revenue Operations",
    summary:
      "Designed a complete backend sales workflow for a US client: from form capture to CRM nurture, qualification routing, and calendar booking.",
    stack: ["Zapier", "GoHighLevel", "Make", "Calendly", "Airtable", "Typeform/Gravity Forms"],
    pipeline: [
      "Lead submitted through Typeform, Gravity Forms, or web forms",
      "Zapier/Make intake workflows normalize and enrich payloads",
      "Automatic contact and opportunity creation in GHL",
      "Lead nurturing with qualification logic and stage transitions",
      "Final state set as Calendly booked, disqualified, or moved to the next sales stage",
    ],
    impact: ["End-to-end sales workflow automation", "Consistent qualification logic", "Stronger pipeline visibility for sales team"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Sales operations team reviewing workflow board",
  },
  {
    title: "YouTube and Instagram Lead Scraper for Growth Ops",
    market: "Creator / Growth Operations",
    summary:
      "Built an Apify-powered lead scraping system to source high-intent creator and audience-growth leads across YouTube and Instagram at scale.",
    stack: ["Apify", "Custom parsing logic", "Airtable", "Automation workflows"],
    pipeline: [
      "Define ideal profile and sourcing rules by niche",
      "Run scalable scraping jobs across YouTube and Instagram signals",
      "Parse, validate, and classify creator leads",
      "Store and deduplicate records for campaign use",
      "Push enriched lead lists to outreach workflows",
    ],
    impact: ["~70k leads captured rapidly", "Faster campaign launch readiness", "High-volume sourcing with structured data quality"],
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Social media analytics interface on screen",
  },
];

export default function RevenueOpsCaseStudiesSection() {
  return (
    <section id="case-studies" className="section case-studies">
      <div className="container">
        <Reveal>
          <h2>Revenue Operations Case Studies</h2>
          <p className="section-intro">
            A dedicated look at client systems I built to automate lead operations, improve response speed, and create
            predictable sales workflows from intake to conversion.
          </p>
        </Reveal>
        <div className="case-study-grid">
          {studies.map((study, index) => (
            <Reveal key={study.title} className="case-study-card" delayMs={index * 60}>
              <figure className="case-study-image">
                {/* Intentional: editorial remote images for narrative storytelling */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={study.image} alt={study.imageAlt} loading="lazy" />
              </figure>
              <div className="case-study-header">
                <p className="case-study-market">{study.market}</p>
                <h3>{study.title}</h3>
                <p>{study.summary}</p>
              </div>
              <div className="case-study-stack">
                {study.stack.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
              <details className="case-study-details">
                <summary>View workflow breakdown</summary>
                <ol className="case-study-flow">
                  {study.pipeline.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </details>
              <div className="project-outcomes">
                {study.impact.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
