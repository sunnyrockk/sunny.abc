import { Card } from "@/components/ui/card"
import Image from "next/image"

export function EducationSection() {
  return (
    <section id="education">
      <div className="container max-w-5xl py-24">
        <h2 className="mb-12 text-balance text-4xl font-light tracking-tight">Education</h2>
        <Card className="border-border bg-card/50 p-8 transition-all hover:border-primary/50">
          <div className="flex items-start gap-6">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
            <Link
  href="https://srmu.ac.in/"
  target="_blank"
  className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-white"
>
  <Image
    src="/images/image.png"
    alt="SRM UNIVERSITY"
    width={64}
    height={64}
    className="h-full w-full object-contain p-1"
  />
</Link>
            </div>
            <div className="flex-1">
              <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                <h3 className="text-xl font-semibold text-foreground">SHRI RAMSWAROOP MEMORIAL UNIVERSITY</h3>
                <span className="text-sm text-muted-foreground">2024 - 2028</span>
              </div>
              <p className="mb-2 text-muted-foreground">Lucknow, Uttar Pradesh, India</p>
              <p className="mb-2 text-lg font-semibold text-primary">Bachelor of Technology</p>
              <p className="text-sm text-muted-foreground">Computer Science Engineering (B.Tech CSE)</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
