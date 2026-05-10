import Reveal from "@/components/Reveal";

const systems = [
  "Lead funnel orchestration with routing logic and fallback paths",
  "CRM automation across capture, qualification, follow-up, and reactivation",
  "WhatsApp-first response workflows with smart branching and tagging",
  "Cross-platform integrations connecting ads, forms, calendars, and CRM",
  "Workflow observability to monitor failures, retries, and latency",
  "Data cleanup and deduplication pipelines for reliable outreach",
];

export default function AutomationSection() {
  return (
    <section id="automation" className="section">
      <div className="container automation-layout">
        <Reveal>
          <h2>Automation & Systems</h2>
          <p className="section-intro">
            I build automation ecosystems that feel invisible to the user but are resilient under real-world load. The
            focus is always response speed, clean data, and predictable conversion outcomes.
          </p>
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
      </div>
    </section>
  );
}
