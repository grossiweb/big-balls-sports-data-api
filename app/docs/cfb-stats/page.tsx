"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { ThemeAwareLogo } from "@/components/theme-aware-logo"

const CFB_STATS = [
  // Miscellaneous Stats
  {
    stat_id: 1658,
    display_name: "1st Downs",
    abbreviation: "",
    description: "The number of first downs.",
    category: "miscellaneous",
  },
  {
    stat_id: 1659,
    display_name: "Rushing 1st downs",
    abbreviation: "FDR",
    description: "The number of times a rush results in a first down.",
    category: "miscellaneous",
  },
  {
    stat_id: 1660,
    display_name: "Passing 1st downs",
    abbreviation: "FDP",
    description: "The number of times a pass results in a first down.",
    category: "miscellaneous",
  },
  {
    stat_id: 1661,
    display_name: "1st downs by penalty",
    abbreviation: "FDPEN",
    description: "The number of times a penalty results in a first down.",
    category: "miscellaneous",
  },
  {
    stat_id: 1662,
    display_name: "Third Down Conversions",
    abbreviation: "3RDC",
    description: "The number of 3rd down conversions.",
    category: "miscellaneous",
  },
  {
    stat_id: 1663,
    display_name: "Third Down Attempts",
    abbreviation: "3RDA",
    description: "The number of 3rd down attempts.",
    category: "miscellaneous",
  },
  {
    stat_id: 1664,
    display_name: "3rd down %",
    abbreviation: "3RDC%",
    description: "The percentage of 3rd downs that are converted.",
    category: "miscellaneous",
  },
  {
    stat_id: 1665,
    display_name: "Fourth Down Conversions",
    abbreviation: "4THC",
    description: "The number of times a fourth down is converted.",
    category: "miscellaneous",
  },
  {
    stat_id: 1666,
    display_name: "First Downs Attempts",
    abbreviation: "FDA",
    description: "The number of attempts at getting a first down.",
    category: "miscellaneous",
  },
  {
    stat_id: 1667,
    display_name: "4th down %",
    abbreviation: "4THC%",
    description: "The percentage of fourth down attempts that are converted.",
    category: "miscellaneous",
  },
  {
    stat_id: 1668,
    display_name: "Total Penalties",
    abbreviation: "TPEN",
    description: "The total number of total penalties.",
    category: "miscellaneous",
  },
  {
    stat_id: 1669,
    display_name: "Total Penalty Yards",
    abbreviation: "TPY",
    description: "The total number of penalty yards.",
    category: "miscellaneous",
  },
  {
    stat_id: 1670,
    display_name: "Possession Time Seconds",
    abbreviation: "POSS",
    description: "The total time of possession in seconds.",
    category: "miscellaneous",
  },
  {
    stat_id: 1671,
    display_name: "Red Zone Field Goal Percentage",
    abbreviation: "RZFG%",
    description: "The percentage of red zone trips that end in a field goal.",
    category: "miscellaneous",
  },
  {
    stat_id: 1672,
    display_name: "Red Zone Scoring Percentage",
    abbreviation: "RZ%",
    description: "The percentage of red zone trips that result in a score.",
    category: "miscellaneous",
  },
  {
    stat_id: 1673,
    display_name: "Red Zone Efficiency Percentage",
    abbreviation: "CMP",
    description: "The percentage of red zone attempts that are converted.",
    category: "miscellaneous",
  },
  {
    stat_id: 1674,
    display_name: "Red Zone Touchdown Percentage",
    abbreviation: "RZTD%",
    description: "The percentage of red zone trips that result in a touchdown.",
    category: "miscellaneous",
  },
  {
    stat_id: 1675,
    display_name: "Total Takeaways",
    abbreviation: "TT",
    description: "The total number of takeaways.",
    category: "miscellaneous",
  },
  {
    stat_id: 1676,
    display_name: "Total Giveaways",
    abbreviation: "TGV",
    description: "The total number of giveaways.",
    category: "miscellaneous",
  },
  {
    stat_id: 1677,
    display_name: "Turnover Ratio",
    abbreviation: "DIFF",
    description: "Difference between take-aways and give-aways",
    category: "miscellaneous",
  },
  {
    stat_id: 1694,
    display_name: "Fumbles",
    abbreviation: "FUM",
    description: "The number of times a player/team has fumbled the ball",
    category: "miscellaneous",
  },
  {
    stat_id: 1812,
    display_name: "Fumbles lost",
    abbreviation: "",
    description: "The number of times the ball has been fumbled and lost to the opposing team.",
    category: "miscellaneous",
  },

  // Defensive Stats
  {
    stat_id: 1678,
    display_name: "Solo Tackles",
    abbreviation: "SOLO",
    description: "The number of times a tackle was made unassisted.",
    category: "defensive",
  },
  {
    stat_id: 1679,
    display_name: "Assist Tackles",
    abbreviation: "AST",
    description: "The number of assists on tackles.",
    category: "defensive",
  },
  {
    stat_id: 1680,
    display_name: "Tackles",
    abbreviation: "TOT",
    description: "The total number of tackles.",
    category: "defensive",
  },
  {
    stat_id: 1681,
    display_name: "Sacks",
    abbreviation: "SACKS",
    description: "The total number of sacks.",
    category: "defensive",
  },
  {
    stat_id: 1682,
    display_name: "Sack Yards",
    abbreviation: "SCKYDS",
    description: "The number of yards lost from sacks.",
    category: "defensive",
  },
  {
    stat_id: 1683,
    display_name: "Stuffs",
    abbreviation: "STF",
    description: "The number of times that a runner is stuffed at or behind the line of scrimmage.",
    category: "defensive",
  },
  {
    stat_id: 1684,
    display_name: "Passes Defended",
    abbreviation: "PD",
    description: "The total number of passes defended.",
    category: "defensive",
  },
  {
    stat_id: 1685,
    display_name: "Average Interception Yards",
    abbreviation: "AVG",
    description: "The average number of return yards per interception.",
    category: "defensive",
  },
  {
    stat_id: 1686,
    display_name: "Long Interception",
    abbreviation: "LNG",
    description: "The amount of yards of the longest interception return.",
    category: "defensive",
  },
  {
    stat_id: 1687,
    display_name: "Miscellaneous Touchdowns",
    abbreviation: "MISCTD",
    description: "The number of miscellaneous touchdowns.",
    category: "defensive",
  },
  {
    stat_id: 1688,
    display_name: "Kicks Blocked",
    abbreviation: "KB",
    description: "The number of times a kick was blocked.",
    category: "defensive",
  },
  {
    stat_id: 1689,
    display_name: "Tackles For Loss",
    abbreviation: "TFL",
    description: "The number of tackles that result in a loss of yardage.",
    category: "defensive",
  },
  {
    stat_id: 1690,
    display_name: "Team Games Played",
    abbreviation: "GP",
    description: "The numbers of team games played.",
    category: "defensive",
  },

  // Defensive Interceptions
  {
    stat_id: 1691,
    display_name: "Interceptions",
    abbreviation: "INT",
    description: "The total number of interceptions.",
    category: "defensive interceptions",
  },
  {
    stat_id: 1692,
    display_name: "Interception Yards",
    abbreviation: "YDS",
    description: "The number of yards gained after an interception.",
    category: "defensive interceptions",
  },
  {
    stat_id: 1693,
    display_name: "Interception Touchdowns",
    abbreviation: "TD",
    description: "The number of times an interception is returned for a touchdown.",
    category: "defensive interceptions",
  },

  // General Stats
  {
    stat_id: 1695,
    display_name: "Forced Fumbles",
    abbreviation: "FF",
    description: "The total number of forced fumbles.",
    category: "general",
  },
  {
    stat_id: 1696,
    display_name: "Fumbles Recovered",
    abbreviation: "FR",
    description: "The number of fumbles recovered.",
    category: "general",
  },
  {
    stat_id: 1697,
    display_name: "Fumbles Touchdowns",
    abbreviation: "FTD",
    description: "The number of times a fumbles is recovered and returned for a touchdown.",
    category: "general",
  },
  { stat_id: 1698, display_name: "Games Played", abbreviation: "GP", description: "Games Played", category: "general" },

  // Returning Stats
  {
    stat_id: 1699,
    display_name: "Kick Returns",
    abbreviation: "NO",
    description: "The number of kick returns.",
    category: "returning",
  },
  {
    stat_id: 1700,
    display_name: "Kick Return Yards",
    abbreviation: "YDS",
    description: "The total yardage of kick returns.",
    category: "returning",
  },
  {
    stat_id: 1701,
    display_name: "Yards Per Kick Return",
    abbreviation: "AVG",
    description: "The average number of yards per kick return.",
    category: "returning",
  },
  {
    stat_id: 1702,
    display_name: "Longest Kick Return",
    abbreviation: "LONG",
    description: "The longest kick return in yards.",
    category: "returning",
  },
  {
    stat_id: 1703,
    display_name: "Kick Return Touchdowns",
    abbreviation: "TD",
    description: "The number of kick return touchdowns.",
    category: "returning",
  },
  {
    stat_id: 1704,
    display_name: "Punt Returns",
    abbreviation: "NO",
    description: "The number of punt returns.",
    category: "returning",
  },
  {
    stat_id: 1706,
    display_name: "Punt Return Yards",
    abbreviation: "YDS",
    description: "The total yardage of punt returns.",
    category: "returning",
  },
  {
    stat_id: 1708,
    display_name: "Yards Per Punt Return",
    abbreviation: "AVG",
    description: "The average number of yards per punt return.",
    category: "returning",
  },
  {
    stat_id: 1710,
    display_name: "Longest Punt Return",
    abbreviation: "LONG",
    description: "The longest punt return in yards.",
    category: "returning",
  },
  {
    stat_id: 1712,
    display_name: "Punt Return Touchdowns",
    abbreviation: "TD",
    description: "The number of punt return touchdowns.",
    category: "returning",
  },
  {
    stat_id: 1714,
    display_name: "Punt Return Fair Catches",
    abbreviation: "FC",
    description: "The number of punt return fair catches.",
    category: "returning",
  },
  {
    stat_id: 1716,
    display_name: "Kick Return Fumbles Lost",
    abbreviation: "KRFL",
    description: "The number of kick return fumbles that are lost.",
    category: "returning",
  },
  {
    stat_id: 1718,
    display_name: "Punt Return Fumbles Lost",
    abbreviation: "PRFL",
    description: "The number of punt return fumbles that are lost.",
    category: "returning",
  },
  {
    stat_id: 1720,
    display_name: "Team Games Played",
    abbreviation: "GP",
    description: "The numbers of team games played.",
    category: "returning",
  },

  // Passing Stats
  {
    stat_id: 1705,
    display_name: "Completion Percentage",
    abbreviation: "CMP%",
    description: "The percentage of completed passes.",
    category: "passing",
  },
  {
    stat_id: 1707,
    display_name: "Completions",
    abbreviation: "CMP",
    description: "The times a player completes a pass to another player who is eligible to catch a pass.",
    category: "passing",
  },
  {
    stat_id: 1709,
    display_name: "Interception Percentage",
    abbreviation: "INT%",
    description: "The percentage of passes thrown that were intercepted by the opposing team.",
    category: "passing",
  },
  {
    stat_id: 1711,
    display_name: "Interceptions",
    abbreviation: "",
    description: "The number of passes thrown that were intercepted by the opposing team.",
    category: "passing",
  },
  {
    stat_id: 1713,
    display_name: "Longest Pass",
    abbreviation: "LNG",
    description: "The longest pass play completed in terms of yards.",
    category: "passing",
  },
  {
    stat_id: 1715,
    display_name: "Passing",
    abbreviation: "",
    description: "The amount of net passing yards.",
    category: "passing",
  },
  {
    stat_id: 1717,
    display_name: "Net Passing Yards Per Game",
    abbreviation: "NYDS/G",
    description: "The amount of net passing yards per game.",
    category: "passing",
  },
  {
    stat_id: 1719,
    display_name: "Passing Attempts",
    abbreviation: "ATT",
    description: "The number of times a pass is attempted.",
    category: "passing",
  },
  {
    stat_id: 1721,
    display_name: "Passing Touchdown %",
    abbreviation: "TD%",
    description: "The percentage of passes that result in a touchdown.",
    category: "passing",
  },
  {
    stat_id: 1723,
    display_name: "Touchdowns",
    abbreviation: "TD",
    description: "The total number of passing touchdowns.",
    category: "passing",
  },
  {
    stat_id: 1725,
    display_name: "Passer Rating",
    abbreviation: "RTG",
    description: "Passer Rating",
    category: "passing",
  },
  {
    stat_id: 1727,
    display_name: "Total Sacks",
    abbreviation: "SACK",
    description: "The total number of sacks.",
    category: "passing",
  },
  {
    stat_id: 1729,
    display_name: "Sack Yards Lost",
    abbreviation: "SYL",
    description: "The amount of yards lost due to sacks.",
    category: "passing",
  },
  {
    stat_id: 1731,
    display_name: "Yards Per Pass Attempt",
    abbreviation: "AVG",
    description: "The average number yards per pass attempt.",
    category: "passing",
  },
  {
    stat_id: 1733,
    display_name: "Yards",
    abbreviation: "YDS",
    description: "The total passing yards.",
    category: "passing",
  },
  {
    stat_id: 1735,
    display_name: "Passing Fumbles Lost",
    abbreviation: "FL",
    description: "The number of times the ball has been fumbled and lost to the opposing team after a completed pass.",
    category: "passing",
  },
  {
    stat_id: 1737,
    display_name: "Team Games Played",
    abbreviation: "TGP",
    description: "The amount of games played.",
    category: "passing",
  },
  {
    stat_id: 1739,
    display_name: "Yards Per Game",
    abbreviation: "",
    description: "The average number of yards per game.",
    category: "passing",
  },
  {
    stat_id: 1741,
    display_name: "Total Points Per Game",
    abbreviation: "TP",
    description: "The number of points scored per game.",
    category: "passing",
  },
  {
    stat_id: 1743,
    display_name: "Total Points",
    abbreviation: "PTS",
    description: "The number of total points scored.",
    category: "passing",
  },
  {
    stat_id: 1747,
    display_name: "Passing Yards Per Game",
    abbreviation: "",
    description: "The number of passing yards per game.",
    category: "passing",
  },

  // Kicking Stats
  {
    stat_id: 1722,
    display_name: "Field Goal Made",
    abbreviation: "FGM",
    description: "The number of times a field goal is made.",
    category: "kicking",
  },
  {
    stat_id: 1724,
    display_name: "Field Goal Attempts",
    abbreviation: "FGA",
    description: "The number of times a field goal is attempted.",
    category: "kicking",
  },
  {
    stat_id: 1726,
    display_name: "Field Goal Percentage",
    abbreviation: "PCT",
    description: "The percentage of field goals attempted that are made.",
    category: "kicking",
  },
  {
    stat_id: 1728,
    display_name: "Longest Field Goal Made",
    abbreviation: "LONG",
    description: "The distance of the longest field goal made.",
    category: "kicking",
  },
  {
    stat_id: 1730,
    display_name: "Field Goal Attempts 1-19",
    abbreviation: "FGA 1-19",
    description: "The number of field goals attempted from 1-19 yards.",
    category: "kicking",
  },
  {
    stat_id: 1732,
    display_name: "Field Goal Attempts 20-29",
    abbreviation: "FGA 20-29",
    description: "The number of field goals attempted from 20-29 yards.",
    category: "kicking",
  },
  {
    stat_id: 1734,
    display_name: "Field Goal Attempts 30-39",
    abbreviation: "FGA 30-39",
    description: "The number of field goals attempted from 30-39 yards.",
    category: "kicking",
  },
  {
    stat_id: 1736,
    display_name: "Field Goal Attempts 40-49",
    abbreviation: "FGA 40-49",
    description: "The number of field goals attempted from 40-49 yards.",
    category: "kicking",
  },
  {
    stat_id: 1738,
    display_name: "Field Goal Attempts 50+",
    abbreviation: "FGA 50+",
    description: "The number of field goals attempted from 50+ yards.",
    category: "kicking",
  },
  {
    stat_id: 1740,
    display_name: "Extra Points Made",
    abbreviation: "XPM",
    description: "The number of extra point attempts made.",
    category: "kicking",
  },
  {
    stat_id: 1742,
    display_name: "Extra Point Attempts",
    abbreviation: "XPA",
    description: "The number of extra point attempts.",
    category: "kicking",
  },
  {
    stat_id: 1744,
    display_name: "Extra Point Percentage",
    abbreviation: "XP%",
    description: "The percentage of extra point attempts that are converted.",
    category: "kicking",
  },
  {
    stat_id: 1746,
    display_name: "Field Goals Made 1-19",
    abbreviation: "FGM 1-19",
    description: "The number of field goals made from 1-19 yards.",
    category: "kicking",
  },
  {
    stat_id: 1748,
    display_name: "Field Goals Made 20-29",
    abbreviation: "FGM 20-29",
    description: "The number of field goals made from 20-29 yards.",
    category: "kicking",
  },
  {
    stat_id: 1750,
    display_name: "Field Goals Made 30-39",
    abbreviation: "FGM 30-39",
    description: "The number of field goals made from 30-39 yards.",
    category: "kicking",
  },
  {
    stat_id: 1752,
    display_name: "Field Goals Made 40-49",
    abbreviation: "FGM 40-49",
    description: "The number of field goals made from 40-49 yards.",
    category: "kicking",
  },
  {
    stat_id: 1754,
    display_name: "Field Goals Made 50+",
    abbreviation: "50+",
    description: "The number of field goals made from 50+ yards.",
    category: "kicking",
  },
  {
    stat_id: 1756,
    display_name: "Kicking Points",
    abbreviation: "PTS",
    description: "The number of total points earned kicking.",
    category: "kicking",
  },
  {
    stat_id: 1758,
    display_name: "Team Games Played",
    abbreviation: "GP",
    description: "The numbers of team games played.",
    category: "kicking",
  },
  {
    stat_id: 1760,
    display_name: "Touchback Percentage",
    abbreviation: "TB%",
    description: "The percentage of kickoffs that are touchbacks.",
    category: "kicking",
  },
  {
    stat_id: 1762,
    display_name: "Average Kickoff Return Yards",
    abbreviation: "YDS/KR",
    description: "The average number of yards per kickoff return.",
    category: "kicking",
  },
  {
    stat_id: 1764,
    display_name: "Kickoff Return Yards",
    abbreviation: "KRYDS",
    description: "The total amount of yardage of kick returns.",
    category: "kicking",
  },
  {
    stat_id: 1766,
    display_name: "Kickoff Returns",
    abbreviation: "KR",
    description: "The number of times a kickoff was returned.",
    category: "kicking",
  },

  // Punting Stats
  {
    stat_id: 1768,
    display_name: "Punts",
    abbreviation: "NO",
    description: "The number of punts taken.",
    category: "punting",
  },
  {
    stat_id: 1770,
    display_name: "Yards",
    abbreviation: "YDS",
    description: "The total amount of yardage of punts.",
    category: "punting",
  },
  {
    stat_id: 1772,
    display_name: "Longest Punt",
    abbreviation: "LONG",
    description: "The distance of the longest punt.",
    category: "punting",
  },
  {
    stat_id: 1774,
    display_name: "Average Punt Yards",
    abbreviation: "AVG",
    description: "The average gross number of yards per punt.",
    category: "punting",
  },
  {
    stat_id: 1776,
    display_name: "Net Average Punt Yards",
    abbreviation: "NET",
    description: "The average net number of yards per punt.",
    category: "punting",
  },
  {
    stat_id: 1778,
    display_name: "Punts Blocked",
    abbreviation: "PBLK",
    description: "The number of times a punt was blocked.",
    category: "punting",
  },
  {
    stat_id: 1780,
    display_name: "Punts Inside 20",
    abbreviation: "In 20",
    description: "The number of times a punt is downed inside the 20.",
    category: "punting",
  },
  {
    stat_id: 1782,
    display_name: "Touchbacks",
    abbreviation: "TB",
    description: "The number of kickoffs that result in touchbacks.",
    category: "punting",
  },
  {
    stat_id: 1784,
    display_name: "Fair Catches",
    abbreviation: "FC",
    description: "The number of fair catches.",
    category: "punting",
  },
  {
    stat_id: 1786,
    display_name: "Punt Returns",
    abbreviation: "ATT",
    description: "The number of times a punt was returned.",
    category: "punting",
  },
  {
    stat_id: 1787,
    display_name: "Punt Return Yards",
    abbreviation: "YDS",
    description: "The total amount of yardage of punt returns.",
    category: "punting",
  },
  {
    stat_id: 1789,
    display_name: "Average Punt Return Yards",
    abbreviation: "AVG",
    description: "The average number of yards per punt return.",
    category: "punting",
  },
  {
    stat_id: 1791,
    display_name: "Team Games Played",
    abbreviation: "GP",
    description: "The numbers of team games played.",
    category: "punting",
  },

  // Receiving Stats
  {
    stat_id: 1781,
    display_name: "Receptions",
    abbreviation: "REC",
    description: "The total number of receptions.",
    category: "receiving",
  },
  {
    stat_id: 1783,
    display_name: "Receiving Targets",
    abbreviation: "TGTS",
    description: "The number of times a receiver is thrown to.",
    category: "receiving",
  },
  {
    stat_id: 1785,
    display_name: "Yards",
    abbreviation: "YDS",
    description: "The total receiving yards.",
    category: "receiving",
  },
  {
    stat_id: 1788,
    display_name: "Touchdowns",
    abbreviation: "TD",
    description: "The total number of receiving touchdowns.",
    category: "receiving",
  },
  {
    stat_id: 1790,
    display_name: "Longest Reception",
    abbreviation: "LONG",
    description: "The amount of yards for the longest reception.",
    category: "receiving",
  },
  {
    stat_id: 1792,
    display_name: "20+ Yard Receiving Plays",
    abbreviation: "BIG",
    description: "The number of receiving big plays gained.",
    category: "receiving",
  },
  {
    stat_id: 1794,
    display_name: "Receiving Yards Per Game",
    abbreviation: "YDS/G",
    description: "The average number of receiving yards per game.",
    category: "receiving",
  },
  {
    stat_id: 1796,
    display_name: "Receiving Fumbles",
    abbreviation: "FUM",
    description: "The number of times a reception is made and then the ball is fumbled.",
    category: "receiving",
  },
  {
    stat_id: 1798,
    display_name: "Receiving Fumbles Lost",
    abbreviation: "LST",
    description:
      "The number of times a reception is made and the balled is fumbled and recovered by the opposing team.",
    category: "receiving",
  },
  {
    stat_id: 1800,
    display_name: "Receiving Yards After Catch",
    abbreviation: "YAC",
    description: "The number of yards gained after the catch has been made.",
    category: "receiving",
  },
  {
    stat_id: 1802,
    display_name: "Receiving First Downs",
    abbreviation: "FD",
    description: "The number of times a first down is picked up by a reception.",
    category: "receiving",
  },
  {
    stat_id: 1804,
    display_name: "Team Games Played",
    abbreviation: "GP",
    description: "The numbers of team games played.",
    category: "receiving",
  },
  {
    stat_id: 1806,
    display_name: "Yards Per Reception",
    abbreviation: "AVG",
    description: "The average number of yards per reception.",
    category: "receiving",
  },
  {
    stat_id: 1808,
    display_name: "Total Points Per Game",
    abbreviation: "TP/G",
    description: "The average number of points scored per game.",
    category: "receiving",
  },
  {
    stat_id: 1809,
    display_name: "Total Points",
    abbreviation: "PTS",
    description: "The number of total points earned.",
    category: "receiving",
  },
  {
    stat_id: 1810,
    display_name: "Total Touchdowns",
    abbreviation: "TD",
    description: "The number of total Touchdowns scored.",
    category: "receiving",
  },

  // Rushing Stats
  {
    stat_id: 1749,
    display_name: "Rushing Attempts",
    abbreviation: "",
    description: "The total number of attempted rushes.",
    category: "rushing",
  },
  {
    stat_id: 1751,
    display_name: "Yards",
    abbreviation: "",
    description: "The total rushing yards.",
    category: "rushing",
  },
  {
    stat_id: 1753,
    display_name: "Yards Per Rushing Attempt",
    abbreviation: "",
    description: "The average number of yards per rush attempt.",
    category: "rushing",
  },
  {
    stat_id: 1755,
    display_name: "Longest Run",
    abbreviation: "LONG",
    description: "The amount of yards for the longest run.",
    category: "rushing",
  },
  {
    stat_id: 1757,
    display_name: "20+ Yard Rushing Plays",
    abbreviation: "BIG",
    description: "The number of rushing big plays gained.",
    category: "rushing",
  },
  {
    stat_id: 1759,
    display_name: "Touchdowns",
    abbreviation: "TD",
    description: "The total number of rushing touchdowns.",
    category: "rushing",
  },
  {
    stat_id: 1761,
    display_name: "Rushing Yards Per Game",
    abbreviation: "",
    description: "The average number of rushing yards per game.",
    category: "rushing",
  },
  {
    stat_id: 1763,
    display_name: "Rushing Fumbles",
    abbreviation: "FUM",
    description: "The number of times there is a run and then the ball is fumbled.",
    category: "rushing",
  },
  {
    stat_id: 1765,
    display_name: "Rushing Fumbles Lost",
    abbreviation: "LST",
    description: "The number of times there is a run and then the ball is fumbled.",
    category: "rushing",
  },
  {
    stat_id: 1767,
    display_name: "Rushing 1st downs",
    abbreviation: "FD",
    description: "The number of times a first down is picked up by a run.",
    category: "rushing",
  },
  {
    stat_id: 1769,
    display_name: "Team Games Played",
    abbreviation: "GP",
    description: "The numbers of team games played.",
    category: "rushing",
  },
  {
    stat_id: 1771,
    display_name: "Total Yards",
    abbreviation: "",
    description: "The number of total yards gained.",
    category: "rushing",
  },
  {
    stat_id: 1773,
    display_name: "Total Offensive Plays",
    abbreviation: "OP",
    description: "The number of offenseive plays run.",
    category: "rushing",
  },
  {
    stat_id: 1775,
    display_name: "Total Points Per Game",
    abbreviation: "TP/G",
    description: "The average number of points scored per game.",
    category: "rushing",
  },
  {
    stat_id: 1777,
    display_name: "Total Points",
    abbreviation: "PTS",
    description: "The number of total points earned.",
    category: "rushing",
  },
  {
    stat_id: 1779,
    display_name: "Total Touchdowns",
    abbreviation: "TD",
    description: "The number of total Touchdowns scored.",
    category: "rushing",
  },

  // Scoring Stats
  {
    stat_id: 1793,
    display_name: "Touchdowns",
    abbreviation: "TD",
    description: "The total number of rushing touchdowns.",
    category: "scoring",
  },
  {
    stat_id: 1795,
    display_name: "Touchdowns",
    abbreviation: "TD",
    description: "The total number of receiving touchdowns.",
    category: "scoring",
  },
  {
    stat_id: 1797,
    display_name: "Return Touchdowns",
    abbreviation: "RET",
    description: "The total number of return touchdowns.",
    category: "scoring",
  },
  {
    stat_id: 1799,
    display_name: "Total Touchdowns",
    abbreviation: "TD",
    description: "The number of touchdowns scored in total.",
    category: "scoring",
  },
  {
    stat_id: 1801,
    display_name: "Field Goals",
    abbreviation: "FG",
    description: "The number of field goals made.",
    category: "scoring",
  },
  {
    stat_id: 1803,
    display_name: "Total Two Point Conversions",
    abbreviation: "2PT",
    description: "The number of times a 2-point conversion is successful.",
    category: "scoring",
  },
  {
    stat_id: 1805,
    display_name: "Total Points",
    abbreviation: "PTS",
    description: "The number of total points scored.",
    category: "scoring",
  },
  {
    stat_id: 1807,
    display_name: "Total Points Per Game",
    abbreviation: "",
    description: "The number of points scored per game.",
    category: "scoring",
  },
  {
    stat_id: 1945,
    display_name: "Kick Extra Points",
    abbreviation: "PAT",
    description: "The number of extra points made.",
    category: "scoring",
  },
]

const categories = Array.from(new Set(CFB_STATS.map((stat) => stat.category)))

export default function CFBStatsPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-balance">College Football Team Stats</h1>
          <p className="text-xl text-muted-foreground max-w-3xl text-balance">
            Complete reference of all College Football team statistics available through the Big Balls Sports API. These
            stats are updated in real-time and include per-game averages and national rankings.
          </p>
        </div>
      </section>

      {/* Stats Content */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          {categories.map((category) => {
            const statsByCategory = CFB_STATS.filter((stat) => stat.category === category)
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to integrate College Football stats?</h2>
          <Link href="/early-access">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3 text-lg">
              Request API access →
            </Button>
          </Link>
          <p className="text-muted-foreground text-sm">
            Get instant access to all College Football team stats and more in early access.
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
