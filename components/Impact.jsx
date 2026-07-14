"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  animate,
} from "framer-motion";
import { STATS } from "@/lib/data";
import { fadeUp, viewportOnce } from "@/lib/motion";

function Stat({ s }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(s.target);
      return;
    }
    const controls = animate(0, s.target, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduced, s.target]);

  return (
    <div ref={ref} className="px-6 py-10 text-center md:py-12">
      <strong className="block font-serif font-bold leading-tight text-teal text-[clamp(2.1rem,4.5vw,3.4rem)]">
        {s.prefix}
        {value.toLocaleString("en-IN")}
        {s.suffix}
      </strong>
      <span className="mt-2.5 block text-[0.8rem] uppercase tracking-widest text-ink/60">
        {s.label}
      </span>
    </div>
  );
}

export default function Impact() {
  return (
    <section id="impact" className="px-5 py-20 md:px-16 md:py-28 lg:px-24">
      <motion.div
        className="mb-12 max-w-3xl md:mb-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <p className="eyebrow mb-5">The Courtroom Impact</p>
        <h2 className="font-serif font-semibold leading-[1.14] text-teal text-[clamp(1.9rem,4.4vw,3.1rem)]">
          Judged by outcomes.
        </h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 border-y-[1.5px] border-gold lg:grid-cols-4 [&>*:nth-child(even)]:border-l [&>*:nth-child(even)]:border-gold-soft lg:[&>*+*]:border-l lg:[&>*+*]:border-gold-soft max-lg:[&>*:nth-child(n+3)]:border-t max-lg:[&>*:nth-child(n+3)]:border-gold-soft"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {STATS.map((s) => (
          <Stat key={s.label} s={s} />
        ))}
      </motion.div>
    </section>
  );
}
