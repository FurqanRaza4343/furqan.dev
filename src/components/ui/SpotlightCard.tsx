"use client";

import { useRef, useState, ReactNode, useCallback } from "react";
import { motion } from "framer-motion";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  gradient?: "violet" | "magenta" | "orange" | "coral";
  featured?: boolean;
  delay?: number;
  disableHover?: boolean;
}

const gradientStyles = {
  violet: "bg-gradient-to-br from-purple-600 to-violet-500",
  magenta: "bg-gradient-to-br from-pink-500 to-fuchsia-500",
  orange: "bg-gradient-to-br from-orange-500 to-rose-500",
  coral: "bg-gradient-to-br from-rose-400 to-pink-500",
};

const spotlightColors = {
  violet: "radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(139, 92, 246, 0.2), transparent 60%)",
  magenta: "radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(217, 70, 239, 0.2), transparent 60%)",
  orange: "radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(249, 115, 22, 0.2), transparent 60%)",
  coral: "radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(251, 113, 133, 0.2), transparent 60%)",
};

export default function SpotlightCard({
  children,
  className = "",
  gradient,
  featured = false,
  delay = 0,
  disableHover = false,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  }, []);

  const base = gradient
    ? gradientStyles[gradient]
    : featured
      ? "bg-zinc-100 dark:bg-zinc-800"
      : "bg-white dark:bg-zinc-900/80";

  const border = gradient ? "" : "border border-zinc-200 dark:border-zinc-800";
  const spot = gradient ? spotlightColors[gradient] : spotlightColors.violet;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={disableHover ? undefined : { y: -4 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          const el = cardRef.current;
          if (el) {
            el.style.setProperty("--mx", "50%");
            el.style.setProperty("--my", "50%");
          }
        }}
        className={`group relative cursor-default overflow-hidden rounded-2xl p-6 ${base} ${border} ${className}`}
      >
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-500"
          style={{
            opacity: isHovered ? 1 : 0,
            background: spot,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500"
          style={{
            opacity: isHovered ? 1 : 0,
            background: "radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.06), transparent 50%)",
          }}
        />
        <div className="relative z-10">{children}</div>
      </div>
    </motion.div>
  );
}
