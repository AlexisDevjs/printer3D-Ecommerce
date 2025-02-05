import type { Metadata } from "next";
import "./globals.css";
import type React from "react"; // Added import for React
import Head from "next/head";

export const metadata: Metadata = {
  title: "Printer 3D Sto - Impresión 3D de Calidad",
  description:
    "Servicios de impresión 3D personalizados, productos únicos y soluciones innovadoras para tus necesidades de fabricación digital en Santo Domingo.",
  keywords:
    "impresión 3D, productos personalizados, fabricación digital, modelado 3D, prototipado rápido, Santo Domingo",
  authors: [{ name: "Printer 3D Sto" }],
  creator: "Printer 3D Sto",
  publisher: "Printer 3D Sto",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://printer3dsto.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a5e9d" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
