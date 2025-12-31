"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { ThemeAwareLogo } from "@/components/theme-aware-logo"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Navigation */}
      <nav className="border-b border-border py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ThemeAwareLogo />
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/early-access">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">Request Access</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">
              A developer-first sports intelligence platform
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl text-balance">
              Opinionated sports data plus proprietary calculations, signals, and confidence scores — delivered through
              a clean, developer-first API.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/early-access">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3 text-lg">
                Request API access →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sports Supported Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Sports we support at launch</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're starting with the most in-demand leagues for apps and analytics:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "NFL", src: "/nfl.png", alt: "NFL Logo" },
              { name: "NBA", src: "/nba.png", alt: "NBA Logo" },
              { name: "College Football", src: "/ncaaf.png", alt: "NCAA Football Logo" },
              { name: "College Basketball", src: "/ncaab.png", alt: "NCAA Basketball Logo" },
            ].map((sport) => (
              <div key={sport.name} className="flex flex-col items-center gap-4">
                <div className="flex justify-center items-center h-20">
                  <img
                    src={sport.src || "/placeholder.svg"}
                    alt={sport.alt}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
                <p className="text-sm font-medium text-center text-foreground">{sport.name}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-8">Additional sports will be added based on early access demand.</p>
        </div>
      </section>

      {/* Built For Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Built for teams who don't want raw feeds</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">Big Balls Sports is designed for:</p>
          <ul className="space-y-3 max-w-2xl">
            {[
              "Sports app developers",
              "Betting & DFS startups",
              "Analytics dashboards",
              "Content & media platforms",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-primary font-bold flex-shrink-0">•</span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground mt-8 max-w-3xl">
            If you're tired of stitching together multiple APIs and rebuilding the same calculations, this is for you.
          </p>
        </div>
      </section>

      {/* Why Big Balls Sports Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Why Big Balls Sports</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Most sports data APIs give you raw numbers and leave the hard work to you. We do the opposite.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Derived metrics & custom calculations", desc: "not found in standard feeds" },
              { title: "Consistent schemas", desc: "across sports and leagues" },
              { title: "Opinionated endpoints", desc: "that return what apps actually need" },
              { title: "Built-in confidence & explanations", desc: "not just stats" },
            ].map((item, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-card border border-border rounded-lg p-6 max-w-3xl">
            <p className="font-semibold text-lg">The goal is simple:</p>
            <p className="text-xl font-bold text-primary mt-2">less plumbing, more product.</p>
          </div>
        </div>
      </section>

      {/* Early Access Benefits */}
      <section className="py-16 md:py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">What you'll get in early access</h2>
          <ul className="space-y-3 max-w-2xl">
            {[
              "Preview API endpoints for supported leagues",
              "Sample responses with real derived metrics",
              "Direct input into the roadmap",
              "Priority access as new metrics and sports are added",
              "Discounted early pricing when paid plans launch",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-primary font-bold flex-shrink-0">•</span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground mt-8 max-w-3xl">
            This is a developer preview — we're building it with early users.
          </p>
        </div>
      </section>

      {/* Planned Capabilities */}
      <section className="py-16 md:py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Planned API capabilities</h2>
          <ul className="space-y-3 max-w-2xl mb-8">
            {[
              "Games, teams, players, and markets",
              "Proprietary metrics and signals",
              "Historical + real-time data",
              "Simple endpoints (no stitching 10 APIs together)",
              "Event-driven webhooks (planned)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-primary font-bold flex-shrink-0">•</span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground max-w-3xl">
            Scope and priorities will be guided by early access feedback.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Pricing (preview)</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-4">
            We expect paid developer plans to start around{" "}
            <span className="font-semibold text-foreground">$99/month</span>, with usage-based tiers for growing teams.
          </p>
          <p className="text-lg text-muted-foreground">
            Early access users will receive <span className="font-semibold text-foreground">preferred pricing</span>.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to build on Big Balls Sports?</h2>
          <Link href="/early-access">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3 text-lg">
              Request API access →
            </Button>
          </Link>
          <p className="text-muted-foreground text-sm">
            Tell us what you're building — it helps us decide what to ship first.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 md:px-12 border-t border-border text-center text-sm text-muted-foreground mt-auto">
        <p>Built by the team behind Big Balls Sports, a live sports analytics platform used by bettors every day.</p>
      </footer>
    </main>
  )
}
