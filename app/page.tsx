import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import ProductPreview from "@/components/ProductPreview"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import { Toaster } from "sonner"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <main>
        <Services />
        <ProductPreview />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors />
    </div>
  )
}

