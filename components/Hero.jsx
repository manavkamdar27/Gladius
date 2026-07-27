"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { maskRise, stagger, EASE } from "@/lib/motion";

export default function Hero() {
  // Typography parallax against scroll
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 600], [0, 76]);
  const opacityText = useTransform(scrollY, [0, 500], [1, 0.25]);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 pb-20 text-center"
    >
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 max-w-4xl will-change-transform"
        variants={stagger(0.14)}
        initial="hidden"
        animate="show"
      >
        <motion.p
          className="eyebrow mb-6"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          Litigation Chambers · Mumbai · Est. 2009
        </motion.p>

        <h1 className="font-serif font-bold leading-[0.98] text-teal text-[clamp(3.4rem,11vw,8rem)]">
          <span className="block overflow-hidden">
            <motion.span className="inline-block" variants={maskRise}>
              GLADIUS
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span className="inline-block text-stroke-gold" variants={maskRise}>
              LAW
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="mt-7 font-serif italic text-[clamp(1.15rem,2.6vw,1.6rem)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.9 }}
        >
          Defending Ambitions. Resolving Disputes.
        </motion.p>

        <motion.p
          className="mx-auto mt-4 max-w-xl text-[0.98rem] text-ink/75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.9 }}
        >
          Trial-first advocates for India&apos;s most consequential commercial
          battles — before the Bombay High Court, the NCLT, and the Supreme
          Court of India.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: EASE }}
        >
          <a href="#contact" className="btn btn-solid">
            Retain Counsel <ArrowRight size={17} />
          </a>
          <a href="#practice" className="btn btn-ghost">
            Explore Practice Areas
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-4 whitespace-nowrap text-[0.7rem] uppercase tracking-[0.22em] text-ink/55 lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span>Bombay High Court</span>
        <i className="h-px w-9 bg-gold" />
        <span>NCLT Mumbai</span>
        <i className="h-px w-9 bg-gold" />
        <span>Supreme Court of India</span>
      </motion.div>
    </section>
  );
}
