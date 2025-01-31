"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        setIsScrolled(window.scrollY > window.innerHeight - 80)
      } else {
        setIsScrolled(window.scrollY > 0)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage])

  const getHeaderStyle = () => {
    if (isHomePage) {
      return isScrolled ? "text-[#1a5e9d] shadow-sm backdrop-blur-[10px]" : "bg-transparent text-white"
    } else {
      return isScrolled ? "text-[#1a5e9d] shadow-sm backdrop-blur-[10px]" : "bg-white text-[#1a5e9d] shadow-sm"
    }
  }

  const getLinkStyle = (isActive: boolean) => {
    if (isHomePage) {
      return isScrolled
        ? isActive
          ? "text-[#53cde2]"
          : "text-[#1a5e9d] hover:text-[#53cde2]"
        : "text-white hover:text-[#53cde2]/80"
    } else {
      return isActive ? "text-[#53cde2]" : "text-[#1a5e9d] hover:text-[#53cde2]"
    }
  }

  const getButtonStyle = () => {
    if (isHomePage) {
      return isScrolled ? "bg-primary/80 text-white hover:bg-primary" : "bg-white/10 text-white hover:bg-white/20"
    } else {
      return "bg-primary/80 text-white hover:bg-primary"
    }
  }

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${getHeaderStyle()}`}>
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 font-medium">
        <Link
          href="/"
          className={`text-2xl font-bold ${
            isScrolled || !isHomePage
              ? "bg-gradient-to-r from-[#1a5e9d] via-[#2ca58d] to-[#53cde2] bg-clip-text text-transparent"
              : "text-white"
          }`}
        >
          Printer3D Sto
        </Link>
        <div className="hidden items-center space-x-6 md:flex">
          {["Servicios", "Productos", "Contacto"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className={`relative transition-colors ${getLinkStyle(pathname === `/${item.toLowerCase()}`)} group`}
            >
              {item}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#1a5e9d] via-[#2ca58d] to-[#53cde2] transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
          ))}
          <Button
            variant={isScrolled || !isHomePage ? "default" : "secondary"}
            className={`transition-all duration-300 ${getButtonStyle()}`}
          >
            Cotizar
          </Button>
        </div>
        <button
          className={`md:hidden ${isScrolled || !isHomePage ? "text-[#1a5e9d]" : "text-white"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>
      {isMenuOpen && (
        <div className={`py-2 md:hidden ${isScrolled || !isHomePage ? "bg-white" : "bg-gray-900"}`}>
          <div className="container mx-auto flex flex-col space-y-2 px-4">
            {["Servicios", "Productos", "Contacto"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className={`relative transition-colors ${getLinkStyle(pathname === `/${item.toLowerCase()}`)} group`}
              >
                {item}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#1a5e9d] via-[#2ca58d] to-[#53cde2] transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
            ))}
            <Button
              variant={isScrolled || !isHomePage ? "default" : "secondary"}
              className={`w-full transition-all duration-300 ${getButtonStyle()}`}
            >
              Cotizar
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

