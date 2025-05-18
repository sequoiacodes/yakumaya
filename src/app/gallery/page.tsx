"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Clock } from "lucide-react";
import { galleryImages, galleryVideos } from "@/data/gallery-data";

export default function GalleryPage() {
  const { theme } = useTheme();

  const getAllImages = () => {
    return Object.values(galleryImages).flat();
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
            src="/hand2.png?height=600&width=1920"
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
            <div className="flex justify-center flex-wrap items-center mb-8">
              <TabsList
                className={ `flex flex-wrap h-auto gap-1 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"}`}
              >
                <TabsTrigger value="all" className=" shadow-md shadow-black  rounded-xl ">All</TabsTrigger>
                <TabsTrigger value="education" className="shadow-md shadow-black rounded-xl ">Education</TabsTrigger>
                <TabsTrigger value="healthcare" className="shadow-md shadow-black rounded-xl ">Healthcare</TabsTrigger>
                <TabsTrigger value="livelihood" className="shadow-md shadow-black rounded-xl ">Livelihood</TabsTrigger>
                <TabsTrigger value="disaster-relief" className="shadow-md shadow-black rounded-xl ">
                  Disaster Relief
                </TabsTrigger>
              </TabsList>
            </div>

            {Object.keys({ all: null, ...galleryImages }).map((tabValue) => (
              <TabsContent key={tabValue} value={tabValue} className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {(tabValue === "all"
                    ? getAllImages()
                    : galleryImages[tabValue as keyof typeof galleryImages]
                  ).map((image) => (
                    <Card
                      key={image.id}
                      className={`overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow ${
                        theme === "dark" ? "bg-gray-800" : "bg-white"
                      }`}
                    >
                      <div className="relative aspect-square">
                        <Image
                          src={image.imageUrl}
                          alt={image.title}
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
                          {image.title}
                        </p>
                        <p
                          className={`text-sm ${
                            theme === "dark" ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {image.location}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
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
              Watch inspiring stories from our projects and initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryVideos.map((video) => (
              <Card
                key={video.id}
                className={`overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                }`}
              >
                <Link href={video.videoUrl} target="_blank" className="block">
                  <div className="relative aspect-video group">
                    <Image
                      src={video.thumbnailUrl}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-primary/80 rounded-full p-4 transform scale-90 group-hover:scale-100 transition-transform">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded-md flex items-center">
                      <Clock className="h-4 w-4 text-white mr-1" />
                      <span className="text-white text-sm">
                        {video.duration}
                      </span>
                    </div>
                  </div>
                </Link>
                <CardContent className="p-4">
                  <p
                    className={`font-medium ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {video.title}
                  </p>
                  <p
                    className={`text-sm mt-1 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {video.description}
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
