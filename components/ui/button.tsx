import { ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline"
  size?: "sm" | "md" | "lg"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg"

    const variants = {
      primary: "bg-green-700 text-white hover:bg-green-800",
      secondary: "bg-yellow-600 text-white hover:bg-yellow-700",
      ghost: "bg-transparent text-stone-700 hover:bg-stone-100",
      outline: "border-2 border-green-700 text-green-700 hover:bg-green-50"
    }

    const sizes = {
      sm: "text-sm px-3 py-1.5",
      md: "text-base px-4 py-2",
      lg: "text-lg px-6 py-3"
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button }
