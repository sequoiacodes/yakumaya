"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import type { NewsArticle } from "@/data/news-data";

// Define props for the client component
interface NewsDetailClientProps {
  article: NewsArticle;
  relatedArticles: NewsArticle[];
  moreNews: NewsArticle[];
}

export default function NewsDetailClient({ 
  article, 
  relatedArticles,
  moreNews 
}: NewsDetailClientProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`flex flex-col min-h-screen ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Hero Section */}
      <section
        className={`relative h-[50vh] flex items-center ${
          theme === "dark" ? "bg-gray-800" : "bg-gray-50"
        }`}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={article.imageUrl || "/placeholder.svg"}
            alt={article.title}
            fill
            className={`object-cover brightness-50 ${
              theme === "dark" ? "opacity-80" : "opacity-100"
            }`}
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-4 mb-4">
              {article.categories.map((category, index) => (
                <Link
                  key={index}
                  href={`/news?category=${category}`}
                  className={`px-3 py-1 rounded-full text-sm ${
                    theme === "dark"
                      ? "bg-primary/80 hover:bg-primary text-white"
                      : "bg-primary/80 hover:bg-primary text-white"
                  }`}
                >
                  {category}
                </Link>
              ))}
            </div>
            <h1
              className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-white"
              }`}
            >
              {article.title}
            </h1>
            <div
              className={`flex items-center space-x-4 text-sm ${
                theme === "dark" ? "text-gray-300" : "text-gray-100"
              }`}
            >
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{article.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-white text-gray-700"}`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div
                className={`prose prose-lg max-w-none ${
                  theme === "dark" ? "prose-invert" : ""
                }`}
              >
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </div>

              <div
                className={`mt-8 pt-8 border-t ${
                  theme === "dark" ? "border-gray-800" : "border-gray-200"
                }`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Tag
                    className={`h-5 w-5 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  />
                  <span
                    className={
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }
                  >
                    Tags:
                  </span>
                  {article.tags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/news?tag=${tag}`}
                      className={`px-3 py-1 rounded-full text-sm ${
                        theme === "dark"
                          ? "bg-gray-800 text-gray-400 hover:bg-primary/10 hover:text-primary"
                          : "bg-gray-100 text-gray-600 hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Back Button */}
              <div className="mt-8">
                <Button
                  asChild
                  variant="outline"
                  className={
                    theme === "dark" ? "border-gray-800 hover:bg-gray-800" : ""
                  }
                >
                  <Link href="/news" className="flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to News
                  </Link>
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24">
                <h3
                  className={`text-xl font-bold mb-6 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Related Articles
                </h3>
                {/* Related Articles */}
                <div className="space-y-6">
                  {relatedArticles.length > 0 ? (
                    relatedArticles.map((relatedArticle) => (
                      <div
                        key={relatedArticle.id}
                        className={`flex flex-col gap-4 ${
                          theme === "dark"
                            ? "hover:bg-gray-800"
                            : "hover:bg-gray-50"
                        } rounded-lg p-2`}
                      >
                        <div className="relative h-48">
                          <Image
                            src={relatedArticle.imageUrl || "/placeholder.svg"}
                            alt={relatedArticle.title}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold mb-2">
                            <Link
                              href={`/news/${relatedArticle.slug}`}
                              className="hover:text-primary"
                            >
                              {relatedArticle.title}
                            </Link>
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            {relatedArticle.date}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                            {relatedArticle.excerpt}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p
                      className={
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }
                    >
                      No related articles found.
                    </p>
                  )}
                </div>

                {/* Share Section */}
                <div className="mt-8">
                  <h3
                    className={`text-xl font-bold mb-6 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Share This Article
                  </h3>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                      </svg>
                      <span className="sr-only">Share on Twitter</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
                      </svg>
                      <span className="sr-only">Share on Facebook</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                      </svg>
                      <span className="sr-only">Share on LinkedIn</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path>
                      </svg>
                      <span className="sr-only">Share via Email</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More News Section */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className={`text-3xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              More News & Updates
            </h2>
            <p
              className={`text-lg max-w-3xl mx-auto ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Stay updated with our latest activities and impact stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {moreNews.map((newsItem) => (
              <div
                key={newsItem.id}
                className={`rounded-lg overflow-hidden shadow-lg ${
                  theme === "dark" ? "bg-gray-900" : "bg-white"
                }`}
              >
                <div className="relative h-48">
                  <Image
                    src={newsItem.imageUrl || "/placeholder.svg"}
                    alt={newsItem.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Calendar className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {newsItem.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{newsItem.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {newsItem.excerpt}
                  </p>
                  <Button asChild variant="outline">
                    <Link href={`/news/${newsItem.slug}`}>Read More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/news">View All News</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}