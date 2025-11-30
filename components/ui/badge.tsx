import { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "muslim-owned" | "verified" | "halal-certified" | "muslim-friendly" | "category" | "default"
  withTooltip?: boolean
  tooltipText?: string
}

export function Badge({
  className,
  variant = "default",
  withTooltip = false,
  tooltipText,
  children,
  ...props
}: BadgeProps) {
  const variants = {
    "muslim-owned": "bg-green-100 text-green-800 border-green-200",
    "verified": "bg-blue-100 text-blue-800 border-blue-200",
    "halal-certified": "bg-emerald-100 text-emerald-800 border-emerald-200",
    "muslim-friendly": "bg-purple-100 text-purple-800 border-purple-200",
    "category": "bg-yellow-100 text-yellow-900 border-yellow-200",
    "default": "bg-stone-100 text-stone-800 border-stone-200"
  }

  const badge = (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )

  if (withTooltip && tooltipText) {
    return (
      <span className="group relative inline-block">
        {badge}
        <span className="invisible group-hover:visible absolute z-10 w-64 p-2 mt-2 text-xs text-white bg-stone-900 rounded-lg shadow-lg -left-24 top-full">
          {tooltipText}
        </span>
      </span>
    )
  }

  return badge
}
