"use client";

import Link from "next/link";
import FadeInCascade from "./FadeInCascade";

export default function Footer() {
  const message = 'Hola, me gustaría cotizar una página web'

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
            <p className="text-white/90">
              Impresión 3D de calidad a tu alcance
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <FadeInCascade animation="fade-up">
                <li>
                  <Link
                    href="/servicios"
                    className="text-white/90 hover:text-[#53cde2] transition-colors"
                  >
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link
                    href="/productos"
                    className="text-white/90 hover:text-[#53cde2] transition-colors"
                  >
                    Productos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    className="text-white/90 hover:text-[#53cde2] transition-colors"
                  >
                    Contacto
                  </Link>
                </li>
              </FadeInCascade>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Síguenos</h4>
            <div className="flex space-x-4">
              <FadeInCascade animation="fade-up">
                <div className="flex items-center space-x-2">
                  <a
                    href="https://www.facebook.com/profile.php?id=61568950055670"
                    target="_blank"
                    className="text-white/90 hover:text-[#53cde2] transition-colors"
                  >
                    Facebook
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 36 36"
                    fill="url(#a)"
                    height="1em"
                    width="1em"
                  >
                    <defs>
                      <linearGradient
                        x1="50%"
                        x2="50%"
                        y1="97.078%"
                        y2="0%"
                        id="a"
                      >
                        <stop offset="0%" stopColor="#0062E0" />
                        <stop offset="100%" stopColor="#19AFFF" />
                      </linearGradient>
                    </defs>
                    <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z" />
                    <path
                      fill="#FFF"
                      d="m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
                    />
                  </svg>
                </div>
              </FadeInCascade>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-9 border-t border-white/20 text-center text-white/70">
          <p className="pt-4">
            &copy; 2023 Printer3D Sto. Todos los derechos reservados.
          </p>
          <button onClick={() => {
            window.open(`https://wa.me/593961683131?text=${message}`, "_blank");
          }}>Creado por Alexis Developer</button>
        </div>
      </div>
    </footer>
  );
}
