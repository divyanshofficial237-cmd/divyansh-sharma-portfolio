"use client";

import { motion } from "motion/react";
import { profile } from "@/content/profile";
import { Container } from "@/components/Container";
import { TechIcon } from "@/components/TechIcons";

export function About() {
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
                  {/* Tech icons per experience */}
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
            <h2 className="text-xl font-bold tracking-tight mb-8">Skills</h2>
            <div className="space-y-4">
              {Object.entries(profile.skills).map(([category, items]) => (
                <div key={category} className="flex gap-6">
                  <span className="text-xs text-muted-foreground w-20 flex-shrink-0 pt-1.5 capitalize">{category}</span>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span key={skill} className="rounded-md border border-border/60 bg-muted/30 px-2.5 py-1 text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
