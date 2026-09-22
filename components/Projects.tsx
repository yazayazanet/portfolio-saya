"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, CheckCircle2, Layers } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  tags: string[];
  image: string;
  gallery?: string[];
  gridClass: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Logistik staff PT Persada Engineering & Contracting - Project Smelter 150 kV Manyar",
    category: "Proyek Infrastruktur · Smelter 150 kV Manyar",
    description:
      "Mengelola alur logistik dan ketersediaan material teknis untuk mendukung pekerjaan instalasi kabel bawah tanah tegangan tinggi 150 kV di proyek Smelter Manyar, Gresik.",
    highlights: [
      "Koordinasi penerimaan, pencatatan, dan distribusi material proyek",
      "Pemantauan ketersediaan material teknis untuk kebutuhan instalasi",
      "Dukungan administrasi logistik dan dokumentasi pekerjaan lapangan",
    ],
    tags: ["Logistik Proyek", "Smelter Manyar", "150 kV", "Persada Engineering"],
    image: "/project-manyar.jpg",
    gallery: ["/project-manyar.jpg", "/project-manyar.jpg", "/project-manyar.jpg"],
    gridClass: "md:col-span-12 lg:col-span-7 h-[460px]",
  },
  {
    id: 2,
    title: "Produksi Biodiesel Jelantah & Analisis Emisi Mesin Diesel",
    category: "Tugas Akhir · Rekayasa Konversi Energi",
    description:
      "Membuat biodiesel dari minyak jelantah melalui proses transesterifikasi sebagai eksperimen produksi, serta memurnikan biodiesel komersial dengan pencucian bertingkat menggunakan aquades untuk kemudian diuji dalam variasi campuran B40, B70, dan B100 dibandingkan Pertamina Dex pada dyno test — menganalisis konsumsi BBM spesifik, efisiensi termal, daya, torsi, dan opasitas emisi gas buang.",
    highlights: [
      "Formulasi reaksi transesterifikasi minyak jelantah & pemurnian",
      "Karakterisasi campuran bahan bakar alternatif: B40, B70, dan B100 murni",
      "Pengujian konsumsi bahan bakar pada mesin diesel uji laboratorium",
      "Pengukuran kurva torsi, daya mesin, dan performa lewat dyno test",
      "Analisis perbandingan emisi gas buang dan opasitas vs Pertamina Dex",
    ],
    tags: [
      "Biodiesel",
      "Transesterifikasi",
      "Mesin Diesel",
      "Dyno Test",
      "Tugas Akhir ITS",
    ],
    image: "/project-biodiesel.jpg",
    gridClass: "md:col-span-12 lg:col-span-7 h-[460px]",
  },
  {
    id: 3,
    title: "Desain & Simulasi Jaringan Distribusi Air Bersih Multi-Lantai",
    category: "Pemodelan Sistem Perpipaan · EPANET",
    description:
      "Merancang jaringan distribusi air bersih kampus secara komprehensif. Mengintegrasikan pemetaan rute spasial Google Earth, pembuatan gambar kerja isometrik perpipaan, dan simulasi hidrolik EPANET untuk memvalidasi debit, head loss, dan tekanan dari reservoir utama ke reservoir gedung hingga sistem pompa per lantai.",
    highlights: [
      "Pemodelan hidrolik jaringan pipa menggunakan EPANET",
      "Sistem distribusi bertingkat dengan reservoir antara dan pompa booster",
      "Analisis kehilangan energi (head loss) dan pressure drop fitting",
      "Pemetaan jalur pipa di atas koordinat nyata Google Earth",
      "Penyusunan gambar teknik isometrik instalasi pipa",
    ],
    tags: [
      "EPANET",
      "Simulasi Hidrolik",
      "Piping Network",
      "Google Earth",
      "CAD Isometrik",
    ],
    image: "/project-epanet.png",
    gridClass: "md:col-span-12 lg:col-span-5 h-[460px]",
  },
  {
    id: 4,
    title: "Pemeliharaan Gearbox Conveyor Tambang & Perancangan Alat Bantu",
    category: "Magang Industri · PT Bukit Asam Tbk",
    description:
      "Melakukan observasi operasional dan analisis sistem mekanikal gearbox conveyor batubara serta analisis heat exchanger pendingin pelumas. Merancang alat bantu mekanikal drum lifter untuk efisiensi pengisian pelumas dan prototipe mobile crane bengkel mesin bubut.",
    highlights: [
      "Inspeksi & evaluasi kerusakan sistem gearbox conveyor industri batubara",
      "Analisis perpindahan panas sistem pendingin oli heat exchanger",
      "Desain 3D alat bantu pengisian oli Drum Lifter di Autodesk Inventor",
      "Perancangan prototipe Mobile Crane untuk area kerja mesin bubut",
      "Praktik manajemen perawatan preventif dan keselamatan kerja tambang",
    ],
    tags: [
      "PT Bukit Asam",
      "Autodesk Inventor",
      "Gearbox Conveyor",
      "Heat Exchanger",
      "Drum Lifter",
    ],
    image: "/project-bukitasam.jpg",
    gridClass: "md:col-span-12 h-[380px]",
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-24 sm:py-32">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16"
      >
        <span className="text-xs font-extrabold uppercase tracking-widest text-primary mb-3 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 inline-block shadow-sm">
          Portofolio
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-center md:text-left text-foreground">
          Proyek &amp; <span className="text-gradient-primary">Riset Rekayasa</span>
        </h2>
        <p className="text-muted-foreground text-center md:text-left max-w-2xl text-base sm:text-lg">
          Dokumentasi riset konversi energi, simulasi hidrolik sistem perpipaan, dan perancangan mekanikal industri.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className={`group relative overflow-hidden rounded-[2.25rem] block shadow-xl border border-foreground/15 bg-neutral-950 cursor-pointer ${project.gridClass}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Background Image with Zoom on Hover */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.75] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
            </div>

            {/* Content overlay */}
            <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end h-full">
              <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-1.5">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                {project.title}
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm line-clamp-2 max-w-xl mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 4).map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-medium text-white/90 border border-white/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel rounded-[2.5rem] border border-border p-6 sm:p-10 shadow-2xl z-10 bg-card text-card-foreground"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {(selectedProject.gallery ?? [selectedProject.image]).map((image, imageIdx) => (
                  <div key={`${image}-${imageIdx}`} className="w-full h-28 sm:h-36 rounded-2xl overflow-hidden">
                    <img
                      src={image}
                      alt={`${selectedProject.title} - foto ${imageIdx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-1">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
                {selectedProject.title}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-primary" /> Highlight Rekayasa
                </h4>
                <div className="space-y-2">
                  {selectedProject.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {selectedProject.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
