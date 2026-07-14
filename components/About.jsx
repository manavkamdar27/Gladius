"use client";

import { motion } from "framer-motion";
import { Gavel, ShieldCheck, Landmark } from "lucide-react";
import { fadeUp, slideLeft, slideRight, stagger, viewportOnce } from "@/lib/motion";

const TENETS = [
  {
    icon: Gavel,
    title: "Trial-Ready Philosophy",
    body: "Pleadings drafted for cross-examination, not correspondence. We prepare to win at the bench.",
  },
  {
    icon: ShieldCheck,
    title: "Aggressive Corporate Defense",
    body: "Rapid-response injunction and asset-protection strategy within 48 hours of engagement.",
  },
  {
    icon: Landmark,
    title: "Deep Bench Expertise",
    body: "Seventeen years of institutional knowledge of Mumbai's commercial courts and tribunal practice.",
  },
];

export default function About() {
  return (
    <section id="firm" className="px-5 py-20 md:px-16 md:py-28 lg:px-24">
      <motion.div
        className="mb-12 max-w-3xl md:mb-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <p className="eyebrow mb-5">The Firm</p>
        <h2 className="font-serif font-semibold leading-[1.14] text-teal text-[clamp(1.9rem,4.4vw,3.1rem)]">
          Built for the courtroom.
          <br />
          Not the conference room.
        </h2>
      </motion.div>

      <div className="grid items-start gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16 lg:gap-20">
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <p className="mb-5 font-serif text-xl leading-relaxed text-teal md:text-[1.25rem]">
            Gladius Law is a specialist litigation chamber headquartered at
            Nariman Point, Mumbai. We do one thing: fight and win high-stakes
            disputes.
          </p>
          <p className="mb-4 text-[0.97rem] text-ink/80">
            Every matter we accept is prepared as if it will be tried to
            judgment. That trial-ready posture — witness-proofed,
            evidence-mapped, and argument-tested from day one — is what forces
            favourable settlements and wins the ones that don&apos;t settle.
          </p>
          <p className="text-[0.97rem] text-ink/80">
            Our counsel appear daily before the Commercial Division of the
            Bombay High Court, the NCLT and NCLAT, SEBI&apos;s appellate
            forums, and the Supreme Court of India, acting for promoters,
            boards, funds, and financial institutions.
          </p>
        </motion.div>

        <motion.ul
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {TENETS.map((t) => (
            <motion.li
              key={t.title}
              variants={slideRight}
              className="flex gap-4 border-t border-gold-soft py-6 last:border-b"
            >
              <t.icon size={20} className="mt-1 shrink-0 text-gold" />
              <div>
                <h3 className="mb-1 font-serif text-[1.08rem] text-teal">
                  {t.title}
                </h3>
                <p className="text-[0.88rem] text-ink/70">{t.body}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
