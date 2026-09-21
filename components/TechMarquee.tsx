"use client";

import React from "react";

interface TechItem {
  name: string;
  icon: string;
}

const techStack: TechItem[] = [
  {
    name: "SolidWorks",
    icon: "/SolidWorks-Symbol.png",
  },
  {
    name: "Autodesk Inventor",
    icon: "/inventor.png",
  },
  {
    name: "ANSYS Fluent (CFD)",
    icon: "/ansys-fluent.png",
  },
  {
    name: "CAEPIPE (Stress)",
    icon: "/caepipe.png",
  },
  {
    name: "EPANET (Hydraulics)",
    icon: "/epanet.png",
  },
  {
    name: "AutoCAD 2D",
    icon: "/autocad.png",
  },
  {
    name: "Biodiesel Testing",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
  },
  {
    name: "Git & Version Control",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
];

export function TechMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-10 border-y border-foreground/10 bg-background/50 backdrop-blur-sm select-none">
      {/* Side Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee whitespace-nowrap items-center hover:[animation-play-state:paused] py-1">
        {[...techStack, ...techStack].map((item, idx) => (
          <div
            key={idx}
            className="mx-3 px-5 py-2.5 rounded-full border border-foreground/10 bg-card/70 text-foreground font-semibold text-sm flex items-center gap-3 transition-all hover:scale-105 hover:border-primary/50 hover:bg-foreground/5 cursor-default shadow-sm group shrink-0"
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <img
                src={item.icon}
                alt={item.name}
                className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-300 dark:brightness-110"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
            </div>
            <span className="tracking-tight group-hover:text-primary transition-colors">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
