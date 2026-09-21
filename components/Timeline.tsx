"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Package, Car, Wrench, Fuel, Droplets, GraduationCap } from "lucide-react";

interface Milestone {
  period: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const milestones: Milestone[] = [
  {
    period: "Jul 2023 — Agu 2023",
    title: "Logistics Staff — Proyek Smelter 150 kV Manyar",
    description:
      "Mengelola alur logistik & ketersediaan material teknis untuk fase instalasi kabel bawah tanah tegangan tinggi 150 kV di Gresik.",
    icon: Package,
  },
  {
    period: "2024",
    title: "Proyek Konversi Kendaraan Paralel Hybrid",
    description:
      "Berkontribusi merancang sistem powertrain paralel hybrid diesel Panther 1994, spesifikasi baterai lithium, inverter, dan diagram pengkabelan.",
    icon: Car,
  },
  {
    period: "Feb 2025 — Jun 2025",
    title: "Mechanical Intern — PT Bukit Asam Tbk",
    description:
      "Analisis kerusakan mekanikal gearbox conveyor tambang batubara, evaluasi heat exchanger pendingin pelumas, serta perancangan 3D Drum Lifter & Mobile Crane.",
    icon: Wrench,
  },
  {
    period: "Sep 2025 — Mei 2026",
    title: "Tugas Akhir: Produksi & Uji Biodiesel Jelantah",
    description:
      "Formulasi reaksi transesterifikasi biodiesel jelantah dan pengujian dyno test serta opasitas emisi mesin diesel untuk variasi B40, B70, dan B100.",
    icon: Fuel,
  },
  {
    period: "Apr 2026 — Mei 2026",
    title: "Desain Jaringan Distribusi Air Bersih (EPANET)",
    description:
      "Simulasi hidrolik distribusi air kampus bertingkat dengan pemodelan EPANET, analisis head loss, dan skema isometrik.",
    icon: Droplets,
  },
  {
    period: "2026",
    title: "Kelulusan D4 Teknik Mesin Industri ITS",
    description:
      "Menyelesaikan studi Sarjana Terapan Teknik konsentrasi Rekayasa Konversi Energi dengan IPK 3.41 / 4.00.",
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
          Milestone
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gradient-primary">
          Jejak Pengalaman &amp; Proyek
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
          Perjalanan akademik, magang industri pertambangan, proyek infrastruktur, dan riset rekayasa konversi energi
        </p>
      </motion.div>

      <div className="relative z-20">
        {/* Central Vertical Background Line */}
        <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-border/60" />

        {/* Dynamic Animated Filling Progress Line */}
        <motion.div
          className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-amber-500 via-orange-500 to-yellow-400 origin-top shadow-[0_0_12px_rgba(245,158,11,0.8)]"
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
                  <div className="w-6 h-6 rounded-full border-4 bg-background border-primary flex items-center justify-center shadow-[0_0_10px_rgba(245,158,11,0.6)]">
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
                      <span className="text-xs font-bold text-primary tracking-wider uppercase">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
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
