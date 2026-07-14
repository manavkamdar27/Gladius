"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

function BrandMark({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="9" width="24" height="14" stroke="#A99A78" strokeWidth="1.6" />
      <rect x="10" y="4" width="12" height="24" stroke="#245F61" strokeWidth="1.6" />
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 md:px-12 lg:px-16 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-parchment/80 backdrop-blur-xl shadow-[0_1px_0_var(--gold-soft)]"
          : "py-5"
      }`}
    >
      <a
        href="#top"
        className="flex items-center gap-2.5 font-serif font-bold text-lg tracking-wider text-teal"
      >
        <BrandMark />
        <span>
          GLADIUS<em className="not-italic text-gold ml-0.5">LAW</em>
        </span>
      </a>

      {/* Desktop links */}
      <nav className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="relative text-[0.86rem] font-medium tracking-wide text-ink after:absolute after:left-0 after:-bottom-1.5 after:h-[1.5px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
          >
            {l.label}
          </a>
        ))}
        <a href="#contact" className="btn btn-solid !px-5 !py-2.5 !text-[0.82rem]">
          Retain Counsel
        </a>
      </nav>

      {/* Mobile toggle */}
      <button
        className="md:hidden relative z-[60] text-teal"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 0.9, 0.3, 1] }}
            className="fixed inset-0 md:hidden flex flex-col items-center justify-center gap-8 bg-parchment/95 backdrop-blur-2xl"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-serif text-2xl text-teal"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn btn-solid mt-2"
            >
              Retain Counsel
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
