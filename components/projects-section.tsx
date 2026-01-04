import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/ui/MagneticButton";
import HoverPreview from "@/components/ui/HoverPreview";

export function ProjectsSection() {
  const projects = [
    {
      title: "Life-Biotech",
      year: "2025",
      description:
        "A full-stack website built for a pharmaceutical manufacturing brand with secure authentication.",
      image: "/modern-ecommerce-dashboard.png",
      video: "/preview.mp4", // optional
      technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
      github: "#",
      live: "https://lifebiotech.in",
    },
    {
      title: "Quite-Connect",
      year: "2025",
      description:
        "Anonymous safe space for students and employees to express feelings and reduce stress.",
      image: "/task-management-dashboard.png",
      technologies: ["JavaScript", "Tailwind CSS", "HTML"],
      github: "#",
      live: "#",
    },
    {
      title: "Weather Forecast Dashboard",
      year: "2025",
      description:
        "Weather dashboard with forecasts, maps, and historical data visualization.",
      image: "/weather-forecast-app.png",
      technologies: ["Vue.js", "OpenWeather API", "Chart.js"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="w-full py-16">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-4 text-4xl font-light">Projects</h2>
        <p className="mb-12 text-muted-foreground">
          Selected projects showcasing modern UI, performance, and interaction.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <Card
              key={i}
              className="glass-card group overflow-hidden transition-all hover:shadow-xl hover:shadow-primary/10"
            >
              {/* 🎥 HOVER VIDEO PREVIEW */}
              <HoverPreview
                image={project.image}
                video={project.video}
                title={project.title}
              />

              <div className="flex flex-col space-y-3 p-5">
                <div>
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {project.year}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} className="rounded-full text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  {/* 🧲 MAGNETIC BUTTONS */}
                  <MagneticButton className="flex-1">
                    <Button
                      size="sm"
                      className="w-full rounded-full"
                      asChild
                      disabled={project.live === "#"}
                    >
                      <a href={project.live} target="_blank">
                        <Globe className="mr-2 h-4 w-4" />
                        View Website
                      </a>
                    </Button>
                  </MagneticButton>

                  <MagneticButton className="flex-1">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full rounded-full"
                      asChild
                    >
                      <a href={project.github} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Source
                      </a>
                    </Button>
                  </MagneticButton>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
