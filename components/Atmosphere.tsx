import fs from "node:fs";
import path from "node:path";
import AtmosphereBackdrop from "@/components/AtmosphereBackdrop";

/**
 * Server wrapper for the backdrop.
 *
 * Drop your sunset photograph into `public/` as `hero-bg.jpg` (or .jpeg / .png
 * / .webp) and it becomes the site background automatically — no code change.
 * Remove it and the hand-drawn CSS sky takes over again.
 */
const CANDIDATES = ["hero-bg.jpg", "hero-bg.jpeg", "hero-bg.png", "hero-bg.webp"];

function findBackdropPhoto(): string | null {
  for (const name of CANDIDATES) {
    try {
      if (fs.existsSync(path.join(process.cwd(), "public", name))) {
        return `/${name}`;
      }
    } catch {
      // unreadable public dir — fall through to the CSS sky
    }
  }

  return null;
}

export default function Atmosphere() {
  return <AtmosphereBackdrop photoSrc={findBackdropPhoto()} />;
}
