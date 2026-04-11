"use client"

import { useState } from "react"
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const contactInfo = [
  {
    icon: Phone,
    title: "Điện thoại",
    details: ["0888 447 239", "0919 417 239"],
    color: "#FF6B35",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["nhatthiensonsaigon@gmail.com"],
    color: "#4ECDC4",
  },
  {
    icon: MapPin,
    title: "Địa chỉ",
    details: ["138/10 Khu Phố 57", "Phường Thới An, TP.HCM", "Việt Nam"],
    color: "#003366",
  },
  {
    icon: Clock,
    title: "Giờ làm việc",
    details: ["Thứ 2 - Thứ 7: 8:00 - 18:00", "Chủ nhật: Nghỉ"],
    color: "#FFB347",
  },
]

const cargoTypes = [
  "Hàng tiêu dùng",
  "Hàng điện tử",
  "Máy móc thiết bị",
  "Nguyên vật liệu",
  "Thực phẩm",
  "Hàng đông lạnh",
  "Hàng nguy hiểm",
  "Khác",
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    cargoType: "",
    origin: "",
    destination: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.")
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-[#f8fafc] to-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-medium mb-4">
            Liên hệ với chúng tôi
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003366] mb-6">
            Nhận <span className="text-[#FF6B35]">báo giá miễn phí</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hãy để lại thông tin, chúng tôi sẽ liên hệ và tư vấn giải pháp vận chuyển 
            phù hợp nhất cho doanh nghiệp của bạn.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact info cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${info.color}15` }}
                    >
                      <Icon className="h-6 w-6" style={{ color: info.color }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#003366] mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}

            {/* Google Maps Embed */}
            <Card className="border-0 shadow-md overflow-hidden">
              <div className="aspect-[4/3] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.6098690857684!2d106.62722446962456!3d10.854847699363076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752be52e8bceb5%3A0x6e6fd58a02c19d44!2zTmjhuqV0IFRoacOqbiBTxqFuIFPDoGkgR8Oybg!5e0!3m2!1svi!2s!4v1712764800000!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nhất Thiên Sơn Sài Gòn Location"
                />
              </div>
            </Card>
          </div>

          {/* Contact form */}
          <Card className="lg:col-span-2 border-0 shadow-xl">
            <CardContent className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-[#003366] mb-6">Yêu cầu báo giá</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Họ và tên *</Label>
                    <Input
                      id="name"
                      placeholder="Nguyễn Văn A"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">Số điện thoại *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="0912 345 678"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Cargo Type */}
                  <div className="space-y-2">
                    <Label htmlFor="cargoType">Loại hàng hóa *</Label>
                    <Select
                      value={formData.cargoType}
                      onValueChange={(value) => handleChange("cargoType", value)}
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Chọn loại hàng" />
                      </SelectTrigger>
                      <SelectContent>
                        {cargoTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Origin */}
                  <div className="space-y-2">
                    <Label htmlFor="origin">Điểm xuất phát *</Label>
                    <Input
                      id="origin"
                      placeholder="VD: TP.HCM, Việt Nam"
                      value={formData.origin}
                      onChange={(e) => handleChange("origin", e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Destination */}
                  <div className="space-y-2">
                    <Label htmlFor="destination">Điểm đến *</Label>
                    <Input
                      id="destination"
                      placeholder="VD: Singapore"
                      value={formData.destination}
                      onChange={(e) => handleChange("destination", e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Ghi chú thêm</Label>
                  <Textarea
                    id="message"
                    placeholder="Mô tả chi tiết về hàng hóa, khối lượng, kích thước, yêu cầu đặc biệt..."
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={4}
                    className="resize-none"
                  />
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold text-lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Gửi yêu cầu báo giá
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Chúng tôi sẽ phản hồi trong vòng 2 giờ làm việc
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
