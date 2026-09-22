"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "up" | "down" | "left" | "right" | "scale" | "blur";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  variant?: Variant;
  threshold?: number;
  as?: "div" | "li" | "article" | "section";
};

export default function Reveal({
  children,
  className,
  delayMs = 0,
  variant = "up",
  threshold = 0.14,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
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
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  const classes = ["reveal", `reveal-${variant}`, visible ? "is-visible" : "", className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={classes}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </Tag>
  );
}
