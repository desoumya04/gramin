import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Pill, CloudOff, Users } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-dvh bg-white text-slate-800">
      <main className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Hero */}
        <section className="mt-10 flex flex-col items-center gap-6 text-center">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-800 md:text-5xl">
            Gramin Seva Health
          </h1>
          <p className="max-w-2xl text-slate-800 md:text-lg">Bridging Rural Communities with Doctors</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/facilitator">
              <Button className="bg-teal-600 hover:opacity-90 px-6 py-6 text-base">Get Started as Patient</Button>
            </Link>
            <Link href="/facilitator">
              <Button
                variant="outline"
                className="border-slate-100 text-slate-800 px-6 py-6 text-base hover:bg-slate-100 bg-transparent"
              >
                Join as Facilitator
              </Button>
            </Link>
            <Link href="/doctor">
              <Button className="bg-blue-600 hover:opacity-90 px-6 py-6 text-base">Doctor Login</Button>
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="mt-16 grid gap-6 md:grid-cols-3">
          <Feature
            icon={<Users className="h-6 w-6 text-teal-600" aria-hidden="true" />}
            title="Assisted Consultations"
            desc="Facilitators help patients connect with qualified doctors."
          />
          <Feature
            icon={<CloudOff className="h-6 w-6 text-teal-600" aria-hidden="true" />}
            title="Offline Records"
            desc="Secure records that sync when internet returns."
          />
          <Feature
            icon={<Pill className="h-6 w-6 text-teal-600" aria-hidden="true" />}
            title="Medicine Availability"
            desc="Check nearby pharmacy stock and availability."
          />
        </section>

        {/* Community impact / Testimonials */}
        <section className="mt-16">
          <h2 className="text-xl font-semibold text-slate-800 md:text-2xl">Community Impact</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Testimonial name="Sita, Kishanpur">
              {"“I received consultation within the village. The facilitator helped me connect with the doctor.”"}
            </Testimonial>
            <Testimonial name="Ramu, Bhagalpur">
              {"“Medicines were available at the local pharmacy as per the doctor’s prescription.”"}
            </Testimonial>
            <Testimonial name="Asha, Rampur">
              {"“Even without network, my details were saved and synced later. Very helpful!”"}
            </Testimonial>
          </div>
        </section>
      </main>
    </div>
  )
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <Card className="border-slate-100">
      <CardContent className="p-5">
        <div className="flex items-start gap-3">
          <div className="rounded-md bg-slate-100 p-2">{icon}</div>
          <div>
            <h3 className="font-semibold text-slate-800">{title}</h3>
            <p className="mt-1 text-sm text-slate-800">{desc}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function Testimonial({
  name,
  children,
}: {
  name: string
  children: React.ReactNode
}) {
  return (
    <Card className="border-slate-100">
      <CardContent className="p-5">
        <p className="text-sm text-slate-800">{children}</p>
        <p className="mt-3 text-xs font-medium text-slate-800">— {name}</p>
      </CardContent>
    </Card>
  )
}
