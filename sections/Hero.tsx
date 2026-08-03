"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { MapPin, Mail, User } from "lucide-react";
import { profile } from "@/content/profile";
import { socials } from "@/content/socials";
import { Container } from "@/components/Container";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";
import { TechStackIcons } from "@/components/TechIcons";
import { useState, useEffect } from "react";

const roles = [
  "GenAI Engineer",
  "Full Stack AI Engineer", 
  "Full Stack Developer",
  "RAG Engineer"
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-28 pb-8">
      <Container>
        <div className="max-w-2xl mx-auto">

          {/* Avatar + Name + Role */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-5 mb-8"
          >
            <div className="relative h-14 w-14 rounded-xl overflow-hidden border border-border flex-shrink-0">
              <Image
                src="/portfolio portrait.jpeg"
                alt={profile.name}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight leading-tight">{profile.name}</h1>
              {/* Rotating role */}
              <div className="h-5 mt-1 overflow-hidden">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-muted-foreground tracking-[0.2em] uppercase"
                >
                  {roles[roleIndex]}
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Metadata: 3-column with labels */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="grid grid-cols-3 gap-6 mb-7 pb-7 border-b border-border/50"
          >
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">Location</p>
              <div className="flex items-center gap-1.5 text-sm">
                <MapPin className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
                <span>{profile.location.city}, {profile.location.country}</span>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">Email</p>
              <div className="flex items-center gap-1.5 text-sm">
                <Mail className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
                <a href={`https://mail.google.com/mail/?view=cm&to=${socials.email}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors truncate">
                  {socials.email}
                </a>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">Pronouns</p>
              <div className="flex items-center gap-1.5 text-sm">
                <User className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
                <span>he/him</span>
                <span className="relative flex h-2 w-2 ml-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="text-base text-foreground/80 leading-relaxed mb-7"
          >
            {profile.bio}
          </motion.p>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="flex items-center gap-4 mb-10"
          >
            {[
              { href: socials.x, label: "X / Twitter", icon: <TwitterIcon className="h-5 w-5" /> },
              { href: socials.github, label: "GitHub", icon: <GithubIcon className="h-5 w-5" /> },
              { href: socials.linkedin, label: "LinkedIn", icon: <LinkedinIcon className="h-5 w-5" /> },
              { href: `https://mail.google.com/mail/?view=cm&to=${socials.email}`, label: "Email", icon: <Mail className="h-5 w-5" /> },
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center h-9 w-9 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              >
                {icon}
              </a>
            ))}
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.24 }}
          >
            <h2 className="text-xl font-bold tracking-tight mb-5">Tech Stack</h2>
            <TechStackIcons skills={profile.skills} />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
