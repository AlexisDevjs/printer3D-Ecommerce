import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import ProductPreview from "@/components/ProductPreview"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <ProductPreview />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

