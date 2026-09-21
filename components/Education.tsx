"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle2, MapPin } from "lucide-react";
import { MagicCard } from "./MagicCard";

const focusAreas = [
  "Termodinamika Teknik & Perpindahan Panas",
  "Mekanika Fluida & Sistem Perpipaan",
  "Motor Pembakaran Dalam & Turbocharger",
  "Energi Baru & Terbarukan (Biofuel, Hybrid)",
  "Perancangan Mekanikal & Elemen Mesin",
  "Simulasi CFD (ANSYS Fluent) & CAEPIPE",
];

export function Education() {
  return (
    <section id="education" className="max-w-7xl mx-auto px-6 py-24 sm:py-32">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shadow-md">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Latar Belakang <span className="text-gradient-primary">Akademik</span>
          </h2>
        </div>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
          Fondasi akademik dalam Teknik Mesin Industri dengan spesialisasi Rekayasa Konversi Energi
        </p>
      </motion.div>

      {/* Main Degree Card wrapped in MagicCard */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <MagicCard
          className="p-8 md:p-10 rounded-[2.25rem] border border-border/80 bg-card/80 shadow-xl"
          gradientSize={400}
          gradientColor="rgba(245, 158, 11, 0.12)"
          gradientFrom="#f59e0b"
          gradientTo="#f97316"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 lg:gap-12">
            {/* Left Column: Degree & Institution Meta */}
            <div className="flex flex-col gap-6 lg:border-r lg:border-border/60 lg:pr-10">
              <div className="flex items-start justify-between gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/25 text-primary flex items-center justify-center shadow-sm">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <span className="px-3.5 py-1.5 rounded-full border text-xs font-extrabold flex items-center gap-1.5 shadow-sm text-amber-400 bg-amber-500/10 border-amber-500/30">
                  <Award className="w-3.5 h-3.5" />
                  IPK 3.41 / 4.00
                </span>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight mb-2">
                  Sarjana Terapan Teknik (S.Tr.T.)
                </h3>
                <p className="text-primary font-bold text-base mb-4">
                  D4 Teknik Mesin Industri — Rekayasa Konversi Energi
                </p>

                <div className="flex flex-col gap-2.5 text-xs sm:text-sm font-semibold text-muted-foreground">
                  <span className="flex items-center gap-2 text-foreground font-bold">
                    <MapPin className="w-4 h-4 text-primary" />
                    Institut Teknologi Sepuluh Nopember (ITS)
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Kelulusan: 2026
                  </span>
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    Fokus: Termal-Fluida, Sistem Pipa &amp; Biofuel
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Focus Areas & Key Competencies */}
            <div className="flex flex-col justify-center">
              <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">
                Kompetensi Inti &amp; Bidang Fokus Rekayasa
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {focusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-muted/30 border border-border/40 hover:border-primary/30 transition-colors"
                  >
                    <div className="p-1 rounded-lg bg-primary/10 text-primary mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-foreground leading-snug">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MagicCard>
      </motion.div>
    </section>
  );
}
