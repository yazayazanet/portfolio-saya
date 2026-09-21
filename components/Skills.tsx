"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Server,
  Activity,
  Sparkles,
  Layers,
  Wrench,
  Search,
  FileCheck2,
  Settings,
  Flame,
  Truck,
  Users,
} from "lucide-react";

interface SkillBar {
  name: string;
  level: number;
  category: string;
}

const arsenal: SkillBar[] = [
  {
    name: "Autodesk Inventor & SolidWorks",
    level: 92,
    category: "3D CAD Modeling & Assembly",
  },
  {
    name: "ANSYS Fluent (CFD)",
    level: 86,
    category: "Fluid Flow & Heat Transfer",
  },
  {
    name: "CAEPIPE (Stress Analysis)",
    level: 84,
    category: "Piping Stress & Sustained Loads",
  },
  {
    name: "EPANET Hydraulic Network",
    level: 88,
    category: "Water Distribution Modeling",
  },
  {
    name: "AutoCAD 2D & Isometric Drawing",
    level: 88,
    category: "Engineering Drawings & P&ID",
  },
  {
    name: "Transesterifikasi & Biodiesel Test",
    level: 90,
    category: "Biofuel Formulation & Dyno Testing",
  },
];

const traits = [
  {
    name: "Analisis Berbasis Data Uji & Simulasi",
    icon: Activity,
    color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
  },
  {
    name: "Pemodelan Termal & Sistem Fluida",
    icon: Flame,
    color: "text-orange-400 border-orange-500/30 bg-orange-500/10",
  },
  {
    name: "Perancangan Mekanikal & Elemen Mesin",
    icon: Wrench,
    color: "text-yellow-400 border-yellow-500/30 bg-yellow-500/10",
  },
  {
    name: "Dokumentasi & Standar Gambar Isometrik",
    icon: FileCheck2,
    color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  },
  {
    name: "Manajemen Supply Chain & Logistik Proyek",
    icon: Truck,
    color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  },
  {
    name: "Kolaborasi Lintas Divisi & Lapangan",
    icon: Users,
    color: "text-rose-400 border-rose-500/30 bg-rose-500/10",
  },
];

export function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-24 sm:py-32">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
            <Cpu className="w-5 h-5" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Keahlian &amp; <span className="text-gradient-primary">Kompetensi</span>
          </h2>
        </div>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
          Penguasaan software simulasi teknik standar industri, perancangan mekanikal, dan metodologi kerja lapangan
        </p>
      </motion.div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Technical Arsenal */}
        <div className="glass-panel p-6 sm:p-8 rounded-[2rem] border border-foreground/15 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/60">
            <h4 className="text-xl font-bold text-foreground flex items-center gap-2.5">
              <Layers className="w-5 h-5 text-primary" /> Software Teknik &amp; Metodologi
            </h4>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
              Proficiency
            </span>
          </div>

          <div className="space-y-4">
            {arsenal.map((skill, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-foreground text-sm font-bold">{skill.name}</span>
                <span className="text-xs text-muted-foreground font-normal">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Professional Traits */}
        <div className="glass-panel p-6 sm:p-8 rounded-[2rem] border border-foreground/15 shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/60">
              <h4 className="text-xl font-bold text-foreground flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-primary" /> Karakter Profesional Rekayasa
              </h4>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                Engineering Mindset
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {traits.map((trait, idx) => {
                const Icon = trait.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-2xl border border-border/40 bg-card/60 hover:border-primary/40 transition-all flex items-start gap-3.5 group"
                  >
                    <div className={`p-2 rounded-xl border shrink-0 ${trait.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-foreground leading-snug">
                      {trait.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border/60">
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed italic">
              &quot;Menggabungkan ketelitian simulasi komputasi dengan kedisiplinan eksekusi di lapangan untuk menciptakan sistem energi dan mekanikal yang andal.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
