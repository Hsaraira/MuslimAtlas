import { ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline"
  size?: "sm" | "md" | "lg"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100 disabled:opacity-50 disabled:pointer-events-none rounded-xl"

    const variants = {
      primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200 hover:shadow-xl hover:-translate-y-0.5",
      secondary: "bg-white text-blue-600 hover:bg-gray-50 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
      ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
      outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
    }

    const sizes = {
      sm: "text-sm px-4 py-2",
      md: "text-base px-6 py-3",
      lg: "text-lg px-8 py-4"
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
