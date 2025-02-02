import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-16 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <div className="h-[60vh] w-[60vw] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#53cde2] via-[#2ca58d] to-[#1a5e9d]/20 opacity-25 blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#53cde2] via-[#2ca58d] to-[#1a5e9d] bg-clip-text text-transparent">
              Printer3D Sto
            </h3>
            <p className="text-white/90">Impresión 3D de calidad a tu alcance</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios" className="text-white/90 hover:text-[#53cde2] transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-white/90 hover:text-[#53cde2] transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-white/90 hover:text-[#53cde2] transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white/90 hover:text-[#53cde2] transition-colors">
                Facebook
              </a>
              <a href="#" className="text-white/90 hover:text-[#53cde2] transition-colors">
                Twitter
              </a>
              <a href="#" className="text-white/90 hover:text-[#53cde2] transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-9 border-t border-white/20 text-center text-white/70">
          <p className="pt-4">&copy; 2023 Printer3D Sto. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

