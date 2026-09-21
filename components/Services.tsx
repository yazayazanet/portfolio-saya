"use client";

import React from "react";
import { motion } from "framer-motion";
import { Waves, Cpu, Fuel } from "lucide-react";
import { MagicCard } from "./MagicCard";

const services = [
  {
    icon: Waves,
    title: "Perancangan Sistem Fluida & Perpipaan",
    description:
      "Merancang jaringan pipa distribusi, kalkulasi hidrolik, dan pemodelan jalur pipa menggunakan EPANET serta analisis tegangan pipa (stress analysis) dengan CAEPIPE.",
  },
  {
    icon: Cpu,
    title: "Simulasi Komputasi Teknik (CFD & CAD)",
    description:
      "Melakukan simulasi dinamika fluida komputasi dengan ANSYS Fluent, pemodelan mesin 3D presisi dengan Autodesk Inventor / SolidWorks, dan gambar teknik isometrik / 2D CAD.",
  },
  {
    icon: Fuel,
    title: "Riset Konversi Energi & Bahan Bakar",
    description:
      "Formulasi bahan bakar terbarukan (transesterifikasi biodiesel B40-B100), uji performa mesin diesel pada dyno test, analisis konsumsi BBM, serta konversi paralel hybrid.",
  },
];

export function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-24 sm:py-32">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <span className="text-xs font-extrabold uppercase tracking-widest text-primary mb-3 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 inline-block shadow-sm">
          Keahlian &amp; Layanan
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gradient-primary">
          Bidang Rekayasa
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Solusi rekayasa mekanikal, simulasi fluida tingkat lanjut, dan optimasi sistem konversi energi terbarukan
        </p>
      </motion.div>

      {/* Service Cards with MagicCard 3D Glare */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              viewport={{ once: true, amount: 0.1 }}
              className="h-full"
            >
              <MagicCard
                className="h-full p-8 rounded-[2rem] border border-border/80 bg-card/80 shadow-lg"
                gradientSize={280}
                gradientColor="rgba(245, 158, 11, 0.12)"
                gradientFrom="#f59e0b"
                gradientTo="#f97316"
              >
                <div className="flex flex-col h-full justify-between gap-6">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/25 text-primary flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              </MagicCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
