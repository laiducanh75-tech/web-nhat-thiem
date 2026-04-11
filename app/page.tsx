import Header from "@/components/logistics/Header"
import HeroSection from "@/components/logistics/HeroSection"
import ServicesSection from "@/components/logistics/ServicesSection"
import StatsSection from "@/components/logistics/StatsSection"
import ProjectsSection from "@/components/logistics/ProjectsSection"
import WhyChooseUs from "@/components/logistics/WhyChooseUs"
import TestimonialsSection from "@/components/logistics/TestimonialsSection"
import ContactSection from "@/components/logistics/ContactSection"
import Footer from "@/components/logistics/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <ProjectsSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
