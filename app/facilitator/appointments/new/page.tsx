"use client"

import { AppointmentForm } from "@/components/appointment-form"
import { doctors, patients } from "@/lib/mock-data"

export default function FacilitatorNewAppointmentPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-6">
      <header className="mb-6">
        <h1 className="text-balance text-2xl font-semibold text-slate-800">New Appointment</h1>
        <p className="text-slate-800/70">Create and schedule a new appointment.</p>
      </header>
      <div className="rounded-lg border border-slate-100 bg-white p-4">
        <AppointmentForm doctors={doctors} patients={patients} />
      </div>
    </main>
  )
}
