"use client";

import { useEffect, useRef, useState } from "react";

type ProgressRingProps = {
  value: number;
  label: string;
  delayMs?: number;
};

const RADIUS = 36;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ProgressRing({ value, label, delayMs = 0 }: ProgressRingProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [filled, setFilled] = useState(false);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let frame = 0;
    let start = 0;
    let timer = 0;

    const step = (timestamp: number) => {
      if (!start) {
        start = timestamp;
      }

      const progress = Math.min((timestamp - start) / 1500, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));

      if (progress < 1) {
        frame = window.requestAnimationFrame(step);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (reduced) {
              setFilled(true);
              setDisplay(value);
            } else {
              timer = window.setTimeout(() => {
                setFilled(true);
                frame = window.requestAnimationFrame(step);
              }, delayMs);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [value, delayMs]);

  const offset = filled ? CIRCUMFERENCE * (1 - value / 100) : CIRCUMFERENCE;

  return (
    <div className="dsa-cell" ref={ref}>
      <div className="dsa-ring">
        <svg viewBox="0 0 84 84" role="img" aria-label={`${label}: ${value} percent`}>
          <circle className="dsa-ring-track" cx="42" cy="42" r={RADIUS} />
          <circle
            className="dsa-ring-bar"
            cx="42"
            cy="42"
            r={RADIUS}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </svg>
        <span className="dsa-ring-value" aria-hidden="true">
          {display}
          <sub>%</sub>
        </span>
      </div>
      <span className="dsa-topic">{label}</span>
    </div>
  );
}
