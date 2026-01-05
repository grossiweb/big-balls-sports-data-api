"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { ThemeAwareLogo } from "@/components/theme-aware-logo"

const NBA_STATS = [
  // General Stats
  {
    stat_id: 1242,
    display_name: "Rebounds Per Game",
    abbreviation: "REB",
    description: "The average rebounds per game.",
    category: "general",
  },
  {
    stat_id: 1243,
    display_name: "Assist To Turnover Ratio",
    abbreviation: "AST/TO",
    description: "The average number of assists a player or team records per turnover",
    category: "general",
  },
  {
    stat_id: 1244,
    display_name: "Fouls Per Game",
    abbreviation: "PF",
    description: "The average fouls committed per game.",
    category: "general",
  },
  {
    stat_id: 1245,
    display_name: "Games Played",
    abbreviation: "GP",
    description: "Games Played",
    category: "general",
  },
  {
    stat_id: 1246,
    display_name: "Games Started",
    abbreviation: "GS",
    description: "The number of games started by an athlete.",
    category: "general",
  },
  {
    stat_id: 1247,
    display_name: "Minutes",
    abbreviation: "MIN",
    description: "The total number of minutes played.",
    category: "general",
  },
  {
    stat_id: 1248,
    display_name: "Minutes Per Game",
    abbreviation: "MIN",
    description: "The average number of minutes per game.",
    category: "general",
  },
  {
    stat_id: 1249,
    display_name: "Rebounds",
    abbreviation: "REB",
    description: "The total number of rebounds for a team or player",
    category: "general",
  },
  {
    stat_id: 1250,
    display_name: "Rebounds",
    abbreviation: "REB",
    description: "The total number of rebounds (offensive and defensive).",
    category: "general",
  },
  {
    stat_id: 1262,
    display_name: "Turnovers Per Game",
    abbreviation: "TO",
    description: "The average turnovers committed per game.",
    category: "general",
  },
  // Offensive Stats
  {
    stat_id: 1251,
    display_name: "Free Throw %",
    abbreviation: "FT%",
    description: "The ratio of free throws made to free throws attempted: FTM / FTA",
    category: "offensive",
  },
  {
    stat_id: 1252,
    display_name: "3-Point Field Goal Percentage",
    abbreviation: "3P%",
    description: "The ratio of 3pt field goals made to 3pt field goals attempted: 3PM / 3PA.",
    category: "offensive",
  },
  {
    stat_id: 1253,
    display_name: "Average Field Goals Made",
    abbreviation: "FGM",
    description: "The average field goals made per game.",
    category: "offensive",
  },
  {
    stat_id: 1254,
    display_name: "Average Field Goals Attempted",
    abbreviation: "FGA",
    description: "The average field goals attempted per game.",
    category: "offensive",
  },
  {
    stat_id: 1255,
    display_name: "Average 3-Point Field Goals Made",
    abbreviation: "3PM",
    description: "The average three point field goals made per game.",
    category: "offensive",
  },
  {
    stat_id: 1256,
    display_name: "Average 3-Point Field Goals Attempted",
    abbreviation: "3PA",
    description: "The average three point field goals attempted per game.",
    category: "offensive",
  },
  {
    stat_id: 1257,
    display_name: "Average Free Throws Made",
    abbreviation: "FTM",
    description: "The average free throw shots made per game.",
    category: "offensive",
  },
  {
    stat_id: 1258,
    display_name: "Average Free Throws Attempted",
    abbreviation: "FTA",
    description: "The average free throw shots attempted per game.",
    category: "offensive",
  },
  {
    stat_id: 1259,
    display_name: "Points Per Game",
    abbreviation: "PTS",
    description: "The average number of points scored per game.",
    category: "offensive",
  },
  {
    stat_id: 1260,
    display_name: "Offensive Rebounds Per Game",
    abbreviation: "OR",
    description: "The average offensive rebounds per game.",
    category: "offensive",
  },
  {
    stat_id: 1261,
    display_name: "Assists Per Game",
    abbreviation: "AST",
    description: "The average assists per game.",
    category: "offensive",
  },
  {
    stat_id: 1263,
    display_name: "2-Point Field Goal Percentage",
    abbreviation: "2P%",
    description: "The percentage of 2-points fields goals made by a team or player.",
    category: "offensive",
  },
  {
    stat_id: 1264,
    display_name: "Scoring Efficiency",
    abbreviation: "SC-EFF",
    description: "The efficiency with which a team or player scores the basketball.",
    category: "offensive",
  },
  {
    stat_id: 1265,
    display_name: "Shooting Efficiency",
    abbreviation: "SH-EFF",
    description: "The efficiency with which a team or player shoots the basketball.",
    category: "offensive",
  },
  {
    stat_id: 1266,
    display_name: "Field Goal %",
    abbreviation: "FG%",
    description: "The ratio of field goals made to field goals attempted: FGM / FGA",
    category: "offensive",
  },
  {
    stat_id: 1267,
    display_name: "2-Point Field Goals Made",
    abbreviation: "2PM",
    description: "The number of 2-point field goals made for a team or player.",
    category: "offensive",
  },
  {
    stat_id: 1268,
    display_name: "2-Point Field Goals Attempted",
    abbreviation: "2PA",
    description: "The number of 2-point field goals attempted for a team or player.",
    category: "offensive",
  },
  {
    stat_id: 1269,
    display_name: "Points",
    abbreviation: "PTS",
    description: "The number of points scored.",
    category: "offensive",
  },
  {
    stat_id: 1270,
    display_name: "Offensive Rebounds",
    abbreviation: "OREB",
    description: "The number of times when the offense obtains the possession of the ball after a missed shot.",
    category: "offensive",
  },
  {
    stat_id: 1271,
    display_name: "Assists",
    abbreviation: "AST",
    description:
      "The number of times a player who passes the ball to a teammate in a way that leads to a score by field goal.",
    category: "offensive",
  },
  {
    stat_id: 1272,
    display_name: "Turnovers",
    abbreviation: "TO",
    description: "The number of times a player loses possession to the other team.",
    category: "offensive",
  },
  {
    stat_id: 1273,
    display_name: "Field Goals Made",
    abbreviation: "FGM",
    description: "The total number of field goals made.",
    category: "offensive",
  },
  {
    stat_id: 1274,
    display_name: "Field Goals Attempted",
    abbreviation: "FGA",
    description: "The total number of field goals attempted.",
    category: "offensive",
  },
  {
    stat_id: 1275,
    display_name: "3-Point Field Goals Made",
    abbreviation: "3PM",
    description: "The number of 3-point field goals made.",
    category: "offensive",
  },
  {
    stat_id: 1276,
    display_name: "3-Point Field Goals Attempted",
    abbreviation: "3PA",
    description: "The number of 3-point field goals attempted.",
    category: "offensive",
  },
  {
    stat_id: 1277,
    display_name: "Free Throws Made",
    abbreviation: "FTM",
    description: "The number of free throws made.",
    category: "offensive",
  },
  {
    stat_id: 1278,
    display_name: "Free Throws Attempted",
    abbreviation: "FTA",
    description: "The number of free throws attempted.",
    category: "offensive",
  },
  // Defensive Stats
  {
    stat_id: 1279,
    display_name: "Steals Per Game",
    abbreviation: "STL",
    description: "The average steals per game.",
    category: "defensive",
  },
  {
    stat_id: 1280,
    display_name: "Blocks Per Game",
    abbreviation: "BLK",
    description: "The average blocks per game.",
    category: "defensive",
  },
  {
    stat_id: 1281,
    display_name: "Defensive Rebounds Per Game",
    abbreviation: "DR",
    description: "The average defensive rebounds per game.",
    category: "defensive",
  },
  {
    stat_id: 1282,
    display_name: "Steals",
    abbreviation: "STL",
    description: "The number of times a player takes the ball from an opponent.",
    category: "defensive",
  },
  {
    stat_id: 1283,
    display_name: "Blocks",
    abbreviation: "BLK",
    description: "The number of times a player blocks an opponent's shot.",
    category: "defensive",
  },
  {
    stat_id: 1284,
    display_name: "Defensive Rebounds",
    abbreviation: "DR",
    description: "The number of defensive rebounds for a team or player.",
    category: "defensive",
  },
  {
    stat_id: 1285,
    display_name: "Defensive Rating",
    abbreviation: "DRtg",
    description: "Points allowed per 100 possessions.",
    category: "defensive",
  },
  {
    stat_id: 1286,
    display_name: "Opponent Field Goal %",
    abbreviation: "Opp FG%",
    description: "The field goal percentage allowed by the team.",
    category: "defensive",
  },
]

// Load player stats with categories
const NBA_PLAYER_STATS = [
  {"id":328,"name":"avgRebounds","display_name":"Rebounds Per Game","abbreviation":"REB","description":"The average rebounds per game.","sport_id":4,"category":"general"},
  {"id":329,"name":"assistTurnoverRatio","display_name":"Assist To Turnover Ratio","abbreviation":"AST/TO","description":"The average number of assists a player or team records per turnover","sport_id":4,"category":"general"},
  {"id":330,"name":"avgFouls","display_name":"Fouls Per Game","abbreviation":"PF","description":"The average fouls committed per game.","sport_id":4,"category":"general"},
  {"id":331,"name":"gamesPlayed","display_name":"Games Played","abbreviation":"GP","description":"Games Played","sport_id":4,"category":"general"},
  {"id":332,"name":"gamesStarted","display_name":"Games Started","abbreviation":"GS","description":"The number of games started by an athlete.","sport_id":4,"category":"general"},
  {"id":333,"name":"minutes","display_name":"Minutes","abbreviation":"MIN","description":"The total number of minutes played.","sport_id":4,"category":"general"},
  {"id":334,"name":"avgMinutes","display_name":"Minutes Per Game","abbreviation":"MIN","description":"The average number of minutes per game.","sport_id":4,"category":"general"},
  {"id":335,"name":"totalRebounds","display_name":"Rebounds","abbreviation":"REB","description":"The total number of rebounds for a team or player","sport_id":4,"category":"general"},
  {"id":336,"name":"rebounds","display_name":"Rebounds","abbreviation":"REB","description":"The total number of rebounds (offensive and defensive).","sport_id":4,"category":"general"},
  {"id":337,"name":"freeThrowPct","display_name":"Free Throw %","abbreviation":"FT%","description":"The ratio of free throws made to free throws attempted: FTM / FTA","sport_id":4,"category":"offensive"},
  {"id":338,"name":"threePointPct","display_name":"3-Point Field Goal Percentage","abbreviation":"3P%","description":"The ratio of 3pt field goals made to 3pt field goals attempted: 3PM / 3PA.","sport_id":4,"category":"offensive"},
  {"id":339,"name":"avgFieldGoalsMade","display_name":"Average Field Goals Made","abbreviation":"FGM","description":"The average field goals made per game.","sport_id":4,"category":"offensive"},
  {"id":340,"name":"avgFieldGoalsAttempted","display_name":"Average Field Goals Attempted","abbreviation":"FGA","description":"The average field goals attempted per game.","sport_id":4,"category":"offensive"},
  {"id":341,"name":"avgThreePointFieldGoalsMade","display_name":"Average 3-Point Field Goals Made","abbreviation":"3PM","description":"The average three point field goals made per game.","sport_id":4,"category":"offensive"},
  {"id":342,"name":"avgThreePointFieldGoalsAttempted","display_name":"Average 3-Point Field Goals Attempted","abbreviation":"3PA","description":"The average three point field goals attempted per game.","sport_id":4,"category":"offensive"},
  {"id":343,"name":"avgFreeThrowsMade","display_name":"Average Free Throws Made","abbreviation":"FTM","description":"The average free throw shots made per game.","sport_id":4,"category":"offensive"},
  {"id":344,"name":"avgFreeThrowsAttempted","display_name":"Average Free Throws Attempted","abbreviation":"FTA","description":"The average free throw shots attempted per game.","sport_id":4,"category":"offensive"},
  {"id":345,"name":"avgPoints","display_name":"Points Per Game","abbreviation":"PTS","description":"The average number of points scored per game.","sport_id":4,"category":"offensive"},
  {"id":346,"name":"avgOffensiveRebounds","display_name":"Offensive Rebounds Per Game","abbreviation":"OR","description":"The average offensive rebounds per game.","sport_id":4,"category":"offensive"},
  {"id":347,"name":"avgAssists","display_name":"Assists Per Game","abbreviation":"AST","description":"The average assists per game.","sport_id":4,"category":"offensive"},
  {"id":348,"name":"avgTurnovers","display_name":"Turnovers Per Game","abbreviation":"TO","description":"The average turnovers committed per game.","sport_id":4,"category":"offensive"},
  {"id":349,"name":"twoPointFieldGoalPct","display_name":"2-Point Field Goal Percentage","abbreviation":"2P%","description":"The percentage of 2-points fields goals made by a team or player.","sport_id":4,"category":"offensive"},
  {"id":350,"name":"scoringEfficiency","display_name":"Scoring Efficiency","abbreviation":"SC-EFF","description":"The efficiency with which a team or player scores the basketball.","sport_id":4,"category":"offensive"},
  {"id":351,"name":"shootingEfficiency","display_name":"Shooting Efficiency","abbreviation":"SH-EFF","description":"The efficiency with which a team or player shoots the basketball.","sport_id":4,"category":"offensive"},
  {"id":352,"name":"fieldGoalPct","display_name":"Field Goal %","abbreviation":"FG%","description":"The ratio of field goals made to field goals attempted: FGM / FGA","sport_id":4,"category":"offensive"},
  {"id":353,"name":"twoPointFieldGoalsMade","display_name":"2-Point Field Goals Made","abbreviation":"2PM","description":"The number of 2-point field goals made for a team or player.","sport_id":4,"category":"offensive"},
  {"id":354,"name":"twoPointFieldGoalsAttempted","display_name":"2-Point Field Goals Attempted","abbreviation":"2PA","description":"The number of 2-point field goals attempted for a team or player.","sport_id":4,"category":"offensive"},
  {"id":355,"name":"points","display_name":"Points","abbreviation":"PTS","description":"The number of points scored.","sport_id":4,"category":"offensive"},
  {"id":356,"name":"offensiveRebounds","display_name":"Offensive Rebounds","abbreviation":"OREB","description":"The number of times when the offense obtains the possession of the ball after a missed shot.","sport_id":4,"category":"offensive"},
  {"id":357,"name":"assists","display_name":"Assists","abbreviation":"AST","description":"The number of times a player who passes the ball to a teammate in a way that leads to a score by field goal.","sport_id":4,"category":"offensive"},
  {"id":358,"name":"turnovers","display_name":"Turnovers","abbreviation":"TO","description":"The number of times a player loses possession to the other team.","sport_id":4,"category":"offensive"},
  {"id":359,"name":"fieldGoalsMade","display_name":"Field Goals Made","abbreviation":"FGM","description":"The number of times a 2pt field goal was made.","sport_id":4,"category":"offensive"},
  {"id":360,"name":"fieldGoalsAttempted","display_name":"Field Goals Attempted","abbreviation":"FGA","description":"The number of times a 2pt field goal was attempted.","sport_id":4,"category":"offensive"},
  {"id":361,"name":"freeThrowsMade","display_name":"Free Throws Made","abbreviation":"FTM","description":"The number of times a free throw was made.","sport_id":4,"category":"offensive"},
  {"id":362,"name":"freeThrowsAttempted","display_name":"Free Throws Attempted","abbreviation":"FTA","description":"The number of times a free throw was attempted.","sport_id":4,"category":"offensive"},
  {"id":363,"name":"threePointFieldGoalsMade","display_name":"3-Point Field Goals Made","abbreviation":"3PM","description":"The number of times a 3pt field goal was made.","sport_id":4,"category":"offensive"},
  {"id":364,"name":"threePointFieldGoalsAttempted","display_name":"3-Point Field Goals Attempted","abbreviation":"3PA","description":"The number of times a 3pt field goal was attempted.","sport_id":4,"category":"offensive"},
  {"id":365,"name":"threePointFieldGoalPct","display_name":"Three Point %","abbreviation":"3P%","description":"The ratio of 3pt field goals made to 3pt field goals attempted: 3PM / 3PA.","sport_id":4,"category":"offensive"},
  {"id":366,"name":"avgTwoPointFieldGoalsMade","display_name":"2-Point Field Goals Made per Game","abbreviation":"2PM","description":"The number of 2-point field goals made per game for a team or player.","sport_id":4,"category":"offensive"},
  {"id":367,"name":"avgTwoPointFieldGoalsAttempted","display_name":"2-Point Field Goals Attempted per Game","abbreviation":"2PA","description":"The number of 2-point field goals attempted per game for a team or player.","sport_id":4,"category":"offensive"},
  {"id":368,"name":"avgDefensiveRebounds","display_name":"Defensive Rebounds Per Game","abbreviation":"DR","description":"The average defensive rebounds per game.","sport_id":4,"category":"defensive"},
  {"id":369,"name":"avgBlocks","display_name":"Blocks Per Game","abbreviation":"BLK","description":"The average blocks per game.","sport_id":4,"category":"defensive"},
  {"id":370,"name":"avgSteals","display_name":"Steals Per Game","abbreviation":"STL","description":"The average steals per game.","sport_id":4,"category":"defensive"},
  {"id":371,"name":"defensiveRebounds","display_name":"Defensive Rebounds","abbreviation":"DREB","description":"The number of times when the defense obtains the possession of the ball after a missed shot by the offense.","sport_id":4,"category":"defensive"},
  {"id":372,"name":"steals","display_name":"Steals","abbreviation":"STL","description":"The number of times a defensive player forced a turnover by intercepting or deflecting a pass or a dribble of an offensive player.","sport_id":4,"category":"defensive"},
  {"id":373,"name":"blocks","display_name":"Blocks","abbreviation":"BLK","description":"Short for blocked shot, number of times when a defensive player legally deflects a field goal attempt from an offensive player.","sport_id":4,"category":"defensive"}
].filter(stat => stat.category) // Only include stats with categories

const categories = Array.from(new Set(NBA_STATS.map((stat) => stat.category)))
const playerCategories = Array.from(new Set(NBA_PLAYER_STATS.map((stat) => stat.category)))

export default function NBAStatsPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-balance">NBA Stats</h1>
          <p className="text-xl text-muted-foreground max-w-3xl text-balance">
            Complete reference of all NBA statistics available through the Big Balls Sports API. These stats are
            updated in real-time and include per-game averages and national rankings.
          </p>
        </div>
      </section>

      {/* Stats Content */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="team" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto mb-12 grid-cols-2">
              <TabsTrigger value="team">Team Stats</TabsTrigger>
              <TabsTrigger value="player">Player Stats</TabsTrigger>
            </TabsList>

            <TabsContent value="team" className="space-y-12">
              {categories.map((category) => {
                const statsByCategory = NBA_STATS.filter((stat) => stat.category === category)
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
            </TabsContent>

            <TabsContent value="player" className="space-y-12">
              {playerCategories.map((category) => {
                const statsByCategory = NBA_PLAYER_STATS.filter((stat) => stat.category === category)
                return (
                  <div key={category}>
                    <h2 className="text-2xl font-bold mb-6 capitalize text-primary">{category} Statistics</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {statsByCategory.map((stat) => (
                        <div
                          key={stat.id}
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
                            <p className="text-xs text-muted-foreground/60">Stat ID: {stat.id}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </TabsContent>
          </Tabs>
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
                <span>Both team and player stats include season totals, per-game averages, and national rankings</span>
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
          <h2 className="text-3xl font-bold">Ready to integrate NBA stats?</h2>
          <Link href="/early-access">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3 text-lg">
              Request API access →
            </Button>
          </Link>
          <p className="text-muted-foreground text-sm">
            Get instant access to all NBA team and player stats in early access.
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
