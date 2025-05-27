"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Send,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [buttonText, setButtonText] = useState("Send Message"); // Add state for button text

  const { theme } = useTheme();

   const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

   const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setButtonText("Sending..."); // Set sending state

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

     
      setButtonText("||Sent|| We'll get back to you soon!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setButtonText("Send Message");
        
      }, 5000);
    } catch (error) {
     
      setButtonText("Sorry Message couldn't be sent");
      setTimeout(() => {
      
        setButtonText("Send Message");
      }, 4000);

      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
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
          theme === "dark" ? "bg-gray-800" : "bg-gray-100"
        }`}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact.png?height=600&width=1920"
            alt="Contact Us Hero"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white`}
            >
              Contact Us
            </h1>
            <p
              className={`text-xl text-white`}
            >
              Get in touch with us for inquiries, partnerships, or to learn more
              about our work.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
      >
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
              <h2
                className={`text-3xl font-bold mb-6 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Get In Touch
              </h2>
              <p
                className={`text-lg mb-8 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                We&apos;d love to hear from you. Whether you have a question
                about our programs, want to volunteer, or are interested in
                partnering with us, our team is here to help.
              </p>
           </div>
          <div className="grid md:grid-cols-2 items-center gap-12">
            <div>
           

              <div className="space-y-6">
                <div
                  className={`flex items-start ${
                    theme === "dark" ? "bg-gray-800" : "bg-gray-50"
                  } p-4 rounded-lg`}
                >
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Our Location</h3>
                    <p className="">
                      Kathmandu, Nepal
                      <br />
                      Baluwatar, Ward No. 4
                    </p>
                  </div>
                </div>

                <div
                  className={`flex items-start ${
                    theme === "dark" ? "bg-gray-800" : "bg-gray-50"
                  } p-4 rounded-lg`}
                >
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="">
                      +977 1 XXXXXXX
                      <br />
                      +977 9XXXXXXXX
                    </p>
                  </div>
                </div>

                <div
                  className={`flex items-start ${
                    theme === "dark" ? "bg-gray-800" : "bg-gray-50"
                  } p-4 rounded-lg`}
                >
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="">
                     <a href="mailto:yhhfn.org.np@gmail.com">yhhfn.org.np@gmail.com</a>
                      
                    </p>

                  </div>
                </div>

                <div
                  className={`flex items-start ${
                    theme === "dark" ? "bg-gray-800" : "bg-gray-50"
                  } p-4 rounded-lg`}
                >
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Office Hours</h3>
                    <p className="">
                      Sunday - Friday: 9:00 AM - 5:00 PM
                      <br />
                      Saturday: Closed
                    </p>
                  </div>
                </div>
              </div>

            
            </div>

            <div>
              <Card
                className={`border-none  shadow-lg ${
                  theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
                }`}
              >
                <CardContent className="p-6">
                  <h2
                    className={`text-2xl font-bold mb-6 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input   id="name"
                        name="name"
                        autoComplete="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange} placeholder="Your full name"
                        required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}

                          placeholder="Your email address"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        required
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}

                        placeholder="Subject of your message"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                       id="message"
                      required
                      autoComplete="off"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                        placeholder="Your message"
                        rows={5}
                      />
                    </div>
                     <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        {buttonText}
                        <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          →
                        </span>
                      </>
                    )}
                  </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
              <div className="mt-8">
                <h3 className="font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                  >
                    <Facebook className="h-6 w-6 text-primary" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="#"
                    className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                  >
                    <Twitter className="h-6 w-6 text-primary" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="#"
                    className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                  >
                    <Instagram className="h-6 w-6 text-primary" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="#"
                    className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                  >
                    <Youtube className="h-6 w-6 text-primary" />
                    <span className="sr-only">YouTube</span>
                  </Link>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-lg  max-w-3xl mx-auto">
              Visit our office in Kathmandu, Nepal.
            </p>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Map"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <p className="font-bold">This is a placeholder for a map</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  In a real implementation, an interactive map would be
                  displayed here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-white text-gray-700"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg  max-w-3xl mx-auto">
              Find answers to common questions about our organization and work.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  How can I donate to your organization?
                </h3>
                <p className="">
                  You can donate through our website, bank transfer, or visit
                  our office in person. All donation methods are secure and
                  transparent.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Can I volunteer with your organization?
                </h3>
                <p className="">
                  Yes, we welcome volunteers! Please fill out the volunteer form
                  on our &quot;Get Involved&quot; page or contact us directly to
                  discuss opportunities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  How is my donation used?
                </h3>
                <p className="">
                  Your donations directly support our programs in education,
                  healthcare, livelihood, and disaster relief. We maintain
                  transparency through regular financial reports.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Can my organization partner with you?
                </h3>
                <p className="">
                  We&apos;re always open to partnerships that align with our
                  mission. Please contact us to discuss potential collaboration
                  opportunities.
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
          <h2 className="text-3xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join us in our mission to create positive change across Nepal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-gray-500 border-white hover:bg-white/20"
            >
              Become a Volunteer
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
