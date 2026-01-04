"use client";

import { useEffect, useRef } from "react";

export default function CursorRing() {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveRing = (e: MouseEvent) => {
      if (!ringRef.current) return;
      ringRef.current.style.left = `${e.clientX}px`;
      ringRef.current.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveRing);
    return () => window.removeEventListener("mousemove", moveRing);
  }, []);

  return <div ref={ringRef} className="cursor-ring" />;
}
