import * as React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  const { theme } = useTheme();

  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border px-3 py-2 text-base transition-colors duration-200",
        "placeholder:text-muted-foreground",
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
});
Textarea.displayName = "Textarea";

export { Textarea };
