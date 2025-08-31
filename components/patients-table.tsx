"use client"

import { patients } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

function PatientsTable() {
  return (
    <div className="rounded-md border border-slate-100 bg-white">
      <div className="flex items-center justify-between border-b border-slate-100 p-3">
        <h3 className="text-sm font-semibold text-slate-800">Patients</h3>
        <Button className="bg-teal-600 hover:bg-teal-600">Register New Patient</Button>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Village</TableHead>
              <TableHead>Last Consultation</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((p) => (
              <TableRow key={p.id}>
                <TableCell className="font-medium">{p.name}</TableCell>
                <TableCell>{p.age}</TableCell>
                <TableCell>{p.village}</TableCell>
                <TableCell>{p.lastConsultation}</TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    className="border-slate-100 text-slate-800 hover:bg-slate-100 bg-transparent"
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default PatientsTable
export { PatientsTable }
