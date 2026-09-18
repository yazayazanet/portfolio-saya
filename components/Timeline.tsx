"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Utensils, Car, GraduationCap, Calendar } from "lucide-react";

interface Milestone {
  period: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const milestones: Milestone[] = [
  {
    period: "Academic Study",
    title: "Mie Ayam Mas Jo Food Ordering Website",
    description:
      "Developed a web-based food ordering application with a customer loyalty point system as a scientific writing project.",
    icon: Utensils,
  },
  {
    period: "Applied Project",
    title: "Vehicle Detection, Tracking & Counting",
    description:
      "Built a YOLOv8 and Deep SORT computer vision pipeline for detecting, tracking, and counting vehicles from video.",
    icon: Car,
  },
  {
    period: "2026",
    title: "Bachelor Completion",
    description:
      "Completed the Informatics undergraduate program at Universitas Gunadarma and earned the Sarjana Komputer (S.Kom.) degree.",
    icon: GraduationCap,
  },
];

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 70%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="career"
      ref={containerRef}
      className="max-w-7xl mx-auto px-6 py-24 sm:py-32 relative"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-20 text-center"
      >
        <span className="text-xs font-extrabold uppercase tracking-widest text-primary mb-3 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 inline-block shadow-sm">
          Milestones
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gradient-primary">
          Project Timeline
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
          Selected milestones from academic study, software development, and
          computer vision projects
        </p>
      </motion.div>

      <div className="relative z-20">
        {/* Central Vertical Background Line */}
        <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-border/60" />

        {/* Dynamic Animated Filling Progress Line */}
        <motion.div
          className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-purple-500 to-sky-400 origin-top shadow-[0_0_12px_rgba(139,92,246,0.8)]"
          style={{ scaleY }}
        />

        {/* Milestone Cards */}
        <div className="space-y-16 lg:space-y-20">
          {milestones.map((item, idx) => {
            const Icon = item.icon;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`relative flex items-center flex-col lg:flex-row ${
                  isEven ? "lg:justify-start" : "lg:flex-row-reverse lg:justify-start"
                }`}
              >
                {/* Center Node Indicator */}
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 top-8 lg:top-1/2 lg:-translate-y-1/2 z-30">
                  <div className="w-6 h-6 rounded-full border-4 bg-background border-primary flex items-center justify-center shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </div>
                </div>

                {/* Timeline Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`pl-14 lg:pl-0 w-full lg:w-[calc(50%-40px)] ${
                    isEven ? "lg:mr-[calc(50%+20px)]" : "lg:ml-[calc(50%+20px)]"
                  }`}
                >
                  <div className="glass-panel p-6 sm:p-8 rounded-[2rem] border border-border/80 hover:border-primary/40 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 group">
                    <div className="flex items-center mb-3">
                      <div className="p-2 rounded-xl bg-primary/10 text-primary mr-3 border border-primary/20 group-hover:scale-110 transition-transform">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
