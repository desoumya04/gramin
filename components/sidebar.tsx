"use client"

import { cn } from "@/lib/utils"

type Item = { label: string; active?: boolean }
export default function Sidebar({ items }: { items: Item[] }) {
  return (
    <aside className="rounded-md border border-slate-100 bg-white p-3">
      <nav className="flex flex-col gap-1">
        {items.map((it) => (
          <button
            key={it.label}
            type="button"
            className={cn(
              "w-full rounded px-3 py-2 text-left text-sm font-medium hover:bg-slate-100",
              it.active ? "bg-slate-100 text-teal-600" : "text-slate-800",
            )}
            aria-current={it.active ? "page" : undefined}
          >
            {it.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}
