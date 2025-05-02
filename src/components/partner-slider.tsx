"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const partners = [
  { id: 1, name: "Partner 1", logo: "/placeholder-logo.svg" },
  { id: 2, name: "Partner 2", logo: "/placeholder-logo.svg" },
  { id: 3, name: "Partner 3", logo: "/placeholder-logo.svg" },
  { id: 4, name: "Partner 4", logo: "/placeholder-logo.svg" },
  { id: 5, name: "Partner 5", logo: "/placeholder-logo.svg" },
  { id: 6, name: "Partner 6", logo: "/placeholder-logo.svg" },
  { id: 7, name: "Partner 7", logo: "/placeholder-logo.svg" },
  { id: 8, name: "Partner 8", logo: "/placeholder-logo.svg" },
]

export default function PartnerSlider() {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % (partners.length * 2))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We collaborate with organizations that share our vision for a better Nepal.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-linear"
            style={{
              transform: `translateX(-${(position * 100) / partners.length}%)`,
              width: `${partners.length * 200}%`,
            }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div key={`${partner.id}-${index}`} className="flex-shrink-0 w-1/4 md:w-1/6 lg:w-1/8 px-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex items-center justify-center h-24">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="max-h-12 w-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
