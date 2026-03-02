import Reveal from "@/components/Reveal";

const groups = [
  {
    title: "Full-Stack Engineering",
    items: [
      "React",
      "Spring Boot",
      "REST APIs",
      "MySQL / PostgreSQL",
      "Docker",
      "Railway / Render",
      "AWS EC2",
      "Vercel / Netlify",
    ],
  },
  {
    title: "Automation & Systems",
    items: ["n8n", "GHL", "WhatsApp Automation", "Instagram / Facebook Automation", "CRM funnels"],
  },
  {
    title: "Backend & Deployment",
    items: ["Docker image deployment", "Railway hosting", "Cloud setup"],
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="section">
      <div className="container">
        <Reveal>
          <h2>Core Expertise</h2>
        </Reveal>
        <div className="expertise-layout">
          {groups.map((group, index) => (
            <Reveal key={group.title} delayMs={index * 80} className="expertise-block">
              <h3>{group.title}</h3>
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
