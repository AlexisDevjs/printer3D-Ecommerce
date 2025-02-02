"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const dataValues = Object.fromEntries(formData.entries());
    console.log("🚀 ~ sendEmail ~ dataValues:", dataValues)

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataValues),
    });

    const dataRes = await response.json();
    console.log("🚀 ~ sendEmail ~ dataRes:", dataRes)
    const message = dataRes.success ? "Mensaje enviado ✅" : "Error ❌";

    if (dataRes.success) {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contáctanos</h2>
        <form onSubmit={sendEmail} className="max-w-md mx-auto space-y-4">
          <Input type="text" name="name" placeholder="Nombre" />
          <Input type="tel" name="phone" placeholder="Teléfono" />
          <Input type="email" name="email" placeholder="Email" />
          <Textarea name="message" placeholder="Mensaje" />
          <Button type="submit" className="w-full py-2.5">
            Enviar mensaje
          </Button>
        </form>
      </div>
    </section>
  );
}
