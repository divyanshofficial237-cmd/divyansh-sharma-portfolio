"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2, Mail, MessageSquare, CalendarDays } from "lucide-react";
import { LinkedinIcon, TwitterIcon } from "@/components/icons";
import { socials } from "@/content/socials";
import { Container } from "@/components/Container";

const CAL_URL = "https://cal.com/divyansh-izzc4h/schedule-a-free-call";

export function Contact() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });
      if (response.ok) {
        setFormState("success");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setFormState("idle"), 5000);
      } else {
        setFormState("error");
        setTimeout(() => setFormState("idle"), 3000);
      }
    } catch {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-20">
      <Container>
        <div className="max-w-2xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xl font-bold tracking-tight mb-2"
          >
            Let&apos;s Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-sm text-muted-foreground mb-8"
          >
            Choose your preferred method to connect and let&apos;s discuss your project.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Left: Contact options */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-3"
            >
              <a
                href={`https://mail.google.com/mail/?view=cm&to=${socials.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl border border-border hover:border-foreground/20 hover:bg-muted/30 transition-all group"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted flex-shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">{socials.email}</p>
                  <p className="text-xs text-muted-foreground">Quick inquiries &amp; questions</p>
                </div>
              </a>

              <a
                href={socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl border border-border hover:border-foreground/20 hover:bg-muted/30 transition-all group"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted flex-shrink-0">
                  <TwitterIcon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">Connect on X</p>
                  <p className="text-xs text-muted-foreground">Follow for updates &amp; insights</p>
                </div>
              </a>

              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl border border-border hover:border-foreground/20 hover:bg-muted/30 transition-all group"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted flex-shrink-0">
                  <LinkedinIcon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">Connect on LinkedIn</p>
                  <p className="text-xs text-muted-foreground">Professional network &amp; opportunities</p>
                </div>
              </a>

              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl border border-border hover:border-foreground/20 hover:bg-muted/30 transition-all group"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted flex-shrink-0">
                  <CalendarDays className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">Book a 30-min Call</p>
                  <p className="text-xs text-muted-foreground">Free discovery call via cal.com</p>
                </div>
              </a>

              {/* Badges */}
              <div className="flex flex-col gap-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                  Replies within 24 hours
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MessageSquare className="h-3.5 w-3.5" />
                  Open to remote, freelance &amp; full-time
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <p className="text-sm font-medium mb-4">Send a Message</p>
              <p className="text-xs text-muted-foreground mb-5">Prefer to write? Fill out the form and I&apos;ll get back to you within 24 hours.</p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text" name="name" required placeholder="Your name"
                  disabled={formState === "loading"}
                  className="w-full rounded-lg border border-border bg-transparent px-3 py-2.5 text-sm placeholder:text-muted-foreground/50 focus:border-foreground/30 focus:outline-none transition-colors"
                />
                <input
                  type="email" name="email" required placeholder="your@email.com"
                  disabled={formState === "loading"}
                  className="w-full rounded-lg border border-border bg-transparent px-3 py-2.5 text-sm placeholder:text-muted-foreground/50 focus:border-foreground/30 focus:outline-none transition-colors"
                />
                <textarea
                  name="message" required rows={4} placeholder="Tell me about your project..."
                  disabled={formState === "loading"}
                  className="w-full rounded-lg border border-border bg-transparent px-3 py-2.5 text-sm placeholder:text-muted-foreground/50 focus:border-foreground/30 focus:outline-none transition-colors resize-none"
                />
                <button
                  type="submit"
                  disabled={formState === "loading" || formState === "success"}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === "loading" && "Sending..."}
                  {formState === "success" && <><CheckCircle2 className="h-4 w-4" /> Message Sent!</>}
                  {formState === "error" && "Failed — try again?"}
                  {formState === "idle" && <>Send Message <Send className="h-4 w-4" /></>}
                </button>
              </form>
            </motion.div>

          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <p className="text-sm text-muted-foreground italic">
              &ldquo;The secret of getting ahead is getting started.&rdquo;
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1">— Mark Twain</p>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
