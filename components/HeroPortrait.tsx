"use client";

import Image from "next/image";

// Bump this number whenever you replace public/portrait.jpg
const PORTRAIT_VERSION = "2";

export default function HeroPortrait() {
  const portraitSrc = `/portrait.jpg?v=${PORTRAIT_VERSION}`;

  return (
    <div className="hero-portrait-frame">
      <div className="hero-portrait-glow" aria-hidden="true" />
      <div className="hero-portrait">
        <Image
          src={portraitSrc}
          alt="Syed Owais Quadri portrait"
          width={360}
          height={480}
          priority
          unoptimized
          className="hero-portrait-img"
        />
      </div>
    </div>
  );
}
