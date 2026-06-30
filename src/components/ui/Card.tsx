"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  gradient?: "violet" | "magenta" | "orange" | "coral";
  featured?: boolean;
  delay?: number;
}

const gradientStyles = {
  violet: "bg-gradient-to-br from-purple-600 to-violet-500",
  magenta: "bg-gradient-to-br from-pink-500 to-fuchsia-500",
  orange: "bg-gradient-to-br from-orange-500 to-rose-500",
  coral: "bg-gradient-to-br from-rose-400 to-pink-500",
};

export default function Card({
  children,
  className = "",
  gradient,
  featured = false,
  delay = 0,
}: CardProps) {
  const base = gradient
    ? gradientStyles[gradient]
    : featured
      ? "bg-zinc-100 dark:bg-zinc-800"
      : "bg-white dark:bg-zinc-900/80";

  const border = gradient ? "" : "border border-zinc-200 dark:border-zinc-800";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className={`rounded-2xl p-6 ${base} ${border} ${className}`}
    >
      {children}
    </motion.div>
  );
}
