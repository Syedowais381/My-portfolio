import Reveal from "@/components/Reveal";

export default function HeroSection() {
  return (
    <section id="home" className="hero section">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <p className="eyebrow">Full-Stack Java Engineer</p>
        </Reveal>
        <Reveal delayMs={80}>
          <h1>
            Syed Owais Quadri
            <span>Building production-grade React + Spring Boot systems with cloud-first deployment.</span>
          </h1>
        </Reveal>
        <Reveal delayMs={160}>
          <p className="hero-subtext">
            Building scalable backend systems, full-stack applications, and intelligent automation workflows.
          </p>
        </Reveal>
        <Reveal delayMs={220}>
          <div className="cta-row">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-secondary" href="#contact">
              Contact Me
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
