"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { ThemeAwareLogo } from "@/components/theme-aware-logo"

export default function EarlyAccess() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    company: "",
    building: "",
    sports: [],
    metrics: "",
    timeline: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (sport: string) => {
    setFormData((prev) => ({
      ...prev,
      sports: prev.sports.includes(sport) ? prev.sports.filter((s) => s !== sport) : [...prev.sports, sport],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            role: "",
            company: "",
            building: "",
            sports: [],
            metrics: "",
            timeline: "",
          })
          setIsSubmitted(false)
        }, 3000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Navigation */}
      <nav className="border-b border-border py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="scale-[0.5] origin-left">
              <ThemeAwareLogo />
            </span>
          </Link>
          <ThemeToggle />
        </div>
      </nav>

      {/* Form Section */}
      <section className="flex-1 py-20 md:py-24 px-6 md:px-12">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">Request early access</h1>
            <p className="text-lg text-muted-foreground">
              Tell us what you're building — it helps us decide what to ship first.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-primary/10 border border-primary rounded-lg p-8 text-center space-y-3">
              <p className="text-lg font-semibold text-primary">Thanks for signing up!</p>
              <p className="text-muted-foreground">We'll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Required Fields */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Required</h3>

                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-card border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="work@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-card border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select your role...</option>
                    <option value="Developer">Developer</option>
                    <option value="Founder">Founder</option>
                    <option value="Data / Analytics">Data / Analytics</option>
                    <option value="Product">Product</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company or project name</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Personal project is valid"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="bg-card border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="building">What are you building?</Label>
                  <textarea
                    id="building"
                    name="building"
                    placeholder="Sports betting app, analytics dashboard, DFS tool, content site, etc."
                    value={formData.building}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary min-h-24 resize-none"
                  />
                </div>

                <div className="space-y-3">
                  <Label>Which sport(s) do you plan to use first?</Label>
                  <div className="space-y-2">
                    {["NFL", "NBA", "MLB", "College Football", "College Basketball"].map((sport) => (
                      <label key={sport} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.sports.includes(sport)}
                          onChange={() => handleCheckboxChange(sport)}
                          className="w-4 h-4 rounded bg-card border-border accent-primary cursor-pointer"
                        />
                        <span>{sport}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Optional Fields */}
              <div className="space-y-6 pt-6 border-t border-border">
                <h3 className="text-lg font-semibold">Optional (But valuable)</h3>

                <div className="space-y-2">
                  <Label htmlFor="metrics">What data or metrics are you most interested in?</Label>
                  <textarea
                    id="metrics"
                    name="metrics"
                    placeholder="Advanced stats, signals, projections, etc."
                    value={formData.metrics}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary min-h-20 resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">When would you ideally start integrating an API like this?</Label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select timeline...</option>
                    <option value="Immediately">Immediately</option>
                    <option value="1-3 months">In the next 1–3 months</option>
                    <option value="Exploring">Just exploring / research</option>
                  </select>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-md py-3 text-lg font-semibold disabled:opacity-50"
              >
                {isLoading ? "Submitting..." : "Request API access →"}
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 md:px-12 border-t border-border text-center text-sm text-muted-foreground">
        <p>Developer-first sports intelligence platform</p>
      </footer>
    </main>
  )
}
