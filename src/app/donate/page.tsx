"use client";

import { useTheme } from "next-themes";
import type React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Label } from "@/components/ui/label";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  CheckCircle2,
} from "lucide-react";

export default function DonatePage() {
  const { theme } = useTheme();
 

  const [paymentMethod, setPaymentMethod] = useState<string>("esewa");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
 

    // Simulate API call
    setTimeout(() => {
     
      setIsSuccess(true);

      // Reset form after showing success message
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 2000);
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
            src="/donate.png?height=600&width=1920"
            alt="Donate Hero"
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
              Make a Donation
            </h1>
            <p
              className={`text-xl ${
                theme === "dark" ? "text-gray-100" : "text-gray-100"
              }`}
            >
              Your support helps us continue our work and create lasting impact
              in communities across Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2
                className={`text-3xl font-bold mb-6 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Your Donation Makes a Difference
              </h2>
              <p
                className={`text-lg mb-6 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Every contribution, no matter the size, helps us implement
                programs and reach more communities in need. Your generosity
                directly supports our work in education, healthcare, livelihood,
                and disaster relief.
              </p>

              <div
                className={` mb-8 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <h3 className="text-xl font-bold mb-4">Your Impact</h3>
                <div className="space-y-4">
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
                    <span>$25 can provide school supplies for 2 children</span>
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
                    <span>$50 can support a health camp serving 25 people</span>
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
                    <span>$100 can fund vocational training for 2 women</span>
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
                    <span>
                      $500 can help rebuild a classroom in a remote school
                    </span>
                  </div>
                </div>
              </div>

            

              <div
                className={`bg-gray-50 p-6 rounded-lg ${
                  theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-700"
                }`}
              >
                <h3
                  className={`text-xl font-bold mb-4 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Other Ways to Donate
                </h3>
                <div className="space-y-4">
                
                  <div>
                    <h4 className="font-bold">By Check</h4>
                    <p className="text-gray-500 ">
                      Please make checks payable to &quot;Yakumaya Helping Hands
                      Foundation&quot; and mail to:
                      <br />
                      P.O. Box 1234, Kathmandu, Nepal
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold">For Large Donations</h4>
                    <p className="text-gray-500 ">
                      Please contact us directly at donations@yakumaya.org.np or
                      call +977 1 XXXXXXX
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card
                className={`border-none shadow-lg ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                }`}
              >
                <CardContent className="p-6">
                  {isSuccess ? (
                    <div
                      className={`text-center py-8 ${
                        theme === "dark" ? "text-gray-100" : "text-gray-900"
                      }`}
                    >
                      <div className="flex justify-center mb-4">
                        <CheckCircle2 className="h-16 w-16 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">
                        Thank You for Your Donation!
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Your generous contribution will help us make a
                        difference in the lives of many. A receipt has been sent
                        to your email.
                      </p>
                      <Button asChild>
                        <Link href="/">Return to Homepage</Link>
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleDonationSubmit}>
                      <h3 className="text-2xl font-bold mb-6">
                        Make a Donation
                      </h3>


                      <div className="mb-6">
                        <Label className="text-lg font-medium mb-4 block">
                          Payment Method
                        </Label>
                        <Tabs
                          defaultValue="esewa"
                          value={paymentMethod}
                          onValueChange={setPaymentMethod}
                        >
                          <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="esewa">eSewa</TabsTrigger>
                            <TabsTrigger value="khalti">Khalti</TabsTrigger>
                            <TabsTrigger value="bank">
                              Bank Transfer
                            </TabsTrigger>
                          </TabsList>

                          <TabsContent value="esewa" className="mt-4">
                            <div className="space-y-4">
                              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <Image
                                  src="/esewa-logo.png"
                                  alt="eSewa"
                                  width={120}
                                  height={40}
                                  className="mx-auto mb-4"
                                />
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <p className="text-sm mb-2">Scan QR Code</p>
                                    <Image
                                      src="/esewa-qr.png"
                                      alt="eSewa QR"
                                      width={150}
                                      height={150}
                                      className="mx-auto border-2 border-gray-200 dark:border-gray-700 rounded-lg"
                                    />
                                  </div>
                                  <div>
                                    <p className="text-sm mb-2">eSewa ID</p>
                                    <p className="font-medium">9841XXXXXX</p>
                                    <p className="text-sm mt-4">Name</p>
                                    <p className="font-medium">
                                      Yakumaya Foundation
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </TabsContent>

                          <TabsContent value="khalti" className="mt-4">
                            <div className="space-y-4">
                              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <Image
                                  src="/khalti-logo.png"
                                  alt="Khalti"
                                  width={120}
                                  height={40}
                                  className="mx-auto mb-4"
                                />
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <p className="text-sm mb-2">Scan QR Code</p>
                                    <Image
                                      src="/khalti-qr.png"
                                      alt="Khalti QR"
                                      width={150}
                                      height={150}
                                      className="mx-auto border-2 border-gray-200 dark:border-gray-700 rounded-lg"
                                    />
                                  </div>
                                  <div>
                                    <p className="text-sm mb-2">Khalti ID</p>
                                    <p className="font-medium">9841XXXXXX</p>
                                    <p className="text-sm mt-4">Name</p>
                                    <p className="font-medium">
                                      Yakumaya Foundation
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </TabsContent>

                          <TabsContent value="bank" className="mt-4">
                            <div className="space-y-4">
                              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <div className="grid gap-6">
                                  <div>
                                    <h4 className="font-medium mb-2">
                                      Nepal Bank Limited
                                    </h4>
                                    <div className="space-y-1 text-sm">
                                      <p>
                                        Account Name: Yakumaya Helping Hands
                                        Foundation
                                      </p>
                                      <p>Account Number: 01234567890</p>
                                      <p>Branch: Main Branch, Kathmandu</p>
                                      <p>Swift Code: NEPLNPKA</p>
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-2">
                                      NIC Asia Bank
                                    </h4>
                                    <div className="space-y-1 text-sm">
                                      <p>
                                        Account Name: Yakumaya Helping Hands
                                        Foundation
                                      </p>
                                      <p>Account Number: 09876543210</p>
                                      <p>Branch: New Road, Kathmandu</p>
                                      <p>Swift Code: NICENPKA</p>
                                    </div>
                                  </div>
                                  <div>
                                    <p className="text-sm mb-2">Bank QR Code</p>
                                    <Image
                                      src="/bank-qr.png"
                                      alt="Bank QR"
                                      width={150}
                                      height={150}
                                      className="mx-auto border-2 border-gray-200 dark:border-gray-700 rounded-lg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </div>

              

                    
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-gray-50 text-gray-700"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why People Donate</h2>
            <p className="text-lg text-gray-500  max-w-3xl mx-auto">
              Hear from our donors about why they choose to support our work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Monthly Donor since 2020",
                quote:
                  "I've seen firsthand the impact that Yakumaya Foundation has in rural communities. Their transparency and dedication to sustainable development is why I continue to support them.",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "David Chen",
                role: "Corporate Partner",
                quote:
                  "Our company chose to partner with Yakumaya because of their proven track record and community-centered approach. The results we've seen from our contributions have been remarkable.",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Priya Sharma",
                role: "Individual Donor",
                quote:
                  "After visiting one of their education projects, I was moved by the dedication of the team and the impact they're making. My donations are truly changing lives.",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  </div>
                  <p className="italic mb-4 text-gray-500 ">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 ">
                    {testimonial.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-white text-gray-700"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-500  max-w-3xl mx-auto">
              Find answers to common questions about donating to our
              organization.
            </p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Is my donation tax-deductible?
              </h3>
              <p className="text-gray-500 ">
                Yes, Yakumaya Helping Hands Foundation Nepal is a registered
                non-profit organization, and all donations are tax-deductible to
                the extent allowed by law. We provide tax receipts for all
                donations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">
                How is my donation used?
              </h3>
              <p className="text-gray-500 ">
                Your donation directly supports our programs in education,
                healthcare, livelihood, and disaster relief. We maintain
                transparency through regular financial reports that detail how
                funds are allocated.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Can I specify how my donation is used?
              </h3>
              <p className="text-gray-500 ">
                Yes, you can designate your donation for a specific program or
                project. Please include a note with your donation or contact us
                directly to discuss your preferences.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">
                How do I cancel or modify my recurring donation?
              </h3>
              <p className="text-gray-500 ">
                You can cancel or modify your recurring donation at any time by
                contacting our donor support team at donations@Yakumaya.org.np
                or by calling +977 1 XXXXXXX.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className={`py-16 ${
          theme === "dark" ? "bg-primary-dark" : "bg-primary"
        } text-white`}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Other Ways to Support Our Work
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Beyond financial contributions, there are many ways you can support
            our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/get-involved">Become a Volunteer</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/20"
            >
              <Link href="/contact">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
