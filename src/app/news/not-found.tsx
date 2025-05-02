import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NewsNotFound() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 text-center max-w-md">
        Sorry, the news article you're looking for doesn't exist or may have been removed.
      </p>
      <Button asChild>
        <Link href="/news">Back to News</Link>
      </Button>
    </div>
  )
}
