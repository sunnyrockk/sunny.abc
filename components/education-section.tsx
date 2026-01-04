import { Card } from "@/components/ui/card";
import Image from "next/image";

export function EducationSection() {
  return (
    <section id="education" className="w-full py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 md:px-8 lg:px-10">
        <h2 className="mb-12 text-balance text-4xl font-light tracking-tight sm:text-5xl">
          Education
        </h2>

        <a
          href="https://www.srmu.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Card className="group border-border bg-card/50 p-8 transition-all hover:border-primary/50 hover:scale-[1.02] hover:shadow-xl cursor-pointer">
            <div className="flex flex-col gap-6 md:flex-row items-start">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-white transition-all group-hover:scale-105">
                <Image
                  src="/images/image.png"
                  alt="SRMU Logo"
                  width={64}
                  height={64}
                  className="h-full w-full object-contain p-1"
                />
              </div>

              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                  <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary relative inline-block">
                    SHRI RAMSWAROOP MEMORIAL UNIVERSITY
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all group-hover:w-full"></span>
                  </h3>
                  <span className="text-sm text-muted-foreground">2024 – 2028</span>
                </div>

                <p className="mb-2 text-muted-foreground">
                  Lucknow, Uttar Pradesh, India
                </p>
                <p className="mb-2 text-lg font-semibold text-primary">
                  Bachelor of Technology
                </p>
                <p className="text-sm text-muted-foreground">
                  Computer Science Engineering (B.Tech CSE)
                </p>
              </div>
            </div>
          </Card>
        </a>
      </div>
    </section>
  );
}
