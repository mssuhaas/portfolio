"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedGradientTextProps {
  text: string
  className?: string
}

export function AnimatedGradientText({ text, className }: AnimatedGradientTextProps) {
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const textElement = textRef.current
    if (!textElement) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = textElement.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100

      textElement.style.setProperty("--x", `${x}%`)
      textElement.style.setProperty("--y", `${y}%`)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <h1 ref={textRef} className={cn("animated-gradient-text font-heading", className)}>
      {text}
    </h1>
  )
}
