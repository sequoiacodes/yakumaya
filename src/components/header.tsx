"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

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
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSubmenu = (name: string) => {
    if (openSubmenu === name) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(name);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? theme === "dark"
            ? "bg-gray-900 shadow-lg text-gray-50"
            : "bg-white shadow-md text-gray-900"
          : theme === "dark"
            ? "bg-gray-900 shadow-lg text-gray-50"
            : "bg-white shadow-md text-gray-900"
      }`}
    >
      <div
        className={`container mx-auto px-4 ${
          theme === "dark" ? "text-gray-100" : "text-gray-900"
        }`}
      >
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
         <Image
  style={{
    animationDuration: "20000ms",
  }}
  src="/logoYa.png?height=60&width=60"
  alt="Yakumaya Logo"
  width={80}
  height={80}
  className="rounded-full animate-spin w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
/>
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-primary">Yakumaya</h1>
              <p className={`text-xs ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}>
                Helping Hands Foundation Nepal
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <button
                    onClick={() => toggleSubmenu(item.name)}
                    className={cn(
                      "flex items-center text-sm font-medium transition-colors hover:text-primary",
                      pathname.startsWith(item.href)
                        ? "text-primary"
                        : theme === "dark" ? "text-gray-200" : "text-gray-700"
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
                      pathname === item.href
                        ? "text-primary"
                        : theme === "dark" ? "text-gray-200" : "text-gray-700"
                    )}
                  >
                    {item.name}
                  </Link>
                )}

                {item.submenu && (
                  <div
                    className={cn(
                      "absolute left-0 mt-2 w-48 rounded-md shadow-lg ring-1 ring-opacity-5 transition-all",
                      theme === "dark" 
                        ? "bg-gray-800 ring-white/10" 
                        : "bg-white ring-black/10",
                      openSubmenu === item.name
                        ? "opacity-100 visible"
                        : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                    )}
                  >
                    <div className="pt-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className={cn(
                            "block px-4 py-2 text-sm hover:bg-opacity-10",
                            theme === "dark" 
                              ? "text-gray-200 hover:bg-white hover:text-gray-600" 
                              : "text-gray-700 hover:bg-black hover:text-gray-200"
                          )}
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

          <div className="hidden lg:flex items-center space-x-4">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full hover:bg-opacity-20"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}
            <Button asChild>
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>
         
          {/* Mobile menu button */}
          <div className="flex gap-4 justify-center items-center lg:hidden">
             <div className="">
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="rounded-full hover:bg-opacity-20"
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5 text-yellow-500" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                  <span className="sr-only">Toggle theme</span>
                </Button>
              )}
           
            </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden rounded-md p-2 hover:bg-opacity-20 focus:outline-none",
              theme === "dark" 
                ? "text-gray-200 hover:bg-white" 
                : "text-gray-700 hover:bg-black"
            )}
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
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className={cn(
          "lg:hidden",
          theme === "dark" ? "bg-gray-800" : "bg-white"
        )}>

     

          <div className="space-y-1 px-4 pb-3 pt-2">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className={cn(
                        "flex w-full items-center justify-between py-2 text-base font-medium",
                        theme === "dark" ? "text-gray-200" : "text-gray-700"
                      )}
                    >
                      {item.name}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          openSubmenu === item.name ? "rotate-180" : ""
                        )}
                      />
                    </button>
                    {openSubmenu === item.name && (
                      <div className="ml-4 space-y-1">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className={cn(
                              "block py-2 text-base font-medium hover:text-primary",
                              theme === "dark" ? "text-gray-300" : "text-gray-600"
                            )}
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
                      pathname === item.href 
                        ? "text-primary" 
                        : theme === "dark" ? "text-gray-200" : "text-gray-700"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              
              </div>
            ))}
          <Button asChild className="w-full ">
                <Link href="/donate">Donate Now</Link>
              </Button>
          </div>
        </div>
      )}
    </header>
  );
}