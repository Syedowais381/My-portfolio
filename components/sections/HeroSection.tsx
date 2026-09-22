import CountUp from "@/components/CountUp";
import HeroPortrait from "@/components/HeroPortrait";
import { ArrowRight, ArrowUpRight } from "@/components/Icons";
import MaskedLines from "@/components/MaskedLines";
import Reveal from "@/components/Reveal";
import RoleRotator from "@/components/RoleRotator";
import { HERO_METRICS, HERO_ROLES } from "@/lib/site-data";

export default function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-layout">
          <div className="hero-content">
            <Reveal variant="down">
              <span className="pill pill-live">
                <span className="dot" aria-hidden="true" />
                Available for freelance
              </span>
            </Reveal>

            <h1>
              <MaskedLines
                lines={[
                  <span className="hero-name" key="name">
                    Syed Owais Quadri
                  </span>,
                  <span className="hero-accent" key="accent">
                    <span className="serif-accent text-gradient">engineering</span> systems that ship.
                  </span>,
                ]}
              />
            </h1>

            <Reveal delayMs={280}>
              <p className="hero-role">
                I build <RoleRotator words={HERO_ROLES} />
              </p>
            </Reveal>

            <Reveal delayMs={360}>
              <p className="hero-subtext">
                From <strong>React + Spring Boot</strong> applications to <strong>n8n</strong>,{" "}
                <strong>Make</strong> and <strong>GoHighLevel</strong> pipelines — I design the whole system,
                not just the screen it renders on.
              </p>
            </Reveal>

            <Reveal delayMs={440}>
              <div className="cta-row">
                <a className="btn btn-primary" href="#web-dev">
                  View my work
                  <ArrowRight size={16} />
                </a>
                <a className="btn btn-ghost" href="#contact">
                  Start a project
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </Reveal>

            <Reveal delayMs={520}>
              <div className="hero-metrics">
                {HERO_METRICS.map((metric) => (
                  <div className="hero-metric" key={metric.label}>
                    <span className="hero-metric-value">
                      <CountUp
                        to={metric.value}
                        prefix={metric.prefix ?? ""}
                        suffix={metric.suffix}
                      />
                    </span>
                    <span className="hero-metric-label">{metric.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delayMs={200} variant="scale" className="hero-portrait-wrap">
            <HeroPortrait />
          </Reveal>
        </div>
      </div>

      <a className="scroll-cue" href="#expertise" aria-label="Scroll to expertise">
        <span>Scroll</span>
        <span className="scroll-cue-rail" aria-hidden="true" />
      </a>
    </section>
  );
}
