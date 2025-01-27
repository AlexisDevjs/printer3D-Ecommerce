import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CuboidIcon as Cube, Calculator, ShoppingCart } from "lucide-react"

export default function Services() {
  const services = [
    { title: "Modelado 3D", description: "Diseñamos tus ideas en 3D", icon: Cube },
    { title: "Cotización", description: "Obtén un presupuesto al instante", icon: Calculator },
    { title: "Adquisición", description: "Compra productos pre-impresos", icon: ShoppingCart },
  ]

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

