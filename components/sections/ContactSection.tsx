import CopyEmail from "@/components/CopyEmail";
import { ArrowUpRight, FileText, Github, Instagram, Linkedin, Mail } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { SITE } from "@/lib/site-data";

export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading index="06 / 06" kicker="Contact" title="Let's work together" />

        <Reveal variant="scale">
          <div className="contact-card">
            <span className="contact-glow" aria-hidden="true" />
            <div className="contact-inner">
              <span className="pill pill-live">
                <span className="dot" aria-hidden="true" />
                Taking on new projects
              </span>

              <p className="contact-statement">
                Let&rsquo;s build something that <span className="serif-accent text-gradient">actually works</span>.
              </p>

              <p className="contact-sub">
                Whether it&rsquo;s a full product build or an automation system that needs to stop leaking leads —
                tell me what&rsquo;s broken and I&rsquo;ll tell you how I&rsquo;d fix it.
              </p>

              <div className="contact-actions">
                <a className="btn btn-primary" href={`mailto:${SITE.email}`}>
                  <Mail size={16} />
                  Email me
                </a>
                <CopyEmail email={SITE.email} />
              </div>

              <div className="contact-socials">
                <a className="social-link" href={SITE.socials.github} target="_blank" rel="noreferrer">
                  <Github size={16} />
                  GitHub
                  <ArrowUpRight size={13} />
                </a>
                <a className="social-link" href={SITE.socials.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={16} />
                  LinkedIn
                  <ArrowUpRight size={13} />
                </a>
                <a className="social-link" href={SITE.socials.instagram} target="_blank" rel="noreferrer">
                  <Instagram size={16} />
                  Instagram
                  <ArrowUpRight size={13} />
                </a>
                <a className="social-link" href={SITE.socials.resume} target="_blank" rel="noreferrer">
                  <FileText size={16} />
                  Résumé
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
