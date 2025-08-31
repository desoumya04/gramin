export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p className="mt-3 text-slate-800/80">Email: support@graminseva.health</p>
      <form className="mt-6 grid gap-3 max-w-md">
        <input className="border rounded px-3 py-2" placeholder="Your name" />
        <input className="border rounded px-3 py-2" placeholder="Your email" />
        <textarea className="border rounded px-3 py-2" placeholder="How can we help?" rows={4} />
        <button type="button" className="px-4 py-2 rounded bg-blue-600 text-white hover:opacity-90">
          Send
        </button>
      </form>
    </section>
  )
}
