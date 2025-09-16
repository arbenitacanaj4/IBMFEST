import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "IBM Quantum Fall Fest 2025 | BME Budapest",
  description:
    "Join us for IBM Quantum Fall Fest 2025 - A student-led celebration of 100 years of quantum science. Two days of workshops, hackathons, and networking at Budapest University of Technology and Economics.",
  keywords:
    "IBM, Quantum Computing, Fall Fest, BME, Budapest, University, Student Event, Quantum Science, Hackathon, Workshop",
  authors: [{ name: "IBM Quantum Fall Fest Organizing Team" }],
  creator: "BME Students",
  publisher: "IBM Quantum Fall Fest",
  openGraph: {
    title: "IBM Quantum Fall Fest 2025",
    description: "Celebrating 100 Years of Quantum - A student-led collaboration between IBM and BME",
    type: "website",
    locale: "en_US",
    siteName: "IBM Quantum Fall Fest 2025",
  },
  twitter: {
    card: "summary_large_image",
    title: "IBM Quantum Fall Fest 2025",
    description: "Join us for two days of quantum computing workshops and hackathons at BME Budapest",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
