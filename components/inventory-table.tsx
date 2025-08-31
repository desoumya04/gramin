"use client"

import type React from "react"

import { useState } from "react"
import { medicines as initial } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function InventoryTable() {
  const [medicines, setMedicines] = useState(initial)
  const [name, setName] = useState("")
  const [stock, setStock] = useState<number | "">("")
  const [lastUpdated, setLastUpdated] = useState("")

  function addOrUpdate(e: React.FormEvent) {
    e.preventDefault()
    if (!name || stock === "" || !lastUpdated) return
    setMedicines((prev) => {
      const idx = prev.findIndex((m) => m.name.toLowerCase() === name.toLowerCase())
      const newItem = { id: `m-${Date.now()}`, name, stock: Number(stock), updatedAt: lastUpdated }
      if (idx >= 0) {
        const copy = [...prev]
        copy[idx] = { ...copy[idx], stock: Number(stock), updatedAt: lastUpdated }
        return copy
      }
      return [newItem, ...prev]
    })
    setName("")
    setStock("")
    setLastUpdated("")
  }

  return (
    <div className="rounded-md border border-slate-100 bg-white">
      <div className="flex items-center justify-between border-b border-slate-100 p-3">
        <h3 className="text-sm font-semibold text-slate-800">Inventory</h3>
      </div>
      <div className="p-3">
        <form onSubmit={addOrUpdate} className="grid gap-3 md:grid-cols-4">
          <div>
            <Label htmlFor="med-name">Medicine (दवा)</Label>
            <Input
              id="med-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Paracetamol 500mg"
            />
          </div>
          <div>
            <Label htmlFor="stock">Stock (स्टॉक)</Label>
            <Input
              id="stock"
              type="number"
              value={stock}
              onChange={(e) => setStock(Number(e.target.value))}
              placeholder="100"
            />
          </div>
          <div>
            <Label htmlFor="updated">Last Updated (अद्यतन)</Label>
            <Input id="updated" type="date" value={lastUpdated} onChange={(e) => setLastUpdated(e.target.value)} />
          </div>
          <div className="flex items-end">
            <Button type="submit" className="bg-teal-600 hover:bg-teal-700 w-full">
              Add/Update Stock
            </Button>
          </div>
        </form>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Last Updated</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {medicines.map((m) => (
              <TableRow key={m.id}>
                <TableCell className="font-medium">{m.name}</TableCell>
                <TableCell>{m.stock}</TableCell>
                <TableCell>{m.updatedAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
