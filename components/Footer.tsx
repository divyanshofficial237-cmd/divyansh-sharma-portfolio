"use client";

import Link from "next/link";
import { GithubIcon, TwitterIcon } from "./icons";
import { Mail } from "lucide-react";
import { socials } from "@/content/socials";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-8 mt-8">
      <Container>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Divyansh Sharma.
          </p>
          <div className="flex items-center gap-4">
            <a href={socials.x} target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors" aria-label="X / Twitter">
              <TwitterIcon className="h-4 w-4" />
            </a>
            <a href={`https://mail.google.com/mail/?view=cm&to=${socials.email}`} target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
            <a href={socials.github} target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
              <GithubIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
