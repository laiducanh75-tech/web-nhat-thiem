import Header from "@/components/logistics/Header"
import HeroSection from "@/components/logistics/HeroSection"
import ServicesSection from "@/components/logistics/ServicesSection"
import Footer from "@/components/logistics/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <Footer />
    </main>
  )
}
