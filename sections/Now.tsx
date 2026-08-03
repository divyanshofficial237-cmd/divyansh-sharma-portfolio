"use client";

import { motion } from "motion/react";
import { profile } from "@/content/profile";
import { Container } from "@/components/Container";

export function Now() {
  const items = [
    { label: "Building", value: profile.now.building },
    { label: "Learning", value: profile.now.learning },
    { label: "Reading", value: profile.now.reading, url: profile.now.readingUrl },
    { label: "Goal", value: profile.now.goal },
  ];

  return (
    <section id="now" className="py-20">
      <Container>
        <div className="max-w-2xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold tracking-tight mb-2"
          >
            Now
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-sm text-muted-foreground mb-10"
          >
            What I'm focused on at this moment in time.
          </motion.p>

          <div className="space-y-0">
            {items.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="flex gap-6 py-5 border-b border-border/50 last:border-0"
              >
                <span className="text-xs text-muted-foreground w-20 flex-shrink-0 pt-0.5 uppercase tracking-wide">
                  {item.label}
                </span>
                <p className="text-sm text-foreground leading-relaxed flex-1">
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary underline underline-offset-4 decoration-border transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </p>
              </motion.div>
            ))}

            {/* Exploring */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="flex gap-6 py-5"
            >
              <span className="text-xs text-muted-foreground w-20 flex-shrink-0 pt-0.5 uppercase tracking-wide">
                Exploring
              </span>
              <div className="flex flex-wrap gap-2">
                {profile.now.exploring.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border/60 bg-muted/40 px-2.5 py-1 text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-xs text-muted-foreground mt-6"
          >
            Last updated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </motion.p>

        </div>
      </Container>
    </section>
  );
}
