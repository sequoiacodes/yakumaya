"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Heart,
  BookOpen,
  Lightbulb,
  Globe,
  Calendar,
} from "lucide-react";
import NewsCard from "@/components/news-card";
import CounterSection from "@/components/counter-section";
import TestimonialSlider from "@/components/testimonial-slider";
import PartnerSlider from "@/components/partner-slider";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div
      className={`flex flex-col min-h-screen ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Hero Section */}
      <section
        className={`relative h-[80vh] flex items-center ${
          theme === "dark" ? "bg-gray-800" : "bg-gray-50"
        }`}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/homehero.jpg?height=1080&width=1920"
            alt="Hero Image"
            fill
            className={`object-cover brightness-50 ${
              theme === "dark" ? "opacity-80" : "opacity-100"
            }`}
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Empowering Communities, Transforming Lives
            </h1>
            <p className="text-xl mb-8">
              Yakumaya Helping Hands Foundation Nepal is dedicated to
              sustainable development and improving lives across Nepal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Our Programs
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/20"
                asChild
              >
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2">
              <h2
                className={`text-3xl font-bold mb-6 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Our Mission
              </h2>
              <p
                className={`text-lg mb-6 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Yakumaya Helping Hands Foundation Nepal is committed to
                empowering communities through sustainable development
                initiatives, focusing on education, healthcare, livelihood, and
                disaster relief.
              </p>
              <p
                className={`text-lg mb-6 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                We believe in creating lasting change by working directly with
                communities, understanding their needs, and implementing
                programs that foster self-reliance and resilience.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-primary hover:underline"
              >
                Learn more about us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative w-60 h-80 bg-transparent ">
              <Image
                src="/ceo.png?height=500&width=400"
                alt="Our Mission"
                width={400}
                height={500}
                className="object-cover rounded-2xl bg-contain shadow-lg shadow-gray-950"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <CounterSection />

      {/* Programs Section */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className={`text-3xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Our Programs
            </h2>
            <p
              className={`text-lg max-w-3xl mx-auto ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              We work across multiple sectors to create sustainable impact and
              improve the quality of life for communities across Nepal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <BookOpen className="h-6 w-6 text-primary" />,
                title: "Education",
                description:
                  "Providing quality education and learning opportunities for children and adults.",
                link: "/programs/education",
              },
              {
                icon: <Heart className="h-6 w-6 text-primary" />,
                title: "Healthcare",
                description:
                  "Improving access to healthcare services and promoting health awareness.",
                link: "/programs/healthcare",
              },
              {
                icon: <Lightbulb className="h-6 w-6 text-primary" />,
                title: "Livelihood",
                description:
                  "Creating sustainable livelihood opportunities and economic empowerment.",
                link: "/programs/livelihood",
              },
              {
                icon: <Globe className="h-6 w-6 text-primary" />,
                title: "Disaster Relief",
                description:
                  "Providing immediate relief and long-term recovery support during disasters.",
                link: "/programs/disaster-relief",
              },
            ].map((program, index) => (
              <Card
                key={index}
                className={`border-none shadow-lg hover:shadow-xl transition-shadow ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                }`}
              >
                <CardContent className="p-6">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                    {program.icon}
                  </div>
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {program.title}
                  </h3>
                  <p
                    className={`mb-4 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {program.description}
                  </p>
                  <Link
                    href={program.link}
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full mb-4">
                Featured Project
              </div>
              <h2 className="text-3xl text-primary font-bold mb-4">
                School Rebuilding Initiative
              </h2>
              <p className= {`text-lg mb-6 ${theme === "dark" ? "text-white" : "text-gray-950"}`}>
                After the devastating earthquake in Nepal, we&apos;ve been
                working to rebuild schools in remote areas, ensuring children
                have safe spaces to learn and grow.
              </p>
              <ul className={`space-y-2 mb-6 ${theme === "dark" ? "text-white" : "text-gray-950"}`}>
                <li className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900 p-1 rounded-full mr-3 mt-1">
                    <svg
                      className="h-3 w-3 text-green-600 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
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
                    <svg
                      className="h-3 w-3 text-green-600 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>
                    Over 2,000 students now have access to safe classrooms
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900 p-1 rounded-full mr-3 mt-1">
                    <svg
                      className="h-3 w-3 text-green-600 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
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
                <Link href="/projects/school-rebuilding">
                  Learn More About This Project
                </Link>
              </Button>
            </div>
            <div className="relative h-80 md:h-96 order-1 md:order-2">
              <Image
                src="/children.jpg?height=600&width=800"
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
      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2
                className={`text-3xl font-bold mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Latest News & Updates
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Stay updated with our recent activities and impact stories.
              </p>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center text-primary hover:underline mt-4 md:mt-0"
            >
              View all news <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NewsCard
              title="Health Camp Successfully Conducted in Dolakha"
              excerpt="Our team conducted a free health camp in Dolakha district, providing medical services to over 500 people."
              date="May 15, 2023"
              imageUrl="/camp.png?height=400&width=600"
              slug="/news/health-camp-dolakha"
            />
            <NewsCard
              title="New Vocational Training Center Inaugurated"
              excerpt="          We're proud to announce the opening of our new vocational training center in Kathmandu, offering skills development programs."
              date="April 28, 2023"
              imageUrl="/voca.png?height=400&width=600"
              slug="/news/vocational-training-center"
            />
            <NewsCard
              title="Annual Report 2022-2023 Released"
              excerpt="Our annual report highlighting our achievements, challenges, and financial transparency for the past year is now available."
              date="April 10, 2023"
              imageUrl="/report.png?height=400&width=600"
              slug="/news/annual-report-2022-2023"
            />
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
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
              Upcoming Events
            </h2>
            <p
              className={`text-lg max-w-3xl mx-auto ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Join us in our upcoming events and be a part of the change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Annual Fundraising Gala",
                date: "June 15, 2023",
                description:
                  "Join us for an evening of inspiration and giving back at our Annual Fundraising Gala in Kathmandu.",
                image: "/gala.png?height=400&width=600",
                buttonText: "Register Now",
              },
              {
                title: "Free Health Camp",
                date: "July 8-10, 2023",
                description:
                  "A three-day health camp providing free medical services in Rasuwa district.",
                image: "/camp.png?height=400&width=600",
                buttonText: "Learn More",
              },
              {
                title: "Youth Leadership Workshop",
                date: "July 25, 2023",
                description:
                  "Empowering young leaders with skills and knowledge to drive positive change in their communities.",
                image: "/youth.png?height=400&width=600",
                buttonText: "Register Now",
              },
            ].map((event, index) => (
              <Card
                key={index}
                className={`overflow-hidden ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    <span
                      className={`${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {event.date}
                    </span>
                  </div>
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {event.title}
                  </h3>
                  <p
                    className={`mb-4 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {event.description}
                  </p>
                  <Button variant="outline" className="w-full">
                    {event.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
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
          <h2 className="text-3xl font-bold mb-4">
            Join Us in Making a Difference
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
              Become a Volunteer
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
