"use client"

import { useMemo } from "react"
import { PatientsTable } from "@/components/patients-table"
import { patients } from "@/lib/mock-data"

export default function FacilitatorPatientsPage() {
  const data = useMemo(() => patients, [])
  return (
    <main className="mx-auto max-w-5xl px-4 py-6">
      <header className="mb-6">
        <h1 className="text-balance text-2xl font-semibold text-slate-800">Patients</h1>
        <p className="text-slate-800/70">Browse and manage patient records.</p>
      </header>
      <div className="rounded-lg border border-slate-100 bg-white p-2">
        <PatientsTable data={data} />
      </div>
    </main>
  )
}
