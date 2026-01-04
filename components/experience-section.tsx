import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      period: "2024 — Present",
      title: "Full Stack Developer",
      company: "Freelance",
      description:
        "Build and maintain critical components used to construct TechCorp's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
      technologies: ["TypeScript", "React", "Next.js", "PostgreSQL"],
      link: "#",
    },
    {
      period: "2022 — 2024",
      title: "Full Stack Developer",
      company: "StartupHub",
      description:
        "Developed and shipped highly interactive web applications for various clients. Collaborated with designers and backend engineers to deliver pixel-perfect, performant user experiences.",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      period: "2020 — 2022",
      title: "Frontend Developer",
      company: "Digital Agency",
      description:
        "Built and maintained client websites and web applications. Implemented responsive designs and ensured cross-browser compatibility.",
      technologies: ["JavaScript", "Vue.js", "SASS", "WordPress"],
      link: "#",
    },
  ];

  return (
    <section id="experience" className="w-full py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 md:px-8 lg:px-10">
        <h2 className="mb-12 text-balance text-4xl font-light tracking-tight sm:text-5xl">
          Experience
        </h2>

        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border bg-card/50 p-8 transition-all duration-300 hover:bg-card hover:scale-[1.01] hover:shadow-xl cursor-pointer active:scale-[0.99]"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-2">{exp.period}</div>
                    <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                      {exp.title} · {exp.company}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </div>

                <p className="text-pretty leading-relaxed text-muted-foreground">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-primary/10 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
