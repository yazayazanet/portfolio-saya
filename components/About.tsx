"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, FolderGit2, Cpu, Workflow } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    value: "Gunadarma",
    label: "Alma Mater",
  },
  {
    icon: FolderGit2,
    value: "3+",
    label: "Major Academic & Applied Projects",
  },
  {
    icon: Cpu,
    value: "Web + AI",
    label: "Development Focus",
  },
  {
    icon: Workflow,
    value: "End-to-End",
    label: "Build · Test · Analyze · Document",
  },
];

export function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24 sm:py-32">
      <motion.div
        className="flex flex-col md:flex-row gap-12 md:gap-16 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Column: Narrative Copy */}
        <div className="flex-1 space-y-6 text-left">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary mb-3 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 inline-block shadow-sm">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
              Building{" "}
              <span className="text-gradient-primary">Practical Software</span>{" "}
              through Development, Experimentation, and Technology
            </h2>
          </div>

          <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            <p>
              I am an Informatics graduate from Universitas Gunadarma with
              experience in software development and applied technology
              projects. My work spans web-based systems and computer vision. I
              developed a food-ordering website for Mie Ayam Mas Jo with a
              loyalty point system and worked on vehicle detection, tracking,
              and counting using YOLOv8 and Deep SORT.
            </p>
            <p>
              I am comfortable learning new tools, testing different
              approaches, analyzing results, and documenting the development
              process. I am especially interested in opportunities where
              software engineering, intelligent systems, and practical problem
              solving come together.
            </p>
          </div>
        </div>

        {/* Right Column: 2x2 Stats Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                className="glass-panel p-6 sm:p-7 rounded-[2rem] border border-foreground/10 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {/* Ambient glow in corner */}
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/25 transition-colors" />

                <div className="text-primary mb-4 p-3 bg-primary/10 border border-primary/20 w-max rounded-2xl group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-1.5 tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-sm font-medium text-muted-foreground leading-snug">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
