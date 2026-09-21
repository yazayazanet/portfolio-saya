"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  FolderGit2,
  GraduationCap,
  Wrench,
  Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DockItemData {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
}

const dockItems: DockItemData[] = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "Tentang", href: "#about" },
  { icon: Briefcase, label: "Pengalaman", href: "#career" },
  { icon: FolderGit2, label: "Proyek", href: "#projects" },
  { icon: GraduationCap, label: "Pendidikan", href: "#education" },
  { icon: Wrench, label: "Keahlian", href: "#skills" },
  { icon: Mail, label: "Kontak", href: "#contact" },
];

function DockIcon({
  item,
  mouseX,
  baseSize = 44,
  magnification = 62,
  distance = 120,
}: {
  item: DockItemData;
  mouseX: any;
  baseSize?: number;
  magnification?: number;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mouseDistance = useTransform(mouseX, (val: number) => {
    const rect = ref.current?.getBoundingClientRect() ?? { x: 0 };
    return val - rect.x - baseSize / 2;
  });

  const widthTransform = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseSize, magnification, baseSize]
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const Icon = item.icon;

  const handleClick = () => {
    const target = document.querySelector(item.href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      className="relative flex items-center justify-center rounded-2xl bg-zinc-100/90 dark:bg-zinc-800/90 border border-zinc-300/80 dark:border-zinc-700/80 text-foreground shadow-md hover:border-primary/50 transition-colors cursor-pointer group shrink-0"
    >
      <Icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />

      {/* Tooltip Label */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-10 px-3 py-1 rounded-xl glass-panel border border-foreground/15 text-[11px] font-bold text-foreground shadow-xl pointer-events-none whitespace-nowrap"
          >
            {item.label}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function DockBar() {
  const mouseX = useMotionValue(Infinity);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-3 px-4 py-3 rounded-[2rem] glass-panel border border-foreground/15 bg-background/80 dark:bg-zinc-900/80 shadow-2xl backdrop-blur-2xl"
      >
        {dockItems.map((item, idx) => (
          <DockIcon key={idx} item={item} mouseX={mouseX} />
        ))}
      </motion.div>
    </div>
  );
}
