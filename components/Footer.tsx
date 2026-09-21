"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const rotatingTitles = [
  "Mechanical Engineer",
  "Energy Conversion Specialist",
  "Thermal-Fluid & Piping Analyst",
  "ITS Surabaya Graduate",
];

const footerNav = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#career" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const [titleIdx, setTitleIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIdx((prev) => (prev + 1) % rotatingTitles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full max-w-7xl mx-auto px-6 pb-28 pt-8 text-center flex flex-col items-center">
      {/* Big Animated Callout Banner */}
      <div className="w-full py-16 px-6 sm:px-10 rounded-[2.5rem] bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/10 text-center flex flex-col items-center justify-center mb-12 shadow-sm relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />

        {/* Badge */}
        <span className="text-xs font-extrabold uppercase tracking-widest text-primary mb-4 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 shadow-sm">
          DESIGN · SIMULATE · BUILD · OPERATE
        </span>

        {/* Headline */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-4 tracking-tight">
          Engineering Sustainable Energy &amp; Mechanical Systems
        </h3>

        {/* Rotating Titles with Smooth Blur Crossfade */}
        <div className="relative h-14 sm:h-16 flex items-center justify-center min-w-[280px]">
          <AnimatePresence mode="wait">
            <motion.span
              key={titleIdx}
              initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-2xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent select-none tracking-tight"
            >
              {rotatingTitles[titleIdx]}
            </motion.span>
          </AnimatePresence>
        </div>

        <p className="text-sm font-semibold text-muted-foreground mt-4 tracking-widest uppercase">
          Analyze. Design. Validate. Optimize.
        </p>
      </div>

      {/* Footer Navigation & Actions */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 py-6 border-t border-border/60 text-sm">
        {/* Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground font-medium">
          {footerNav.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-muted-foreground text-xs sm:text-sm font-normal">
          © {new Date().getFullYear()} Muhammad Bama Yaza. All rights reserved.
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="px-4 py-2 rounded-full glass-panel border border-foreground/10 text-foreground text-xs font-bold hover:border-primary/40 hover:text-primary transition-all flex items-center gap-1.5 shadow-sm hover:scale-105 cursor-pointer"
        >
          <span>Kembali ke atas</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
