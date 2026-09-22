import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import { freelanceProjects } from "@/lib/freelance-projects";

export default function FreelanceProjectsSection() {
  return (
    <section id="freelance" className="section" aria-label="Freelance projects">
      <div className="container">
        <SectionHeading
          index="02 / 06"
          kicker="Freelance work"
          title="Systems I've shipped for clients"
          intro="Client acquisition systems, revenue operations workflows, and automation architecture — each one mapped as a working pipeline from lead generation through CRM, alerts, and sales operations."
        />

        <div className="freelance-list">
          {freelanceProjects.map((project, index) => (
            <div className="fl-project" key={project.id}>
              <div className="fl-head">
                <Reveal>
                  <div className="fl-head-top">
                    <span className="fl-market">{project.market}</span>
                    <span className="fl-count">
                      {String(index + 1).padStart(2, "0")} / {String(freelanceProjects.length).padStart(2, "0")}
                    </span>
                  </div>
                </Reveal>

                <Reveal delayMs={80}>
                  <h3>{project.title}</h3>
                </Reveal>

                <Reveal delayMs={140}>
                  <p className="fl-summary">{project.summary}</p>
                </Reveal>

                <Reveal delayMs={200}>
                  <div className="fl-impact">
                    {project.impact.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </Reveal>
              </div>

              <Reveal delayMs={120} variant="blur">
                <WorkflowDiagram workflow={project.workflow} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
