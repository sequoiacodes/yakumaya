"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { useTheme } from "next-themes";

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  slug: string;
}

export default function NewsCard({
  title,
  excerpt,
  date,
  imageUrl,
  slug,
}: NewsCardProps) {
  const { theme } = useTheme();

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={imageUrl || "/news.png"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center mb-3">
          <Calendar className="h-4 w-4 text-primary mr-2" />
          <span
            className={`text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {date}
          </span>
        </div>
        <h3
          className={`text-xl font-bold mb-2 line-clamp-2 ${
            theme === "dark" ? "text-gray-100" : "text-gray-900"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mb-4 line-clamp-3 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {excerpt}
        </p>
        <Link
          href={slug}
          className="text-primary hover:underline inline-flex items-center"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </CardContent>
    </Card>
  );
}
