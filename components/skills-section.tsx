"use client";

import { useState } from "react";

export function SkillsSection() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const technologies = [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Java",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
    "Tailwind CSS",
    "Docker",
    "Git",
    "Express.js",
    "REST APIs",
    "Data Structures & Algorithms",
  ];

  return (
    <section id="skills" className="w-full py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 md:px-8 lg:px-10 space-y-8">
        <h2 className="text-balance text-4xl font-light tracking-tight sm:text-5xl">
          Technologies & Skills
        </h2>

        <div className="flex flex-wrap gap-3">
          {technologies.map((tech, index) => (
            <div
              key={tech}
              className="group relative cursor-pointer rounded-full border border-primary/20 bg-card/50 px-6 py-3 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:border-primary/40 hover:bg-card hover:shadow-lg hover:shadow-primary/20"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`,
              }}
              onMouseEnter={() => setHoveredTech(tech)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <span
                className={`text-sm font-medium transition-colors duration-300 ${
                  hoveredTech === tech ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {tech}
              </span>

              <div
                className={`absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 transition-opacity duration-300 ${
                  hoveredTech === tech ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
