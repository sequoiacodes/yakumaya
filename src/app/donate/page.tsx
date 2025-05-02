"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import { Heart, CreditCard, DollarSign, Calendar, CheckCircle2 } from "lucide-react"

export default function DonatePage() {
  const [donationAmount, setDonationAmount] = useState<string>("50")
  const [customAmount, setCustomAmount] = useState<string>("")
  const [isRecurring, setIsRecurring] = useState<boolean>(false)
  const [paymentMethod, setPaymentMethod] = useState<string>("card")
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form after showing success message
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    }, 2000)
  }

  const handleAmountChange = (value: string) => {
    setDonationAmount(value)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
    setDonationAmount("custom")
  }

  const finalAmount = donationAmount === "custom" ? customAmount : donationAmount

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Donate Hero"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Make a Donation</h1>
            <p className="text-xl">
              Your support helps us continue our work and create lasting impact in communities across Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Your Donation Makes a Difference</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Every contribution, no matter the size, helps us implement programs and reach more communities in need.
                Your generosity directly supports our work in education, healthcare, livelihood, and disaster relief.
              </p>

              <div className="mb-8">
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
                    <span>$500 can help rebuild a classroom in a remote school</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Current Fundraising Goal</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">School Rebuilding Project</span>
                      <span className="font-medium">$15,000 / $25,000</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Healthcare Initiative</span>
                      <span className="font-medium">$8,500 / $10,000</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Other Ways to Donate</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold">Bank Transfer</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Account Name: Akumaya Helping Hands Foundation
                      <br />
                      Bank: Nepal Bank Ltd.
                      <br />
                      Account Number: 01234567890
                      <br />
                      Swift Code: NEPLNPKA
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold">By Check</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Please make checks payable to &quot;Akumaya Helping Hands Foundation&quot; and mail to:
                      <br />
                      P.O. Box 1234, Kathmandu, Nepal
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold">For Large Donations</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Please contact us directly at donations@akumaya.org.np or call +977 1 XXXXXXX
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  {isSuccess ? (
                    <div className="text-center py-8">
                      <div className="flex justify-center mb-4">
                        <CheckCircle2 className="h-16 w-16 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Thank You for Your Donation!</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Your generous contribution will help us make a difference in the lives of many. A receipt has
                        been sent to your email.
                      </p>
                      <Button asChild>
                        <Link href="/">Return to Homepage</Link>
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleDonationSubmit}>
                      <h3 className="text-2xl font-bold mb-6">Make a Donation</h3>

                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <Label htmlFor="donation-type">Donation Type</Label>
                          <div className="flex items-center space-x-2">
                            <Switch id="recurring" checked={isRecurring} onCheckedChange={setIsRecurring} />
                            <Label htmlFor="recurring" className="cursor-pointer">
                              {isRecurring ? "Monthly Donation" : "One-time Donation"}
                            </Label>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <Label>Select Amount</Label>
                          <div className="grid grid-cols-3 gap-4">
                            {["25", "50", "100", "250", "500", "custom"].map((amount) => (
                              <Button
                                key={amount}
                                type="button"
                                variant={donationAmount === amount ? "default" : "outline"}
                                className="h-16"
                                onClick={() => handleAmountChange(amount)}
                              >
                                {amount === "custom" ? "Custom" : `$${amount}`}
                              </Button>
                            ))}
                          </div>

                          {donationAmount === "custom" && (
                            <div className="mt-4">
                              <Label htmlFor="custom-amount">Custom Amount ($)</Label>
                              <div className="relative">
                                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input
                                  id="custom-amount"
                                  type="number"
                                  min="1"
                                  step="1"
                                  placeholder="Enter amount"
                                  className="pl-10"
                                  value={customAmount}
                                  onChange={handleCustomAmountChange}
                                  required={donationAmount === "custom"}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="mb-6">
                        <Label className="text-lg font-medium mb-4 block">Payment Method</Label>
                        <Tabs defaultValue="card" value={paymentMethod} onValueChange={setPaymentMethod}>
                          <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="card">Credit Card</TabsTrigger>
                            <TabsTrigger value="paypal">PayPal</TabsTrigger>
                          </TabsList>
                          <TabsContent value="card" className="space-y-4 mt-4">
                            <div className="space-y-2">
                              <Label htmlFor="card-name">Name on Card</Label>
                              <Input id="card-name" placeholder="John Doe" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="card-number">Card Number</Label>
                              <div className="relative">
                                <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input id="card-number" placeholder="1234 5678 9012 3456" className="pl-10" required />
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="expiry">Expiry Date</Label>
                                <div className="relative">
                                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                  <Input id="expiry" placeholder="MM/YY" className="pl-10" required />
                                </div>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="cvc">CVC</Label>
                                <Input id="cvc" placeholder="123" required />
                              </div>
                            </div>
                          </TabsContent>
                          <TabsContent value="paypal" className="mt-4">
                            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                              <p className="mb-4">You will be redirected to PayPal to complete your donation.</p>
                              <Image
                                src="/placeholder.svg?height=60&width=200&text=PayPal"
                                alt="PayPal"
                                width={200}
                                height={60}
                                className="mx-auto"
                              />
                            </div>
                          </TabsContent>
                        </Tabs>
                      </div>

                      <div className="mb-6">
                        <Label className="text-lg font-medium mb-4 block">Personal Information</Label>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="first-name">First Name</Label>
                              <Input id="first-name" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="last-name">Last Name</Label>
                              <Input id="last-name" required />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone (Optional)</Label>
                            <Input id="phone" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="message">Message (Optional)</Label>
                            <Textarea id="message" placeholder="Leave a message with your donation" />
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                          <div className="flex justify-between mb-2">
                            <span>Donation Amount:</span>
                            <span className="font-bold">${finalAmount}</span>
                          </div>
                          {isRecurring && (
                            <div className="flex justify-between mb-2">
                              <span>Frequency:</span>
                              <span>Monthly</span>
                            </div>
                          )}
                          <div className="flex justify-between">
                            <span>Payment Method:</span>
                            <span>{paymentMethod === "card" ? "Credit Card" : "PayPal"}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="flex items-start">
                          <RadioGroup defaultValue="yes">
                            <div className="flex items-start space-x-2">
                              <RadioGroupItem value="yes" id="tax-receipt-yes" />
                              <Label htmlFor="tax-receipt-yes" className="font-normal">
                                Yes, I would like to receive a tax receipt for my donation.
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            <Heart className="mr-2 h-5 w-5" />
                            {isRecurring ? "Donate Monthly" : "Donate Now"} ${finalAmount}
                          </>
                        )}
                      </Button>

                      <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                        Your donation is secure and encrypted. You can cancel recurring donations at any time.
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
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why People Donate</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Hear from our donors about why they choose to support our work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Monthly Donor since 2020",
                quote:
                  "I've seen firsthand the impact that Akumaya Foundation has in rural communities. Their transparency and dedication to sustainable development is why I continue to support them.",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "David Chen",
                role: "Corporate Partner",
                quote:
                  "Our company chose to partner with Akumaya because of their proven track record and community-centered approach. The results we've seen from our contributions have been remarkable.",
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
                  <p className="italic mb-4 text-gray-600 dark:text-gray-400">&ldquo;{testimonial.quote}&rdquo;</p>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Find answers to common questions about donating to our organization.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Is my donation tax-deductible?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes, Akumaya Helping Hands Foundation Nepal is a registered non-profit organization, and all donations
                  are tax-deductible to the extent allowed by law. We provide tax receipts for all donations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">How is my donation used?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Your donation directly supports our programs in education, healthcare, livelihood, and disaster
                  relief. We maintain transparency through regular financial reports that detail how funds are
                  allocated.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Can I specify how my donation is used?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes, you can designate your donation for a specific program or project. Please include a note with
                  your donation or contact us directly to discuss your preferences.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">How do I cancel or modify my recurring donation?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  You can cancel or modify your recurring donation at any time by contacting our donor support team at
                  donations@akumaya.org.np or by calling +977 1 XXXXXXX.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Other Ways to Support Our Work</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Beyond financial contributions, there are many ways you can support our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/get-involved">Become a Volunteer</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
              <Link href="/contact">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
