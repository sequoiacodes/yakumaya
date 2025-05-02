import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getSuccessStoryBySlug, getRelatedSuccessStories } from "@/data/success-stories-data"
import { MapPin, Calendar, Share2, Facebook, Twitter, Linkedin, Mail, ArrowLeft } from "lucide-react"

interface SuccessStoryPageProps {
  params: {
    slug: string
  }
}

export default function SuccessStoryPage({ params }: SuccessStoryPageProps) {
  const story = getSuccessStoryBySlug(params.slug)

  if (!story) {
    notFound()
  }

  const relatedStories = getRelatedSuccessStories(params.slug)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={story.image || "/placeholder.svg"}
            alt={story.title}
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-4xl">
            <div className="inline-block bg-primary text-white px-4 py-1 rounded-full mb-4">{story.category}</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{story.title}</h1>
            <div className="flex flex-wrap items-center gap-6 mt-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <span className="text-white">{story.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-primary mr-2" />
                <span className="text-white">{story.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Button variant="ghost" asChild className="mb-6 hover:bg-transparent p-0">
                <Link href="/success-stories" className="flex items-center text-primary">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Success Stories
                </Link>
              </Button>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                {story.testimonial && (
                  <blockquote className="text-xl italic font-medium text-gray-700 dark:text-gray-300 border-l-4 border-primary pl-4 my-8">
                    &ldquo;{story.testimonial}&rdquo;
                  </blockquote>
                )}

                {story.content.map((paragraph, index) => (
                  <p key={index} className="mb-6 text-gray-700 dark:text-gray-300">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Share Section */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Share2 className="mr-2 h-5 w-5" />
                  Share this story
                </h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Share on Facebook</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Share on Twitter</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">Share on LinkedIn</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Share via Email</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Impact Stats */}
              {story.impact && (
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Impact</h3>
                  <div className="space-y-4">
                    {story.impact.map((item, index) => (
                      <div key={index}>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.title}</p>
                        <p className="text-2xl font-bold text-primary">{item.value}</p>
                        {index < story.impact?.length - 1 && <Separator className="mt-2" />}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Donate CTA */}
              <div className="bg-primary text-white p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-2">Support Our Work</h3>
                <p className="mb-4">Your donation can help us create more success stories like this one.</p>
                <Button variant="secondary" asChild className="w-full">
                  <Link href="/donate">Donate Now</Link>
                </Button>
              </div>

              {/* Related Stories */}
              {relatedStories.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Related Stories</h3>
                  <div className="space-y-4">
                    {relatedStories.map((relatedStory) => (
                      <Card
                        key={relatedStory.id}
                        className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow"
                      >
                        <div className="relative h-32">
                          <Image
                            src={relatedStory.image || "/placeholder.svg"}
                            alt={relatedStory.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-medium">
                            {relatedStory.category}
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h4 className="font-bold mb-2 line-clamp-2">{relatedStory.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
                            {relatedStory.excerpt}
                          </p>
                          <Button asChild variant="outline" size="sm" className="w-full">
                            <Link href={`/success-stories/${relatedStory.slug}`}>Read Story</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Get Involved CTA */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-2">Get Involved</h3>
                <p className="mb-4">Join us in making a difference in communities across Nepal.</p>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/get-involved">Learn How</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Help Us Create More Success Stories</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your support can help us continue our work and create lasting impact in communities across Nepal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/get-involved">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
