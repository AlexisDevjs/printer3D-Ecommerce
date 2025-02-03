import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CuboidIcon as Cube,
  Calculator,
  ShoppingCart,
  Printer,
  Palette,
  Truck,
} from "lucide-react";

export default function ServiciosPage() {
  const servicios = [
    {
      title: "Modelado 3D",
      description: "Diseñamos tus ideas en 3D con precisión y detalle.",
      icon: Cube,
      details:
        "Nuestro equipo de diseñadores expertos puede convertir tus conceptos en modelos 3D listos para imprimir. Ya sea que tengas un boceto a mano o una idea en mente, nosotros lo haremos realidad.",
    },
    {
      title: "Cotización",
      description: "Obtén un presupuesto detallado al instante.",
      icon: Calculator,
      details:
        "Utilizamos un sistema avanzado de cotización que tiene en cuenta el tamaño del modelo, el material utilizado y el tiempo de impresión para ofrecerte el mejor precio posible.",
    },
    {
      title: "Impresión 3D",
      description: "Imprimimos tus modelos con la más alta calidad.",
      icon: Printer,
      details:
        "Contamos con una flota de impresoras 3D de última generación que nos permiten imprimir en una amplia gama de materiales y con una precisión excepcional.",
    },
    {
      title: "Acabados",
      description: "Damos el toque final a tus piezas impresas.",
      icon: Palette,
      details:
        "Ofrecemos servicios de post-procesado como lijado, pintado y barnizado para que tus piezas impresas en 3D tengan un acabado profesional.",
    },
    {
      title: "Adquisición",
      description: "Compra productos pre-impresos de nuestra colección.",
      icon: ShoppingCart,
      details:
        "Además de impresiones personalizadas, ofrecemos una amplia gama de productos pre-impresos listos para comprar, desde figuras decorativas hasta accesorios útiles.",
    },
    {
      title: "Envío",
      description: "Entregamos tus productos en la puerta de tu casa.",
      icon: Truck,
      details:
        "Realizamos envíos a todo el país. Nuestro embalaje especializado asegura que tus piezas impresas en 3D lleguen en perfectas condiciones.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 mt-10">
            <h1 className="text-4xl font-bold text-center mb-12 animate-fade-down animate-duration-[800ms]">
              Nuestros Servicios
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicios.map((servicio, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="24"
                          cy="24"
                          r="24"
                          fill="url(#icon-gradient)"
                        />
                        <foreignObject width="48" height="48">
                          <div className="flex items-center justify-center w-full h-full">
                            <servicio.icon className="w-6 h-6 text-white" />
                          </div>
                        </foreignObject>
                        <defs>
                          <linearGradient
                            id="icon-gradient"
                            x1="0"
                            y1="0"
                            x2="48"
                            y2="48"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#53cde2" />
                            <stop offset="0.5" stopColor="#2ca58d" />
                            <stop offset="1" stopColor="#1a5e9d" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <CardTitle>{servicio.title}</CardTitle>
                    <CardDescription>{servicio.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">{servicio.details}</p>
                    <Button variant="outline" className="w-full">
                      Más información
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
