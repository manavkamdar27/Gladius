"use client";

import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { maskRise, stagger, EASE } from "@/lib/motion";

// R3F only ever runs client-side; SSR disabled for the WebGL scene
const StructuralScene = dynamic(() => import("./canvas/StructuralScene"), {
  ssr: false,
  loading: () => <CanvasFallback />,
});

function CanvasFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-50" aria-hidden="true">
      <svg viewBox="0 0 400 400" className="w-[70%] max-w-xl">
        <g fill="none" stroke="#A99A78" strokeWidth="1.4">
          <rect x="80" y="120" width="240" height="160" />
          <rect x="130" y="80" width="150" height="240" opacity="0.55" />
          <rect x="60" y="160" width="280" height="90" opacity="0.35" transform="rotate(-8 200 205)" />
        </g>
        <g fill="#245F61">
          <circle cx="80" cy="120" r="3.5" />
          <circle cx="320" cy="120" r="3.5" />
          <circle cx="80" cy="280" r="3.5" />
          <circle cx="320" cy="280" r="3.5" />
        </g>
      </svg>
    </div>
  );
}

export default function Hero() {
  // Only mount WebGL on ≥768px screens for mobile performance
  const [show3D, setShow3D] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setShow3D(mq.matches);
    const fn = (e) => setShow3D(e.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  // Typography parallax against scroll
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 600], [0, 76]);
  const opacityText = useTransform(scrollY, [0, 500], [1, 0.25]);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 pb-20 text-center"
    >
      {show3D ? (
        <Suspense fallback={<CanvasFallback />}>
          <StructuralScene />
        </Suspense>
      ) : (
        <CanvasFallback />
      )}

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
