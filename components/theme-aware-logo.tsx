"use client"

import Image from "next/image"

export function ThemeAwareLogo() {
  return (
    <span aria-label="Big Balls Sports" role="img" className="inline-flex">
      <Image
        src="/logo-black.png"
        alt=""
        aria-hidden="true"
        width={200}
        height={60}
        className="h-12 w-auto block dark:hidden"
        priority
      />
      <Image
        src="/logo-white.png"
        alt=""
        aria-hidden="true"
        width={200}
        height={60}
        className="h-12 w-auto hidden dark:block"
        priority
      />
    </span>
  )
}
