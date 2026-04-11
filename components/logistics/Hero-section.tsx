"use client"

import { useState } from "react"
import { Search, ArrowRight, Ship, Truck, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HeroSection() {
  const [trackingCode, setTrackingCode] = useState("")

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/95 via-[#003366]/80 to-[#003366]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/90 via-transparent to-transparent" />
      </div>

      {/* Animated elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 animate-pulse">
          <Ship className="h-8 w-8 text-[#FF6B35]/30" />
        </div>
        <div className="absolute top-1/3 right-20 animate-pulse delay-300">
          <Truck className="h-8 w-8 text-[#4ECDC4]/30" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 animate-pulse delay-500">
          <Plane className="h-8 w-8 text-white/20" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B35]/20 border border-[#FF6B35]/30 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
            <span className="text-[#FF6B35] text-sm font-medium">Đối tác vận chuyển tin cậy của bạn</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            Giải pháp Logistics
            <span className="block text-[#FF6B35]">Thông minh</span>
            <span className="block text-[#4ECDC4]">Nhanh chóng • Đáng tin cậy • Toàn cầu</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
            Chúng tôi cung cấp dịch vụ vận chuyển đường biển, đường bộ, hàng không và kho bãi 
            với mạng lưới toàn cầu, đảm bảo hàng hóa của bạn được giao đúng hẹn và an toàn.
          </p>

          {/* Tracking form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 max-w-2xl mb-10">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Search className="h-5 w-5 text-[#FF6B35]" />
              Theo dõi lô hàng của bạn
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="text"
                placeholder="Nhập mã theo dõi (VD: NTS-123456)"
                value={trackingCode}
                onChange={(e) => setTrackingCode(e.target.value)}
                className="flex-1 h-12 bg-white/90 border-0 text-[#003366] placeholder:text-[#003366]/50"
              />
              <Button className="h-12 px-8 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold">
                Theo dõi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="h-14 px-8 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold text-lg group"
            >
              Nhận báo giá miễn phí
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 px-8 border-white/30 text-white hover:bg-white/10 font-semibold text-lg"
            >
              Tìm hiểu dịch vụ
            </Button>
          </div>


        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
