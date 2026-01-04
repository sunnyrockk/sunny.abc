import type { Metadata } from "next";
import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";

import CursorGlow from "@/components/ui/CursorGlow";
import CursorRing from "@/components/ui/CursorRing";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`animated-bg ${inter.variable}`}>
        <CursorGlow />
        <CursorRing />
        {children}
      </body>
    </html>
  );
}
