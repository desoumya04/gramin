import AppointmentForm from "@/components/appointment-form"

export default function Page() {
  return (
    <main className="container mx-auto max-w-3xl px-6 py-8">
      <h1 className="mb-6 text-2xl font-semibold">New Appointment</h1>
      <AppointmentForm />
    </main>
  )
}
