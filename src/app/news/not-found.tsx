"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function NewsNotFound() {
  const { theme } = useTheme();

  return (
    <div
      className={`flex flex-col min-h-screen items-center justify-center px-4 py-24 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <h1
        className={`text-4xl font-bold mb-4 ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        Article Not Found
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 text-center max-w-md">
        Sorry, the news article you&apos;re looking for doesn&apos;t exist or
        may have been removed.
      </p>
      <Button asChild className={theme === "dark" ? "hover:bg-primary/90" : ""}>
        <Link href="/news">Back to News</Link>
      </Button>
    </div>
  );
}
