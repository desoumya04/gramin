import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <div className="min-h-screen flex flex-col bg-white text-slate-800">
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </Suspense>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
