import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-md">
        We couldn&apos;t find the project you&apos;re looking for. It may have been moved or doesn&apos;t exist.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/projects">
          <Button className="min-w-[200px]">View All Projects</Button>
        </Link>
        <Link href="/">
          <Button variant="outline" className="min-w-[200px]">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
