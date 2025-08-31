export type Patient = {
  id: string
  name: string
  age: number
  village: string
  lastConsultation: string
}

export type Doctor = {
  id: string
  name: string
  specialty: string
}

export type Medicine = {
  id: string
  name: string
  stock: number
  updatedAt: string
}

export type QueueItem = {
  id: string
  token: number
  patientName: string
}

export const patients: Patient[] = [
  { id: "p1", name: "Sita Devi", age: 42, village: "Kishanpur", lastConsultation: "2025-08-10" },
  { id: "p2", name: "Ramu Yadav", age: 35, village: "Bhagalpur", lastConsultation: "2025-08-22" },
  { id: "p3", name: "Asha Kumari", age: 28, village: "Rampur", lastConsultation: "2025-08-27" },
]

export const doctors: Doctor[] = [
  { id: "d1", name: "Dr. Anil Kumar", specialty: "General Medicine" },
  { id: "d2", name: "Dr. Neha Singh", specialty: "Pediatrics" },
]

export const medicines: Medicine[] = [
  { id: "m1", name: "Paracetamol 500mg", stock: 120, updatedAt: "2025-08-25" },
  { id: "m2", name: "Amoxicillin 250mg", stock: 60, updatedAt: "2025-08-24" },
  { id: "m3", name: "ORS Pack", stock: 200, updatedAt: "2025-08-21" },
]

// A small waiting queue for doctor consults
export const queue: QueueItem[] = [
  { id: "q1", token: 12, patientName: "Mohan Lal" },
  { id: "q2", token: 13, patientName: "Sita Devi" },
  { id: "q3", token: 14, patientName: "Ramu Yadav" },
]

export const upcomingAppointments = [
  { id: "a1", patient: "Sita Devi", date: "2025-09-05", time: "10:00", doctor: "Dr. Anil Kumar" },
  { id: "a2", patient: "Ramu Yadav", date: "2025-09-05", time: "10:30", doctor: "Dr. Neha Singh" },
]
