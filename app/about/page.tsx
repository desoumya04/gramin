import Link from "next/link"

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold">About</h1>
      <p className="mt-3 text-slate-800/80 leading-relaxed">
        We provide trusted, affordable healthcare access via village facilitators, remote doctors, and local pharmacies.
      </p>
      <Link href="/" className="inline-flex mt-6 px-4 py-2 rounded bg-teal-600 text-white hover:opacity-90">
        Go Home
      </Link>
    </section>
  )
}
