"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "@/components/Icons";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timer = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard can be blocked (insecure context, denied permission) —
      // the mailto button beside this one still works.
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      className={`copy-btn ${copied ? "is-copied" : ""}`.trim()}
      onClick={onCopy}
      aria-live="polite"
    >
      {copied ? <Check size={15} /> : <Copy size={15} />}
      {copied ? "Copied to clipboard" : email}
    </button>
  );
}
