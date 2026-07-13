import Reveal from "@/components/Reveal";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import { freelanceProjects } from "@/lib/freelance-projects";

export default function FreelanceProjectsSection() {
  return (
    <section id="freelance" className="freelance-section section" aria-label="Freelance projects">
      <div className="container">
        <Reveal>
          <p className="freelance-eyebrow">Freelance Work</p>
          <h2>Freelance Projects</h2>
          <p className="section-intro freelance-intro">
            Client acquisition systems, revenue operations workflows, and automation architecture — each project shown
            as a high-level workflow from lead generation through CRM, alerts, and sales operations.
          </p>
        </Reveal>

        <div className="freelance-project-list">
          {freelanceProjects.map((project, index) => (
            <Reveal key={project.id} className="freelance-project" delayMs={index * 60}>
              <div className="freelance-project-header">
                <p className="freelance-project-market">{project.market}</p>
                <h3>{project.title}</h3>
                <p className="freelance-project-summary">{project.summary}</p>
                <div className="project-outcomes freelance-outcomes">
                  {project.impact.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
              <WorkflowDiagram workflow={project.workflow} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
