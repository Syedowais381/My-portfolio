type IconProps = {
  size?: number;
  className?: string;
};

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export function ArrowRight({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function ArrowUp({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 19V5M6 11l6-6 6 6" />
    </svg>
  );
}

export function Mail({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function Copy({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="9" y="9" width="12" height="12" rx="2.5" />
      <path d="M5 15H4a1.8 1.8 0 0 1-1.8-1.8V4.8A1.8 1.8 0 0 1 4 3h8.4A1.8 1.8 0 0 1 14 4.8V6" />
    </svg>
  );
}

export function Check({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="m4 12.5 5 5L20 6.5" />
    </svg>
  );
}

export function Github({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 1.8a10.2 10.2 0 0 0-3.23 19.88c.51.1.7-.22.7-.5v-1.9c-2.84.62-3.44-1.2-3.44-1.2-.47-1.19-1.14-1.5-1.14-1.5-.93-.64.07-.62.07-.62 1.03.07 1.57 1.06 1.57 1.06.91 1.57 2.4 1.12 2.99.86.09-.66.36-1.12.65-1.37-2.27-.26-4.66-1.14-4.66-5.07 0-1.12.4-2.03 1.06-2.75-.11-.26-.46-1.3.1-2.71 0 0 .86-.28 2.81 1.05a9.7 9.7 0 0 1 5.12 0c1.95-1.33 2.81-1.05 2.81-1.05.56 1.41.21 2.45.1 2.71.66.72 1.05 1.63 1.05 2.75 0 3.94-2.39 4.8-4.67 5.06.37.32.7.94.7 1.9v2.81c0 .28.18.6.7.5A10.2 10.2 0 0 0 12 1.8Z" />
    </svg>
  );
}

export function Linkedin({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.3 20.5V8.9h3.3v11.6H3.3Zm6.06 0V8.9h3.17v1.6h.04a3.48 3.48 0 0 1 3.13-1.72c3.35 0 3.97 2.2 3.97 5.07v6.65h-3.3v-5.9c0-1.4-.03-3.22-1.96-3.22-1.96 0-2.26 1.53-2.26 3.11v6.01h-3.3Z" />
    </svg>
  );
}

export function Instagram({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FileText({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M14 2.5H7A2 2 0 0 0 5 4.5v15a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-12Z" />
      <path d="M14 2.5v5h5M9 13h6M9 17h4" />
    </svg>
  );
}

export function Workflow({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="2.5" y="3" width="7" height="6" rx="1.6" />
      <rect x="14.5" y="15" width="7" height="6" rx="1.6" />
      <path d="M6 9v4.5a2 2 0 0 0 2 2h10" />
    </svg>
  );
}

export function Layers({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="m12 2.6 9.2 4.9L12 12.4 2.8 7.5 12 2.6Z" />
      <path d="m2.8 12.2 9.2 4.9 9.2-4.9M2.8 16.7l9.2 4.9 9.2-4.9" />
    </svg>
  );
}

export function Server({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="2.6" y="3" width="18.8" height="7" rx="2" />
      <rect x="2.6" y="14" width="18.8" height="7" rx="2" />
      <path d="M6.6 6.5h.01M6.6 17.5h.01" />
    </svg>
  );
}

export function Zap({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M13.2 2.5 4 13.6h7l-.4 7.9 9.2-11.1h-7l.4-7.9Z" />
    </svg>
  );
}

export function Sparkle({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 3.2 13.9 9l5.8 1.9-5.8 1.9L12 18.6 10.1 12.8 4.3 10.9 10.1 9 12 3.2Z" />
    </svg>
  );
}
