import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import FormTemplate from "@/components/FormTemplate";

export default function ContactoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-10">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12 animate-fade-down animate-duration-[700ms]">
              Contáctanos
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Envíanos un mensaje</CardTitle>
                  <CardDescription>
                    Completa el formulario y nos pondremos en contacto contigo
                    pronto.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <FormTemplate />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Información de contacto</CardTitle>
                  <CardDescription>
                    Encuentra más formas de contactarnos aquí.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>
                      Santo Domingo, Urb Ciudad Verde, Parque Yasuni y calle f,
                      Mz 77
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>0961683131</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>printer3dsto@gmail.com</span>
                  </div>
                  <div className="mt-6">
                    <h3 className="font-semibold mb-2">Horario de atención</h3>
                    <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                    <p>Sábados: 10:00 AM - 2:00 PM</p>
                    <p>Domingos: Cerrado</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
