import Link from "next/link"

export default function FacilitatorPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold">Facilitator Dashboard</h1>
      <p className="mt-3 text-slate-800/80">Manage patients, schedule appointments, and track follow-ups.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Link
          href="/facilitator/patients"
          aria-label="Open Patients"
          className="block rounded-lg border border-slate-100 p-4 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
        >
          <div className="font-medium text-slate-800">Patients</div>
          <div className="text-sm text-slate-800/70">View and register patients.</div>
        </Link>

        <Link
          href="/facilitator/appointments"
          aria-label="Open Appointments"
          className="block rounded-lg border border-slate-100 p-4 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
        >
          <div className="font-medium text-slate-800">Appointments</div>
          <div className="text-sm text-slate-800/70">Create and manage visits.</div>
        </Link>
      </div>
    </section>
  )
}
