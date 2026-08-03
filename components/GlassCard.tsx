"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm",
        "transition-all duration-300",
        hover && "hover:border-border hover:bg-card/50 hover:shadow-lg hover:shadow-black/5",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
