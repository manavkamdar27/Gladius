"use client";

import { motion } from "framer-motion";
import { COUNSEL } from "@/lib/data";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

function CounselCard({ c }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative border border-gold-soft bg-white/40 p-7 backdrop-blur-md transition-colors duration-300 hover:border-gold"
    >
      {/* Monogram plate — echoes the intersecting-rectangle mark */}
      <div className="relative mb-6 flex h-24 w-24 items-center justify-center">
        <svg
          viewBox="0 0 96 96"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <rect
            x="8"
            y="22"
            width="80"
            height="52"
            fill="none"
            stroke="#A99A78"
            strokeWidth="1.4"
            className="transition-all duration-500 group-hover:x-[4] group-hover:opacity-100"
            opacity="0.7"
          />
          <rect
            x="26"
            y="8"
            width="44"
            height="80"
            fill="none"
            stroke="#245F61"
            strokeWidth="1.4"
            opacity="0.5"
          />
        </svg>
        <span className="font-serif text-2xl font-semibold text-teal">
          {c.initials}
        </span>
      </div>

      <h3 className="font-serif text-[1.22rem] font-semibold text-teal">
        {c.name}
      </h3>
      <p className="mt-0.5 text-[0.82rem] font-semibold uppercase tracking-widest text-gold">
        {c.role}
      </p>
      <p className="mt-3 text-[0.88rem] leading-relaxed text-ink/75">
        {c.line}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-gold-soft pt-4 text-[0.72rem] uppercase tracking-wider text-ink/55">
        <span>Enrolled {c.enrolled}</span>
        <i className="h-3 w-px bg-gold/50" />
        <span>{c.forums}</span>
      </div>
    </motion.article>
  );
}

export default function Counsel() {
  return (
    <section id="counsel" className="px-5 py-20 md:px-16 md:py-28 lg:px-24">
      <motion.div
        className="mb-12 max-w-3xl md:mb-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <p className="eyebrow mb-5">Counsel</p>
        <h2 className="font-serif font-semibold leading-[1.14] text-teal text-[clamp(1.9rem,4.4vw,3.1rem)]">
          Advocates who close arguments,
          <br />
          not just files.
        </h2>
      </motion.div>

      <motion.div
        className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {COUNSEL.map((c) => (
          <CounselCard key={c.name} c={c} />
        ))}
      </motion.div>
    </section>
  );
}
