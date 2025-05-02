"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Our Work",
    href: "#",
    submenu: [
      { name: "Programs", href: "/programs" },
      { name: "Projects", href: "/projects" },
      { name: "Success Stories", href: "/success-stories" },
    ],
  },
  { name: "Get Involved", href: "/get-involved" },
  { name: "News", href: "/news" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleSubmenu = (name: string) => {
    if (openSubmenu === name) {
      setOpenSubmenu(null)
    } else {
      setOpenSubmenu(name)
    }
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white shadow-md dark:bg-gray-900" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Akumaya Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-primary">Yakumaya</h1>
              <p className="text-xs text-muted-foreground">Helping Hands Foundation Nepal</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <button
                    onClick={() => toggleSubmenu(item.name)}
                    className={cn(
                      "flex items-center text-sm font-medium transition-colors hover:text-primary",
                      pathname.startsWith(item.href) ? "text-primary" : "text-foreground",
                    )}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      pathname === item.href ? "text-primary" : "text-foreground",
                    )}
                  >
                    {item.name}
                  </Link>
                )}

                {item.submenu && (
                  <div
                    className={cn(
                      "absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all",
                      openSubmenu === item.name
                        ? "opacity-100 visible"
                        : "opacity-0 invisible group-hover:opacity-100 group-hover:visible",
                    )}
                  >
                    <div className="py-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild>
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="flex w-full items-center justify-between py-2 text-base font-medium text-gray-600"
                    >
                      {item.name}
                      <ChevronDown
                        className={cn("h-4 w-4 transition-transform", openSubmenu === item.name ? "rotate-180" : "")}
                      />
                    </button>
                    {openSubmenu === item.name && (
                      <div className="ml-4 space-y-1">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block py-2 text-base font-medium text-gray-500 hover:text-gray-900"
                            onClick={() => setIsOpen(false)}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "block py-2 text-base font-medium hover:text-primary",
                      pathname === item.href ? "text-primary" : "text-gray-600",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button asChild className="w-full">
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
