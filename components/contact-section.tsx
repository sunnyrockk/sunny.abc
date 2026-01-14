"use client";

import { Button } from "@/components/ui/button";
import { FileText, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full bg-foreground px-4 py-1.5 text-sm text-background">
            Contact
          </div>
          <h2 className="mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-4xl sm:text-5xl font-bold tracking-tight text-transparent">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-base sm:text-lg leading-relaxed text-muted-foreground">
            Want to chat? Feel free to reach out via email or connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/sunny-mall-5aa4a8314/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
            . I&apos;m always open to discussing new projects and opportunities!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            className="bg-foreground px-8 text-background transition-all hover:scale-105 hover:bg-foreground/90 active:scale-95"
            onClick={() => window.open("mailto:sunnypratap859@gmail.com", "_blank")}
          >
            Contact Me
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 bg-transparent px-8 transition-all hover:scale-105 active:scale-95"
           onClick={() =>
  window.open("https://raw.githubusercontent.com/sunnyrockk/Resume/main/Sunny%20mall%20resume.pdf", "_blank")
}

          >
            <FileText className="h-4 w-4" />
            View Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
