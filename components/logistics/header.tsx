"use client"

import { useState } from "react"
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Trang chủ", href: "#hero" },
  { label: "Dịch vụ", href: "#services" },
  { label: "Theo dõi", href: "#tracking" },
  { label: "Về chúng tôi", href: "#about" },
  { label: "Liên hệ", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#003366]/95 backdrop-blur-md shadow-lg">
      {/* Top bar */}
      <div className="hidden md:block border-b border-white/10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm text-white/80">
            <div className="flex items-center gap-6">
              <a href="tel:0888447239" className="flex items-center gap-2 hover:text-[#FF6B35] transition-colors">
                <Phone className="h-3.5 w-3.5" />
                <span>0888 447 239</span>
              </a>
              <span className="text-white/40">|</span>
              <a href="tel:0919417239" className="flex items-center gap-2 hover:text-[#FF6B35] transition-colors">
                <Phone className="h-3.5 w-3.5" />
                <span>0919 417 239</span>
              </a>
              <span className="text-white/40">|</span>
              <a href="mailto:nhatthiensonsaigon@gmail.com" className="flex items-center gap-2 hover:text-[#FF6B35] transition-colors">
                <Mail className="h-3.5 w-3.5" />
                <span>nhatthiensonsaigon@gmail.com</span>
              </a>
            </div>
            <div className="text-white/60">
              Giờ làm việc: Thứ 2 - Thứ 7: 8:00 - 18:00
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile Menu Button - Left side */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Logo - Center on mobile, left on desktop */}
          <a href="#" className="flex items-center gap-3 lg:flex-none">
            <img 
              src="/images/logo.png" 
              alt="Nhất Thiên Sơn Sài Gòn" 
              className="h-12 md:h-14 w-auto"
            />
            <div className="hidden sm:block">
              <div className="text-white font-bold text-lg md:text-xl leading-tight">Nhất Thiên Sơn Sài Gòn</div>
              <div className="text-[#FF6B35] text-xs md:text-sm font-medium tracking-wider">LOGISTICS</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/90 hover:text-[#FF6B35] font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B35] transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            >
              Theo dõi lô hàng
            </Button>
            <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
              Nhận báo giá
            </Button>
          </div>

          {/* Spacer for mobile to balance layout */}
          <div className="lg:hidden w-10" />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden bg-[#003366] border-t border-white/10 overflow-hidden transition-all duration-300",
          mobileMenuOpen ? "max-h-[500px]" : "max-h-0"
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/90 hover:text-[#FF6B35] font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
            <a href="tel:0888447239" className="flex items-center gap-2 text-white/80 text-sm">
              <Phone className="h-4 w-4" />
              <span>0888 447 239</span>
            </a>
            <a href="tel:0919417239" className="flex items-center gap-2 text-white/80 text-sm">
              <Phone className="h-4 w-4" />
              <span>0919 417 239</span>
            </a>
            <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white w-full mt-2">
              Nhận báo giá
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

