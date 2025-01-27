import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contáctanos</h2>
        <form className="max-w-md mx-auto space-y-4">
          <Input type="text" placeholder="Nombre" />
          <Input type="email" placeholder="Email" />
          <Textarea placeholder="Mensaje" />
          <Button type="submit" className="w-full">
            Enviar mensaje
          </Button>
        </form>
      </div>
    </section>
  )
}

