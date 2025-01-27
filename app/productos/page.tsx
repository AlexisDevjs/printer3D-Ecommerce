import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ProductosPage() {
  const productos = [
    {
      name: "Figura decorativa",
      price: 29.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Elegante figura impresa en 3D, perfecta para decorar tu hogar u oficina.",
    },
    {
      name: "Soporte para móvil",
      price: 14.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Práctico soporte para tu smartphone, compatible con la mayoría de los modelos.",
    },
    {
      name: "Maceta personalizada",
      price: 19.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Maceta única y personalizable, ideal para tus plantas de interior.",
    },
    {
      name: "Llavero personalizado",
      price: 9.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Llavero impreso en 3D, personalizable con nombres o logotipos.",
    },
    {
      name: "Organizador de escritorio",
      price: 24.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Mantén tu espacio de trabajo ordenado con este organizador impreso en 3D.",
    },
    {
      name: "Carcasa para AirPods",
      price: 12.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Protege tus AirPods con estilo con esta carcasa impresa en 3D.",
    },
    {
      name: "Lámpara de mesa",
      price: 39.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Ilumina tu espacio con esta lámpara de diseño único impresa en 3D.",
    },
    {
      name: "Posavasos personalizados",
      price: 15.99,
      image: "/placeholder.svg?height=300&width=300",
      description: "Set de 4 posavasos personalizables, impresos en 3D con diseños a elección.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12">Nuestros Productos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {productos.map((producto, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <Image
                      src={producto.image || "/placeholder.svg"}
                      alt={producto.name}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover mb-4"
                    />
                    <CardTitle>{producto.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <p className="text-gray-600 mb-4">{producto.description}</p>
                    <div>
                      <p className="text-lg font-bold mb-2">${producto.price}</p>
                      <Button className="w-full">Añadir al carrito</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

