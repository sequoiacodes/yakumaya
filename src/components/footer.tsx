"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useTheme } from "next-themes";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`${theme === "dark" ? "bg-gray-900" : "bg-white"} ${
        theme === "dark" ? "text-gray-100" : "text-gray-900"
      } border-t ${theme === "dark" ? "border-gray-800" : "border-gray-200"}`}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logoYa.png?height=40&width=40"
                alt="Yakumaya Logo"
                width={40}
                height={40}
                className={`rounded-full ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                }`}
              />
              <div>
                <h2 className="text-lg font-bold">Yakumaya</h2>
                <p
                  className={`text-xs ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Helping Hands Foundation Nepal
                </p>
              </div>
            </div>
            <p
              className={`${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              } mb-4`}
            >
              Empowering communities and transforming lives in Nepal through
              sustainable development initiatives.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className={`${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className={`${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className={`${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className={`${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3
              className={`text-lg font-semibold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className={`${
                    theme === "dark"
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className={`${
                    theme === "dark"
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Our Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved"
                  className={`${
                    theme === "dark"
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Get Involved
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className={`${
                    theme === "dark"
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  News & Updates
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className={`${
                    theme === "dark"
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`${
                    theme === "dark"
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className={`text-lg font-semibold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Our Programs
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/programs/education"
                  className={`${
                    theme === "dark"
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/healthcare"
                  className={`${
                    theme === "dark"
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Healthcare
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/livelihood"
                  className={`${
                    theme === "dark"
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Livelihood
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/disaster-relief"
                  className={`${
                    theme === "dark"
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Disaster Relief
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/women-empowerment"
                  className={`${
                    theme === "dark"
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Women Empowerment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className={`text-lg font-semibold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin
                  className={`h-5 w-5 mr-2 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  } mt-0.5`}
                />
                <span
                  className={`${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Kathmandu, Nepal
                </span>
              </li>
              <li className="flex items-center">
                <Phone
                  className={`h-5 w-5 mr-2 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                />
                <span
                  className={`${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  +977 1 XXXXXXX
                </span>
              </li>
              <li className="flex items-center">
                <Mail
                  className={`h-5 w-5 mr-2 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                />
                <span
                  className={`${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  info@Yakumaya.org.np
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`border-t ${
            theme === "dark" ? "border-gray-800" : "border-gray-200"
          } mt-12 pt-8`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p
              className={`text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              &copy; {new Date().getFullYear()} Yakumaya Helping Hands
              Foundation Nepal. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul
                className={`flex space-x-6 text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <li>
                  <Link
                    href="/privacy-policy"
                    className={`${
                      theme === "dark"
                        ? "hover:text-white"
                        : "hover:text-gray-900"
                    }`}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className={`${
                      theme === "dark"
                        ? "hover:text-white"
                        : "hover:text-gray-900"
                    }`}
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sitemap"
                    className={`${
                      theme === "dark"
                        ? "hover:text-white"
                        : "hover:text-gray-900"
                    }`}
                  >
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
