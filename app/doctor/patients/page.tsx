import PatientsTable from "@/components/patients-table"

export default function Page() {
  return (
    <main className="container mx-auto max-w-5xl px-6 py-8">
      <h1 className="mb-6 text-2xl font-semibold">Patients</h1>
      <PatientsTable />
    </main>
  )
}
