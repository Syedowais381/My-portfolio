"use client";

import { useEffect, useState } from "react";

type RoleRotatorProps = {
  words: string[];
  intervalMs?: number;
};

/** Cycles a single highlighted word in the hero strapline. */
export default function RoleRotator({ words, intervalMs = 2600 }: RoleRotatorProps) {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (words.length < 2) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const cycle = window.setInterval(() => {
      setLeaving(true);
      window.setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setLeaving(false);
      }, 360);
    }, intervalMs);

    return () => window.clearInterval(cycle);
  }, [words.length, intervalMs]);

  // Reserve the width of the longest word so the line never reflows.
  const longest = words.reduce((a, b) => (a.length >= b.length ? a : b), "");

  return (
    <span className="hero-role-slot">
      <span aria-hidden="true" style={{ visibility: "hidden", display: "block", height: 0 }}>
        {longest}
      </span>
      <span key={index} className={`hero-role-word ${leaving ? "is-leaving" : ""}`.trim()}>
        {words[index]}
      </span>
    </span>
  );
}
