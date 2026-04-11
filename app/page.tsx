"use client"

import { Header } from "@/components/logistics/Header"
import { HeroSection } from "@/components/logistics/HeroSection"
import { ServicesSection } from "@/components/logistics/ServicesSection"
import { ProcessSection } from "@/components/logistics/ProcessSection"
import { ContactSection } from "@/components/logistics/ContactSection"
import { Footer } from "@/components/logistics/Footer"

export default function LogisticsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
// Update website 2026
