import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer rounded-lg",
          {
            // Default solid primary button
            "bg-primary text-primary-foreground hover:opacity-90 active:scale-[0.98]":
              variant === "default",
            // Thin borders, soft hover background
            "border border-border bg-transparent text-foreground hover:bg-card active:scale-[0.98]":
              variant === "outline",
            // Transparent background, soft hover
            "text-foreground hover:bg-card active:scale-[0.98]":
              variant === "ghost",
            // Simple link button
            "text-foreground underline-offset-4 hover:underline p-0":
              variant === "link",
          },
          {
            "h-10 px-4 py-2": size === "default",
            "h-8 px-3 text-xs": size === "sm",
            "h-12 px-6 text-base": size === "lg",
            "h-10 w-10 p-0": size === "icon",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
