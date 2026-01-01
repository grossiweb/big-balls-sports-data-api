"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { ThemeAwareLogo } from "@/components/theme-aware-logo"

const NCAAB_STATS = [
  // General Stats
  {
    stat_id: 1334,
    name: "avgRebounds",
    display_name: "Rebounds Per Game",
    abbreviation: "REB",
    description: "The average rebounds per game.",
    category: "general",
  },
  {
    stat_id: 1335,
    name: "assistTurnoverRatio",
    display_name: "Assist To Turnover Ratio",
    abbreviation: "AST/TO",
    description: "The average number of assists a player or team records per turnover",
    category: "general",
  },
  {
    stat_id: 1336,
    name: "avgFouls",
    display_name: "Fouls Per Game",
    abbreviation: "PF",
    description: "The average fouls committed per game.",
    category: "general",
  },
  {
    stat_id: 1337,
    name: "gamesPlayed",
    display_name: "Games Played",
    abbreviation: "GP",
    description: "Games Played",
    category: "general",
  },
  {
    stat_id: 1338,
    name: "gamesStarted",
    display_name: "Games Started",
    abbreviation: "GS",
    description: "The number of games started by an athlete.",
    category: "general",
  },
  {
    stat_id: 1339,
    name: "minutes",
    display_name: "Minutes",
    abbreviation: "MIN",
    description: "The total number of minutes played.",
    category: "general",
  },
  {
    stat_id: 1340,
    name: "avgMinutes",
    display_name: "Minutes Per Game",
    abbreviation: "MIN",
    description: "The average number of minutes per game.",
    category: "general",
  },
  {
    stat_id: 1341,
    name: "totalRebounds",
    display_name: "Rebounds",
    abbreviation: "REB",
    description: "The total number of rebounds for a team or player",
    category: "general",
  },
  {
    stat_id: 1342,
    name: "rebounds",
    display_name: "Rebounds",
    abbreviation: "REB",
    description: "The total number of rebounds (offensive and defensive).",
    category: "general",
  },
  // Offensive Stats
  {
    stat_id: 1343,
    name: "freeThrowPct",
    display_name: "Free Throw %",
    abbreviation: "FT%",
    description: "The ratio of free throws made to free throws attempted: FTM / FTA",
    category: "offensive",
  },
  {
    stat_id: 1344,
    name: "avgFieldGoalsMade",
    display_name: "Average Field Goals Made",
    abbreviation: "FGM",
    description: "The average field goals made per game.",
    category: "offensive",
  },
  {
    stat_id: 1345,
    name: "avgFieldGoalsAttempted",
    display_name: "Average Field Goals Attempted",
    abbreviation: "FGA",
    description: "The average field goals attempted per game.",
    category: "offensive",
  },
  {
    stat_id: 1346,
    name: "avgThreePointFieldGoalsMade",
    display_name: "Average 3-Point Field Goals Made",
    abbreviation: "3PM",
    description: "The average three point field goals made per game.",
    category: "offensive",
  },
  {
    stat_id: 1347,
    name: "avgThreePointFieldGoalsAttempted",
    display_name: "Average 3-Point Field Goals Attempted",
    abbreviation: "3PA",
    description: "The average three point field goals attempted per game.",
    category: "offensive",
  },
  {
    stat_id: 1348,
    name: "avgFreeThrowsMade",
    display_name: "Average Free Throws Made",
    abbreviation: "FTM",
    description: "The average free throw shots made per game.",
    category: "offensive",
  },
  {
    stat_id: 1349,
    name: "avgFreeThrowsAttempted",
    display_name: "Average Free Throws Attempted",
    abbreviation: "FTA",
    description: "The average free throw shots attempted per game.",
    category: "offensive",
  },
  {
    stat_id: 1350,
    name: "avgPoints",
    display_name: "Points Per Game",
    abbreviation: "PTS",
    description: "The average number of points scored per game.",
    category: "offensive",
  },
  {
    stat_id: 1351,
    name: "avgOffensiveRebounds",
    display_name: "Offensive Rebounds Per Game",
    abbreviation: "OR",
    description: "The average offensive rebounds per game.",
    category: "offensive",
  },
  {
    stat_id: 1352,
    name: "avgAssists",
    display_name: "Assists Per Game",
    abbreviation: "AST",
    description: "The average assists per game.",
    category: "offensive",
  },
  {
    stat_id: 1353,
    name: "avgTurnovers",
    display_name: "Turnovers Per Game",
    abbreviation: "TO",
    description: "The average turnovers committed per game.",
    category: "offensive",
  },
  {
    stat_id: 1354,
    name: "twoPointFieldGoalPct",
    display_name: "2-Point Field Goal Percentage",
    abbreviation: "2P%",
    description: "The percentage of 2-points fields goals made by a team or player.",
    category: "offensive",
  },
  {
    stat_id: 1355,
    name: "scoringEfficiency",
    display_name: "Scoring Efficiency",
    abbreviation: "SC-EFF",
    description: "The efficiency with which a team or player scores the basketball.",
    category: "offensive",
  },
  {
    stat_id: 1356,
    name: "shootingEfficiency",
    display_name: "Shooting Efficiency",
    abbreviation: "SH-EFF",
    description: "The efficiency with which a team or player shoots the basketball.",
    category: "offensive",
  },
  {
    stat_id: 1357,
    name: "fieldGoalPct",
    display_name: "Field Goal %",
    abbreviation: "FG%",
    description: "The ratio of field goals made to field goals attempted: FGM / FGA",
    category: "offensive",
  },
  {
    stat_id: 1358,
    name: "twoPointFieldGoalsMade",
    display_name: "2-Point Field Goals Made",
    abbreviation: "2PM",
    description: "The number of 2-point field goals made for a team or player.",
    category: "offensive",
  },
  {
    stat_id: 1359,
    name: "twoPointFieldGoalsAttempted",
    display_name: "2-Point Field Goals Attempted",
    abbreviation: "2PA",
    description: "The number of 2-point field goals attempted for a team or player.",
    category: "offensive",
  },
  {
    stat_id: 1360,
    name: "points",
    display_name: "Points",
    abbreviation: "PTS",
    description: "The number of points scored.",
    category: "offensive",
  },
  {
    stat_id: 1361,
    name: "offensiveRebounds",
    display_name: "Offensive Rebounds",
    abbreviation: "OR",
    description: "The number of times when the offense obtains the possession of the ball after a missed shot.",
    category: "offensive",
  },
  {
    stat_id: 1362,
    name: "assists",
    display_name: "Assists",
    abbreviation: "AST",
    description: "The number of times a player passes the ball to a teammate in a way that leads to a score.",
    category: "offensive",
  },
  {
    stat_id: 1363,
    name: "turnovers",
    display_name: "Turnovers",
    abbreviation: "TO",
    description: "The number of times a player loses possession to the other team.",
    category: "offensive",
  },
  {
    stat_id: 1364,
    name: "fieldGoalsMade",
    display_name: "Field Goals Made",
    abbreviation: "FGM",
    description: "The number of times a field goal was made.",
    category: "offensive",
  },
  {
    stat_id: 1365,
    name: "threePointFieldGoalsMade",
    display_name: "3-Point Field Goals Made",
    abbreviation: "3PM",
    description: "The total number of three point field goals made.",
    category: "offensive",
  },
  {
    stat_id: 1366,
    name: "freeThrowsMade",
    display_name: "Free Throws Made",
    abbreviation: "FTM",
    description: "The total free throw shots made.",
    category: "offensive",
  },
  {
    stat_id: 1367,
    name: "fieldGoalsAttempted",
    display_name: "Field Goals Attempted",
    abbreviation: "FGA",
    description: "The total field goals attempted.",
    category: "offensive",
  },
  {
    stat_id: 1368,
    name: "threePointFieldGoalsAttempted",
    display_name: "3-Point Field Goals Attempted",
    abbreviation: "3PA",
    description: "The total three point field goals attempted.",
    category: "offensive",
  },
  {
    stat_id: 1369,
    name: "freeThrowsAttempted",
    display_name: "Free Throws Attempted",
    abbreviation: "FTA",
    description: "The total free throws attempted.",
    category: "offensive",
  },
  {
    stat_id: 1370,
    name: "threePointFieldGoalPct",
    display_name: "3-Point Field Goal %",
    abbreviation: "3P%",
    description: "The ratio of 3-point field goals made to 3-point field goals attempted.",
    category: "offensive",
  },
  // Defensive Stats
  {
    stat_id: 1371,
    name: "avgDefensiveRebounds",
    display_name: "Defensive Rebounds Per Game",
    abbreviation: "DR",
    description: "The average defensive rebounds per game.",
    category: "defensive",
  },
  {
    stat_id: 1372,
    name: "defensiveRebounds",
    display_name: "Defensive Rebounds",
    abbreviation: "DR",
    description: "The total defensive rebounds.",
    category: "defensive",
  },
  {
    stat_id: 1373,
    name: "avgSteals",
    display_name: "Steals Per Game",
    abbreviation: "STL",
    description: "The average steals per game.",
    category: "defensive",
  },
  {
    stat_id: 1374,
    name: "steals",
    display_name: "Steals",
    abbreviation: "STL",
    description: "The total number of steals.",
    category: "defensive",
  },
  {
    stat_id: 1375,
    name: "avgBlocks",
    display_name: "Blocks Per Game",
    abbreviation: "BLK",
    description: "The average blocks per game.",
    category: "defensive",
  },
  {
    stat_id: 1376,
    name: "blocks",
    display_name: "Blocks",
    abbreviation: "BLK",
    description: "The total number of blocks.",
    category: "defensive",
  },
]

const categories = Array.from(new Set(NCAAB_STATS.map((stat) => stat.category)))

export default function NCAABStatsPage() {
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
            <Link href="/">
              <Button variant="outline" className="rounded-full px-6 bg-transparent">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 md:py-24 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-balance">College Basketball Team Stats</h1>
          <p className="text-xl text-muted-foreground max-w-3xl text-balance">
            Complete reference of all College Basketball team statistics available through the Big Balls Sports API.
            These stats are updated in real-time and include per-game averages and national rankings.
          </p>
        </div>
      </section>

      {/* Stats Content */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          {categories.map((category) => {
            const statsByCategory = NCAAB_STATS.filter((stat) => stat.category === category)
            return (
              <div key={category}>
                <h2 className="text-2xl font-bold mb-6 capitalize text-primary">{category} Statistics</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {statsByCategory.map((stat) => (
                    <div
                      key={stat.stat_id}
                      className="border border-border rounded-lg p-6 bg-card hover:border-primary/50 transition-colors"
                    >
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-lg font-semibold">{stat.display_name}</h3>
                          {stat.abbreviation && (
                            <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded text-sm font-medium whitespace-nowrap">
                              {stat.abbreviation}
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground">{stat.description}</p>
                        <p className="text-xs text-muted-foreground/60">Stat ID: {stat.stat_id}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Info Box */}
      <section className="py-12 px-6 md:px-12 border-t border-border bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="bg-background border border-border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">About these statistics</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold flex-shrink-0">•</span>
                <span>All stats include season totals, per-game averages, and national rankings</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold flex-shrink-0">•</span>
                <span>Data is updated daily during the season and includes regular season games</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold flex-shrink-0">•</span>
                <span>Historical data available for previous seasons</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold flex-shrink-0">•</span>
                <span>API access to all stats available in early access</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to integrate College Basketball stats?</h2>
          <Link href="/early-access">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3 text-lg">
              Request API access →
            </Button>
          </Link>
          <p className="text-muted-foreground text-sm">
            Get instant access to all College Basketball team stats and more in early access.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 md:px-12 border-t border-border text-center text-sm text-muted-foreground mt-auto">
        <p>Big Balls Sports — Developer-first sports intelligence</p>
      </footer>
    </main>
  )
}
