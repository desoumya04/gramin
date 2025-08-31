import Link from "next/link"

export default function PharmacyPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold">Pharmacy</h1>
      <p className="mt-3 text-slate-800/80">Dispense medicines, manage stock, and record fulfillment.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Link href="/pharmacy/inventory" className="border rounded-lg p-4 hover:bg-slate-100">
          <div className="font-medium">Inventory</div>
          <div className="text-sm text-slate-800/70">Track medicines and batches.</div>
        </Link>
        <div className="border rounded-lg p-4">
          <div className="font-medium">Orders</div>
          <div className="text-sm text-slate-800/70">Fulfill e-prescriptions.</div>
        </div>
      </div>
    </section>
  )
}
