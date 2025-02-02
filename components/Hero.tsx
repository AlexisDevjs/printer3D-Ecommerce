import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-between">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <div className="h-[60vh] w-[60vw] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#53cde2] via-[#2ca58d] to-[#1a5e9d]/20 opacity-25 blur-3xl"></div>
      </div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">Printer3D Sto a tu alcance</h1>
          <p className="mb-8 text-xl text-white/90">Cotiza, modela y adquiere productos impresos en 3D</p>
          <Button
            size="lg"
            variant="outline"
            className="border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
          >
            Cotiza ahora
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 5V19M12 19L19 12M12 19L5 12"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="gradient" x1="5" y1="12" x2="19" y2="12" gradientUnits="userSpaceOnUse">
              <stop stopColor="#53cde2" />
              <stop offset="0.5" stopColor="#2ca58d" />
              <stop offset="1" stopColor="#1a5e9d" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}

