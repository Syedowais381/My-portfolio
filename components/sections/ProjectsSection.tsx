import Image from "next/image";
import { ArrowUpRight } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SpotlightCard from "@/components/SpotlightCard";

type Project = {
  title: string;
  summary: string;
  role: string;
  stack: string;
  features: string;
  architecture: string;
  outcomes?: string[];
  details?: string[];
  screenshots?: { src: string; alt: string }[];
  video?: { src: string; title: string };
  liveUrl?: string;
};

const projects: Project[] = [
  {
    title: "Rig Base",
    summary:
      "Enterprise operations platform — the operating system for serious businesses. A structured workspace for finance, inventory, HR, CRM, and supply chain, configured to your industry rather than a generic template.",
    role: "Full-stack product engineer",
    stack: "Next.js, TypeScript, ERP modules, Role-based access, AI insights",
    features:
      "Six connected ERP domains (Dashboard, Finance, HR, Inventory, Supply Chain, CRM), guided onboarding, governed permissions, and on-demand executive AI analysis.",
    architecture:
      "Modular workspace architecture with shared permissions, data import tooling, and period-aware KPI dashboards across all enabled business modules.",
    outcomes: [
      "Unified finance, inventory, HR, CRM, and supply chain in one controlled workspace.",
      "Structured onboarding with departments, modules, and KPIs defined upfront.",
      "Executive visibility with configurable metrics and AI insight requests.",
    ],
    details: [
      "Problem: owners and operators need clarity, control, and accountable reporting across disconnected business tools.",
      "Solution: industry-configured ERP workspace with six operational domains on one connected system.",
      "Capabilities: operational visibility, integrated ERP core, governed access, and executive AI insights grounded in live data.",
      "Workflow: guided setup, module selection, role configuration, data import, and day-to-day execution.",
    ],
    liveUrl: "https://rig-base.vercel.app/",
    screenshots: [
      { src: "/projects/rig-base-1.png", alt: "Rig Base homepage hero and workspace preview" },
      { src: "/projects/rig-base-modules.png", alt: "Rig Base platform capabilities and ERP modules" },
    ],
  },
  {
    title: "CodePulz",
    summary: "Developer operations platform designed to centralize productivity analytics and team workflows.",
    role: "Full-stack engineer",
    stack: "React, Spring Boot, PostgreSQL, Docker, Railway",
    features: "Role-based modules, secure auth flows, and optimized API contracts.",
    architecture:
      "Frontend consumes versioned REST endpoints from a modular Spring Boot service layer with PostgreSQL persistence.",
    outcomes: [
      "Improved dashboard response behavior with optimized API contracts.",
      "Reduced deployment friction through a consistent Docker release flow.",
    ],
    details: [
      "Problem: fragmented workflows for developer productivity and analytics.",
      "Architecture: React client + Spring Boot API + relational persistence + containerized deployment.",
      "Deployment strategy: Dockerized backend pushed via CI and hosted with managed infrastructure.",
      "Technical challenge: balancing request throughput with predictable query performance.",
    ],
    screenshots: [
      { src: "/projects/codepulz-1.png", alt: "CodePulz dashboard screenshot 1" },
      { src: "/projects/codepulz-2.png", alt: "CodePulz dashboard screenshot 2" },
    ],
  },
  {
    title: "DDoS Tracker",
    summary: "Security-focused telemetry dashboard that simulates attack traffic and visualizes incident trends.",
    role: "Backend + dashboard implementation",
    stack: "React, Spring Boot, MySQL (Railway), Docker Hub, Railway",
    features: "Dummy attack telemetry generation, normalized event storage, and real-time style frontend consumption.",
    architecture: "Synthetic event generator writes to MySQL; backend exposes filtered metrics APIs consumed by the dashboard.",
    outcomes: [
      "Created reproducible attack simulation data for testing monitoring UX.",
      "Structured event persistence for cleaner filtering and trend analysis.",
    ],
    video: {
      src: "/projects/ddos-demo.mp4",
      title: "DDoS Tracker demo video",
    },
  },
  {
    title: "StreakTracker",
    summary: "Realtime habit-tracking product with social motivation through rankings and streak visibility.",
    role: "Product engineer",
    stack: "Next.js, Supabase PostgreSQL, Realtime subscriptions",
    features: "Daily habit logging, weekly leaderboard, and live updates for active users.",
    architecture: "Next.js client backed by Supabase auth, PostgreSQL tables, and realtime channels for instant state sync.",
    outcomes: [
      "Enabled instant leaderboard refresh with realtime subscriptions.",
      "Built a clear user loop for daily logging and streak retention.",
    ],
    liveUrl: "https://streak.aidaptics.com/",
    screenshots: [{ src: "/projects/streaktracker-1.png", alt: "StreakTracker website screenshot 1" }],
  },
  {
    title: "Consultancy Website",
    summary: "Conversion-oriented consultancy site crafted around trust signals, clarity, and speed.",
    role: "Frontend + UX",
    stack: "Next.js, Responsive UI architecture",
    features: "Service discovery sections, trust-focused visual hierarchy, and lightweight interaction patterns.",
    architecture: "Static-forward rendering with component-level composition to maximize speed and maintainability.",
    outcomes: [
      "Improved service discoverability with tighter content hierarchy.",
      "Maintained lightweight UX while preserving brand consistency.",
    ],
    liveUrl: "https://ckeng.netlify.app/",
    screenshots: [{ src: "/projects/consultancy-1.png", alt: "Consultancy website screenshot 1" }],
  },
];

function ProjectMedia({ project }: { project: Project }) {
  if (project.video) {
    return (
      <div className="pj-media-col">
        <video className="pj-video" controls preload="metadata">
          <source src={project.video.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="pj-media-note">{project.video.title}</p>
      </div>
    );
  }

  if (!project.screenshots?.length) {
    return null;
  }

  return (
    <div className="pj-media-col">
      {project.screenshots.map((shot) =>
        project.liveUrl ? (
          <a
            key={shot.src}
            className="pj-media-link"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title} live site`}
          >
            <figure className="pj-media">
              <Image src={shot.src} alt={shot.alt} width={960} height={600} />
              <span className="pj-media-badge">
                Visit live
                <ArrowUpRight size={13} />
              </span>
            </figure>
          </a>
        ) : (
          <figure className="pj-media" key={shot.src}>
            <Image src={shot.src} alt={shot.alt} width={960} height={600} />
          </figure>
        ),
      )}
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="web-dev" className="section">
      <div className="container">
        <SectionHeading
          index="03 / 06"
          kicker="Product engineering"
          title="Web dev projects"
          intro="Full-stack applications and product builds — from architecture and implementation through deployment, written up as case studies rather than screenshots."
        />

        <div className="project-list">
          {projects.map((project, index) => (
            <Reveal key={project.title} delayMs={index * 60} variant="up">
              <SpotlightCard className={`pj ${index % 2 === 1 ? "pj-reverse" : ""}`.trim()}>
                <div className="pj-inner">
                  <div className="pj-body">
                    <div className="pj-head">
                      <span className="pj-idx">{String(index + 1).padStart(2, "0")}</span>
                      <h3>{project.title}</h3>
                    </div>

                    <p className="pj-summary">{project.summary}</p>

                    <div className="pj-meta">
                      <div className="pj-meta-row">
                        <span className="pj-meta-key">Role</span>
                        <span className="pj-meta-val">{project.role}</span>
                      </div>
                      <div className="pj-meta-row">
                        <span className="pj-meta-key">Features</span>
                        <span className="pj-meta-val">{project.features}</span>
                      </div>
                      <div className="pj-meta-row">
                        <span className="pj-meta-key">Architecture</span>
                        <span className="pj-meta-val">{project.architecture}</span>
                      </div>
                    </div>

                    <div className="pj-tags">
                      {project.stack.split(",").map((tech) => (
                        <span className="chip" key={tech}>
                          {tech.trim()}
                        </span>
                      ))}
                    </div>

                    {project.details ? (
                      <ul className="pj-points">
                        {project.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    ) : null}

                    {project.outcomes ? (
                      <div className="pj-outcomes">
                        {project.outcomes.map((outcome) => (
                          <span key={outcome}>{outcome}</span>
                        ))}
                      </div>
                    ) : null}

                    {project.liveUrl ? (
                      <div className="pj-actions">
                        <a
                          className="btn btn-ghost btn-sm"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Visit live site
                          <ArrowUpRight size={15} />
                        </a>
                      </div>
                    ) : null}
                  </div>

                  <ProjectMedia project={project} />
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
