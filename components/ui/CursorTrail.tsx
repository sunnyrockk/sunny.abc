"use client";

import { useEffect } from "react";

export default function CursorTrail() {
  useEffect(() => {
    const dots: HTMLDivElement[] = [];
    const DOTS_COUNT = 12;

    for (let i = 0; i < DOTS_COUNT; i++) {
      const dot = document.createElement("div");
      dot.className = "cursor-trail-dot";
      document.body.appendChild(dot);
      dots.push(dot);
    }

    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const animate = () => {
      let x = mouseX;
      let y = mouseY;

      dots.forEach((dot, index) => {
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;

        const next = dots[index + 1] || dots[0];
        x += (next.offsetLeft - x) * 0.3;
        y += (next.offsetTop - y) * 0.3;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      dots.forEach((dot) => dot.remove());
    };
  }, []);

  return null;
}
