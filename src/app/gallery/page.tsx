"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GalleryPage() {
  const { theme } = useTheme();

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
            src="/placeholder.svg?height=600&width=1920"
            alt="Gallery Hero"
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
                theme === "dark" ? "text-white" : "text-white"
              }`}
            >
              Gallery
            </h1>
            <p
              className={`text-xl ${
                theme === "dark" ? "text-gray-100" : "text-gray-100"
              }`}
            >
              Visual stories of our work and impact across Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList
                className={theme === "dark" ? "bg-gray-800" : "bg-gray-100"}
              >
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
                <TabsTrigger value="livelihood">Livelihood</TabsTrigger>
                <TabsTrigger value="disaster-relief">
                  Disaster Relief
                </TabsTrigger>
              </TabsList>
            </div>

            {[
              "all",
              "education",
              "healthcare",
              "livelihood",
              "disaster-relief",
            ].map((tabValue) => (
              <TabsContent key={tabValue} value={tabValue} className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {Array.from({ length: tabValue === "all" ? 12 : 8 }).map(
                    (_, index) => (
                      <Card
                        key={index}
                        className={`overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow ${
                          theme === "dark" ? "bg-gray-800" : "bg-white"
                        }`}
                      >
                        <div className="relative aspect-square">
                          <Image
                            src={`/placeholder.svg?height=400&width=400&text=${tabValue} ${
                              index + 1
                            }`}
                            alt={`${tabValue} Image ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="p-4">
                          <p
                            className={`font-medium ${
                              theme === "dark" ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {tabValue.charAt(0).toUpperCase() +
                              tabValue.slice(1)}{" "}
                            Project {index + 1}
                          </p>
                          <p
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-gray-300"
                                : "text-gray-600"
                            }`}
                          >
                            Location, Nepal
                          </p>
                        </CardContent>
                      </Card>
                    )
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="flex justify-center mt-12">
            <Button
              className={theme === "dark" ? "bg-primary-dark" : "bg-primary"}
            >
              Load More
            </Button>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
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
              Video Gallery
            </h2>
            <p
              className={`text-lg max-w-3xl mx-auto ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Watch videos from our projects and events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <Card
                key={index}
                className={`overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="relative aspect-video">
                  <Image
                    src={`/placeholder.svg?height=300&width=500&text=Video ${
                      index + 1
                    }`}
                    alt={`Video Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-primary/80 rounded-full p-4">
                      <svg
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p
                    className={`font-medium ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Video Title {index + 1}
                  </p>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Description of the video content
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button
              asChild
              className={theme === "dark" ? "bg-primary-dark" : "bg-primary"}
            >
              <Link
                href="https://www.youtube.com/channel/example"
                target="_blank"
              >
                Visit Our YouTube Channel
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className={`py-16 ${
          theme === "dark" ? "bg-primary-dark" : "bg-primary"
        } text-white`}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Share Your Story</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Have you been impacted by our work? We&apos;d love to hear your
            story and possibly feature it in our gallery.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Submit Your Story</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
