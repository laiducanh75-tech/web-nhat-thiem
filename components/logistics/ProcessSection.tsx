"use client"

import { ClipboardList, Cog, Truck, PackageCheck, ArrowRight } from "lucide-react"

const steps = [
  {
    step: 1,
    icon: ClipboardList,
    title: "Nhận đơn hàng",
    description: "Tiếp nhận thông tin đơn hàng, xác nhận yêu cầu vận chuyển và báo giá chi tiết cho khách hàng.",
    color: "#FF6B35",
  },
  {
    step: 2,
    icon: Cog,
    title: "Xử lý",
    description: "Kiểm tra hàng hóa, đóng gói theo tiêu chuẩn và hoàn tất các thủ tục hải quan cần thiết.",
    color: "#4ECDC4",
  },
  {
    step: 3,
    icon: Truck,
    title: "Vận chuyển",
    description: "Vận chuyển hàng hóa qua mạng lưới toàn cầu với hệ thống theo dõi GPS thời gian thực.",
    color: "#003366",
  },
  {
    step: 4,
    icon: PackageCheck,
    title: "Giao hàng",
    description: "Giao hàng đúng địa điểm, đúng thời gian cam kết với xác nhận từ người nhận.",
    color: "#22c55e",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-[#f8fafc] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-medium mb-4">
            Quy trình làm việc
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003366] mb-6">
            Quy trình vận chuyển <span className="text-[#FF6B35]">chuyên nghiệp</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Chúng tôi tuân thủ quy trình nghiêm ngặt để đảm bảo hàng hóa của bạn 
            được vận chuyển an toàn và hiệu quả nhất.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line - hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B35] via-[#4ECDC4] to-[#22c55e] -translate-y-1/2 z-0" />

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="relative group">
                  {/* Card */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                    {/* Step number */}
                    <div 
                      className="absolute -top-4 left-8 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.step}
                    </div>

                    {/* Icon */}
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <Icon className="h-8 w-8" style={{ color: item.color }} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-[#003366] mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>

                  {/* Arrow - hidden on last item and on mobile/tablet */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20">
                      <div className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                        <ArrowRight className="h-4 w-4 text-[#FF6B35]" />
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-bold text-[#003366]">Bạn có hàng cần vận chuyển?</h4>
              <p className="text-muted-foreground text-sm">Liên hệ ngay để nhận tư vấn miễn phí từ chuyên gia của chúng tôi</p>
            </div>
            <a 
              href="#contact"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold rounded-xl transition-colors"
            >
              Liên hệ ngay
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
