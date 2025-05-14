"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Heart,
  HandHelping,
  DollarSign,
  Gift,
  Share2,
  Users,
} from "lucide-react";

export default function GetInvolvedPage() {
  const { theme } = useTheme();

  return (
    <div
      className={`flex flex-col min-h-screen ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hands.png?height=600&width=1920"
            alt="Get Involved Hero"
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
              Get Involved
            </h1>
            <p
              className={`text-xl ${
                theme === "dark" ? "text-gray-100" : "text-gray-100"
              }`}
            >
              Join us in our mission to create positive change across Nepal.
              There are many ways you can contribute.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
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
              How You Can Help
            </h2>
            <p
              className={`text-lg ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              } max-w-3xl mx-auto`}
            >
              Whether you want to donate, volunteer, or partner with us, your
              support makes a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              className={`border-none shadow-lg hover:shadow-xl transition-shadow ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-6">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Donate</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Your financial contribution helps us implement programs and
                  reach more communities in need.
                </p>
                <Button asChild className="w-full">
                  <Link href="/donate">Donate Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card
              className={`border-none shadow-lg hover:shadow-xl transition-shadow ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-6">
                  <HandHelping className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Volunteer</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Share your time and skills to support our programs and make a
                  direct impact on communities.
                </p>
                <Button asChild className="w-full">
                  <Link href="#volunteer">Become a Volunteer</Link>
                </Button>
              </CardContent>
            </Card>

            <Card
              className={`border-none shadow-lg hover:shadow-xl transition-shadow ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-6">
                  <Share2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Partner With Us</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Collaborate with us to create greater impact through shared
                  resources and expertise.
                </p>
                <Button asChild className="w-full">
                  <Link href="#partner">Become a Partner</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section
        id="donate"
        className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="container mx-auto px-4">
          <div className=" items-center">
            <div className="mx-auto">
              <div
                className={`inline-block bg-primary/10 text-primary px-4 py-1 rounded-full mb-4 ${
                  theme === "dark" ? "bg-opacity-20" : ""
                }`}
              >
                Donate
              </div>
              <h2
                className={`text-3xl font-bold mb-4 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Make a Donation
              </h2>
              <p
                className={`text-lg ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                } mb-6`}
              >
                Your donation, no matter the size, makes a significant impact on
                our ability to serve communities in need across Nepal.
              </p>
              <p
                className={`text-lg ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                } mb-6`}
              >
                We ensure transparency and accountability in how your donations
                are used, with regular updates on the impact of your
                contribution.
              </p>

              <div className="space-y-4 mb-6 text-gray-500">
                <div className="flex items-start">
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
                  <div className="inline">$50 can provide school supplies for 5 children</div>
                </div>
                <div className="flex items-start">
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
                  <span>$100 can support a health camp serving 50 people</span>
                </div>
                <div className="flex items-start">
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
                  <span>$500 can fund vocational training for 10 women</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                  asChild
                >
                  <Link href="/donate">Donate Online</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/donate">Other Ways to Donate</Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section
        id="volunteer"
        className={`py-16 ${theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-700"}`}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card
              className={`border-none shadow-lg order-2 md:order-1 ${
                theme === "dark" ? "bg-gray-900" : "bg-white"
              }`}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">
                  Volunteer Application
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="Your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="volunteer-email">Email</Label>
                    <Input
                      id="volunteer-email"
                      type="email"
                      placeholder="Your email address"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="Your phone number" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="area">Area of Interest</Label>
                    <Select>
                      <SelectTrigger id="area">
                        <SelectValue placeholder="Select an area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="livelihood">Livelihood</SelectItem>
                        <SelectItem value="disaster-relief">
                          Disaster Relief
                        </SelectItem>
                        <SelectItem value="admin">
                          Administrative Support
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skills">Skills & Experience</Label>
                    <Textarea
                      id="skills"
                      placeholder="Tell us about your skills and relevant experience"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability</Label>
                    <Textarea
                      id="availability"
                      placeholder="When are you available to volunteer?"
                      rows={2}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="order-1 md:order-2">
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full mb-4">
                Volunteer
              </div>
              <h2 className="text-3xl font-bold mb-4">Become a Volunteer</h2>
              <p
                className={`text-lg ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                } mb-6`}
              >
                Volunteers are the heart of our organization. By sharing your
                time and skills, you can make a direct impact on the communities
                we serve.
              </p>
              <p
                className={`text-lg ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                } mb-6`}
              >
                We offer various volunteering opportunities, from short-term
                projects to long-term commitments, both in Nepal and remotely.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <Heart className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">On-site Volunteering</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Work directly with communities in Nepal
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <Heart className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Remote Volunteering</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Support our work from anywhere in the world
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <Heart className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Skills-Based Volunteering</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Contribute your professional skills and expertise
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section
        id="partner"
        className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full mb-4">
              Partner With Us
            </div>
            <h2
              className={`text-3xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Strategic Partnerships
            </h2>
            <p
              className={`text-lg ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              } max-w-3xl mx-auto`}
            >
              We believe in the power of collaboration. By partnering with
              organizations that share our vision, we can create greater impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card
              className={`border-none shadow-lg ${
                theme === "dark" ? "bg-gray-900" : "bg-white"
              }`}
            >
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Gift className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Corporate Partnerships
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Engage your company in meaningful social responsibility
                  initiatives that align with your values and create positive
                  impact.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 mb-4">
                  <li>• Corporate Social Responsibility programs</li>
                  <li>• Employee engagement opportunities</li>
                  <li>• Cause-related marketing</li>
                  <li>• Sponsorships</li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className={`border-none shadow-lg ${
                theme === "dark" ? "bg-gray-900" : "bg-white"
              }`}
            >
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Gift className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">NGO Partnerships</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Collaborate with us to implement joint programs, share
                  resources, and leverage each other&apos;s strengths for
                  greater impact.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 mb-4">
                  <li>• Joint program implementation</li>
                  <li>• Resource sharing</li>
                  <li>• Knowledge exchange</li>
                  <li>• Capacity building</li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className={`border-none shadow-lg ${
                theme === "dark" ? "bg-gray-900" : "bg-white"
              }`}
            >
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Gift className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Institutional Partnerships
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Partner with us to implement programs that align with your
                  institutional goals and create sustainable impact.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 mb-4">
                  <li>• Research collaborations</li>
                  <li>• Technical assistance</li>
                  <li>• Funding partnerships</li>
                  <li>• Policy advocacy</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/contact">Contact Us to Discuss Partnership</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-700"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Other Ways to Help</h2>
            <p
              className={`text-lg ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              } max-w-3xl mx-auto`}
            >
              There are many ways you can support our work beyond donating and
              volunteering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              className={`border-none shadow-lg ${
                theme === "dark" ? "bg-gray-900" : "bg-white"
              }`}
            >
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Share2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Spread the Word</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Share our work with your network on social media and help us
                  reach more people.
                </p>
              </CardContent>
            </Card>

            <Card
              className={`border-none shadow-lg ${
                theme === "dark" ? "bg-gray-900" : "bg-white"
              }`}
            >
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Gift className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">In-Kind Donations</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Donate goods, services, or equipment that can support our
                  programs and operations.
                </p>
              </CardContent>
            </Card>

            <Card
              className={`border-none shadow-lg ${
                theme === "dark" ? "bg-gray-900" : "bg-white"
              }`}
            >
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Host an Event</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Organize a fundraising event in your community to support our
                  work.
                </p>
              </CardContent>
            </Card>

            <Card
              className={`border-none shadow-lg ${
                theme === "dark" ? "bg-gray-900" : "bg-white"
              }`}
            >
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Legacy Giving</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Include Yakumaya Foundation in your will or estate planning to
                  create lasting impact.
                </p>
              </CardContent>
            </Card>
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
          <h2 className="text-3xl font-bold mb-4">Join Us Today</h2>
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
