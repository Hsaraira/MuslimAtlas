import { HTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverable = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-white rounded-lg border border-stone-200 shadow-sm",
          hoverable && "transition-shadow hover:shadow-md cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = "Card"

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("p-6 pb-4", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardHeader.displayName = "CardHeader"

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("p-6 pt-0", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardContent.displayName = "CardContent"

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("p-6 pt-4 border-t border-stone-100", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardContent, CardFooter }
