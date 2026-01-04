"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export function HeroSection() {
  return (
    <section className="w-full py-16 md:py-20">

     <div className="mx-auto max-w-4xl px-5 sm:px-6 md:px-8 lg:px-10">


      <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">


          {/* LEFT CONTENT */}
          <div className="order-2 space-y-6 text-center md:order-1 md:text-left">
            <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">

              Hi, I'm Sunny 👋
            </h1>

          <p className="mx-auto max-w-xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg md:text-left">

  Hey! I&apos;m <span className="font-semibold text-foreground">Sunny</span>, 
  a Full Stack Developer focused on building scalable web applications
  that solve real-world problems.
</p>
<div className="mt-6 flex w-full justify-center gap-4 md:justify-start">

  <a href="mailto:sunny@email.com" className="icon-btn">
    <Mail size={20} />
  </a>

  <a href="https://github.com/sunnyrockk" target="_blank" className="icon-btn">
    <Github size={20} />
  </a>

  <a href="https://www.linkedin.com/in/sunny-mall-5aa4a8314/l" target="_blank" className="icon-btn">
    <Linkedin size={20} />
  </a>

  <a href="https://twitter.com/@sunnymall558212" target="_blank" className="icon-btn">
    <Twitter size={20} />
  </a>
</div>



            {/* BOOK MEETING BUTTON */}
            <div className="flex justify-center md:justify-start">
              <Link
                href="https://calendly.com/your-link-here"
                target="_blank"
                className="
                  rounded-lg bg-primary px-6 py-3 font-semibold text-white
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-xl hover:bg-primary/90
                  active:translate-y-0
                "
              >
                Book a Meeting
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative order-1 md:order-2">
            <div className="
              relative h-56 w-56 sm:h-64 sm:w-64 md:h-80 md:w-80
              overflow-hidden rounded-full border-4 border-primary/20
              shadow-2xl transition-transform duration-300
              hover:scale-105
            ">
              <Image
                src="/images/profile-photo.png"
                alt="Sunny Mall"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
