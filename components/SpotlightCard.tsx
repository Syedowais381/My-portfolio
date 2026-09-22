"use client";

import { useRef } from "react";

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
};

/** Glass card whose hairline and inner spotlight follow the pointer. */
export default function SpotlightCard({
  children,
  className,
  as: Tag = "article",
}: SpotlightCardProps) {
  const ref = useRef<HTMLElement | null>(null);

  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const rect = node.getBoundingClientRect();
    node.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    node.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={`card ${className ?? ""}`.trim()}
      onPointerMove={onPointerMove}
    >
      <span className="card-sheen" aria-hidden="true" />
      <span className="card-spot" aria-hidden="true" />
      {children}
    </Tag>
  );
}
