"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import { BENCHES } from "@/lib/data";
import { fadeUp, viewportOnce, EASE } from "@/lib/motion";

export default function Footprint() {
  const [active, setActive] = useState("bhc");
  const bench = BENCHES.find((b) => b.id === active);

  return (
    <section id="footprint" className="px-5 py-20 md:px-16 md:py-28 lg:px-24">
      <motion.div
        className="mb-12 max-w-3xl md:mb-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <p className="eyebrow mb-5">Mumbai Footprint</p>
        <h2 className="font-serif font-semibold leading-[1.14] text-teal text-[clamp(1.9rem,4.4vw,3.1rem)]">
          Three benches. One standard.
        </h2>
      </motion.div>

      <motion.div
        className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {/* Node map */}
        <svg
          viewBox="0 0 460 380"
          role="group"
          aria-label="Litigation presence across three benches"
          className="w-full"
        >
          <g stroke="#A99A78" strokeWidth="1" strokeDasharray="4 5" opacity="0.6">
            <line x1="120" y1="210" x2="235" y2="300" />
            <line x1="235" y1="300" x2="330" y2="90" />
            <line x1="120" y1="210" x2="330" y2="90" />
          </g>
          <rect x="30" y="30" width="400" height="320" fill="none" stroke="#A99A78" strokeWidth="1" opacity="0.35" />
          <rect x="55" y="55" width="350" height="270" fill="none" stroke="#A99A78" strokeWidth="1" opacity="0.2" />

          {BENCHES.map((b) => {
            const isActive = active === b.id;
            return (
              <g
                key={b.id}
                onClick={() => setActive(b.id)}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") &&
                  (e.preventDefault(), setActive(b.id))
                }
                tabIndex={0}
                role="button"
                aria-pressed={isActive}
                aria-label={b.name}
                className="cursor-pointer outline-none focus-visible:opacity-100"
              >
                <motion.circle
                  cx={b.x}
                  cy={b.y}
                  fill="transparent"
                  stroke="#A99A78"
                  animate={{
                    r: isActive ? 30 : 26,
                    opacity: isActive ? 0.9 : 0.35,
                    strokeWidth: isActive ? 1.5 : 1,
                  }}
                  transition={{ duration: 0.35 }}
                />
                <motion.circle
                  cx={b.x}
                  cy={b.y}
                  animate={{
                    r: isActive ? 11 : 9,
                    fill: isActive ? "#245F61" : "#A99A78",
                  }}
                  transition={{ duration: 0.35 }}
                />
                <text
                  x={b.x}
                  y={b.y + 46}
                  textAnchor="middle"
                  className={`text-[12px] font-semibold uppercase tracking-wider ${
                    isActive ? "fill-teal" : "fill-ink/60"
                  }`}
                >
                  {b.short}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Detail panel */}
        <div className="min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={bench.id}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <div className="mb-3 flex items-center gap-2 text-[0.8rem] uppercase tracking-widest text-gold">
                <MapPin size={16} />
                <span>
                  {bench.seat} · Since {bench.since}
                </span>
              </div>
              <h3 className="mb-3 font-serif text-[clamp(1.5rem,3vw,2.1rem)] font-semibold text-teal">
                {bench.name}
              </h3>
              <p className="mb-4 text-[0.95rem] text-ink/75">{bench.focus}</p>
              <ul className="mb-7">
                {bench.highlights.map((h) => (
                  <li
                    key={h}
                    className="relative border-t border-gold-soft py-2.5 pl-6 text-[0.9rem] text-ink/80 before:absolute before:left-0 before:top-4 before:h-2 before:w-2 before:border before:border-[1.5px] before:border-gold"
                  >
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2.5">
                {BENCHES.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setActive(b.id)}
                    className={`border px-4 py-2 text-[0.78rem] font-semibold tracking-wide transition-all duration-300 ${
                      active === b.id
                        ? "border-teal bg-teal text-parchment"
                        : "border-gold-soft text-ink hover:border-gold"
                    }`}
                  >
                    {b.short}
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
