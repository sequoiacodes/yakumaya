"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, BookOpen, Lightbulb, Award, Target } from "lucide-react";
import { useTheme } from "next-themes";

export default function AboutPage() {
  const { theme } = useTheme();

  return (
    <div
      className={`flex flex-col min-h-screen ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="About Us Hero"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              About Us
            </h1>
            <p className="text-xl">
              Learn about our journey, mission, and the impact We&apos;re making
              across Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className={`text-3xl font-bold mb-6 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Our Story
              </h2>
              <p
                className={`text-lg mb-6 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Yakumaya Helping Hands Foundation Nepal was established in 2010
                with a vision to create sustainable development and improve the
                quality of life for communities across Nepal.
              </p>
              <p
                className={`text-lg mb-6 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Following the devastating earthquake in 2015, we expanded our
                focus to include disaster relief and rehabilitation, working
                closely with affected communities to rebuild homes, schools, and
                livelihoods.
              </p>
              <p
                className={`text-lg ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Today, we continue to work across multiple sectors, implementing
                programs that address the most pressing needs of communities
                while building resilience and self-reliance.
              </p>
            </div>
            <div className="relative h-80 md:h-96">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Our Story"
                fill
                className={`object-cover rounded-lg ${
                  theme === "dark" ? "brightness-90" : "brightness-100"
                }`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
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
              Our Mission & Vision
            </h2>
            <p
              className={`text-lg max-w-3xl mx-auto ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Guided by our core values, we work towards creating lasting
              change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card
              className={`border-none shadow-lg ${
                theme === "dark" ? "bg-gray-700" : "bg-white"
              }`}
            >
              <CardContent className="p-8">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  To empower communities through sustainable development
                  initiatives, focusing on education, healthcare, livelihood,
                  and disaster relief, creating lasting positive change across
                  Nepal.
                </p>
              </CardContent>
            </Card>

            <Card
              className={`border-none shadow-lg ${
                theme === "dark" ? "bg-gray-700" : "bg-white"
              }`}
            >
              <CardContent className="p-8">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  A Nepal where all communities have equal access to
                  opportunities, resources, and services, enabling them to lead
                  dignified, healthy, and prosperous lives.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Our Core Values
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Compassion</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  We approach our work with empathy and understanding.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Integrity</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  We maintain transparency and accountability in all our
                  actions.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Collaboration</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  We believe in working together with communities and partners.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Innovation</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  We seek creative solutions to complex challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className={`text-3xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Our Team
            </h2>
            <p
              className={`text-lg max-w-3xl mx-auto ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Meet the dedicated individuals who drive our mission forward.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Rajesh Sharma",
                title: "Executive Director",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Sunita Gurung",
                title: "Program Director",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Binod Thapa",
                title: "Finance Manager",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Anita Rai",
                title: "Communications Officer",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <div
                key={index}
                className={`text-center ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {member.title}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/team">View Full Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Over the years, We&apos;ve made significant strides in improving
              lives across Nepal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-4xl font-bold text-primary">50+</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Schools Supported</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We&apos;ve rebuilt and supported over 50 schools, providing
                  quality education to thousands of children.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-4xl font-bold text-primary">25+</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Health Camps</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our health camps have provided medical services to over 15,000
                  people in remote areas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-4xl font-bold text-primary">
                    5,000+
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">Livelihoods Improved</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our vocational training and livelihood programs have helped
                  over 5,000 individuals gain skills and income.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/impact">Learn More About Our Impact</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners & Supporters */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className={`text-3xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Our Partners & Supporters
            </h2>
            <p
              className={`text-lg max-w-3xl mx-auto ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              We&apos;re grateful for the support of organizations and
              individuals who share our vision.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm flex items-center justify-center h-32"
              >
                <Image
                  src="/placeholder-logo.svg"
                  alt={`Partner ${item}`}
                  width={150}
                  height={75}
                  className="max-h-16 w-auto"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/partners">View All Partners</Link>
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
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Together, we can create lasting change and build a better future for
            communities across Nepal.
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
