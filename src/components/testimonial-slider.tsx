"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    quote:
      "The support from Akumaya Foundation has transformed our school. The new classrooms and learning materials have created a better environment for our students.",
    name: "Ramesh Sharma",
    title: "School Principal, Sindhupalchok",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    quote:
      "The vocational training program helped me gain skills and confidence. Now I run my own tailoring business and can support my family.",
    name: "Sita Tamang",
    title: "Program Beneficiary, Kathmandu",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    quote:
      "After the earthquake, Akumaya was one of the first organizations to reach our village with relief supplies. Their continued support has helped us rebuild our lives.",
    name: "Bir Bahadur Gurung",
    title: "Community Leader, Gorkha",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What People Say About Us</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Hear from the communities and individuals we've worked with.
          </p>
        </div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="rounded-full border-4 border-primary/20"
                        />
                      </div>
                    </div>
                    <p className="text-lg italic mb-6">{testimonial.quote}</p>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white dark:bg-gray-800 shadow-md"
            onClick={prev}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-white dark:bg-gray-800 shadow-md"
            onClick={next}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next</span>
          </Button>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${current === index ? "bg-primary" : "bg-gray-300 dark:bg-gray-700"}`}
                onClick={() => setCurrent(index)}
              >
                <span className="sr-only">Testimonial {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
