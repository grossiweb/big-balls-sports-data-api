"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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

// Load player stats with categories
const NFL_PLAYER_STATS = [
  {"id":1,"name":"completionPct","display_name":"Completion Percentage","abbreviation":"CMP%","description":"The percentage of completed passes.","sport_id":2,"category":"passing"},
  {"id":2,"name":"completions","display_name":"Completions","abbreviation":"CMP","description":"The times a player completes a pass to another player who is eligible to catch a pass.","sport_id":2,"category":"passing"},
  {"id":3,"name":"interceptionPct","display_name":"Interception Percentage","abbreviation":"INT%","description":"The percentage of passes thrown that were intercepted by the opposing team.","sport_id":2,"category":"passing"},
  {"id":4,"name":"interceptions","display_name":"Interceptions","abbreviation":"INT","description":"The number of passes thrown that were intercepted by the opposing team.","sport_id":2,"category":"passing"},
  {"id":5,"name":"longPassing","display_name":"Longest Pass","abbreviation":"LNG","description":"The longest pass play completed in terms of yards.","sport_id":2,"category":"passing"},
  {"id":6,"name":"netPassingYards","display_name":"Passing","abbreviation":"NYDS","description":"The amount of net passing yards.","sport_id":2,"category":"passing"},
  {"id":7,"name":"netPassingYardsPerGame","display_name":"Net Passing Yards Per Game","abbreviation":"NYDS/G","description":"The amount of net passing yards per game.","sport_id":2,"category":"passing"},
  {"id":8,"name":"passingAttempts","display_name":"Passing Attempts","abbreviation":"ATT","description":"The number of times a pass is attempted.","sport_id":2,"category":"passing"},
  {"id":9,"name":"passingTouchdownPct","display_name":"Passing Touchdown %","abbreviation":"TD%","description":"The percentage of passes that result in a touchdown.","sport_id":2,"category":"passing"},
  {"id":10,"name":"passingTouchdowns","display_name":"Touchdowns","abbreviation":"TD","description":"The total number of passing touchdowns.","sport_id":2,"category":"passing"},
  {"id":11,"name":"QBRating","display_name":"Passer Rating","abbreviation":"RTG","description":"Passer Rating","sport_id":2,"category":"passing"},
  {"id":12,"name":"sacks","display_name":"Sacks","abbreviation":"SACKS","description":"The total number of sacks.","sport_id":2,"category":"passing"},
  {"id":13,"name":"sackYardsLost","display_name":"Sack Yards Lost","abbreviation":"SYL","description":"The amount of yards lost due to sacks.","sport_id":2,"category":"passing"},
  {"id":14,"name":"yardsPerPassAttempt","display_name":"Yards Per Pass Attempt","abbreviation":"AVG","description":"The average number yards per pass attempt.","sport_id":2,"category":"passing"},
  {"id":15,"name":"passingYards","display_name":"Yards","abbreviation":"YDS","description":"The total passing yards.","sport_id":2,"category":"passing"},
  {"id":16,"name":"passingFumblesLost","display_name":"Passing Fumbles Lost","abbreviation":"FL","description":"The number of times the ball has been fumbled and lost to the opposing team after a completed pass.","sport_id":2,"category":"passing"},
  {"id":22,"name":"passingYardsPerGame","display_name":"Yards Passing","abbreviation":"YDS/G","description":"The number of passing yards per game.","sport_id":2,"category":"passing"},
  {"id":23,"name":"rushingAttempts","display_name":"Rushing Attempts","abbreviation":"CAR","description":"The total number of attempted rushes.","sport_id":2,"category":"rushing"},
  {"id":24,"name":"rushingYards","display_name":"Yards","abbreviation":"YDS","description":"The total rushing yards.","sport_id":2,"category":"rushing"},
  {"id":25,"name":"yardsPerRushAttempt","display_name":"Yards Per Rushing Attempt","abbreviation":"AVG","description":"The average number of yards per rush attempt.","sport_id":2,"category":"rushing"},
  {"id":26,"name":"longRushing","display_name":"Longest Run","abbreviation":"LONG","description":"The amount of yards for the longest run.","sport_id":2,"category":"rushing"},
  {"id":27,"name":"rushingBigPlays","display_name":"20+ Yard Rushing Plays","abbreviation":"BIG","description":"The number of rushing big plays gained.","sport_id":2,"category":"rushing"},
  {"id":28,"name":"rushingTouchdowns","display_name":"Touchdowns","abbreviation":"TD","description":"The total number of rushing touchdowns.","sport_id":2,"category":"rushing"},
  {"id":29,"name":"rushingYardsPerGame","display_name":"Yards Rushing","abbreviation":"YDS/G","description":"The average number of rushing yards per game.","sport_id":2,"category":"rushing"},
  {"id":30,"name":"rushingFumbles","display_name":"Rushing Fumbles","abbreviation":"FUM","description":"The number of times there is a run and then the ball is fumbled.","sport_id":2,"category":"rushing"},
  {"id":31,"name":"rushingFumblesLost","display_name":"Rushing Fumbles Lost","abbreviation":"LST","description":"The number of times there is a run and then the ball is fumbled.","sport_id":2,"category":"rushing"},
  {"id":32,"name":"rushingFirstDowns","display_name":"Rushing 1st downs","abbreviation":"FD","description":"The number of times a first down is picked up by a run.","sport_id":2,"category":"rushing"},
  {"id":35,"name":"receptions","display_name":"Receptions","abbreviation":"REC","description":"The total number of receptions.","sport_id":2,"category":"receiving"},
  {"id":36,"name":"receivingTargets","display_name":"Receiving Targets","abbreviation":"TGTS","description":"The number of times a receiver is thrown to.","sport_id":2,"category":"receiving"},
  {"id":37,"name":"receivingYards","display_name":"Yards","abbreviation":"YDS","description":"The total receiving yards.","sport_id":2,"category":"receiving"},
  {"id":38,"name":"receivingTouchdowns","display_name":"Touchdowns","abbreviation":"TD","description":"The total number of receiving touchdowns.","sport_id":2,"category":"receiving"},
  {"id":39,"name":"longReception","display_name":"Longest Reception","abbreviation":"LONG","description":"The amount of yards for the longest reception.","sport_id":2,"category":"receiving"},
  {"id":40,"name":"receivingBigPlays","display_name":"20+ Yard Receiving Plays","abbreviation":"BIG","description":"The number of receiving big plays gained.","sport_id":2,"category":"receiving"},
  {"id":41,"name":"receivingYardsPerGame","display_name":"Receiving Yards Per Game","abbreviation":"YDS/G","description":"The average number of receiving yards per game.","sport_id":2,"category":"receiving"},
  {"id":42,"name":"receivingFumbles","display_name":"Receiving Fumbles","abbreviation":"FUM","description":"The number of times a reception is made and then the ball is fumbled.","sport_id":2,"category":"receiving"},
  {"id":43,"name":"receivingFumblesLost","display_name":"Receiving Fumbles Lost","abbreviation":"LST","description":"The number of times a reception is made and the balled is fumbled and recovered by the opposing team.","sport_id":2,"category":"receiving"},
  {"id":44,"name":"receivingYardsAfterCatch","display_name":"Receiving Yards After Catch","abbreviation":"YAC","description":"The number of yards gained after the catch has been made.","sport_id":2,"category":"receiving"},
  {"id":45,"name":"receivingFirstDowns","display_name":"Receiving First Downs","abbreviation":"FD","description":"The number of times a first down is picked up by a reception.","sport_id":2,"category":"receiving"},
  {"id":46,"name":"yardsPerReception","display_name":"Yards Per Reception","abbreviation":"AVG","description":"The average number of yards per reception.","sport_id":2,"category":"receiving"},
  {"id":68,"name":"soloTackles","display_name":"Solo Tackles","abbreviation":"SOLO","description":"The number of times a tackle was made unassisted.","sport_id":2,"category":"defensive"},
  {"id":69,"name":"assistTackles","display_name":"Assist Tackles","abbreviation":"AST","description":"The number of assists on tackles.","sport_id":2,"category":"defensive"},
  {"id":70,"name":"totalTackles","display_name":"Tackles","abbreviation":"TOT","description":"The total number of tackles.","sport_id":2,"category":"defensive"},
  {"id":71,"name":"sackYards","display_name":"Sack Yards","abbreviation":"SCKYDS","description":"The number of yards lost from sacks.","sport_id":2,"category":"defensive"},
  {"id":72,"name":"stuffs","display_name":"Stuffs","abbreviation":"STF","description":"The number of times that a runner is stuffed at or behind the line of scrimmage.","sport_id":2,"category":"defensive"},
  {"id":73,"name":"passesDefended","display_name":"Passes Defended","abbreviation":"PD","description":"The total number of passes defended.","sport_id":2,"category":"defensive"},
  {"id":74,"name":"avgInterceptionYards","display_name":"Average Interception Yards","abbreviation":"AVG","description":"The average number of return yards per interception.","sport_id":2,"category":"defensive"},
  {"id":75,"name":"longInterception","display_name":"Long Interception","abbreviation":"LNG","description":"The amount of yards of the longest interception return.","sport_id":2,"category":"defensive"},
  {"id":76,"name":"miscTouchdowns","display_name":"Miscellaneous Touchdowns","abbreviation":"MISCTD","description":"The number of miscellaneous touchdowns.","sport_id":2,"category":"defensive"},
  {"id":77,"name":"kicksBlocked","display_name":"Kicks Blocked","abbreviation":"KB","description":"The number of times a kick was blocked.","sport_id":2,"category":"defensive"},
  {"id":78,"name":"tacklesForLoss","display_name":"Tackles For Loss","abbreviation":"TFL","description":"The number of tackles that result in a loss of yardage.","sport_id":2,"category":"defensive"},
  {"id":79,"name":"interceptionYards","display_name":"Yards","abbreviation":"YDS","description":"The number of yards gained after an interception.","sport_id":2,"category":"defensive"},
  {"id":80,"name":"interceptionTouchdowns","display_name":"Touchdowns","abbreviation":"TD","description":"The number of times an interception is returned for a touchdown.","sport_id":2,"category":"defensive"},
  {"id":81,"name":"fumbles","display_name":"Fumbles","abbreviation":"FUM","description":"The number of times a player/team has fumbled the ball","sport_id":2,"category":"general"},
  {"id":82,"name":"fumblesForced","display_name":"Forced Fumbles","abbreviation":"FF","description":"The total number of forced fumbles.","sport_id":2,"category":"defensive"},
  {"id":83,"name":"fumblesRecovered","display_name":"Fumbles Recovered","abbreviation":"REC","description":"The number of fumbles recovered.","sport_id":2,"category":"defensive"},
  {"id":84,"name":"fumblesTouchdowns","display_name":"Fumbles Touchdowns","abbreviation":"FTD","description":"The number of times a fumbles is recovered and returned for a touchdown.","sport_id":2,"category":"defensive"},
  {"id":85,"name":"gamesPlayed","display_name":"Games Played","abbreviation":"GP","description":"Games Played","sport_id":2,"category":"general"},
  {"id":86,"name":"kickReturns","display_name":"Kick Returns","abbreviation":"NO","description":"The number of kick returns.","sport_id":2,"category":"returning"},
  {"id":87,"name":"kickReturnYards","display_name":"Yards","abbreviation":"YDS","description":"The total yardage of kick returns.","sport_id":2,"category":"returning"},
  {"id":88,"name":"yardsPerKickReturn","display_name":"Yards Per Kick Return","abbreviation":"AVG","description":"The average number of yards per kick return.","sport_id":2,"category":"returning"},
  {"id":89,"name":"longKickReturn","display_name":"Longest Kick Return","abbreviation":"LONG","description":"The longest kick return in yards.","sport_id":2,"category":"returning"},
  {"id":90,"name":"kickReturnTouchdowns","display_name":"Touchdowns","abbreviation":"TD","description":"The number of kick return touchdowns.","sport_id":2,"category":"returning"},
  {"id":91,"name":"puntReturns","display_name":"Punt Returns","abbreviation":"NO","description":"The number of punt returns.","sport_id":2,"category":"returning"},
  {"id":92,"name":"puntReturnYards","display_name":"Yards","abbreviation":"YDS","description":"The total yardage of punt returns.","sport_id":2,"category":"returning"},
  {"id":93,"name":"yardsPerPuntReturn","display_name":"Yards Per Punt Return","abbreviation":"AVG","description":"The average number of yards per punt return.","sport_id":2,"category":"returning"},
  {"id":94,"name":"longPuntReturn","display_name":"Longest Punt Return","abbreviation":"LONG","description":"The longest punt return in yards.","sport_id":2,"category":"returning"},
  {"id":95,"name":"puntReturnTouchdowns","display_name":"Touchdowns","abbreviation":"TD","description":"The number of punt return touchdowns.","sport_id":2,"category":"returning"},
  {"id":96,"name":"puntReturnFairCatches","display_name":"Punt Return Fair Catches","abbreviation":"FC","description":"The number of punt return fair catches.","sport_id":2,"category":"returning"},
  {"id":97,"name":"kickReturnFumblesLost","display_name":"Kick Return Fumbles Lost","abbreviation":"KRFL","description":"The number of kick return fumbles that are lost.","sport_id":2,"category":"returning"},
  {"id":98,"name":"puntReturnFumblesLost","display_name":"Punt Return Fumbles Lost","abbreviation":"PRFL","description":"The number of punt return fumbles that are lost.","sport_id":2,"category":"returning"},
  {"id":99,"name":"fieldGoalsMade","display_name":"Field Goal Made","abbreviation":"FGM","description":"The number of times a field goal is made.","sport_id":2,"category":"kicking"},
  {"id":100,"name":"fieldGoalAttempts","display_name":"Field Goal Attempts","abbreviation":"FGA","description":"The number of times a field goal is attempted.","sport_id":2,"category":"kicking"},
  {"id":101,"name":"fieldGoalPct","display_name":"Field Goal Percentage","abbreviation":"PCT","description":"The percentage of field goals attempted that are made.","sport_id":2,"category":"kicking"},
  {"id":102,"name":"longFieldGoalMade","display_name":"Longest Field Goal Made","abbreviation":"LONG","description":"The distance of the longest field goal made.","sport_id":2,"category":"kicking"},
  {"id":103,"name":"fieldGoalAttempts1_19","display_name":"Field Goal Attempts 1-19","abbreviation":"FGA 1-19","description":"The number of field goals attempted from 1-19 yards.","sport_id":2,"category":"kicking"},
  {"id":104,"name":"fieldGoalAttempts20_29","display_name":"Field Goal Attempts 20-29","abbreviation":"FGA 20-29","description":"The number of field goals attempted from 20-29 yards.","sport_id":2,"category":"kicking"},
  {"id":105,"name":"fieldGoalAttempts30_39","display_name":"Field Goal Attempts 30-39","abbreviation":"FGA 30-39","description":"The number of field goals attempted from 30-39 yards.","sport_id":2,"category":"kicking"},
  {"id":106,"name":"fieldGoalAttempts40_49","display_name":"Field Goal Attempts 40-49","abbreviation":"FGA 40-49","description":"The number of field goals attempted from 40-49 yards.","sport_id":2,"category":"kicking"},
  {"id":107,"name":"fieldGoalAttempts50","display_name":"Field Goal Attempts 50+","abbreviation":"FGA 50+","description":"The number of field goals attempted from 50+ yards.","sport_id":2,"category":"kicking"},
  {"id":108,"name":"extraPointsMade","display_name":"Extra Points Made","abbreviation":"XPM","description":"The number of extra point attempts made.","sport_id":2,"category":"kicking"},
  {"id":109,"name":"extraPointAttempts","display_name":"Extra Point Attempts","abbreviation":"XPA","description":"The number of extra point attempts.","sport_id":2,"category":"kicking"},
  {"id":110,"name":"extraPointPct","display_name":"Extra Point Percentage","abbreviation":"XP%","description":"The percentage of extra point attempts that are converted.","sport_id":2,"category":"kicking"},
  {"id":111,"name":"fieldGoalsMade1_19","display_name":"Field Goals Made 1-19","abbreviation":"FGM 1-19","description":"The number of field goals made from 1-19 yards.","sport_id":2,"category":"kicking"},
  {"id":112,"name":"fieldGoalsMade20_29","display_name":"Field Goals Made 20-29","abbreviation":"FGM 20-29","description":"The number of field goals made from 20-29 yards.","sport_id":2,"category":"kicking"},
  {"id":113,"name":"fieldGoalsMade30_39","display_name":"Field Goals Made 30-39","abbreviation":"FGM 30-39","description":"The number of field goals made from 30-39 yards.","sport_id":2,"category":"kicking"},
  {"id":114,"name":"fieldGoalsMade40_49","display_name":"Field Goals Made 40-49","abbreviation":"FGM 40-49","description":"The number of field goals made from 40-49 yards.","sport_id":2,"category":"kicking"},
  {"id":115,"name":"fieldGoalsMade50","display_name":"Field Goals Made 50+","abbreviation":"50+","description":"The number of field goals made from 50+ yards.","sport_id":2,"category":"kicking"},
  {"id":116,"name":"totalKickingPoints","display_name":"Kicking Points","abbreviation":"PTS","description":"The number of total points earned kicking.","sport_id":2,"category":"kicking"},
  {"id":121,"name":"punts","display_name":"Punts","abbreviation":"NO","description":"The number of punts taken.","sport_id":2,"category":"punting"},
  {"id":122,"name":"puntYards","display_name":"Yards","abbreviation":"YDS","description":"The total amount of yardage of punts.","sport_id":2,"category":"punting"},
  {"id":123,"name":"longPunt","display_name":"Longest Punt","abbreviation":"LONG","description":"The distance of the longest punt.","sport_id":2,"category":"punting"},
  {"id":124,"name":"grossAvgPuntYards","display_name":"Average Punt Yards","abbreviation":"AVG","description":"The average gross number of yards per punt.","sport_id":2,"category":"punting"},
  {"id":125,"name":"netAvgPuntYards","display_name":"Net Average Punt Yards","abbreviation":"NET","description":"The average net number of yards per punt.","sport_id":2,"category":"punting"},
  {"id":126,"name":"puntsBlocked","display_name":"Punts Blocked","abbreviation":"PBLK","description":"The number of times a punt was blocked.","sport_id":2,"category":"punting"},
  {"id":127,"name":"puntsInside20","display_name":"Punts Inside 20","abbreviation":"In 20","description":"The number of times a punt is downed inside the 20.","sport_id":2,"category":"punting"},
  {"id":128,"name":"touchbacks","display_name":"Touchbacks","abbreviation":"TB","description":"The number of kickoffs that result in touchbacks.","sport_id":2,"category":"punting"},
  {"id":129,"name":"fairCatches","display_name":"Fair Catches","abbreviation":"FC","description":"The number of fair catches.","sport_id":2,"category":"punting"},
  {"id":130,"name":"avgPuntReturnYards","display_name":"Average Punt Return Yards","abbreviation":"AVG","description":"The average number of yards per punt return.","sport_id":2,"category":"punting"},
  {"id":540,"name":"adjQBR","display_name":"Passer Rating","abbreviation":"RTG","description":"Adjusted Quarterback Rating.","sport_id":2,"category":"passing"}
].filter(stat => stat.category) // Only include stats with categories

const categories = Array.from(new Set(NFL_STATS.map((stat) => stat.category)))
const playerCategories = Array.from(new Set(NFL_PLAYER_STATS.map((stat) => stat.category)))

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
          <h1 className="text-4xl md:text-5xl font-bold text-balance">NFL Stats</h1>
          <p className="text-xl text-muted-foreground max-w-3xl text-balance">
            Complete reference of all NFL statistics available through the Big Balls Sports API. These stats are
            updated in real-time and include per-game averages and national rankings.
          </p>
        </div>
      </section>

      {/* Stats by Category */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="team" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto mb-12 grid-cols-2">
              <TabsTrigger value="team">Team Stats</TabsTrigger>
              <TabsTrigger value="player">Player Stats</TabsTrigger>
            </TabsList>

            <TabsContent value="team" className="space-y-12">
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
            </TabsContent>

            <TabsContent value="player" className="space-y-12">
              {playerCategories.map((category) => {
                const categoryStats = NFL_PLAYER_STATS.filter((stat) => stat.category === category)
                return (
                  <div key={category}>
                    <h2 className="text-2xl font-bold mb-6 capitalize text-primary">{category} Statistics</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {categoryStats.map((stat) => (
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
            Get instant access to all NFL team and player stats in early access.
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
