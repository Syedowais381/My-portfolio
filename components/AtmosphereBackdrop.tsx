"use client";

import { useEffect, useRef } from "react";

/**
 * Golden-hour backdrop.
 *
 * By default the sky, sun bloom and ridge silhouettes are drawn in CSS + SVG,
 * so the page carries no image weight and the light can actually animate.
 *
 * If a photograph is found in `public/` (see Atmosphere.tsx) it is used instead
 * and the synthetic sun/clouds/ridges step aside, since the photo already has
 * its own. Either way the veil and grain stay on top for readable text.
 */
type AtmosphereBackdropProps = {
  photoSrc?: string | null;
};

const CLOUDS = [
  { top: "16%", width: "38vw", height: "6vh", duration: 98, delay: 0, opacity: 0.5 },
  { top: "26%", width: "26vw", height: "4vh", duration: 74, delay: -28, opacity: 0.38 },
  { top: "34%", width: "44vw", height: "5vh", duration: 126, delay: -62, opacity: 0.55 },
  { top: "44%", width: "30vw", height: "3.4vh", duration: 88, delay: -15, opacity: 0.42 },
  { top: "52%", width: "36vw", height: "4vh", duration: 110, delay: -78, opacity: 0.3 },
];

export default function AtmosphereBackdrop({ photoSrc = null }: AtmosphereBackdropProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  // Parallax: ridges drift at different rates as the page scrolls.
  useEffect(() => {
    const node = rootRef.current;
    if (!node) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let ticking = false;

    const update = () => {
      const progress = window.scrollY / Math.max(window.innerHeight, 1);
      // capped so the ridges settle after a couple of screens instead of
      // drifting off the bottom of the viewport entirely
      node.style.setProperty("--sy", String(Math.min(progress, 2)));
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) {
        return;
      }
      ticking = true;
      window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`atmos ${photoSrc ? "has-photo" : ""}`.trim()}
      ref={rootRef}
      aria-hidden="true"
    >
      <div className="atmos-sky" />
      <div className="atmos-stars" />

      {photoSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="atmos-photo" src={photoSrc} alt="" />
      ) : null}

      <div className="atmos-clouds">
        {CLOUDS.map((cloud, index) => (
          <span
            key={index}
            className="atmos-cloud"
            style={{
              top: cloud.top,
              width: cloud.width,
              height: cloud.height,
              opacity: cloud.opacity,
              animationDuration: `${cloud.duration}s`,
              animationDelay: `${cloud.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="atmos-spill" />
      <div className="atmos-sun" />

      {/* --- ridge silhouettes, far to near --- */}
      <svg
        className="atmos-ridge atmos-ridge-far"
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
        style={{ transform: "translate3d(0, calc(var(--sy, 0) * 14px), 0)" }}
      >
        <defs>
          <linearGradient id="ridgeFar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b3244" />
            <stop offset="100%" stopColor="#241f2e" />
          </linearGradient>
        </defs>
        <path
          fill="url(#ridgeFar)"
          d="M0 260V176l86-22 74 28 92-38 88 30 96-44 90 34 104-46 86 26 96-52 92-34 104-46 96-32 140-30v270Z"
        />
      </svg>

      <svg
        className="atmos-ridge atmos-ridge-mid"
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
        style={{ transform: "translate3d(0, calc(var(--sy, 0) * 26px), 0)" }}
      >
        <defs>
          <linearGradient id="ridgeMid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2c2530" />
            <stop offset="100%" stopColor="#171320" />
          </linearGradient>
        </defs>
        <path
          fill="url(#ridgeMid)"
          d="M0 300V214l72-14 68 20 84-30 76 22 92-34 84 26 92-40 86 22 88-46 84-38 96-50 92-34 126-30v256Z"
        />
      </svg>

      <svg
        className="atmos-ridge atmos-ridge-near"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        style={{ transform: "translate3d(0, calc(var(--sy, 0) * 44px), 0)" }}
      >
        <defs>
          <linearGradient id="ridgeNear" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#14101a" />
            <stop offset="100%" stopColor="#0a070e" />
          </linearGradient>
        </defs>
        <path
          fill="url(#ridgeNear)"
          d="M0 220v-78q34-26 62-8t54-4 58-18 56 14 48 22 56-10 52-26 58-6 54 18 50 10 56-22 54-30 58-14 52 26 56 4 54-24 58-32 56-10 52 22 60 6 62-18v198Z"
        />
      </svg>

      <div className="atmos-veil" />
      <div className="atmos-grain" />
    </div>
  );
}
