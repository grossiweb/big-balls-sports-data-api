"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect, useState } from "react"

export function ThemeAwareLogo() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"
  const logoSrc = isDark ? "/logo-black.png" : "/logo-white.png"

  return (
    <Image
      src={logoSrc || "/placeholder.svg"}
      alt="Big Balls Sports"
      width={200}
      height={60}
      className="h-12 w-auto"
      priority
    />
  )
}
