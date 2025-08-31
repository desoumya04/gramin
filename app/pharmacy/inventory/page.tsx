import InventoryTable from "@/components/inventory-table"

export default function Page() {
  return (
    <main className="container mx-auto max-w-5xl px-6 py-8">
      <h1 className="mb-6 text-2xl font-semibold">Pharmacy Inventory</h1>
      <InventoryTable />
    </main>
  )
}
