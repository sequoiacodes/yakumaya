import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Heart, Lightbulb, Globe, Users } from "lucide-react"

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Programs Hero"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Our Programs</h1>
            <p className="text-xl">
              Discover how we're creating sustainable impact across Nepal through our diverse programs.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Do</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our programs focus on creating sustainable solutions to the most pressing challenges faced by communities
              across Nepal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Education"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Education</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Providing quality education and learning opportunities for children and adults.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/programs/education">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Healthcare"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Healthcare</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Improving access to healthcare services and promoting health awareness.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/programs/healthcare">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Livelihood"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Livelihood</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Creating sustainable livelihood opportunities and economic empowerment.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/programs/livelihood">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Disaster Relief"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Disaster Relief</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Providing immediate relief and long-term recovery support during disasters.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/programs/disaster-relief">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Program */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-96">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Women Empowerment Program"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full mb-4">
                Featured Program
              </div>
              <h2 className="text-3xl font-bold mb-4">Women Empowerment</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Our Women Empowerment program focuses on providing skills training, financial literacy, and
                entrepreneurship opportunities to women in rural communities.
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
                  <span>Vocational training for over 1,000 women</span>
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
                  <span>Microfinance support for small businesses</span>
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
                  <span>Leadership development and advocacy training</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/programs/women-empowerment">Learn More About This Program</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We believe in creating sustainable impact through community-led initiatives and partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community-Led</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We work directly with communities to understand their needs and involve them in program design and
                  implementation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Sustainable</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our programs are designed to create lasting change by building local capacity and fostering
                  self-reliance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Collaborative</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We partner with local organizations, government agencies, and international NGOs to maximize our
                  impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Impact Stories</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Real stories of change from the communities we work with.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="Sunita's Story" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Sunita&apos;s Story</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  &quot;The vocational training program gave me the skills to start my own tailoring business. Now I can
                  support my family and send my children to school.&quot;
                </p>
                <Button asChild variant="link" className="p-0">
                  <Link href="/success-stories/sunita">Read Full Story</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="Gorkha School" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Rebuilding Gorkha School</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  &quot;After the earthquake, our school was completely destroyed. Yakumaya helped us rebuild a safer, better
                  school for our children.&quot;
                </p>
                <Button asChild variant="link" className="p-0">
                  <Link href="/success-stories/gorkha-school">Read Full Story</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="Health Camp" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Dolakha Health Camp</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  &quot;The health camp provided medical care to over 500 people in our remote village who otherwise wouldn&apos;t
                  have access to healthcare.&quot;
                </p>
                <Button asChild variant="link" className="p-0">
                  <Link href="/success-stories/dolakha-health-camp">Read Full Story</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/success-stories">View All Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Support Our Programs</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your contribution can help us expand our programs and reach more communities in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
              Become a Partner
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
