import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";

const freelanceProjects = [
  {
    name: "TH Technologies — The Hub",
    description: "AI-native software studio website covering web engineering, AI agents, bots, mobile apps, and backend APIs.",
    url: "https://www.thtechnologies.in/",
  },
  {
    name: "Jesse Cameraman",
    description: "Portfolio website for a professional cameraman.",
    url: "https://www.jessecameraman.com/",
  },
  {
    name: "Shot by Lude",
    description: "Photography portfolio and booking site.",
    url: "https://shot-by-lude.vercel.app/",
  },
  {
    name: "Vision Studios",
    description: "Creative studio website with a modern visual identity.",
    url: "https://vision-studios-website.vercel.app/",
  },
  {
    name: "JJ Shot",
    description: "Photography and videography showcase site.",
    url: "https://jjshot.vercel.app/",
  },
];

export default function FreelancePage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20">
        <Container>
          <div className="max-w-2xl mx-auto">

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>

            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-6">
              Freelance Work
            </p>

            <h1 className="text-3xl font-bold tracking-tight mb-2">
              Client Projects
            </h1>
            <p className="text-sm text-muted-foreground mb-12">
              Websites built for real clients — design, development, and deployment.
            </p>

            <div className="space-y-0">
              {freelanceProjects.map((project, i) => (
                <a
                  key={i}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 py-5 border-b border-border/50 last:border-0 group"
                >
                  <div>
                    <p className="text-sm font-semibold group-hover:text-primary transition-colors">
                      {project.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {project.description}
                    </p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>

          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
