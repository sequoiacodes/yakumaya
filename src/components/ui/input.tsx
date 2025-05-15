import * as React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    const { theme } = useTheme();

    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border px-3 py-2 text-base transition-colors duration-200",
          "placeholder:text-muted-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          theme === "dark"
            ? "border-gray-700 bg-gray-800 text-gray-100 focus:border-primary hover:border-gray-600"
            : "border-gray-200 bg-white text-gray-900 focus:border-primary hover:border-gray-300",
          "focus:outline-none focus:ring-1 focus:ring-primary/20",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
