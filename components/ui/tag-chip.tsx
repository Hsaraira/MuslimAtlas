import { X } from "lucide-react"
import { cn } from "@/lib/utils"

export interface TagChipProps {
  label: string
  onRemove?: () => void
  className?: string
  variant?: "default" | "selected"
}

export function TagChip({ label, onRemove, className, variant = "default" }: TagChipProps) {
  const variants = {
    default: "bg-stone-100 text-stone-700 hover:bg-stone-200",
    selected: "bg-green-100 text-green-800 border-green-300"
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border border-stone-200 transition-colors",
        variants[variant],
        className
      )}
    >
      {label}
      {onRemove && (
        <button
          onClick={onRemove}
          className="ml-1 hover:bg-stone-300 rounded-full p-0.5 transition-colors"
          aria-label={`Remove ${label}`}
        >
          <X size={14} />
        </button>
      )}
    </span>
  )
}
