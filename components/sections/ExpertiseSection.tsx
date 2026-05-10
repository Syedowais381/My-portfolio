import Reveal from "@/components/Reveal";

const groups = [
  {
    title: "Automation Architecture",
    summary: "Production-grade workflows built for reliability, speed, and measurable outcomes.",
    items: [
      "n8n + Make orchestration",
      "GoHighLevel CRM funnels",
      "WhatsApp API automation",
      "Airtable data operations",
      "Lead routing + SLA timers",
      "Scrapers for real estate/travel",
    ],
    level: "Advanced",
  },
  {
    title: "Full-Stack Product Engineering",
    summary: "Shipping complete products from responsive frontends to scalable backend services.",
    items: [
      "React + Next.js interfaces",
      "Spring Boot APIs",
      "Auth + role-based access",
      "MySQL / PostgreSQL",
      "Dockerized deployments",
      "Railway, Render, Vercel",
    ],
    level: "Advanced",
  },
  {
    title: "Systems, DevOps & Delivery",
    summary: "Deploying and maintaining services with a focus on uptime and maintainability.",
    items: [
      "CI-driven Docker releases",
      "Cloud runtime setup (EC2)",
      "Environment hardening",
      "Monitoring-ready APIs",
      "Performance-first architecture",
      "Debugging + incident handling",
    ],
    level: "Strong",
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="section">
      <div className="container">
        <Reveal>
          <h2>Core Expertise</h2>
          <p className="section-intro">
            I combine automation engineering with full-stack development to build systems that move from idea to
            production quickly, without sacrificing reliability.
          </p>
        </Reveal>
        <div className="expertise-layout">
          {groups.map((group, index) => (
            <Reveal key={group.title} delayMs={index * 80} className="expertise-block">
              <div className="expertise-head">
                <h3>{group.title}</h3>
                <span className="expertise-level">{group.level}</span>
              </div>
              <p>{group.summary}</p>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
