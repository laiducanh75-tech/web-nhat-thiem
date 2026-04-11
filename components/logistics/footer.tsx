"use client"

import { Phone, Mail, MapPin, Facebook, Linkedin, Youtube, ArrowUp } from "lucide-react"

const quickLinks = [
  { label: "Trang chủ", href: "#hero" },
  { label: "Dịch vụ", href: "#services" },
  { label: "Theo dõi lô hàng", href: "#tracking" },
  { label: "Liên hệ", href: "#contact" },
]

const services = [
  { label: "Vận tải đường biển", href: "#" },
  { label: "Vận tải đường bộ", href: "#" },
  { label: "Vận tải hàng không", href: "#" },
  { label: "Kho bãi & Phân phối", href: "#" },
]

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#003366] text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/images/logo.png" 
                alt="Nhất Thiên Sơn Sài Gòn" 
                className="h-14 w-auto"
              />
              <div>
                <div className="font-bold text-xl leading-tight">Nhất Thiên Sơn Sài Gòn</div>
                <div className="text-[#FF6B35] text-sm font-medium tracking-wider">LOGISTICS</div>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              Đối tác logistics tin cậy với hơn 15 năm kinh nghiệm trong ngành vận tải 
              và kho bãi. Chúng tôi cam kết mang đến dịch vụ chất lượng cao nhất.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socials.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#FF6B35] flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Liên kết nhanh
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#FF6B35] -mb-2" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#FF6B35] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Dịch vụ
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#FF6B35] -mb-2" />
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-white/70 hover:text-[#FF6B35] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ECDC4]" />
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Liên hệ
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#FF6B35] -mb-2" />
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:0888447239" className="flex items-start gap-3 text-white/70 hover:text-[#FF6B35] transition-colors">
                  <Phone className="h-5 w-5 mt-0.5 text-[#FF6B35]" />
                  <div>
                    <div>0888 447 239</div>
                    <div>0919 417 239</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:nhatthiensonsaigon@gmail.com" className="flex items-start gap-3 text-white/70 hover:text-[#FF6B35] transition-colors">
                  <Mail className="h-5 w-5 mt-0.5 text-[#4ECDC4]" />
                  <span>nhatthiensonsaigon@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="h-5 w-5 mt-0.5 text-[#FFB347]" />
                <span>
                  138/10 Khu Phố 57<br />
                  Phường Thới An, TP.HCM<br />
                  Việt Nam
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Nhất Thiên Sơn Sài Gòn. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-[#FF6B35] transition-colors">Điều khoản sử dụng</a>
              <a href="#" className="hover:text-[#FF6B35] transition-colors">Chính sách bảo mật</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#FF6B35] hover:bg-[#FF6B35]/90 rounded-full shadow-lg flex items-center justify-center transition-all hover:-translate-y-1 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 text-white" />
      </button>
    </footer>
  )
}
