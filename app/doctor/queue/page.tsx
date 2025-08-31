import QueueList from "@/components/queue-list"

export default function Page() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="mb-6 text-2xl font-semibold">Doctor Queue</h1>
      <QueueList />
    </main>
  )
}
