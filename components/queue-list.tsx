"use client"
import { useState } from "react"
import { queue as seed } from "@/lib/mock-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function QueueList() {
  const [items, setItems] = useState(seed)
  const [current, setCurrent] = useState<(typeof seed)[number] | null>(null)

  function callNext() {
    if (items.length === 0) return
    const [next, ...rest] = items
    setCurrent(next)
    setItems(rest)
  }

  return (
    <div className="grid gap-4">
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle className="text-balance">Current Patient</CardTitle>
        </CardHeader>
        <CardContent>
          {current ? (
            <div className="grid gap-1">
              <div className="text-lg font-medium">{current.patientName}</div>
              <div className="text-sm text-slate-800">Token #{current.token}</div>
            </div>
          ) : (
            <p className="text-sm text-slate-800">No one called yet.</p>
          )}
          <div className="mt-4">
            <Button onClick={callNext} className="bg-teal-600 hover:opacity-90">
              Call next
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-balance">Waiting Queue</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid gap-2">
            {items.map((q) => (
              <li key={q.id} className="flex items-center justify-between rounded-md border px-3 py-2 bg-white">
                <span>{q.patientName}</span>
                <span className="text-sm text-slate-800">Token #{q.token}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
export { QueueList }
