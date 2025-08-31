"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LoginCard({
  title,
  onLogin,
}: {
  title: string
  onLogin: (email: string) => void
}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function submit(e: React.FormEvent) {
    e.preventDefault()
    onLogin(email)
  }

  return (
    <Card className="max-w-md border-slate-100">
      <CardHeader>
        <CardTitle className="text-slate-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={submit} className="grid gap-4">
          <div>
            <Label htmlFor="email">Email (ईमेल)</Label>
            <Input
              id="email"
              type="email"
              placeholder="doctor@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
            />
          </div>
          <div>
            <Label htmlFor="password">Password (पासवर्ड)</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-required="true"
            />
          </div>
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
