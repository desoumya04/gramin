"use client"

import type React from "react"

import { useMemo, useState } from "react"
import { medicines } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function PrescriptionForm() {
  const [medicineName, setMedicineName] = useState("")
  const [dosage, setDosage] = useState("")
  const [notes, setNotes] = useState("")

  const suggestions = useMemo(() => medicines.map((m) => m.name), [])

  function submit(e: React.FormEvent) {
    e.preventDefault()
    // eslint-disable-next-line no-alert
    alert(`Prescription saved:\n${medicineName} - ${dosage}\nNotes: ${notes}`)
  }

  return (
    <Card className="border-slate-100">
      <CardContent className="p-4">
        <h3 className="text-sm font-semibold text-slate-800">Prescription Entry</h3>
        <form onSubmit={submit} className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="md:col-span-1">
            <Label htmlFor="medicine">Medicine (दवा)</Label>
            <Input
              id="medicine"
              list="medicine-list"
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
              placeholder="Type to search..."
              aria-label="Medicine name"
            />
            <datalist id="medicine-list">
              {suggestions.map((name) => (
                <option key={name} value={name} />
              ))}
            </datalist>
          </div>

          <div className="md:col-span-1">
            <Label htmlFor="dosage">Dosage (खुराक)</Label>
            <Input
              id="dosage"
              value={dosage}
              onChange={(e) => setDosage(e.target.value)}
              placeholder="e.g., 1 tablet twice daily"
            />
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="notes">Notes (टिप्पणी)</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Additional instructions"
            />
          </div>

          <div className="md:col-span-2">
            <Button type="submit" className="bg-teal-600 hover:bg-teal-700">
              Save Prescription
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
