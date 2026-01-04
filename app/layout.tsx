import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Inter } from "next/font/google"
import CursorGlow from "@/components/ui/CursorGlow";
import CursorTrail from "@/components/ui/CursorTrail";
import ClickRipple from "@/components/ui/ClickRipple";
import CursorRing from "@/components/ui/CursorRing";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})



export const metadata: Metadata = {
  title: "Professional Portfolio",
  description: "Showcasing my work and expertise",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="animated-bg">
  <CursorGlow />
  {children}
  <body className="animated-bg">
  <CursorGlow />
  <CursorRing />   {/* 👈 PINK RING */}
  {children}
</body>

</body>

    </html>
  )
}
