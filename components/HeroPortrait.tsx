"use client";

import Image from "next/image";
import { useRef } from "react";

// Bump this whenever you replace public/portrait.jpg
const PORTRAIT_VERSION = "3";

const TAGS = [
  { label: "Full-Stack", className: "portrait-tag-1" },
  { label: "Automation", className: "portrait-tag-2" },
  { label: "Open to work", className: "portrait-tag-3" },
];

export default function HeroPortrait() {
  const stageRef = useRef<HTMLDivElement | null>(null);

  /* Tilt the stage toward the pointer for a little depth. */
  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const node = stageRef.current;
    if (!node || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    node.style.transform = `rotateY(${x * 11}deg) rotateX(${-y * 11}deg) translateZ(0)`;
  };

  const onPointerLeave = () => {
    const node = stageRef.current;
    if (node) {
      node.style.transform = "";
    }
  };

  return (
    <div
      className="portrait-stage"
      ref={stageRef}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <span className="portrait-bloom" aria-hidden="true" />
      <span className="portrait-orbit" aria-hidden="true" />
      <span className="portrait-orbit portrait-orbit-2" aria-hidden="true" />

      <div className="portrait-frame">
        <Image
          src={`/portrait.jpg?v=${PORTRAIT_VERSION}`}
          alt="Syed Owais Quadri"
          width={430}
          height={573}
          priority
          unoptimized
          className="portrait-img"
        />
        <span className="portrait-grade" aria-hidden="true" />
        <span className="portrait-sweep" aria-hidden="true" />
        <span className="portrait-scan" aria-hidden="true" />
      </div>

      <span className="portrait-bracket portrait-bracket-bl" aria-hidden="true" />
      <span className="portrait-bracket portrait-bracket-br" aria-hidden="true" />

      {TAGS.map((tag) => (
        <span className={`portrait-tag ${tag.className}`} key={tag.label}>
          <span className="tag-dot" aria-hidden="true" />
          {tag.label}
        </span>
      ))}
    </div>
  );
}
