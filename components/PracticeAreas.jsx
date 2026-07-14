"use client";

import { useRef, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PRACTICES } from "@/lib/data";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

function TiltCard({ p }) {
  const cardRef = useRef(null);
  const reduced = useReducedMotion();

  const onMove = useCallback(
    (e) => {
      const el = cardRef.current;
      if (!el || reduced) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-4px)`;
    },
    [reduced]
  );

  const onLeave = useCallback(() => {
    if (cardRef.current) cardRef.current.style.transform = "";
  }, []);

  const Icon = p.icon;

  return (
    <motion.article
      variants={fadeUp}
      className="group glass-dark p-7 text-parchment transition-[border-color,background] duration-300 hover:border-gold hover:bg-parchment/10 focus-within:border-gold"
      tabIndex={0}
    >
      {/* Inner wrapper carries the tilt so Framer's variant transform isn't overwritten */}
      <div
        ref={cardRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="transition-transform duration-200 ease-out will-change-transform [transform-style:preserve-3d]"
      >
        <div className="mb-5 flex items-start justify-between text-gold">
          <Icon size={26} strokeWidth={1.6} />
          <ArrowUpRight
            size={18}
            className="translate-y-1 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100"
          />
        </div>
        <h3 className="mb-2.5 font-serif text-[1.28rem] font-semibold">
          {p.title}
        </h3>
        <p className="min-h-[3.6em] text-[0.88rem] text-parchment/75">
          {p.desc}
        </p>

        {/* Metric expansion: hidden until hover/focus on pointer devices, always open on touch */}
        <div className="grid max-h-0 grid-flow-col justify-start gap-7 overflow-hidden opacity-0 transition-all duration-500 group-hover:mt-5 group-hover:max-h-24 group-hover:border-t group-hover:border-gold/30 group-hover:pt-4 group-hover:opacity-100 group-focus-within:mt-5 group-focus-within:max-h-24 group-focus-within:border-t group-focus-within:border-gold/30 group-focus-within:pt-4 group-focus-within:opacity-100 max-md:mt-5 max-md:max-h-24 max-md:border-t max-md:border-gold/30 max-md:pt-4 max-md:opacity-100">
          {p.metrics.map(([label, val]) => (
            <div key={label}>
              <strong className="block font-serif text-[1.25rem] text-gold">
                {val}
              </strong>
              <span className="text-[0.72rem] uppercase tracking-wider text-parchment/60">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function PracticeAreas() {
  return (
    <section
      id="practice"
      className="bg-gradient-to-br from-teal to-teal-deep px-5 py-20 md:px-16 md:py-28 lg:px-24"
    >
      <motion.div
        className="mb-12 max-w-3xl md:mb-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <p className="eyebrow mb-5">Core Practice Areas</p>
        <h2 className="font-serif font-semibold leading-[1.14] text-parchment text-[clamp(1.9rem,4.4vw,3.1rem)]">
          Where the stakes are highest,
          <br />
          we are briefed first.
        </h2>
      </motion.div>

      <motion.div
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.08 }}
      >
        {PRACTICES.map((p) => (
          <TiltCard key={p.title} p={p} />
        ))}
      </motion.div>
    </section>
  );
}
