"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { profile } from "@/content/profile";
import { Container } from "@/components/Container";
import { TechIcon } from "@/components/TechIcons";

export function About() {
  const categories = ["All", ...Object.keys(profile.skills)];
  const [active, setActive] = useState("All");

  const visibleSkills =
    active === "All"
      ? Object.values(profile.skills).flat()
      : profile.skills[active as keyof typeof profile.skills] ?? [];

  return (
    <section id="about" className="py-20">
      <Container>
        <div className="max-w-2xl mx-auto space-y-16">

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-xl font-bold tracking-tight mb-8">Experience</h2>
            <div className="space-y-10">
              {profile.experience.map((exp, i) => (
                <div key={i}>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <p className="font-semibold text-base">{exp.title}</p>
                      <p className="text-sm text-muted-foreground">· {exp.company}</p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap flex-shrink-0 mt-1">{exp.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{exp.description}</p>
                  {exp.bullets && (
                    <ul className="space-y-1.5 mb-4">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-2 h-1 w-1 rounded-full bg-muted-foreground flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {exp.techIcons && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.techIcons.map((tech) => (
                        <TechIcon key={tech} name={tech} size={22} />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="border-t border-border/50" />

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-xl font-bold tracking-tight mb-8">Education</h2>
            <div className="space-y-5">
              {profile.education.map((edu, i) => (
                <div key={i} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-base">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap flex-shrink-0 mt-1">{edu.period}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="border-t border-border/50" />

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-xl font-bold tracking-tight mb-6">Skills</h2>

            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                    active === cat
                      ? "bg-foreground text-background border-foreground"
                      : "border-border/60 text-muted-foreground hover:text-foreground hover:border-foreground/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Pills grid */}
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              {visibleSkills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 rounded-lg border border-border/60 bg-muted/30 px-3 py-2 text-xs font-medium"
                >
                  <TechIcon name={skill} size={16} />
                  <span>{skill}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
