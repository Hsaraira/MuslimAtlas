import { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  action?: React.ReactNode
}

export function SectionHeader({
  title,
  subtitle,
  action,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn("flex items-center justify-between mb-6", className)}
      {...props}
    >
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-stone-600">{subtitle}</p>
        )}
      </div>
      {action && (
        <div>{action}</div>
      )}
    </div>
  )
}
