"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { TechIcon } from "@/components/TechIcons";
import { projects } from "@/content/projects";
import { Container } from "@/components/Container";

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <Container>
        <div className="max-w-2xl mx-auto">

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-6"
          >
            Featured Projects
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Link href={`/projects/${project.slug}`} className="group block">
                  {/* Screenshot */}
                  <div className="relative w-full overflow-hidden rounded-xl border border-border/50 bg-muted mb-4">
                    {project.screenshot ? (
                      <Image
                        src={project.screenshot}
                        alt={project.title}
                        width={800}
                        height={450}
                        className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    ) : (
                      /* Placeholder with subtle gradient */
                      <div className="aspect-[16/9] flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                        <span className="text-2xl font-bold text-muted-foreground/20 tracking-tight">
                          {project.title}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Title + external links */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </span>
                    <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                      {project.githubUrl && (
                        <button
                          type="button"
                          onClick={() => window.open(project.githubUrl, "_blank", "noopener,noreferrer")}
                          className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                          aria-label="GitHub repository"
                        >
                          <GithubIcon className="h-4 w-4" />
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => window.open(project.liveUrl, "_blank", "noopener,noreferrer")}
                        className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                        aria-label="Live site"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {project.description}
                  </p>

                  {/* Award badge */}
                  {project.slug === "fraudlens" && (
                    <p className="text-xs text-amber-500 dark:text-amber-400 font-medium mb-4 flex items-center gap-1">
                      🏆 Hackathon winning
                    </p>
                  )}

                  {/* Tech stack icons */}
                  <div className="flex flex-wrap items-center gap-2">
                    {project.tags.slice(0, 6).map((tag) => (
                      <TechIcon key={tag} name={tag} size={22} />
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Freelance CTA */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-8 pt-8 border-t border-border/50"
          >
            <Link
              href="/freelance"
              className="flex items-center justify-between group"
            >
              <div>
                <p className="text-sm font-semibold group-hover:text-primary transition-colors">Freelance Projects</p>
                <p className="text-xs text-muted-foreground mt-0.5">Client websites built and shipped</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all flex-shrink-0" />
            </Link>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
