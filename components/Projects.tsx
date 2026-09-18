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
  gridClass: string;
}

const projects: Project[] = [
  {
    id: 1,
    title:
      "Aplikasi Pemesanan Makanan Website & Sistem Loyalitas Mie Ayam Mas Jo",
    category: "Scientific Writing Project · Web Development",
    description:
      "Developed a web-based food ordering application for Mie Ayam Mas Jo as a scientific writing project. The system was designed to make the ordering process more accessible while introducing a loyalty point mechanism that rewards repeat customers. The project covered requirement analysis, interface and feature development, system implementation, testing, and technical documentation as part of the academic development process.",
    highlights: [
      "Web-based food ordering workflow",
      "Customer loyalty point system",
      "Practical implementation for a real food business case",
      "System testing and academic documentation",
      "Focus on usability and an accessible customer experience",
    ],
    tags: [
      "Web Development",
      "Food Ordering System",
      "Loyalty Points",
      "Academic Project",
    ],
    image: "/project-food.jpg",
    gridClass: "md:col-span-12 lg:col-span-7 h-[460px]",
  },
  {
    id: 2,
    title: "Automated Vehicle Detection, Tracking & Counting System",
    category: "Computer Vision & Deep Learning",
    description:
      "Developed and tested a computer vision pipeline for detecting, tracking, and counting vehicles from video footage. YOLOv8 was used for object detection, while Deep SORT maintained object identities across frames. Directional line-crossing logic was then applied to count vehicle movement while reducing duplicate counts.",
    highlights: [
      "Vehicle detection using YOLOv8",
      "Multi-object tracking with Deep SORT",
      "OpenCV-based video processing",
      "Directional line-crossing and counting logic",
      "Model testing using recorded traffic footage",
    ],
    tags: [
      "Python",
      "YOLOv8",
      "Deep SORT",
      "OpenCV",
      "Computer Vision",
    ],
    image: "/project-cv.jpg",
    gridClass: "md:col-span-12 lg:col-span-5 h-[460px]",
  },
  {
    id: 3,
    title: "Modern Frontend & Containerization Practice",
    category: "Frontend Engineering & DevOps",
    description:
      "Explored modern frontend development using React and TypeScript while practicing structured source-control workflows and container-based development concepts. This work strengthened my understanding of reusable UI components, type-safe development, Git workflows, and deployment-oriented engineering practices.",
    highlights: [
      "Modular, type-safe UI component architecture",
      "Strict Git branching and version-control workflows",
      "Docker containerization for reproducible environments",
      "Basic Kubernetes orchestration and service configurations",
      "Continuous integration concepts and automated linting",
    ],
    tags: ["React", "TypeScript", "Git", "Docker", "Kubernetes"],
    image: "/project-frontend.jpg",
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
          Portfolio
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-center md:text-left text-foreground">
          Selected <span className="text-gradient-primary">Works</span>
        </h2>
        <p className="text-muted-foreground text-center md:text-left max-w-2xl text-base sm:text-lg">
          A showcase of practical web systems, computer vision pipelines, and
          applied software engineering projects.
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
            {/* Background Image / Visual Mockup */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:24px_24px]" />
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80 transform-gpu"
                onError={(e) => {
                  // If image file is not on disk yet, hide image so stylized gradient is shown
                  (e.target as HTMLElement).style.opacity = "0.2";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end pointer-events-none">
              <div className="flex items-end justify-between gap-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 transform-gpu">
                <div className="z-10 max-w-xl">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 inline-block">
                    {project.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight drop-shadow-md">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 line-clamp-2 mb-4 font-normal">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md text-white/90 text-xs font-semibold border border-white/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Details Icon Button */}
                <div className="w-12 h-12 rounded-full bg-primary/80 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="glass-panel w-full max-w-3xl rounded-[2.5rem] border border-foreground/20 p-6 sm:p-10 shadow-2xl overflow-hidden relative max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full glass-panel hover:bg-primary/20 text-foreground transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 inline-block">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-4 tracking-tight">
                {selectedProject.title}
              </h3>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Key Highlights */}
              <div className="mb-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-primary" /> Key Highlights &amp; Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-muted/40 border border-border/60"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-foreground">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/60">
                {selectedProject.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/25"
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
