import { ArrowUp } from "@/components/Icons";
import { SITE } from "@/lib/site-data";

const sectionLinks = [
  { href: "#expertise", label: "Expertise" },
  { href: "#freelance", label: "Freelance" },
  { href: "#web-dev", label: "Web Dev" },
  { href: "#automation", label: "Automation" },
  { href: "#dsa", label: "DSA" },
];

const elsewhereLinks = [
  { href: SITE.socials.github, label: "GitHub" },
  { href: SITE.socials.linkedin, label: "LinkedIn" },
  { href: SITE.socials.instagram, label: "Instagram" },
  { href: SITE.socials.resume, label: "Résumé" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand" href="#home">
              <span className="brand-mark" aria-hidden="true">
                SO
              </span>
              <span className="brand-text">
                Owais<span className="brand-dot">.</span>
              </span>
            </a>
            <p>
              Full-stack developer and automation specialist building production web systems and the
              workflows that keep them fed.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <div className="footer-col">
              <h4>Sections</h4>
              {sectionLinks.map((link) => (
                <a href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}
            </div>

            <div className="footer-col">
              <h4>Elsewhere</h4>
              {elsewhereLinks.map((link) => (
                <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>

            <div className="footer-col">
              <h4>Contact</h4>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {SITE.name}
          </span>
          <a className="to-top" href="#home">
            Back to top
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
