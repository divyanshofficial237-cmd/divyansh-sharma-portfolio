import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/content/projects";
import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GlassCard } from "@/components/GlassCard";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <Container>
          {/* Back Button */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          {/* Header */}
          <div className="mb-16 space-y-6">
            <div className="flex items-center gap-3">
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

            <h1 className="text-5xl font-bold tracking-tight lg:text-6xl">
              {project.title}
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl">
              {project.longDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                <ExternalLink className="h-4 w-4" />
                Visit Website
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mb-16 overflow-hidden rounded-2xl border border-border/50 bg-muted">
            {project.screenshot ? (
              <Image
                src={project.screenshot}
                alt={project.title}
                width={1200}
                height={675}
                className="w-full h-auto object-contain"
                priority
              />
            ) : (
              <div className="aspect-video flex items-center justify-center text-muted-foreground">
                {project.title}
              </div>
            )}
          </div>

          <div className="grid gap-16 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Overview */}
              <section>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Overview</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>{project.longDescription}</p>
                </div>
              </section>

              {/* Problem */}
              {project.problem && (
                <section>
                  <h2 className="text-3xl font-bold tracking-tight mb-6">Problem</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.problem}
                  </p>
                </section>
              )}

              {/* Solution */}
              {project.solution && (
                <section>
                  <h2 className="text-3xl font-bold tracking-tight mb-6">Solution</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </section>
              )}

              {/* Features */}
              <section>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Key Features</h2>
                <div className="space-y-4">
                  {project.features.map((feature, index) => (
                    <GlassCard key={index} className="p-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {feature}
                      </p>
                    </GlassCard>
                  ))}
                </div>
              </section>

              {/* Architecture */}
              {project.architecture && (
                <section>
                  <h2 className="text-3xl font-bold tracking-tight mb-6">Architecture</h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {project.architecture.map((item, index) => (
                      <GlassCard key={index} className="p-4">
                        <p className="text-sm font-medium">{item}</p>
                      </GlassCard>
                    ))}
                  </div>
                </section>
              )}

              {/* Challenges */}
              {project.challenges && (
                <section>
                  <h2 className="text-3xl font-bold tracking-tight mb-6">Challenges</h2>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Lessons */}
              {project.lessons && (
                <section>
                  <h2 className="text-3xl font-bold tracking-tight mb-6">Lessons Learned</h2>
                  <ul className="space-y-3">
                    {project.lessons.map((lesson, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <section>
                  <h2 className="text-3xl font-bold tracking-tight mb-6">Gallery</h2>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {project.gallery.map((image, index) => (
                      <div
                        key={index}
                        className="aspect-video overflow-hidden rounded-xl bg-muted"
                      >
                        <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                          {image}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <GlassCard className="p-6 space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Role</h3>
                  <p className="font-medium">{project.role}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Year</h3>
                  <p className="font-medium">{project.year}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Status</h3>
                  <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                    project.status === "live" 
                      ? "bg-green-500/10 text-green-600 dark:text-green-400"
                      : project.status === "in-development"
                      ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {project.status === "live" ? "Live" : project.status === "in-development" ? "In Development" : "Completed"}
                  </span>
                </div>
              </GlassCard>

              {/* Tech Stack */}
              <GlassCard className="p-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-muted/50 px-3 py-1.5 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>

              {/* Links */}
              <GlassCard className="p-6 space-y-3">
                <h3 className="text-sm font-medium text-muted-foreground mb-4">Links</h3>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </GlassCard>
            </div>
          </div>

          {/* Related Projects */}
          <section className="mt-24">
            <h2 className="text-3xl font-bold tracking-tight mb-8">More Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((p) => p.slug !== slug)
                .slice(0, 3)
                .map((relatedProject) => (
                  <Link
                    key={relatedProject.slug}
                    href={`/projects/${relatedProject.slug}`}
                  >
                    <GlassCard className="h-full p-6 space-y-4">
                      <div className="overflow-hidden rounded-lg border border-border/50 bg-muted">
                        {relatedProject.screenshot ? (
                          <Image
                            src={relatedProject.screenshot}
                            alt={relatedProject.title}
                            width={600}
                            height={338}
                            className="w-full h-auto object-contain"
                          />
                        ) : (
                          <div className="aspect-video flex items-center justify-center text-xs text-muted-foreground">
                            {relatedProject.title}
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{relatedProject.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedProject.description}
                        </p>
                      </div>
                    </GlassCard>
                  </Link>
                ))}
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
