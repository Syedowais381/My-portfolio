"use client";

import { useEffect, useRef, useState } from "react";

type MaskedLinesProps = {
  lines: React.ReactNode[];
  className?: string;
  staggerMs?: number;
};

/** Each line rises out of its own clipping mask, one after the next. */
export default function MaskedLines({ lines, className, staggerMs = 110 }: MaskedLinesProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={className}>
      {lines.map((line, index) => (
        <span className={`line-mask ${visible ? "is-visible" : ""}`.trim()} key={index}>
          <span style={{ transitionDelay: `${index * staggerMs}ms` }}>{line}</span>
        </span>
      ))}
    </span>
  );
}
