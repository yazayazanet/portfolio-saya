import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TechMarquee } from "@/components/TechMarquee";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Timeline } from "@/components/Timeline";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { DockBar } from "@/components/DockBar";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Top Fixed Sticky Glass Navbar */}
      <Navbar />

      {/* Hero Section with Swinging Lanyard ID Card */}
      <Hero />

      {/* Infinite Tech Marquee */}
      <TechMarquee />

      {/* About Section */}
      <About />

      {/* Services ("What I Do") */}
      <Services />

      {/* Selected Works (Bento Grid) */}
      <Projects />

      {/* Academic Background */}
      <Education />

      {/* Project Timeline */}
      <Timeline />

      {/* Expertise & Skills */}
      <Skills />

      {/* Contact Section */}
      <Contact />

      {/* Animated Callout Footer */}
      <Footer />

      {/* Floating Bottom macOS Dock Bar */}
      <DockBar />
    </main>
  );
}
