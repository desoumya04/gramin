"use client"

import type React from "react"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

type Doctor = {
  // define Doctor fields here
  id: string;
  name:string;
};

type Patient = {
  // define Patient fields here
  id: string;
  name:string;
};

interface AppointmentFormProps {
  doctors ?: Doctor[];
  patients?: Patient[];
}

export function AppointmentForm({ doctors, patients }: AppointmentFormProps) {

  const [patientId, setPatientId] = useState<string | undefined>()
  const [doctorId, setDoctorId] = useState<string | undefined>()
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  function submit(e: React.FormEvent) {
    e.preventDefault()
    
    alert(`Appointment booked!\nPatient: ${patientId}\nDoctor: ${doctorId}\n${date} @ ${time}`)
  }

  return (
    <form onSubmit={submit} className="rounded-md border border-slate-100 bg-white p-4">
      <h3 className="text-sm font-semibold text-slate-800">Book Appointment</h3>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="patient">Patient (रोगी)</Label>
          <Select onValueChange={setPatientId}>
            <SelectTrigger id="patient" aria-label="Select patient">
              <SelectValue placeholder="Choose patient" />
            </SelectTrigger>
            <SelectContent>
              {patients?.map((p) => (
                <SelectItem key={p.id} value={p.id}>
                  {p.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="doctor">Doctor (डॉक्टर)</Label>
          <Select onValueChange={setDoctorId}>
            <SelectTrigger id="doctor" aria-label="Select doctor">
              <SelectValue placeholder="Choose doctor" />
            </SelectTrigger>
            <SelectContent>
              {doctors?.map((d) => (
                <SelectItem key={d.id} value={d.id}>
                  {d.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="date">Date (तारीख)</Label>
          <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>

        <div>
          <Label htmlFor="time">Time (समय)</Label>
          <Input id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </div>
      </div>

      <div className="mt-4">
        <Button type="submit" className="bg-teal-600 hover:bg-teal-600/90">
          Book Appointment
        </Button>
      </div>
    </form>
  )
}

export default AppointmentForm
