"use client";

import { motion } from "motion/react";
import { journey } from "@/content/journey";
import { Container } from "@/components/Container";

export function Journey() {
  return (
    <section id="journey" className="py-20">
      <Container>
        <div className="max-w-2xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold tracking-tight mb-2"
          >
            Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-sm text-muted-foreground mb-10"
          >
            The milestones that shaped my path as a developer.
          </motion.p>

          <div className="space-y-0">
            {journey.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="flex gap-6 py-5 border-b border-border/50 last:border-0"
              >
                {/* Date */}
                <span className="text-xs text-muted-foreground w-20 flex-shrink-0 pt-0.5">
                  {item.date}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-sm font-medium mb-1">{item.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
