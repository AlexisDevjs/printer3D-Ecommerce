"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Printer3D Sto
        </Link>
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/servicios" className="text-gray-600 hover:text-primary">
            Servicios
          </Link>
          <Link href="/productos" className="text-gray-600 hover:text-primary">
            Productos
          </Link>
          <Link href="/contacto" className="text-gray-600 hover:text-primary">
            Contacto
          </Link>
          <Button variant="outline">Cotizar</Button>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <Link href="/servicios" className="text-gray-600 hover:text-primary">
              Servicios
            </Link>
            <Link href="/productos" className="text-gray-600 hover:text-primary">
              Productos
            </Link>
            <Link href="/contacto" className="text-gray-600 hover:text-primary">
              Contacto
            </Link>
            <Button variant="outline" className="w-full">
              Cotizar
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
