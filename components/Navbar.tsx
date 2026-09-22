"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "@/components/Icons";

const links = [
  { href: "#home", label: "Home" },
  { href: "#expertise", label: "Expertise" },
  { href: "#freelance", label: "Freelance" },
  { href: "#web-dev", label: "Web Dev" },
  { href: "#automation", label: "Automation" },
  { href: "#dsa", label: "DSA" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  const headerRef = useRef<HTMLElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);
  const pillRef = useRef<HTMLSpanElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  /* --- condense the bar once the page scrolls (class toggled directly, no re-render) --- */
  useEffect(() => {
    const header = headerRef.current;
    if (!header) {
      return;
    }

    let ticking = false;

    const sync = () => {
      const y = window.scrollY;
      const isScrolled = header.classList.contains("navbar-scrolled");

      if (!isScrolled && y > 40) {
        header.classList.add("navbar-scrolled");
      } else if (isScrolled && y < 12) {
        header.classList.remove("navbar-scrolled");
      }

      ticking = false;
    };

    const onScroll = () => {
      if (ticking) {
        return;
      }
      ticking = true;
      window.requestAnimationFrame(sync);
    };

    sync();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* --- scroll spy: highlight whichever section is in view --- */
  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* --- slide the indicator under the active link (DOM write, not state) --- */
  useEffect(() => {
    const movePill = () => {
      const list = listRef.current;
      const pill = pillRef.current;
      const item = itemRefs.current[activeId];

      if (!list || !pill) {
        return;
      }

      if (!item || window.innerWidth <= 900) {
        pill.classList.remove("is-ready");
        return;
      }

      const listRect = list.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();

      pill.style.transform = `translateX(${itemRect.left - listRect.left}px)`;
      pill.style.width = `${itemRect.width}px`;
      pill.classList.add("is-ready");
    };

    movePill();
    window.addEventListener("resize", movePill);
    return () => window.removeEventListener("resize", movePill);
  }, [activeId]);

  /* --- drawer: close on widen, lock scroll, close on Escape --- */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="navbar" ref={headerRef}>
        <div className="container nav-inner">
          <a className="brand" href="#home" aria-label="Back to top">
            <span className="brand-mark" aria-hidden="true">
              SO
            </span>
            <span className="brand-text">
              Owais<span className="brand-dot">.</span>
            </span>
          </a>

          <nav aria-label="Main navigation">
            <ul
              id="main-navigation"
              ref={listRef}
              className={`nav-links ${menuOpen ? "is-open" : ""}`.trim()}
            >
              <span className="nav-pill" ref={pillRef} aria-hidden="true" />
              {links.map((link) => {
                const id = link.href.slice(1);

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      ref={(node) => {
                        itemRefs.current[id] = node;
                      }}
                      className={activeId === id ? "is-active" : undefined}
                      aria-current={activeId === id ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <a className="btn btn-primary btn-sm nav-cta" href="#contact">
            Let&rsquo;s talk
            <ArrowRight size={15} />
          </a>

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? "is-open" : ""}`.trim()}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`nav-scrim ${menuOpen ? "is-open" : ""}`.trim()}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}
