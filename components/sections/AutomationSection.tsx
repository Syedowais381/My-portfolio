import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const systems = [
  {
    title: "Lead Funnel Orchestration",
    description: "Routing logic and fallback paths so no lead stalls between steps.",
  },
  {
    title: "CRM Automation",
    description: "Capture, qualification, follow-up, and reactivation handled end to end.",
  },
  {
    title: "WhatsApp-First Response",
    description: "Smart branching and tagging on the channel prospects actually reply to.",
  },
  {
    title: "Cross-Platform Integration",
    description: "Ads, forms, calendars, and CRM wired into one coherent system.",
  },
  {
    title: "Workflow Observability",
    description: "Monitoring for failures, retries, and latency — breakage surfaces before the client notices.",
  },
  {
    title: "Data Hygiene Pipelines",
    description: "Cleanup and deduplication that keeps outreach lists reliable at volume.",
  },
];

export default function AutomationSection() {
  return (
    <section id="automation" className="section">
      <div className="container">
        <SectionHeading
          index="04 / 06"
          kicker="Automation"
          title="Automation & systems"
          intro="I build automation ecosystems that feel invisible to the user but stay resilient under real-world load. The focus is always response speed, clean data, and predictable conversion outcomes."
        />

        <div className="auto-layout">
          <div className="auto-aside">
            <Reveal variant="left">
              <p>
                I design automation as a systems layer, not a patchwork of disconnected tools. Every flow
                is built for reliability, observability, and measurable business impact.
              </p>
            </Reveal>
            <Reveal variant="left" delayMs={120}>
              <p className="auto-quote">
                &ldquo;If a workflow can fail silently, it will. So I build the alarm before I build the
                automation.&rdquo;
              </p>
            </Reveal>
          </div>

          <div className="auto-list">
            {systems.map((system, index) => (
              <Reveal key={system.title} delayMs={index * 80} variant="right">
                <div className="auto-item">
                  <div className="auto-item-rail" aria-hidden="true">
                    <span className="auto-item-num">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="auto-item-body">
                    <h3>{system.title}</h3>
                    <p>{system.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
