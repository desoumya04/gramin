import Link from "next/link"

export default function DoctorPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold">Doctor Portal</h1>
      <p className="mt-3 text-slate-800/80">Conduct tele-consults, write notes, and issue e-prescriptions.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Link href="/doctor/queue" className="border rounded-lg p-4 hover:bg-slate-100">
          <div className="font-medium">Queue</div>
          <div className="text-sm text-slate-800/70">Incoming consults and follow-ups.</div>
        </Link>
        <div className="border rounded-lg p-4">
          <div className="font-medium">Prescriptions</div>
          <div className="text-sm text-slate-800/70">Review and sign e-Rx.</div>
        </div>
      </div>
    </section>
  )
}
