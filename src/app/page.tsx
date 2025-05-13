import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Heart, BookOpen, Lightbulb, Globe, Calendar } from "lucide-react"
import NewsCard from "@/components/news-card"
import CounterSection from "@/components/counter-section"
import TestimonialSlider from "@/components/testimonial-slider"
import PartnerSlider from "@/components/partner-slider"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/LP1.png?height=1080&width=1920"
            alt="Hero Image"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Empowering Communities, Transforming Lives
            </h1>
            <p className="text-xl mb-8">
              Yakumaya Helping Hands Foundation Nepal is dedicated to sustainable development and improving lives across
              Nepal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Our Programs
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20" asChild>
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Akumaya Helping Hands Foundation Nepal is committed to empowering communities through sustainable
                development initiatives, focusing on education, healthcare, livelihood, and disaster relief.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                We believe in creating lasting change by working directly with communities, understanding their needs,
                and implementing programs that foster self-reliance and resilience.
              </p>
              <Link href="/about" className="inline-flex items-center text-primary hover:underline">
                Learn more about us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative h-80 md:h-96">
              <Image
                src="/LP2.png?height=600&width=800"
                alt="Our Mission"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <CounterSection />

      {/* Programs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We work across multiple sectors to create sustainable impact and improve the quality of life for
              communities across Nepal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Education</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Providing quality education and learning opportunities for children and adults.
                </p>
                <Link href="/programs/education" className="inline-flex items-center text-primary hover:underline">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Healthcare</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Improving access to healthcare services and promoting health awareness.
                </p>
                <Link href="/programs/healthcare" className="inline-flex items-center text-primary hover:underline">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Livelihood</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Creating sustainable livelihood opportunities and economic empowerment.
                </p>
                <Link href="/programs/livelihood" className="inline-flex items-center text-primary hover:underline">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Disaster Relief</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Providing immediate relief and long-term recovery support during disasters.
                </p>
                <Link
                  href="/programs/disaster-relief"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full mb-4">
                Featured Project
              </div>
              <h2 className="text-3xl font-bold mb-4">School Rebuilding Initiative</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                After the devastating earthquake in Nepal, we&apos;ve been working to rebuild schools in remote areas,
                ensuring children have safe spaces to learn and grow.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900 p-1 rounded-full mr-3 mt-1">
                    <svg className="h-3 w-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>10 schools rebuilt in Sindhupalchok district</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900 p-1 rounded-full mr-3 mt-1">
                    <svg className="h-3 w-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Over 2,000 students now have access to safe classrooms</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900 p-1 rounded-full mr-3 mt-1">
                    <svg className="h-3 w-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Earthquake-resistant construction techniques used</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/projects/school-rebuilding">Learn More About This Project</Link>
              </Button>
            </div>
            <div className="relative h-80 md:h-96 order-1 md:order-2">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="School Rebuilding Project"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Latest News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Latest News & Updates</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Stay updated with our recent activities and impact stories.
              </p>
            </div>
            <Link href="/news" className="inline-flex items-center text-primary hover:underline mt-4 md:mt-0">
              View all news <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NewsCard
              title="Health Camp Successfully Conducted in Dolakha"
              excerpt="Our team conducted a free health camp in Dolakha district, providing medical services to over 500 people."
              date="May 15, 2023"
              imageUrl="/placeholder.svg?height=400&width=600"
              slug="/news/health-camp-dolakha"
            />
            <NewsCard
              title="New Vocational Training Center Inaugurated"
              excerpt="We're proud to announce the opening of our new vocational training center in Kathmandu, offering skills development programs."
              date="April 28, 2023"
              imageUrl="/placeholder.svg?height=400&width=600"
              slug="/news/vocational-training-center"
            />
            <NewsCard
              title="Annual Report 2022-2023 Released"
              excerpt="Our annual report highlighting our achievements, challenges, and financial transparency for the past year is now available."
              date="April 10, 2023"
              imageUrl="/placeholder.svg?height=400&width=600"
              slug="/news/annual-report-2022-2023"
            />
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Join us in our upcoming events and be a part of the change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Fundraising Gala"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-600 dark:text-gray-400">June 15, 2023</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Annual Fundraising Gala</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Join us for an evening of inspiration and giving back at our Annual Fundraising Gala in Kathmandu.
                </p>
                <Button variant="outline" className="w-full">
                  Register Now
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="Health Camp" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-600 dark:text-gray-400">July 8-10, 2023</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Free Health Camp</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A three-day health camp providing free medical services in Rasuwa district.
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="Workshop" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-600 dark:text-gray-400">July 25, 2023</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Youth Leadership Workshop</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Empowering young leaders with skills and knowledge to drive positive change in their communities.
                </p>
                <Button variant="outline" className="w-full">
                  Register Now
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners */}
      <PartnerSlider />

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your support can help us continue our work and create lasting impact in communities across Nepal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
              Become a Volunteer
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
