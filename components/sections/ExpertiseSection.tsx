import { Layers, Server, Zap } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SpotlightCard from "@/components/SpotlightCard";

const groups = [
  {
    icon: Zap,
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
    score: 5,
  },
  {
    icon: Layers,
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
    score: 5,
  },
  {
    icon: Server,
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
    score: 4,
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="section">
      <div className="container">
        <SectionHeading
          index="01 / 06"
          kicker="What I do"
          title="Core expertise"
          intro="I combine automation engineering with full-stack development to build systems that move from idea to production quickly, without sacrificing reliability."
        />

        <div className="expertise-grid">
          {groups.map((group, index) => {
            const Icon = group.icon;

            return (
              <Reveal key={group.title} delayMs={index * 110} variant="up">
                <SpotlightCard className="xp-card">
                  <div className="xp-top">
                    <span className="xp-icon">
                      <Icon size={21} />
                    </span>
                    <span className="xp-num">{String(index + 1).padStart(2, "0")}</span>
                  </div>

                  <h3>{group.title}</h3>
                  <p className="xp-summary">{group.summary}</p>

                  <div className="xp-meter">
                    <span className="xp-meter-dots" aria-hidden="true">
                      {Array.from({ length: 5 }).map((_, dot) => (
                        <i
                          key={dot}
                          className={dot < group.score ? "is-on" : undefined}
                          style={{ "--d": dot } as React.CSSProperties}
                        />
                      ))}
                    </span>
                    <span className="xp-meter-label">{group.level}</span>
                  </div>

                  <ul className="xp-list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
