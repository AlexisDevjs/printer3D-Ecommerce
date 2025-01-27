import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          3D Print Shop
        </Link>
        <div className="space-x-4">
          <Link href="/servicios" className="text-gray-600 hover:text-primary">
            Servicios
          </Link>
          <Link href="/productos" className="text-gray-600 hover:text-primary">
            Productos
          </Link>
          <Link href="/contacto" className="text-gray-600 hover:text-primary">
            Contacto
          </Link>
          <Button variant="outline">Iniciar sesión</Button>
        </div>
      </nav>
    </header>
  )
}

