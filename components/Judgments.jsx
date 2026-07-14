"use client";

import { Gavel } from "lucide-react";
import { JUDGMENTS } from "@/lib/data";

/**
 * Infinite marquee of recent results. The list is rendered twice and the
 * track translates -50%, so the loop is seamless. Pauses on hover;
 * disabled entirely under prefers-reduced-motion (see globals.css).
 */
export default function Judgments() {
  const items = [...JUDGMENTS, ...JUDGMENTS];
  return (
    <section
      aria-label="Notable recent judgments"
      className="pause-on-hover overflow-hidden border-y border-gold-soft bg-teal-deep py-5"
    >
      <div className="flex w-max animate-ticker items-center gap-12 px-6 motion-reduce:flex-wrap motion-reduce:w-full">
        {items.map((j, i) => (
          <div
            key={`${j.cite}-${i}`}
            className="flex shrink-0 items-center gap-4 whitespace-nowrap"
            aria-hidden={i >= JUDGMENTS.length}
          >
            <Gavel size={14} className="text-gold" />
            <span className="text-[0.72rem] uppercase tracking-[0.18em] text-gold">
              {j.cite}
            </span>
            <span className="text-[0.88rem] text-parchment/85">
              {j.result}
            </span>
            <i className="ml-6 h-4 w-px bg-gold/40" />
          </div>
        ))}
      </div>
    </section>
  );
}
