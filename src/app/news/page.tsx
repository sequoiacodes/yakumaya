"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar, Search } from "lucide-react";
import { newsArticles } from "@/data/news-data";
import { useTheme } from "next-themes";

export default function NewsPage() {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredNews, setFilteredNews] = useState(newsArticles);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter news based on search query and selected category
  useEffect(() => {
    let result = newsArticles;

    // Filter by search query
    if (searchQuery) {
      result = result.filter(
        (article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      result = result.filter((article) =>
        article.categories.includes(selectedCategory)
      );
    }

    setFilteredNews(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchQuery, selectedCategory]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const currentItems = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Get category counts
  const categoryCount = newsArticles.reduce((acc, article) => {
    article.categories.forEach((category) => {
      acc[category] = (acc[category] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled by the useEffect
  };

  // Handle category selection
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <div
      className={`flex flex-col min-h-screen ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Hero Section */}
      <section
        className={`relative h-[40vh] flex items-center ${
          theme === "dark" ? "bg-gray-800" : "bg-gray-50"
        }`}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/news.png?height=600&width=1920"
            alt="News Hero"
            fill
            className={`object-cover brightness-50 ${
              theme === "dark" ? "opacity-80" : "opacity-100"
            }`}
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              News & Updates
            </h1>
            <p
              className={`text-xl ${
                theme === "dark" ? "text-gray-100" : "text-gray-600"
              }`}
            >
              Stay updated with our latest activities, impact stories, and
              announcements.
            </p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {filteredNews.length === 0 ? (
                <div className="text-center py-12">
                  <h2
                    className={`text-2xl font-bold mb-4 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    No News Found
                  </h2>
                  <p
                    className={`mb-6 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    No news articles match your search criteria. Please try a
                    different search or category.
                  </p>
                  <Button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory(null);
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-8">
                  {currentItems.map((article) => (
                    <Card
                      key={article.id}
                      className={`overflow-hidden border-none shadow-lg ${
                        theme === "dark" ? "bg-gray-800" : "bg-white"
                      }`}
                    >
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="relative h-60 md:h-full">
                          <Image
                            src={article.imageUrl || "/placeholder.svg"}
                            alt={article.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="md:col-span-2 p-6">
                          <div className="flex items-center mb-3">
                            <Calendar
                              className={`h-4 w-4 mr-2 ${
                                theme === "dark"
                                  ? "text-primary"
                                  : "text-primary"
                              }`}
                            />
                            <span
                              className={
                                theme === "dark"
                                  ? "text-gray-400"
                                  : "text-gray-600"
                              }
                            >
                              {article.date}
                            </span>
                          </div>
                          <h2
                            className={`text-2xl font-bold mb-3 ${
                              theme === "dark" ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {article.title}
                          </h2>
                          <p
                            className={`mb-4 ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {article.excerpt}
                          </p>
                          <Button asChild>
                            <Link href={`/news/${article.slug}`}>
                              Read More
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}

              {/* Pagination */}
              {filteredNews.length > 0 && (
                <div className="flex justify-center mt-12">
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                      disabled={currentPage === 1}
                      className={
                        theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : ""
                      }
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </Button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          onClick={() => setCurrentPage(page)}
                          className={
                            theme === "dark" && currentPage !== page
                              ? "bg-gray-800 hover:bg-gray-700"
                              : ""
                          }
                        >
                          {page}
                        </Button>
                      )
                    )}

                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                      }
                      disabled={currentPage === totalPages}
                      className={
                        theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : ""
                      }
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="h-4 w-4"
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
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <div>
              {/* Search Card */}
              <Card
                className={`border-none shadow-lg mb-8 ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                }`}
              >
                <CardContent className="p-6">
                  <h3
                    className={`text-xl font-bold mb-4 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Search
                  </h3>
                  <form onSubmit={handleSearch} className="relative">
                    <Search
                      className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 ${
                        theme === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}
                    />
                    <Input
                      placeholder="Search news..."
                      className={`pl-10 ${
                        theme === "dark" ? "bg-gray-700 border-gray-600" : ""
                      }`}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </form>
                  {searchQuery && (
                    <div className="mt-2 flex justify-between items-center">
                      <p
                        className={
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }
                      >
                        {filteredNews.length} result
                        {filteredNews.length !== 1 ? "s" : ""} found
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSearchQuery("")}
                      >
                        Clear
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Categories Card */}
              <Card
                className={`border-none shadow-lg mb-8 ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                }`}
              >
                <CardContent className="p-6">
                  <h3
                    className={`text-xl font-bold mb-4 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Categories
                  </h3>
                  <ul className="space-y-2">
                    {Object.entries(categoryCount).map(([category, count]) => (
                      <li key={category}>
                        <button
                          onClick={() => handleCategoryClick(category)}
                          className={`flex w-full items-center justify-between hover:text-primary ${
                            selectedCategory === category
                              ? "text-primary font-medium"
                              : theme === "dark"
                              ? "text-gray-400"
                              : "text-gray-600"
                          }`}
                        >
                          <span>{category}</span>
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              theme === "dark" ? "bg-gray-700" : "bg-gray-100"
                            }`}
                          >
                            {count}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                  {selectedCategory && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedCategory(null)}
                      className="mt-4 w-full"
                    >
                      Clear Filter
                    </Button>
                  )}
                </CardContent>
              </Card>

              {/* Recent Posts Card */}
              <Card
                className={`border-none shadow-lg mb-8 ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                }`}
              >
                <CardContent className="p-6">
                  <h3
                    className={`text-xl font-bold mb-4 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Recent Posts
                  </h3>
                  <div className="space-y-4">
                    {newsArticles.slice(0, 4).map((article) => (
                      <div key={article.id} className="flex gap-4">
                        <div className="relative w-20 h-20 flex-shrink-0">
                          <Image
                            src={article.imageUrl || "/news.png"}
                            alt={article.title}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                        <div>
                          <h4
                            className={`font-medium line-clamp-2 ${
                              theme === "dark" ? "text-white" : "text-gray-900"
                            }`}
                          >
                            <Link
                              href={`/news/${article.slug}`}
                              className="hover:text-primary"
                            >
                              {article.title}
                            </Link>
                          </h4>
                          <p
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {article.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tags Card */}
              <Card
                className={`border-none shadow-lg ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                }`}
              >
                <CardContent className="p-6">
                  <h3
                    className={`text-xl font-bold mb-4 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(
                      new Set(newsArticles.flatMap((article) => article.tags))
                    ).map((tag, index) => (
                      <button
                        key={index}
                        onClick={() => setSearchQuery(tag)}
                        className={`px-3 py-1 rounded-full text-sm hover:bg-primary/10 hover:text-primary ${
                          theme === "dark"
                            ? "bg-gray-700 text-gray-400"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className={`text-3xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Subscribe to Our Newsletter
            </h2>
            <p
              className={`text-lg mb-8 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Stay updated with our latest news, events, and impact stories
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                placeholder="Your email address"
                className={`sm:flex-1 ${
                  theme === "dark" ? "bg-gray-700 border-gray-600" : ""
                }`}
              />
              <Button>Subscribe</Button>
            </div>
            <p
              className={`text-sm mt-4 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
