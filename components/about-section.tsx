export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-16 md:py-20"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="space-y-6">
          <h2 className="text-balance text-3xl font-light tracking-tight sm:text-4xl">
            About
          </h2>

          <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Hey! I&apos;m Sunny, a passionate Full Stack Developer who loves building things that live on the internet.
            I create dynamic, scalable applications using modern web technologies and enjoy taking a project from zero
            to deployment. Whether it&apos;s writing clean UI code or optimizing databases and APIs — I love doing it all.
            I believe great products are a blend of performance, creativity, and good user experience.
            <br />
            <br />
            Always learning. Always improving. Always building something cool!
          </p>
        </div>
      </div>
    </section>
  )
}
