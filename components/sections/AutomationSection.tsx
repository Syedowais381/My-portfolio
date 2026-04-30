import Reveal from "@/components/Reveal";

const systems = [
  "Lead funnel orchestration with handoff logic",
  "CRM automation pipelines across acquisition and follow-up",
  "WhatsApp automation for notification and response workflows",
  "Multi-platform workflow systems connecting social, forms, and CRM",
];

const caseStudies = [
  {
    title: "Speed-to-Lead Funnel — Real Estate Agency",
    summary: "Automated lead capture and instant follow-up system for a real estate client, reducing response time from hours to under 90 seconds.",
    stack: "GHL · n8n · Airtable · Calendly · WhatsApp API",
    features: "Instant lead notification, automated WhatsApp follow-up, calendar booking injection, and CRM tagging.",
    architecture: "Inbound leads from Facebook/Instagram ads flow into GHL, triggering an n8n workflow that sends a personalized WhatsApp message within 90 seconds, logs the lead in Airtable, and books a slot via Calendly if the lead responds.",
    details: [
      "Problem: Leads were going cold due to slow manual follow-up by the sales team.",
      "Architecture: Ad form → GHL → n8n orchestration → WhatsApp message → Airtable log → Calendly booking.",
      "Business impact: Response time cut from 3–4 hours to under 90 seconds, improving lead conversion rate.",
      "Technical challenge: Handling webhook reliability and ensuring no duplicate messages on re-triggers."
    ]
  },
  {
    title: "Travel Agency DBR & Scraper System",
    summary: "End-to-end data pipeline and automated outreach system built for a travel agency to source and engage leads at scale.",
    stack: "Python Scraper · n8n · Airtable · GHL · Make",
    features: "Automated data scraping, lead enrichment, CRM injection, and follow-up sequence triggering.",
    architecture: "Custom scraper collects prospect data from travel-related sources, enriches and deduplicates records in Airtable, then pushes qualified leads into GHL where a Make workflow triggers a multi-step follow-up sequence.",
    details: [
      "Problem: Manual lead sourcing was slow, inconsistent, and not scalable.",
      "Architecture: Scraper → Airtable (clean + dedupe) → GHL (CRM) → Make (follow-up sequence).",
      "Business impact: Reduced lead sourcing time by 80% and enabled consistent outreach at scale.",
      "Technical challenge: Deduplication logic and rate-limiting the scraper to avoid blocks."
    ]
  }
];

export default function AutomationSection() {
  return (
    <section id="automation" className="section">
      <div className="container automation-layout">
        <Reveal>
          <h2>Automation & Systems</h2>
          <p>
            I design automation as a systems layer, not a patchwork of disconnected tools. Each flow is built for
            reliability, observability, and measurable business impact.
          </p>
        </Reveal>
        <div className="automation-list">
          {systems.map((item, index) => (
            <Reveal key={item} delayMs={index * 90} className="automation-item">
              {item}
            </Reveal>
          ))}
        </div>

        <div className="project-list" style={{ marginTop: "4rem" }}>
          {caseStudies.map((study, index) => (
            <Reveal key={study.title} className="project-item" delayMs={index * 70}>
              <div className="project-header">
                <h3>{study.title}</h3>
                <p>{study.summary}</p>
              </div>
              <p>
                <span>Stack:</span> {study.stack}
              </p>
              <p>
                <span>Key features:</span> {study.features}
              </p>
              <p>
                <span>Architecture:</span> {study.architecture}
              </p>
              <ul className="project-deep-dive">
                {study.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
