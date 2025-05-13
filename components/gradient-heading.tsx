"use client"

import { cn } from "@/lib/utils"

interface GradientHeadingProps {
  text: string
  className?: string
}

export function GradientHeading({ text, className }: GradientHeadingProps) {
  return <h1 className={cn("gradient-heading font-heading", className)}>{text}</h1>
}
