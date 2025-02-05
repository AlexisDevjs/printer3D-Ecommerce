'use client';

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner";

export default function FormTemplate() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = 'service_jhhspif'
    const templateId = 'template_c7t3yyt'
    const publicKey = '8wFFlz8kUqNlnowTA'

    if (!serviceId || !templateId || !publicKey) {
      console.error("One or more environment variables are missing");
      return;
    }

    if (form.current) {
      emailjs
        .sendForm(serviceId, templateId, form.current, {
          publicKey: publicKey,
        })
        .then(
          () => {
            toast.success("Mensaje enviado correctamente");
          },
          (error) => {
            toast.error("Error al enviar mensaje");
          }
        );
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="max-w-md mx-auto space-y-4"
    >
      <Input type="text" name="user_name" placeholder="Nombre" />
      <Input type="tel" name="user_phone" placeholder="Teléfono" />
      <Input type="email" name="user_email" placeholder="Email" />
      <Textarea name="message" placeholder="Mensaje" />
      <Button type="submit" className="w-full py-2.5">
        Enviar mensaje
      </Button>
    </form>
  );
}
