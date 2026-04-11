"use client"

import { Ship, Truck, Plane, Warehouse, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Ship,
    title: "Vận tải đường biển",
    description: "Dịch vụ vận chuyển container FCL/LCL đến hơn 200 cảng trên toàn thế giới với giá cạnh tranh và thời gian transit tối ưu.",
    features: ["Hàng nguyên container (FCL)", "Hàng lẻ ghép container (LCL)", "Vận chuyển hàng đặc biệt"],
    color: "#4ECDC4",
  },
  {
    icon: Truck,
    title: "Vận tải đường bộ",
    description: "Mạng lưới xe tải đa dạng phục vụ vận chuyển nội địa và xuyên biên giới với hệ thống theo dõi GPS thời gian thực.",
    features: ["Vận chuyển nội địa", "Vận chuyển xuyên biên giới", "Xe chuyên dụng các loại"],
    color: "#FF6B35",
  },
  {
    icon: Plane,
    title: "Vận tải hàng không",
    description: "Giải pháp vận chuyển nhanh cho hàng hóa khẩn cấp, hàng giá trị cao với các hãng hàng không hàng đầu thế giới.",
    features: ["Express delivery", "Hàng hóa đặc biệt", "Door-to-door service"],
    color: "#003366",
  },
  {
    icon: Warehouse,
    title: "Kho bãi & Phân phối",
    description: "Hệ thống kho bãi hiện đại với công nghệ quản lý WMS, dịch vụ fulfillment và phân phối hàng hóa chuyên nghiệp.",
    features: ["Kho ngoại quan", "Dịch vụ fulfillment", "Quản lý tồn kho"],
    color: "#FFB347",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-[#f8fafc] to-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#003366]/10 text-[#003366] text-sm font-medium mb-4">
            Dịch vụ của chúng tôi
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003366] mb-6">
            Giải pháp vận chuyển <span className="text-[#FF6B35]">toàn diện</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Chúng tôi cung cấp đầy đủ các dịch vụ logistics từ vận tải đường biển, đường bộ, 
            hàng không đến kho bãi và phân phối hàng hóa.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
              >
                {/* Decorative top border */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-2"
                  style={{ backgroundColor: service.color }}
                />
                
                <CardContent className="p-6 md:p-8">
                  {/* Icon */}
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <Icon 
                      className="h-8 w-8 transition-colors duration-300" 
                      style={{ color: service.color }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#003366] mb-3 group-hover:text-[#FF6B35] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-[#003366]/80">
                        <span 
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: service.color }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-[#FF6B35] hover:text-[#FF6B35]/80 hover:bg-transparent group/btn"
                  >
                    Tìm hiểu thêm
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Button 
            size="lg" 
            className="h-14 px-10 bg-[#003366] hover:bg-[#003366]/90 text-white font-semibold text-lg"
          >
            Xem tất cả dịch vụ
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
