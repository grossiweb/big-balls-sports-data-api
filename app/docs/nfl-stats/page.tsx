"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { ThemeAwareLogo } from "@/components/theme-aware-logo"

const NFL_STATS = [
  // Passing Stats
  {
    name: "completionPct",
    display_name: "Completion Percentage",
    abbreviation: "CMP%",
    category: "passing",
    description: "The percentage of completed passes.",
  },
  {
    name: "completions",
    display_name: "Completions",
    abbreviation: "CMP",
    category: "passing",
    description: "The times a player completes a pass to another player who is eligible to catch a pass.",
  },
  {
    name: "interceptionPct",
    display_name: "Interception Percentage",
    abbreviation: "INT%",
    category: "passing",
    description: "The percentage of passes thrown that were intercepted by the opposing team.",
  },
  {
    name: "interceptions",
    display_name: "Interceptions",
    abbreviation: "INT",
    category: "passing",
    description: "The number of passes thrown that were intercepted by the opposing team.",
  },
  {
    name: "longPassing",
    display_name: "Longest Pass",
    abbreviation: "LNG",
    category: "passing",
    description: "The longest pass play completed in terms of yards.",
  },
  {
    name: "netPassingYards",
    display_name: "Passing",
    abbreviation: "",
    category: "passing",
    description: "The amount of net passing yards.",
  },
  {
    name: "netPassingYardsPerGame",
    display_name: "Net Passing Yards Per Game",
    abbreviation: "NYDS/G",
    category: "passing",
    description: "The amount of net passing yards per game.",
  },
  {
    name: "passingAttempts",
    display_name: "Passing Attempts",
    abbreviation: "ATT",
    category: "passing",
    description: "The number of times a pass is attempted.",
  },
  {
    name: "passingTouchdownPct",
    display_name: "Passing Touchdown %",
    abbreviation: "TD%",
    category: "passing",
    description: "The percentage of passes that result in a touchdown.",
  },
  {
    name: "passingTouchdowns",
    display_name: "Touchdowns",
    abbreviation: "TD",
    category: "passing",
    description: "The total number of passing touchdowns.",
  },
  {
    name: "QBRating",
    display_name: "Passer Rating",
    abbreviation: "RTG",
    category: "passing",
    description: "Passer Rating.",
  },
  {
    name: "sacks",
    display_name: "Sacks",
    abbreviation: "SACKS",
    category: "passing",
    description: "The total number of sacks.",
  },
  {
    name: "sackYardsLost",
    display_name: "Sack Yards Lost",
    abbreviation: "SYL",
    category: "passing",
    description: "The amount of yards lost due to sacks.",
  },
  {
    name: "yardsPerPassAttempt",
    display_name: "Yards Per Pass Attempt",
    abbreviation: "AVG",
    category: "passing",
    description: "The average number yards per pass attempt.",
  },
  {
    name: "passingYards",
    display_name: "Yards",
    abbreviation: "YDS",
    category: "passing",
    description: "The total passing yards.",
  },
  {
    name: "passingFumblesLost",
    display_name: "Passing Fumbles Lost",
    abbreviation: "FL",
    category: "passing",
    description: "The number of times the ball has been fumbled and lost to the opposing team after a completed pass.",
  },
  {
    name: "teamGamesPlayed",
    display_name: "Team Games Played",
    abbreviation: "TGP",
    category: "passing",
    description: "The amount of games played.",
  },
  {
    name: "yardsPerGame",
    display_name: "Yards Per Game",
    abbreviation: "",
    category: "passing",
    description: "The average number of yards per game.",
  },
  {
    name: "totalPointsPerGame",
    display_name: "Total Points Per Game",
    abbreviation: "TP",
    category: "passing",
    description: "The number of points scored per game.",
  },
  {
    name: "totalPoints",
    display_name: "Total Points",
    abbreviation: "PTS",
    category: "passing",
    description: "The number of total points scored.",
  },
  {
    name: "totalTouchdowns",
    display_name: "Total Touchdowns",
    abbreviation: "TD",
    category: "passing",
    description: "The number of touchdowns scored in total.",
  },
  {
    name: "passingYardsPerGame",
    display_name: "Passing Yards Per Game",
    abbreviation: "",
    category: "passing",
    description: "The number of passing yards per game.",
  },

  // Rushing Stats
  {
    name: "rushingAttempts",
    display_name: "Rushing Attempts",
    abbreviation: "CAR",
    category: "rushing",
    description: "The total number of attempted rushes.",
  },
  {
    name: "rushingYards",
    display_name: "Yards",
    abbreviation: "YDS",
    category: "rushing",
    description: "The total rushing yards.",
  },
  {
    name: "yardsPerRushAttempt",
    display_name: "Yards Per Rushing Attempt",
    abbreviation: "AVG",
    category: "rushing",
    description: "The average number of yards per rush attempt.",
  },
  {
    name: "longRushing",
    display_name: "Longest Run",
    abbreviation: "LONG",
    category: "rushing",
    description: "The amount of yards for the longest run.",
  },
  {
    name: "rushingBigPlays",
    display_name: "20+ Yard Rushing Plays",
    abbreviation: "BIG",
    category: "rushing",
    description: "The number of rushing big plays gained.",
  },
  {
    name: "rushingTouchdowns",
    display_name: "Touchdowns",
    abbreviation: "TD",
    category: "rushing",
    description: "The total number of rushing touchdowns.",
  },
  {
    name: "rushingYardsPerGame",
    display_name: "Rushing Yards Per Game",
    abbreviation: "",
    category: "rushing",
    description: "The average number of rushing yards per game.",
  },
  {
    name: "rushingFumbles",
    display_name: "Rushing Fumbles",
    abbreviation: "FUM",
    category: "rushing",
    description: "The number of times there is a run and then the ball is fumbled.",
  },
  {
    name: "rushingFumblesLost",
    display_name: "Rushing Fumbles Lost",
    abbreviation: "LST",
    category: "rushing",
    description: "The number of times there is a run and then the ball is fumbled and lost.",
  },
  {
    name: "rushingFirstDowns",
    display_name: "Rushing 1st downs",
    abbreviation: "FD",
    category: "rushing",
    description: "The number of times a first down is picked up by a run.",
  },

  // Receiving Stats
  {
    name: "receptions",
    display_name: "Receptions",
    abbreviation: "REC",
    category: "receiving",
    description: "The number of receptions by a player.",
  },
  {
    name: "receivingYards",
    display_name: "Receiving Yards",
    abbreviation: "YDS",
    category: "receiving",
    description: "The total receiving yards.",
  },
  {
    name: "receivingTouchdowns",
    display_name: "Touchdowns",
    abbreviation: "TD",
    category: "receiving",
    description: "The total number of receiving touchdowns.",
  },
  {
    name: "yardsPerReception",
    display_name: "Yards Per Reception",
    abbreviation: "AVG",
    category: "receiving",
    description: "The average number of yards per reception.",
  },
  {
    name: "longReception",
    display_name: "Longest Reception",
    abbreviation: "LONG",
    category: "receiving",
    description: "The longest reception in terms of yards.",
  },
  {
    name: "receivingBigPlays",
    display_name: "20+ Yard Receiving Plays",
    abbreviation: "BIG",
    category: "receiving",
    description: "The number of receiving big plays gained.",
  },
  {
    name: "receivingYardsPerGame",
    display_name: "Receiving Yards Per Game",
    abbreviation: "",
    category: "receiving",
    description: "The average number of receiving yards per game.",
  },
  {
    name: "receivingFumbles",
    display_name: "Receiving Fumbles",
    abbreviation: "FUM",
    category: "receiving",
    description: "The number of times there is a reception and then the ball is fumbled.",
  },
  {
    name: "receivingFumblesLost",
    display_name: "Receiving Fumbles Lost",
    abbreviation: "LST",
    category: "receiving",
    description: "The number of times there is a reception and then the ball is fumbled and lost.",
  },
  {
    name: "receivingFirstDowns",
    display_name: "Receiving 1st downs",
    abbreviation: "FD",
    category: "receiving",
    description: "The number of times a first down is picked up by a reception.",
  },

  // Defensive Stats
  {
    name: "tackles",
    display_name: "Tackles",
    abbreviation: "TAK",
    category: "defensive",
    description: "The total number of tackles made.",
  },
  {
    name: "sacks",
    display_name: "Sacks",
    abbreviation: "SACKS",
    category: "defensive",
    description: "The total number of sacks made.",
  },
  {
    name: "forcedFumbles",
    display_name: "Forced Fumbles",
    abbreviation: "FF",
    category: "defensive",
    description: "The number of fumbles forced by the defense.",
  },
  {
    name: "fumbleRecoveries",
    display_name: "Fumble Recoveries",
    abbreviation: "FUME",
    category: "defensive",
    description: "The number of fumbles recovered by the defense.",
  },
  {
    name: "interceptions",
    display_name: "Interceptions",
    abbreviation: "INT",
    category: "defensive",
    description: "The total number of interceptions made.",
  },
  {
    name: "interceptionYards",
    display_name: "Interception Return Yards",
    abbreviation: "YDS",
    category: "defensive",
    description: "The total yards returned from interceptions.",
  },
  {
    name: "interceptionTouchdowns",
    display_name: "Interception Return Touchdowns",
    abbreviation: "TD",
    category: "defensive",
    description: "The number of touchdowns scored from interception returns.",
  },
  {
    name: "defensePassesDeflected",
    display_name: "Passes Deflected",
    abbreviation: "DEF",
    category: "defensive",
    description: "The number of passes deflected by the defense.",
  },
  {
    name: "defenseTouchdowns",
    display_name: "Defensive Touchdowns",
    abbreviation: "TD",
    category: "defensive",
    description: "The total number of defensive touchdowns.",
  },
  {
    name: "defenseSafeties",
    display_name: "Safeties",
    abbreviation: "SAF",
    category: "defensive",
    description: "The total number of safeties.",
  },
  {
    name: "defenseSackYardsLost",
    display_name: "Sack Yards Lost",
    abbreviation: "SYL",
    category: "defensive",
    description: "The amount of yards lost due to sacks.",
  },

  // Kicking Stats
  {
    name: "fieldGoalsMade",
    display_name: "Field Goals Made",
    abbreviation: "FG",
    category: "kicking",
    description: "The number of field goals made.",
  },
  {
    name: "fieldGoalsAttempted",
    display_name: "Field Goals Attempted",
    abbreviation: "FGA",
    category: "kicking",
    description: "The number of field goal attempts.",
  },
  {
    name: "fieldGoalPct",
    display_name: "Field Goal %",
    abbreviation: "FG%",
    category: "kicking",
    description: "The percentage of field goals made.",
  },
  {
    name: "longFieldGoal",
    display_name: "Longest Field Goal",
    abbreviation: "LONG",
    category: "kicking",
    description: "The longest field goal made.",
  },
  {
    name: "extraPointsMade",
    display_name: "Extra Points Made",
    abbreviation: "XP",
    category: "kicking",
    description: "The number of extra points made.",
  },
  {
    name: "extraPointsAttempted",
    display_name: "Extra Points Attempted",
    abbreviation: "XPA",
    category: "kicking",
    description: "The number of extra point attempts.",
  },
  {
    name: "extraPointPct",
    display_name: "Extra Point %",
    abbreviation: "XP%",
    category: "kicking",
    description: "The percentage of extra points made.",
  },

  // Punting Stats
  {
    name: "punts",
    display_name: "Punts",
    abbreviation: "PUNTS",
    category: "punting",
    description: "The total number of punts.",
  },
  {
    name: "puntYards",
    display_name: "Punt Yards",
    abbreviation: "YDS",
    category: "punting",
    description: "The total yards from punts.",
  },
  {
    name: "puntAverage",
    display_name: "Punt Average",
    abbreviation: "AVG",
    category: "punting",
    description: "The average yards per punt.",
  },
  {
    name: "longPunt",
    display_name: "Longest Punt",
    abbreviation: "LONG",
    category: "punting",
    description: "The longest punt.",
  },
  {
    name: "puntTouchbacks",
    display_name: "Punt Touchbacks",
    abbreviation: "TB",
    category: "punting",
    description: "The number of punt touchbacks.",
  },
  {
    name: "puntBlockedKicks",
    display_name: "Blocked Punts",
    abbreviation: "BK",
    category: "punting",
    description: "The number of blocked punts.",
  },

  // Returning Stats
  {
    name: "kickoffReturns",
    display_name: "Kickoff Returns",
    abbreviation: "KR",
    category: "returning",
    description: "The number of kickoff returns.",
  },
  {
    name: "kickoffReturnYards",
    display_name: "Kickoff Return Yards",
    abbreviation: "YDS",
    category: "returning",
    description: "The total yards from kickoff returns.",
  },
  {
    name: "kickoffReturnAverage",
    display_name: "Kickoff Return Average",
    abbreviation: "AVG",
    category: "returning",
    description: "The average yards per kickoff return.",
  },
  {
    name: "longKickoffReturn",
    display_name: "Longest Kickoff Return",
    abbreviation: "LONG",
    category: "returning",
    description: "The longest kickoff return.",
  },
  {
    name: "kickoffReturnTouchdowns",
    display_name: "Kickoff Return Touchdowns",
    abbreviation: "TD",
    category: "returning",
    description: "The number of kickoff return touchdowns.",
  },
  {
    name: "puntReturns",
    display_name: "Punt Returns",
    abbreviation: "PR",
    category: "returning",
    description: "The number of punt returns.",
  },
  {
    name: "puntReturnYards",
    display_name: "Punt Return Yards",
    abbreviation: "YDS",
    category: "returning",
    description: "The total yards from punt returns.",
  },
  {
    name: "puntReturnAverage",
    display_name: "Punt Return Average",
    abbreviation: "AVG",
    category: "returning",
    description: "The average yards per punt return.",
  },
  {
    name: "longPuntReturn",
    display_name: "Longest Punt Return",
    abbreviation: "LONG",
    category: "returning",
    description: "The longest punt return.",
  },
  {
    name: "puntReturnTouchdowns",
    display_name: "Punt Return Touchdowns",
    abbreviation: "TD",
    category: "returning",
    description: "The number of punt return touchdowns.",
  },

  // Miscellaneous Stats
  {
    name: "penaltyYards",
    display_name: "Penalty Yards",
    abbreviation: "PY",
    category: "miscellaneous",
    description: "The total yards from penalties.",
  },
  {
    name: "penalties",
    display_name: "Penalties",
    abbreviation: "PEN",
    category: "miscellaneous",
    description: "The total number of penalties.",
  },
  {
    name: "turnovers",
    display_name: "Turnovers",
    abbreviation: "TO",
    category: "miscellaneous",
    description: "The total number of turnovers.",
  },
  {
    name: "defensiveScore",
    display_name: "Defensive/Special Teams Points",
    abbreviation: "DST",
    category: "miscellaneous",
    description: "The points scored by the defense/special teams.",
  },
  {
    name: "redZoneEfficiency",
    display_name: "Red Zone Efficiency",
    abbreviation: "RZ%",
    category: "miscellaneous",
    description: "The percentage of red zone opportunities resulting in touchdowns.",
  },
  {
    name: "thirdDownConversions",
    display_name: "3rd Down Conversions",
    abbreviation: "3DC",
    category: "miscellaneous",
    description: "The number of successful 3rd down conversions.",
  },
  {
    name: "thirdDownPercentage",
    display_name: "3rd Down Conversion %",
    abbreviation: "3D%",
    category: "miscellaneous",
    description: "The percentage of successful 3rd down conversions.",
  },
  {
    name: "fourthDownConversions",
    display_name: "4th Down Conversions",
    abbreviation: "4DC",
    category: "miscellaneous",
    description: "The number of successful 4th down conversions.",
  },
  {
    name: "fourthDownPercentage",
    display_name: "4th Down Conversion %",
    abbreviation: "4D%",
    category: "miscellaneous",
    description: "The percentage of successful 4th down conversions.",
  },
  {
    name: "timeOfPossession",
    display_name: "Time of Possession",
    abbreviation: "TOP",
    category: "miscellaneous",
    description: "The total time the team had possession.",
  },
]

const categories = Array.from(new Set(NFL_STATS.map((stat) => stat.category)))

export default function NFLStatsPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-balance">NFL Team Stats</h1>
          <p className="text-xl text-muted-foreground max-w-3xl text-balance">
            Complete reference of all NFL team statistics available through the Big Balls Sports API. These stats are
            updated in real-time and include per-game averages and national rankings.
          </p>
        </div>
      </section>

      {/* Stats by Category */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          {categories.map((category) => {
            const categoryStats = NFL_STATS.filter((stat) => stat.category === category)
            return (
              <div key={category}>
                <h2 className="text-2xl font-bold mb-6 capitalize text-primary">{category} Statistics</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {categoryStats.map((stat) => (
                    <div
                      key={stat.name}
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
                <span>Data is updated daily during the season and includes regular season + playoff games</span>
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

      {/* CTA */}
      <section className="py-16 md:py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to integrate NFL stats?</h2>
          <Link href="/early-access">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3 text-lg">
              Request API access →
            </Button>
          </Link>
          <p className="text-muted-foreground text-sm">
            Get instant access to all NFL team stats and more in early access.
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
