import Image from "next/image"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function ProductPreview() {
  const products = [
    { name: "Figura decorativa", price: 29.99, image: "/placeholder.svg?height=200&width=200" },
    { name: "Soporte para móvil", price: 14.99, image: "/placeholder.svg?height=200&width=200" },
    { name: "Maceta personalizada", price: 19.99, image: "/placeholder.svg?height=200&width=200" },
    { name: "Llavero personalizado", price: 9.99, image: "/placeholder.svg?height=200&width=200" },
  ]

  return (
    <section id="productos" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Productos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card key={index}>
              <CardHeader>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover mb-4"
                />
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold">${product.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

