"use client"

import Link from "next/link"
import { upcomingAppointments } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function FacilitatorAppointmentsListPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-balance text-2xl font-semibold text-slate-800">Appointments</h1>
          <p className="text-slate-800/70">Review scheduled visits and create new ones.</p>
        </div>
        <Button asChild className="bg-teal-600 hover:bg-teal-600">
          <Link href="/facilitator/appointments/new" aria-label="Create new appointment">
            New Appointment
          </Link>
        </Button>
      </header>

      <div className="rounded-md border border-slate-100 bg-white">
        <div className="border-b border-slate-100 p-3">
          <h3 className="text-sm font-semibold text-slate-800">Upcoming</h3>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Doctor</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {upcomingAppointments.map((a) => (
                <TableRow key={a.id}>
                  <TableCell className="font-medium">{a.patient}</TableCell>
                  <TableCell>{a.doctor}</TableCell>
                  <TableCell>{a.date}</TableCell>
                  <TableCell>{a.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  )
}
