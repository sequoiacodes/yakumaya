"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Calendar } from "lucide-react";

export default function SuccessStoriesPage() {
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
          theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-50 text-white"
        }`}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/story1.png?height=600&width=1920"
            alt="Success Stories Hero"
            fill
            className={`object-cover brightness-50 ${
              theme === "dark" ? "opacity-80" : "opacity-100"
            }`}
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-3xl">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-white"
              }`}
            >
              Success Stories
            </h1>
            <p
              className={`text-xl ${
                theme === "dark" ? "text-gray-100" : "text-white"
              }`}
            >
              Real stories of change and transformation from the communities we
              work with.
            </p>
          </div>
        </div>
      </section>

      {/* Stories Categories */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="mb-12 md:mb-8">
  <TabsList className="flex gap-2 flex-wrap justify-center ">
                    <TabsTrigger value="all" className="bg-blue-100 text-blue-600 mx-1 ">All Stories</TabsTrigger>
                <TabsTrigger value="education" className="bg-blue-100 text-blue-600 mx-1 ">Education</TabsTrigger>
                <TabsTrigger value="healthcare" className="bg-blue-100 text-blue-600 mx-1 ">Healthcare</TabsTrigger>
                <TabsTrigger value="livelihood" className="bg-blue-100 text-blue-600 mx-1 ">Livelihood</TabsTrigger>
                <TabsTrigger value="disaster-relief" className="bg-blue-100 text-blue-600 mx-1 ">
                  Disaster Relief
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Sunita's Journey to Financial Independence",
                    excerpt:
                      "After participating in our vocational training program, Sunita started her own tailoring business and now supports her family.",
                    category: "Livelihood",
                    location: "Kathmandu",
                    date: "May 2023",
                    image: "/sunita.jpg?height=400&width=600&text=Sunita",
                    slug: "sunita-financial-independence",
                  },
                  {
                    title: "Rebuilding Gorkha School After the Earthquake",
                    excerpt:
                      "How our school rebuilding project provided a safe learning environment for 300 students in earthquake-affected Gorkha district.",
                    category: "Education",
                    location: "Gorkha District",
                    date: "April 2023",
                    image:
                      "/children.jpg?height=400&width=600&text=Gorkha School",
                    slug: "gorkha-school-rebuilding",
                  },
                  {
                    title:
                      "Dolakha Health Camp: Bringing Healthcare to Remote Areas",
                    excerpt:
                      "Our health camp in Dolakha provided medical services to over 500 people who otherwise wouldn't have access to healthcare.",
                    category: "Healthcare",
                    location: "Dolakha District",
                    date: "March 2023",
                    image:
                      "/camp.png?height=400&width=600&text=Health Camp",
                    slug: "dolakha-health-camp",
                  },
                  {
                    title: "Ram's New Home: Recovery After the Floods",
                    excerpt:
                      "After losing everything in the floods, Ram and his family received support to rebuild their home and restore their livelihood.",
                    category: "Disaster Relief",
                    location: "Saptari District",
                    date: "February 2023",
                    image:
                      "/helpfood.jpg?height=400&width=600&text=Ram's Home",
                    slug: "rams-new-home",
                  },
                  {
                    title: "Women's Cooperative Transforms Village Economy",
                    excerpt:
                      "How a women's savings cooperative in Kavre is creating economic opportunities and transforming the local economy.",
                    category: "Livelihood",
                    location: "Kavre District",
                    date: "January 2023",
                    image:
                      "/story2.png?height=400&width=600&text=Women's Cooperative",
                    slug: "womens-cooperative",
                  },
                  {
                    title: "From Dropout to Scholar: Raju's Education Journey",
                    excerpt:
                      "With support from our scholarship program, Raju returned to school and is now pursuing higher education.",
                    category: "Education",
                    location: "Sindhupalchok District",
                    date: "December 2022",
                    image: "/story3.png?height=400&width=600&text=Raju",
                    slug: "raju-education-journey",
                  },
                  {
                    title: "Clean Water Brings New Life to Bajura Village",
                    excerpt:
                      "How our clean water project reduced waterborne diseases and improved quality of life in a remote village in Bajura.",
                    category: "Healthcare",
                    location: "Bajura District",
                    date: "November 2022",
                    image:
                      "/story4.png?height=400&width=600&text=Clean Water",
                    slug: "clean-water-bajura",
                  },
                  {
                    title: "Solar Power Lights Up Humla",
                    excerpt:
                      "Solar power installation in remote Humla villages has transformed daily life, education, and healthcare.",
                    category: "Disaster Relief",
                    location: "Humla District",
                    date: "October 2022",
                    image:
                      "/story2.png?height=400&width=600&text=Solar Power",
                    slug: "solar-power-humla",
                  },
                  {
                    title:
                      "Maya's Organic Farm: A Model for Sustainable Agriculture",
                    excerpt:
                      "After training in organic farming techniques, Maya has established a successful farm that serves as a model for her community.",
                    category: "Livelihood",
                    location: "Chitwan District",
                    date: "September 2022",
                    image:
                      "/profile1.png?height=400&width=600&text=Maya's Farm",
                    slug: "mayas-organic-farm",
                  },
                ].map((story, index) => (
                  <Card
                    key={index}
                    className={`overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow ${
                      theme === "dark" ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <div className="relative h-48">
                      <Image
                        src={story.image || "/news.png"}
                        alt={story.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-medium">
                        {story.category}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-primary mr-2" />
                          <span
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {story.location}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-primary mr-2" />
                          <span
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {story.date}
                          </span>
                        </div>
                      </div>
                      <h3
                        className={`text-xl font-bold mb-2 ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {story.title}
                      </h3>
                      <p
                        className={`mb-4 line-clamp-3 ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {story.excerpt}
                      </p>
                      <Button asChild variant="outline" className="w-full">
                        <Link href={`/success-stories/${story.slug}`}>
                          Read Full Story
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="education" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Rebuilding Gorkha School After the Earthquake",
                    excerpt:
                      "How our school rebuilding project provided a safe learning environment for 300 students in earthquake-affected Gorkha district.",
                    category: "Education",
                    location: "Gorkha District",
                    date: "April 2023",
                    image:
                      "/news.png?height=400&width=600&text=Gorkha School",
                    slug: "gorkha-school-rebuilding",
                  },
                  {
                    title: "From Dropout to Scholar: Raju's Education Journey",
                    excerpt:
                      "With support from our scholarship program, Raju returned to school and is now pursuing higher education.",
                    category: "Education",
                    location: "Sindhupalchok District",
                    date: "December 2022",
                    image: "/news.png?height=400&width=600&text=Raju",
                    slug: "raju-education-journey",
                  },
                  {
                    title: "Digital Learning Transforms Rural School",
                    excerpt:
                      "Introduction of computers and digital learning resources has transformed teaching and learning in a rural school.",
                    category: "Education",
                    location: "Dhading District",
                    date: "August 2022",
                    image:
                      "/news.png?height=400&width=600&text=Digital Learning",
                    slug: "digital-learning-rural-school",
                  },
                ].map((story, index) => (
                  <Card
                    key={index}
                    className={`overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow ${
                      theme === "dark" ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <div className="relative h-48">
                      <Image
                        src={story.image || "/news.png"}
                        alt={story.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-medium">
                        {story.category}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-primary mr-2" />
                          <span
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {story.location}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-primary mr-2" />
                          <span
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {story.date}
                          </span>
                        </div>
                      </div>
                      <h3
                        className={`text-xl font-bold mb-2 ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {story.title}
                      </h3>
                      <p
                        className={`mb-4 line-clamp-3 ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {story.excerpt}
                      </p>
                      <Button asChild variant="outline" className="w-full">
                        <Link href={`/success-stories/${story.slug}`}>
                          Read Full Story
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="healthcare" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title:
                      "Dolakha Health Camp: Bringing Healthcare to Remote Areas",
                    excerpt:
                      "Our health camp in Dolakha provided medical services to over 500 people who otherwise wouldn't have access to healthcare.",
                    category: "Healthcare",
                    location: "Dolakha District",
                    date: "March 2023",
                    image:
                      "/news.png?height=400&width=600&text=Health Camp",
                    slug: "dolakha-health-camp",
                  },
                  {
                    title: "Clean Water Brings New Life to Bajura Village",
                    excerpt:
                      "How our clean water project reduced waterborne diseases and improved quality of life in a remote village in Bajura.",
                    category: "Healthcare",
                    location: "Bajura District",
                    date: "November 2022",
                    image:
                      "/news.png?height=400&width=600&text=Clean Water",
                    slug: "clean-water-bajura",
                  },
                  {
                    title: "Mobile Health Clinic Reaches Remote Communities",
                    excerpt:
                      "Our mobile health clinic is bringing essential healthcare services to remote communities with limited access to medical facilities.",
                    category: "Healthcare",
                    location: "Multiple Districts",
                    date: "July 2022",
                    image:
                      "/news.png?height=400&width=600&text=Mobile Clinic",
                    slug: "mobile-health-clinic",
                  },
                ].map((story, index) => (
                  <Card
                    key={index}
                    className={`overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow ${
                      theme === "dark" ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <div className="relative h-48">
                      <Image
                        src={story.image || "/news.png"}
                        alt={story.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-medium">
                        {story.category}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-primary mr-2" />
                          <span
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {story.location}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-primary mr-2" />
                          <span
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {story.date}
                          </span>
                        </div>
                      </div>
                      <h3
                        className={`text-xl font-bold mb-2 ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {story.title}
                      </h3>
                      <p
                        className={`mb-4 line-clamp-3 ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {story.excerpt}
                      </p>
                      <Button asChild variant="outline" className="w-full">
                        <Link href={`/success-stories/${story.slug}`}>
                          Read Full Story
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="livelihood" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Sunita's Journey to Financial Independence",
                    excerpt:
                      "After participating in our vocational training program, Sunita started her own tailoring business and now supports her family.",
                    category: "Livelihood",
                    location: "Kathmandu",
                    date: "May 2023",
                    image: "/news.png?height=400&width=600&text=Sunita",
                    slug: "sunita-financial-independence",
                  },
                  {
                    title: "Women's Cooperative Transforms Village Economy",
                    excerpt:
                      "How a women's savings cooperative in Kavre is creating economic opportunities and transforming the local economy.",
                    category: "Livelihood",
                    location: "Kavre District",
                    date: "January 2023",
                    image:
                      "/news.png?height=400&width=600&text=Women's Cooperative",
                    slug: "womens-cooperative",
                  },
                  {
                    title:
                      "Maya's Organic Farm: A Model for Sustainable Agriculture",
                    excerpt:
                      "After training in organic farming techniques, Maya has established a successful farm that serves as a model for her community.",
                    category: "Livelihood",
                    location: "Chitwan District",
                    date: "September 2022",
                    image:
                      "/news.png?height=400&width=600&text=Maya's Farm",
                    slug: "mayas-organic-farm",
                  },
                ].map((story, index) => (
                  <Card
                    key={index}
                    className={`overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow ${
                      theme === "dark" ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <div className="relative h-48">
                      <Image
                        src={story.image || "/news.png"}
                        alt={story.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-medium">
                        {story.category}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-primary mr-2" />
                          <span
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {story.location}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-primary mr-2" />
                          <span
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {story.date}
                          </span>
                        </div>
                      </div>
                      <h3
                        className={`text-xl font-bold mb-2 ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {story.title}
                      </h3>
                      <p
                        className={`mb-4 line-clamp-3 ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {story.excerpt}
                      </p>
                      <Button asChild variant="outline" className="w-full">
                        <Link href={`/success-stories/${story.slug}`}>
                          Read Full Story
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="disaster-relief" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Ram's New Home: Recovery After the Floods",
                    excerpt:
                      "After losing everything in the floods, Ram and his family received support to rebuild their home and restore their livelihood.",
                    category: "Disaster Relief",
                    location: "Saptari District",
                    date: "February 2023",
                    image:
                      "/news.png?height=400&width=600&text=Ram's Home",
                    slug: "rams-new-home",
                  },
                  {
                    title: "Solar Power Lights Up Humla",
                    excerpt:
                      "Solar power installation in remote Humla villages has transformed daily life, education, and healthcare.",
                    category: "Disaster Relief",
                    location: "Humla District",
                    date: "October 2022",
                    image:
                      "/news.png?height=400&width=600&text=Solar Power",
                    slug: "solar-power-humla",
                  },
                  {
                    title:
                      "Winter Relief Brings Warmth to High-Altitude Communities",
                    excerpt:
                      "Our winter relief program provided essential supplies to families in high-altitude areas facing extreme cold conditions.",
                    category: "Disaster Relief",
                    location: "Humla District",
                    date: "January 2023",
                    image:
                      "/news.png?height=400&width=600&text=Winter Relief",
                    slug: "winter-relief-program",
                  },
                ].map((story, index) => (
                  <Card
                    key={index}
                    className={`overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow ${
                      theme === "dark" ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <div className="relative h-48">
                      <Image
                        src={story.image || "/news.png"}
                        alt={story.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-medium">
                        {story.category}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-primary mr-2" />
                          <span
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {story.location}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-primary mr-2" />
                          <span
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {story.date}
                          </span>
                        </div>
                      </div>
                      <h3
                        className={`text-xl font-bold mb-2 ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {story.title}
                      </h3>
                      <p
                        className={`mb-4 line-clamp-3 ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {story.excerpt}
                      </p>
                      <Button asChild variant="outline" className="w-full">
                        <Link href={`/success-stories/${story.slug}`}>
                          Read Full Story
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Story */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-96">
              <Image
                src="/news.png?height=600&width=800&text=Featured Story"
                alt="Featured Story"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full mb-4">
                Featured Story
              </div>
              <h2
                className={`text-3xl font-bold mb-4 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Sunita&apos;s Journey to Financial Independence
              </h2>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-primary mr-2" />
                  <span
                    className={
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }
                  >
                    Kathmandu
                  </span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-primary mr-2" />
                  <span
                    className={
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }
                  >
                    May 2023
                  </span>
                </div>
              </div>
              <p
                className={`text-lg mb-6 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                &ldquo;Before joining the vocational training program, I was
                struggling to make ends meet. Now, with my own tailoring
                business, I can support my family and send my children to
                school.&rdquo;
              </p>
              <p
                className={`text-lg mb-6 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Sunita Tamang, a 35-year-old mother of two from Kathmandu,
                transformed her life after participating in our vocational
                training program. With the skills she gained and the seed
                funding provided, she established her own tailoring business
                that now employs three other women from her community.
              </p>
              <Button asChild>
                <Link href="/success-stories/sunita-financial-independence">
                  Read Full Story
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w3xl mx-auto text-center">
            <h2
              className={`text-3xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Share Your Story
            </h2>
            <p
              className={`text-lg mb-8 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Have you been impacted by our work? We&apos;d love to hear your
              story and possibly feature it on our website.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Contact Us to Share Your Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Help Us Create More Success Stories
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your support can help us continue our work and create lasting impact
            in communities across Nepal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/20"
            >
              <Link href="/get-involved">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
