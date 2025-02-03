import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Printer 3D',
  description: "Impresión 3D de calidad a tu alcance",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
