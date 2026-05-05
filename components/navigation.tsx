"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Close sidebar on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Close on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setIsOpen(false)
  }, [])

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "glass-effect shadow-2xl backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="flex items-center gap-2 sm:gap-3 font-bold font-serif animate-pulse-neon hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={encodeURI("/images/svgviewer-output (1).svg")}
                  alt="Lumora Tech Logo"
                  width={100}
                  height={150}
                  priority
                  className="hover:rotate-6 transition-transform duration-500 w-14 h-auto sm:w-20 md:w-[100px]"
                />
                <span className="text-lg sm:text-xl md:text-3xl">LUMORA TECH</span>
              </Link>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-6 xl:space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-foreground hover:text-primary transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-primary/10 text-sm xl:text-base ${
                      pathname === item.href
                        ? "text-primary bg-primary/20"
                        : ""
                    }`}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop Right Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <ThemeToggle />
              <Button
                asChild
                className="animate-glow hover:scale-105 transition-all duration-300 bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary"
              >
                <Link href="/admin">Admin Login</Link>
              </Button>
            </div>

            {/* Mobile Right Actions */}
            <div className="lg:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="hover:bg-primary/20 relative z-[60]"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Sidebar Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[280px] sm:w-[320px] transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,30,0.98) 0%, rgba(20,10,50,0.98) 100%)",
          borderLeft: "1px solid rgba(139,92,246,0.2)",
        }}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 h-16 sm:h-20 border-b border-purple-500/20">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold font-serif"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src={encodeURI("/images/svgviewer-output (1).svg")}
              alt="Lumora Tech Logo"
              width={40}
              height={60}
              className="w-8 h-auto"
            />
            <span className="text-base bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              LUMORA
            </span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="hover:bg-primary/20"
            aria-label="Close menu"
          >
            <X className="h-5 w-5 text-gray-400" />
          </Button>
        </div>

        {/* Sidebar Nav Links */}
        <nav className="flex flex-col px-4 py-6 space-y-1 overflow-y-auto h-[calc(100%-5rem)]">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300 ${
                pathname === item.href
                  ? "text-primary bg-primary/15 border border-primary/30"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
              style={{
                animationDelay: `${index * 60}ms`,
                animation: isOpen
                  ? `slideInRight 0.3s ease-out ${index * 60}ms both`
                  : "none",
              }}
              onClick={() => setIsOpen(false)}
            >
              <span>{item.name}</span>
              <ChevronRight
                className={`h-4 w-4 transition-colors ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-gray-600"
                }`}
              />
            </Link>
          ))}

          {/* Divider */}
          <div className="my-4 border-t border-purple-500/20" />

          {/* Admin Login Button */}
          <div className="px-2">
            <Button
              asChild
              className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary py-3 text-base"
            >
              <Link href="/admin" onClick={() => setIsOpen(false)}>
                Admin Login
              </Link>
            </Button>
          </div>

          {/* Sidebar Footer Info */}
          <div className="mt-auto pt-6 px-2">
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
              <p className="text-xs text-gray-500 mb-1">Need help?</p>
              <a
                href="mailto:heylumoratech@gmail.com"
                className="text-sm text-primary hover:underline"
              >
                heylumoratech@gmail.com
              </a>
              <p className="text-xs text-gray-500 mt-2">+91-7904154527</p>
            </div>
          </div>
        </nav>
      </aside>
    </>
  )
}
