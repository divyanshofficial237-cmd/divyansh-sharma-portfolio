"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import { GlassCard } from "./GlassCard";
import type { Project } from "@/content/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/projects/${project.slug}`}>
        <GlassCard className="group h-full p-8">
          {/* Project Image Placeholder */}
          <div className="relative mb-6 aspect-video overflow-hidden rounded-xl bg-muted">
            <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
              {project.screenshot}
            </div>
          </div>

          {/* Year & Status Badge */}
          <div className="mb-4 flex items-center gap-3">
            <span className="text-sm text-muted-foreground">{project.year}</span>
            <span className={`rounded-full px-3 py-1 text-xs font-medium ${
              project.status === "live" 
                ? "bg-green-500/10 text-green-600 dark:text-green-400"
                : project.status === "in-development"
                ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                : "bg-muted text-muted-foreground"
            }`}>
              {project.status === "live" ? "Live" : project.status === "in-development" ? "In Development" : "Completed"}
            </span>
          </div>

          {/* Title & Description */}
          <h3 className="mb-3 text-2xl font-semibold tracking-tight transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          <p className="mb-6 text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mb-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-muted/50 px-3 py-1 text-xs font-medium text-foreground/80"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-4 w-4" />
              Code
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </div>
        </GlassCard>
      </Link>
    </motion.div>
  );
}
