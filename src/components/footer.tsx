import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Yakumaya Logo"
                width={40}
                height={40}
                className="rounded-full bg-white"
              />
              <div>
                <h2 className="text-lg font-bold">Yakumaya</h2>
                <p className="text-xs text-gray-400">Helping Hands Foundation Nepal</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering communities and transforming lives in Nepal through sustainable development initiatives.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-400 hover:text-white">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-gray-400 hover:text-white">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-white">
                  News & Updates
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programs/education" className="text-gray-400 hover:text-white">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/programs/healthcare" className="text-gray-400 hover:text-white">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/programs/livelihood" className="text-gray-400 hover:text-white">
                  Livelihood
                </Link>
              </li>
              <li>
                <Link href="/programs/disaster-relief" className="text-gray-400 hover:text-white">
                  Disaster Relief
                </Link>
              </li>
              <li>
                <Link href="/programs/women-empowerment" className="text-gray-400 hover:text-white">
                  Women Empowerment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gray-400 mt-0.5" />
                <span className="text-gray-400">Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gray-400" />
                <span className="text-gray-400">+977 1 XXXXXXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-400" />
                <span className="text-gray-400">info@Yakumaya.org.np</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Yakumaya Helping Hands Foundation Nepal. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm text-gray-400">
                <li>
                  <Link href="/privacy-policy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap" className="hover:text-white">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
