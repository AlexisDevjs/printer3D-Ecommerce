"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  const handleClick = () => {
    const message = 'Hola, me gustaría cotizar una impresión 3D';
    window.open(`https://wa.me/593969506019?text=${message}`, '_blank');
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-between">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <div className="h-[60vh] w-[60vw] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#53cde2] via-[#2ca58d] to-[#1a5e9d]/20 opacity-25 blur-3xl"></div>
      </div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
            Printer3D Sto a tu alcance
          </h1>
          <p className="mb-8 text-xl text-white/90 animate-fade-up animate-duration-[850ms]">
            Cotiza, modela y adquiere productos impresos en 3D
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 animate-fade-up animate-delay-200 animate-duration-[850ms]"
            onClick={handleClick}
          >
            Cotiza ahora
          </Button>
        </div>
      </div>
    </section>
  );
}
