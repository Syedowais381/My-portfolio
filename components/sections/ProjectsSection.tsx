import Image from "next/image";
import Reveal from "@/components/Reveal";

type Project = {
  title: string;
  summary: string;
  stack: string;
  features: string;
  architecture: string;
  details?: string[];
  screenshots?: { src: string; alt: string }[];
  screenshotPlaceholders?: number;
  video?: { src: string; title: string };
  liveUrl?: string;
};

const projects: Project[] = [
  {
    title: "CodePulz",
    summary: "Case-study style developer platform focused on performance, reliability, and clean architecture.",
    stack: "React, Spring Boot, PostgreSQL, Docker, Railway",
    features: "Role-based modules, secure auth flows, and optimized API contracts.",
    architecture: "Frontend consumes versioned REST endpoints from a modular Spring Boot service layer with PostgreSQL persistence.",
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
    summary: "Monitoring-oriented full-stack implementation demonstrating backend simulation and deployment discipline.",
    stack: "React, Spring Boot, MySQL (Railway), Docker Hub, Railway",
    features: "Dummy attack telemetry generation, normalized event storage, and real-time style frontend consumption.",
    architecture: "Synthetic event generator writes to MySQL; backend exposes filtered metrics APIs consumed by the dashboard.",
    video: {
      src: "/projects/ddos-demo.mp4",
      title: "DDoS Tracker demo video",
    },
  },
  {
    title: "StreakTracker",
    summary: "Habit tracking product focused on consistency and leaderboard competition.",
    stack: "Next.js, Supabase PostgreSQL, Realtime subscriptions",
    features: "Daily habit logging, weekly leaderboard, and live updates for active users.",
    architecture: "Next.js client backed by Supabase auth, PostgreSQL tables, and realtime channels for instant state sync.",
    liveUrl: "https://streak.aidaptics.com/",
    screenshots: [{ src: "/projects/streaktracker-1.png", alt: "StreakTracker website screenshot 1" }],
  },
  {
    title: "Consultancy Website",
    summary: "Service showcase website built with a UI-first approach and fast loading strategy.",
    stack: "Next.js, Responsive UI architecture",
    features: "Service discovery sections, trust-focused visual hierarchy, and lightweight interaction patterns.",
    architecture: "Static-forward rendering with component-level composition to maximize speed and maintainability.",
    liveUrl: "https://ckeng.netlify.app/",
    screenshots: [{ src: "/projects/consultancy-1.png", alt: "Consultancy website screenshot 1" }],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal>
          <h2>Featured Projects</h2>
        </Reveal>
        <div className="project-list">
          {projects.map((project, index) => (
            <Reveal key={project.title} className="project-item" delayMs={index * 70}>
              <div className="project-header">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <p>
                <span>Stack:</span> {project.stack}
              </p>
              <p>
                <span>Key features:</span> {project.features}
              </p>
              <p>
                <span>Architecture:</span> {project.architecture}
              </p>
              {project.liveUrl ? (
                <p>
                  <span>Live:</span>{" "}
                  <a className="project-link" href={project.liveUrl} target="_blank" rel="noreferrer">
                    {project.liveUrl}
                  </a>
                </p>
              ) : null}
              {project.details ? (
                <ul className="project-deep-dive">
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              ) : null}
              {project.screenshots && project.screenshots.length > 0 ? (
                <div className="screenshot-row" aria-label={`${project.title} screenshots`}>
                  {project.screenshots.map((shot) => (
                    project.liveUrl ? (
                      <a
                        key={shot.src}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-media-link"
                        aria-label={`Open ${project.title} live website`}
                      >
                        <figure className="project-media">
                          <Image src={shot.src} alt={shot.alt} width={960} height={600} />
                        </figure>
                      </a>
                    ) : (
                      <figure key={shot.src} className="project-media">
                        <Image src={shot.src} alt={shot.alt} width={960} height={600} />
                      </figure>
                    )
                  ))}
                </div>
              ) : null}
              {!project.screenshots && project.screenshotPlaceholders ? (
                <div className="screenshot-row" aria-label={`${project.title} screenshot placeholders`}>
                  {Array.from({ length: project.screenshotPlaceholders }).map((_, idx) => (
                    <div key={`${project.title}-placeholder-${idx}`} className="screenshot-placeholder">
                      Screenshot Placeholder
                    </div>
                  ))}
                </div>
              ) : null}
              {project.video ? (
                <div className="project-video-wrap">
                  <video className="project-video" controls preload="metadata">
                    <source src={project.video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <p className="media-note">{project.video.title}</p>
                </div>
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
