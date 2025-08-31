"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-teal-600 text-white font-semibold">
            G
          </span>
          <span className="text-lg font-semibold tracking-tight text-teal-600">Gramin Seva Health</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link className="text-sm font-medium hover:text-teal-600" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-teal-600" href="/facilitator">
            Facilitator
          </Link>
          <Link className="text-sm font-medium hover:text-teal-600" href="/doctor">
            Doctor
          </Link>
          <Link className="text-sm font-medium hover:text-teal-600" href="/pharmacy">
            Pharmacy
          </Link>
          <Link className="text-sm font-medium hover:text-teal-600" href="/contact">
            Contact
          </Link>
          <Link className="text-sm font-medium hover:text-teal-600" href="/login">
            Login
          </Link>
          <Link href="/facilitator">
            <Button className="bg-teal-600 hover:opacity-90">Get Started</Button>
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded border border-slate-100"
          onClick={() => setOpen(!open)}
        >
          <span className={cn("block h-0.5 w-5 bg-slate-800 transition-all", open && "translate-y-1 rotate-45")}></span>
          <span className={cn("mt-1 block h-0.5 w-5 bg-slate-800 transition-all", open && "opacity-0")}></span>
          <span
            className={cn("mt-1 block h-0.5 w-5 bg-slate-800 transition-all", open && "-translate-y-1 -rotate-45")}
          ></span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-100">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            <Link className="py-2 text-sm font-medium" href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link className="py-2 text-sm font-medium" href="/facilitator" onClick={() => setOpen(false)}>
              Facilitator
            </Link>
            <Link className="py-2 text-sm font-medium" href="/doctor" onClick={() => setOpen(false)}>
              Doctor
            </Link>
            <Link className="py-2 text-sm font-medium" href="/pharmacy" onClick={() => setOpen(false)}>
              Pharmacy
            </Link>
            <Link className="py-2 text-sm font-medium" href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <Link className="py-2 text-sm font-medium" href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
            <Link href="/facilitator" onClick={() => setOpen(false)} className="pt-2">
              <Button className="w-full bg-teal-600 hover:opacity-90">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export { Navbar }
