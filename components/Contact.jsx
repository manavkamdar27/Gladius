"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Lock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { fadeUp, slideRight, viewportOnce } from "@/lib/motion";

const inputClass =
  "w-full border border-gold-soft bg-white/55 px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink/40 transition-all duration-300 focus:border-gold focus:outline-none focus:ring-[3px] focus:ring-gold/25 resize-y";

const labelClass =
  "mb-1.5 block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-teal";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    org: "",
    email: "",
    forum: "Bombay High Court",
    brief: "",
  });
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.brief) return;
    // TODO: wire to your API route / CRM. Payload is `form`.
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-parchment to-[#E2DCCF] px-5 py-20 md:px-16 md:py-28 lg:px-24"
    >
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <p className="eyebrow mb-5">Secure Briefing Portal</p>
          <h2 className="mb-4 font-serif font-semibold text-teal text-[clamp(2rem,4vw,2.9rem)]">
            Brief the chamber.
          </h2>
          <p className="font-serif text-lg leading-relaxed text-teal/90">
            Time-critical matters are triaged within four working hours. All
            briefings are treated as privileged from first contact.
          </p>
          <ul className="mt-8">
            {[
              [Phone, "+91 22 4890 1200"],
              [Mail, "chambers@gladiuslaw.in"],
              [MapPin, "14th Floor, Mittal Court, Nariman Point, Mumbai 400021"],
              [Lock, "End-to-end privileged & confidential"],
            ].map(([Icon, text]) => (
              <li
                key={text}
                className="flex items-center gap-3 border-t border-gold-soft py-3.5 text-[0.92rem]"
              >
                <Icon size={16} className="shrink-0 text-gold" />
                {text}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="glass p-6 md:p-9"
          variants={slideRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center text-teal"
              >
                <ShieldCheck size={36} className="mx-auto mb-4 text-gold" />
                <h3 className="mb-2 font-serif text-2xl">Briefing received</h3>
                <p className="text-[0.92rem] text-ink/70">
                  A counsel from the relevant bench team will respond within
                  four working hours.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={submit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="mb-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-name" className={labelClass}>
                      Full name
                    </label>
                    <input
                      id="c-name"
                      className={inputClass}
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Adv. Rohan Mehta"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="c-org" className={labelClass}>
                      Organisation
                    </label>
                    <input
                      id="c-org"
                      className={inputClass}
                      value={form.org}
                      onChange={update("org")}
                      placeholder="Meridian Capital LLP"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="c-email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    className={inputClass}
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@company.in"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="c-forum" className={labelClass}>
                    Relevant forum
                  </label>
                  <select
                    id="c-forum"
                    className={inputClass}
                    value={form.forum}
                    onChange={update("forum")}
                  >
                    <option>Bombay High Court</option>
                    <option>NCLT / NCLAT</option>
                    <option>Supreme Court of India</option>
                    <option>Arbitration</option>
                    <option>Not yet certain</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="c-brief" className={labelClass}>
                    Matter brief
                  </label>
                  <textarea
                    id="c-brief"
                    rows={4}
                    className={inputClass}
                    value={form.brief}
                    onChange={update("brief")}
                    placeholder="Outline the dispute, parties involved, and any imminent hearing dates…"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-solid w-full justify-center !border-0"
                >
                  Submit privileged briefing <ArrowRight size={17} />
                </button>
                <p className="mt-3.5 text-[0.74rem] text-ink/55">
                  Submitting does not create an advocate–client relationship
                  until engagement is confirmed.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
