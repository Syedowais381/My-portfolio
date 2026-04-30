import Reveal from "@/components/Reveal";

export default function HeroSection() {
  return (
    <section id="home" className="hero section">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <p className="eyebrow">Full-Stack Developer & Automation Specialist</p>
        </Reveal>
        <Reveal delayMs={80}>
          <h1>
            Syed Owais Quadri
            <span>Building production-grade web systems and intelligent automation workflows that drive real business results.</span>
          </h1>
        </Reveal>
        <Reveal delayMs={160}>
          <p className="hero-subtext">
            From React + Spring Boot applications to GHL funnels, n8n pipelines, and speed-to-lead systems — I build things that scale and convert.
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
