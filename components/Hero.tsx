import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-foreground text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Printer3D Sto a tu alcance</h1>
        <p className="text-xl mb-8">Cotiza, modela y adquiere productos impresos en 3D</p>
        <Button size="lg" variant="secondary">
          Cotiza ahora
        </Button>
      </div>
    </section>
  )
}

