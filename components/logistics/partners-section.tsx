"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const partners = [
  { name: "Samsung", logo: "SAMSUNG" },
  { name: "LG Electronics", logo: "LG" },
  { name: "Vinamilk", logo: "VINAMILK" },
  { name: "FPT", logo: "FPT" },
  { name: "Viettel", logo: "VIETTEL" },
  { name: "Hòa Phát", logo: "HOA PHAT" },
]

const testimonials = [
  {
    name: "Nguyễn Văn An",
    position: "Giám đốc Xuất nhập khẩu",
    company: "ABC Corporation",
    content: "Nhất Thiên Sơn Sài Gòn đã trở thành đối tác tin cậy của chúng tôi trong suốt 5 năm qua. Dịch vụ chuyên nghiệp, giá cả cạnh tranh và đặc biệt là sự hỗ trợ 24/7.",
    rating: 5,
  },
  {
    name: "Trần Thị Bình",
    position: "Quản lý Chuỗi cung ứng",
    company: "XYZ Industries",
    content: "Hệ thống theo dõi hàng hóa thời gian thực rất tiện lợi. Chúng tôi luôn biết hàng đang ở đâu và khi nào sẽ đến. Đội ngũ tư vấn rất nhiệt tình và am hiểu.",
    rating: 5,
  },
  {
    name: "Lê Minh Hoàng",
    position: "CEO",
    company: "Tech Solutions",
    content: "Thời gian giao hàng luôn đúng cam kết, hàng hóa được bảo quản cẩn thận. Tôi hoàn toàn yên tâm khi sử dụng dịch vụ của Nhất Thiên Sơn Sài Gòn.",
    rating: 5,
  },
]

export function PartnersSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Partners */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#003366]/10 text-[#003366] text-sm font-medium mb-4">
            Đối tác tin cậy
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-6">
            Được tin tưởng bởi <span className="text-[#FF6B35]">hàng nghìn</span> doanh nghiệp
          </h2>
        </div>

        {/* Partner logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-20 px-6 bg-[#f8fafc] rounded-xl hover:bg-[#003366]/5 transition-colors group"
            >
              <span className="text-lg font-bold text-[#003366]/40 group-hover:text-[#003366]/70 transition-colors">
                {partner.logo}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#003366] mb-4">
            Khách hàng nói gì về chúng tôi
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sự hài lòng của khách hàng là động lực để chúng tôi không ngừng hoàn thiện và phát triển.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
              {/* Decorative quote */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="h-12 w-12 text-[#FF6B35]" />
              </div>
              
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#FFB347] text-[#FFB347]" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#003366] flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#003366]">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
