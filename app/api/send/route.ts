import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_123456789");

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const body: ContactFormData = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, error: "Todos los campos son requeridos." },
        { status: 400 }
      );
    }

    resend.emails.send()

    
    return NextResponse.json({
      success: true,
      message: "Correo enviado correctamente.",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
