import Reveal from "@/components/Reveal";

const systems = [
  "Lead funnel orchestration with handoff logic",
  "CRM automation pipelines across acquisition and follow-up",
  "WhatsApp automation for notification and response workflows",
  "Multi-platform workflow systems connecting social, forms, and CRM",
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
      </div>
    </section>
  );
}
