"use client"

import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-100 bg-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-teal-600 text-white font-semibold">
                G
              </span>
              <span className="font-semibold text-slate-800">Gramin Seva Health</span>
            </div>
            <p className="mt-3 text-sm text-slate-800">Bridging Rural Communities with Doctors.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-800">Company</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link className="hover:text-teal-600" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-teal-600" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-800">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link className="hover:text-teal-600" href="/privacy">
                  Privacy
                </Link>
              </li>
              <li>
                <Link className="hover:text-teal-600" href="/terms">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-800">Support</h4>
            <p className="mt-3 text-sm text-slate-800">
              Email: support@graminseva.health
              <br />
              Phone: +91-800-000-0000
            </p>
          </div>
        </div>
        <p className="mt-8 text-xs text-slate-800">
          © {new Date().getFullYear()} Gramin Seva Health. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export { SiteFooter }
