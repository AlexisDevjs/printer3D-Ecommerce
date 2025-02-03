import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ProductosPage() {
  const productos = [
    {
      name: "Figura decorativa",
      price: 29.99,
      image: "/images/figura_decorativa.png",
      description:
        "Elegante figura impresa en 3D, perfecta para decorar tu hogar u oficina.",
    },
    {
      name: "Soporte para móvil",
      price: 14.99,
      image: "/images/soporte_para_mobile.png",
      description:
        "Práctico soporte para tu smartphone, compatible con la mayoría de los modelos.",
    },
    {
      name: "Maceta personalizada",
      price: 15.99,
      image: "/images/maceta_personalizada.png",
      description:
        "Maceta única y personalizable, ideal para tus plantas de interior.",
    },
    {
      name: "Llavero personalizado",
      price: 9.99,
      image: "/images/llaveros.png",
      description:
        "Llavero impreso en 3D, personalizable con nombres o logotipos.",
    },
    {
      name: "Organizador de escritorio",
      price: 24.99,
      image: "/images/escritorio.png",
      description:
        "Mantén tu espacio de trabajo ordenado con este organizador impreso en 3D.",
    },
    {
      name: "Carcasa para iPhone",
      price: 12.99,
      image: "/images/carcasa.png",
      description:
        "Protege tu iPhone con estilo con esta carcasa impresa en 3D.",
    },
    {
      name: "Lámpara de mesa",
      price: 39.99,
      image: "/images/lampara.png",
      description:
        "Ilumina tu espacio con esta lámpara de diseño único impresa en 3D.",
    },
    {
      name: "Posavasos personalizados",
      price: 15.99,
      image: "/images/posavasos.png",
      description:
        "Set de 4 posavasos personalizables, impresos en 3D con diseños a elección.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-10">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12">
              Nuestros Productos
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {productos.map((producto, index) => (
                <Card
                  key={index}
                  className="group flex flex-col transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl bg-gradient-to-br from-white to-gray-100"
                >
                  <CardHeader>
                    <div className="overflow-hidden">
                      <Image
                        src={producto.image}
                        alt={producto.name}
                        width={400}
                        height={400}
                        className="overflow-hidden w-full h-48 object-contain mb-4 transition-transform duration-300 group-hover:scale-[1.2]"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4"></div>
                    <CardTitle className="text-xl font-bold text-center">
                      {producto.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <p className="text-gray-600 mb-4">{producto.description}</p>
                    <div>
                      <p className="text-lg font-bold mb-2">
                        ${producto.price}
                      </p>
                      <WhatsAppButton
                        productName={producto.name}
                        imageUrl={`${process.env.NEXT_PUBLIC_SITE_URL}${producto.image}`}
                      />
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
  );
}
