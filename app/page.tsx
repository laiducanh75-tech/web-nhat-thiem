"use client"

// Đây là lệnh gọi các file con bạn vừa tạo
import { Header } from "@/components/logistics/header"
import { HeroSection } from "@/components/logistics/hero-section"
import { ServicesSection } from "@/components/logistics/services-section"
import { ProcessSection } from "@/components/logistics/process-section"
import { ContactSection } from "@/components/logistics/contact-section"
import { Footer } from "@/components/logistics/footer"

export default function LogisticsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
