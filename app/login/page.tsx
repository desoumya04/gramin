"use client"

import LoginCard from "@/components/login-card"

export default function Page() {
  function onLogin(email: string) {
    // mock login action
    alert(`Logged in as ${email}`)
  }

  return (
    <main className="container mx-auto max-w-2xl px-6 py-8">
      <h1 className="mb-6 text-2xl font-semibold">Login</h1>
      <LoginCard title="Sign in (लॉगिन)" onLogin={onLogin} />
    </main>
  )
}
