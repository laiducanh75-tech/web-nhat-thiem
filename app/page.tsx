"use client"

import React, { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Truck, Ship, Plane, Box, Search, ChevronRight, ClipboardList, Settings, Target } from 'lucide-react'

// --- DỮ LIỆU ĐỂ BẠN DỄ DÀNG SỬA KHI CẦN ---
const COMPANY_INFO = {
  name: "Nhất Thiên Sơn Sài Gòn",
  brand: "NTS LOGISTICS",
  phone1: "0888 447 239",
  phone2: "0919 417 239",
  email: "nhatthiensonsaigon@gmail.com",
  address: "138/10 Khu Phố 37, Phường Thới An, TP.HCM, Việt Nam",
  workingHours: "Thứ 2 - Thứ 7: 8:00 - 18:00",
  // Logo: Dùng link ảnh tạm thời, sau này bạn thay bằng link ảnh thật
  logoUrl: "https://i.ibb.co/Xz900jC/logo-ts-red.png" // Đây là ảnh logo xe tải đỏ mình up tạm
}

const NAV_LINKS = [
  { name: "Trang chủ", href: "#" },
  { name: "Dịch vụ", href: "#dich-vu" },
  { name: "Quy trình", href: "#quy-trinh" },
  { name: "Báo giá", href: "#bao-gia" },
  { name: "Về chúng tôi", href: "#" },
  { name: "Liên hệ", href: "#" },
]

// --- COMPONENT LOGO CHUNG ---
const CompanyLogo = ({ light = false }) => (
  <div className="flex items-center gap-3">
    <div className={`p-1 rounded ${light ? 'bg-transparent' : 'bg-white'}`}>
      <img 
        src={COMPANY_INFO.logoUrl} 
        alt={`Logo ${COMPANY_INFO.name}`} 
        className="h-12 w-auto object-contain"
      />
    </div>
    <div className={`${light ? 'text-white' : 'text-white'}`}>
      <div className="font-bold text-lg md:text-xl leading-tight uppercase tracking-tight">
        {COMPANY_INFO.name.split(' ').slice(0, 3).join(' ')}
        <span className="block text-[#f05a28]">{COMPANY_INFO.name.split(' ').slice(3).join(' ')}</span>
      </div>
      <div className="text-[10px] text-orange-300 tracking-[0.3em] font-bold mt-0.5">
        {COMPANY_INFO.brand}
      </div>
    </div>
  </div>
)

// --- 1. TOP BAR ---
const TopBar = () => (
  <div className="bg-[#002b5b] text-white py-2.5 text-xs md:text-sm border-b border-white/10">
    <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-1">
        <a href={`tel:${COMPANY_INFO.phone1.replace(/\s/g, '')}`} className="flex items-center gap-1.5 hover:text-orange-300">
          <Phone size={14} className="text-orange-400" /> {COMPANY_INFO.phone1}
        </a>
        <a href={`tel:${COMPANY_INFO.phone2.replace(/\s/g, '')}`} className="flex items-center gap-1.5 hover:text-orange-300">
          <Phone size={14} className="text-orange-400" /> {COMPANY_INFO.phone2}
        </a>
        <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-1.5 hover:text-orange-300">
          <Mail size={14} className="text-orange-400" /> {COMPANY_INFO.email}
        </a>
      </div>
      <div className="text-white/80 font-medium">{COMPANY_INFO.workingHours}</div>
    </div>
  </div>
)

// --- 2. HEADER ---
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-[#002b5b] text-white shadow-xl">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <CompanyLogo />

        <nav className="hidden lg:flex items-center space-x-1 font-semibold text-sm">
          {NAV_LINKS.map(link => (
            <a key={link.name} href={link.href} className="px-3.5 py-2 rounded-full hover:bg-white/10 hover:text-orange-300 transition-colors">
              {link.name}
            </a>
          ))}
          <div className="pl-4 flex gap-2.5">
            <button className="bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-lg text-sm font-bold backdrop-blur-sm border border-white/10">
              Theo dõi
            </button>
            <a href="#bao-gia" className="bg-[#f05a28] hover:bg-[#d44d1f] px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg transition-all hover:scale-105">
              Nhận báo giá
            </a>
          </div>
        </nav>

        <button className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#001f42] border-t border-white/10 p-5 space-y-3 shadow-inner">
          {NAV_LINKS.map(link => (
            <a key={link.name} href={link.href} className="block text-white/90 p-3 rounded-lg hover:bg-white/5 hover:text-orange-300 font-medium">
              {link.name}
            </a>
          ))}
          <div className="pt-4 grid grid-cols-2 gap-3">
            <button className="bg-white/10 w-full p-3 rounded-lg text-sm font-bold">Theo dõi</button>
            <a href="#bao-gia" className="bg-[#f05a28] w-full p-3 rounded-lg text-sm font-bold text-center">Báo giá</a>
          </div>
        </div>
      )}
    </header>
  )
}

// --- 3. HERO (Trang chủ) ---
const HeroSection = () => (
  <section className="relative h-[650px] flex items-center">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1590496794008-383c8070b257?auto=format&fit=crop&q=80" 
        className="w-full h-full object-cover" 
        alt="Bến cảng container Nhất Thiên Sơn"
      />
      <div className="absolute inset-0 bg-[#002b5b]/75 backdrop-blur-[2px]"></div>
    </div>
    <div className="container mx-auto px-4 relative z-10 text-white">
      <div className="max-w-4xl">
        <span className="inline-flex items-center gap-2 bg-[#f05a28]/20 border border-[#f05a28]/30 px-5 py-2 rounded-full text-sm mb-7 text-orange-100 font-medium">
          <div className="w-2 h-2 rounded-full bg-[#f05a28] animate-pulse"></div> 
          Đối tác vận tải & Logistics tin cậy tại TP.HCM
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-5 leading-[1.1] tracking-tight">
          Giải pháp Logistics <span className="text-white">Thông minh</span>
        </h1>
        <p className="text-5xl md:text-6xl font-bold text-[#4ade80] mb-10 leading-tight">
          Nhanh chóng • Đáng tin cậy • Toàn cầu
        </p>
        
        {/* TRACKING BOX (y hệt image_7.png) */}
        <div className="bg-white/10 p-7 rounded-3xl border border-white/20 backdrop-blur-xl max-w-2xl mb-10 shadow-2xl">
          <label className="block text-base font-semibold mb-3.5 flex items-center gap-2.5 text-white/90">
            <Search size={18} className="text-orange-400"/> 
            Nhập mã để theo dõi lộ trình đơn hàng của bạn
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input type="text" placeholder="Ví dụ: NTS123456789" className="flex-1 bg-white px-5 py-4 rounded-xl text-slate-900 outline-none text-lg placeholder:text-slate-400" />
            <button className="bg-[#f05a28] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#d44d1f] transition-all flex items-center justify-center gap-2 shadow-lg">
              Theo dõi ngay
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-5">
          <a href="#bao-gia" className="bg-[#f05a28] px-10 py-5 rounded-xl font-bold text-xl flex items-center gap-2.5 shadow-xl transition-all hover:scale-105 hover:bg-[#d44d1f]">
            Nhận báo giá miễn phí <ChevronRight size={22}/>
          </a>
          <a href="#dich-vu" className="bg-white/10 border border-white/30 px-10 py-5 rounded-xl font-bold text-xl backdrop-blur-sm transition-all hover:bg-white/20">
            Tìm hiểu dịch vụ
          </a>
        </div>
      </div>
    </div>
  </section>
)

// --- 4. DỊCH VỤ (Trang chủ) ---
const ServicesSection = () => (
  <section id="dich-vu" className="py-28 bg-slate-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold text-[#002b5b] mb-6 tracking-tight">
          Giải pháp vận chuyển <span className="text-[#f05a28]">toàn diện</span>
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed font-medium">
          Chúng tôi cung cấp đầy đủ các dịch vụ logistics tích hợp, tối ưu chi phí và thời gian cho mọi loại hàng hóa, từ nội địa đến quốc tế.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: "Vận tải đường biển", icon: <Ship />, color: "border-t-[#4ade80]", items: ["Hàng container (FCL/LCL)", "Vận chuyển quốc tế", "Thủ tục hải quan trọn gói"] },
          { title: "Vận tải đường bộ", icon: <Truck />, color: "border-t-[#f05a28]", items: ["Giao nhận nội địa nhanh", "Đội xe tải đa dạng", "Vận chuyển hàng dự án"] },
          { title: "Vận tải hàng không", icon: <Plane />, color: "border-t-[#002b5b]", items: ["Dịch vụ hỏa tốc", "Hàng hóa giá trị cao", "Door-to-door toàn cầu"] },
          { title: "Kho bãi & Phân phối", icon: <Box />, color: "border-t-orange-300", items: ["Lưu kho an toàn", "Quản lý tồn kho hiện đại", "Dịch vụ đóng gói"] }
        ].map((s, i) => (
          <div key={i} className={`bg-white p-10 rounded-3xl shadow-lg border-t-8 ${s.color} hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group`}>
            <div className="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center mb-8 text-[#002b5b] group-hover:bg-[#002b5b] group-hover:text-white transition-colors duration-300">
              {React.cloneElement(s.icon, { size: 36 })}
            </div>
            <h3 className="text-2xl font-bold mb-5 text-slate-950 tracking-tight">{s.title}</h3>
            <ul className="text-slate-600 text-base space-y-3.5 mb-8 text-left font-medium">
              {s.items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-orange-400 transition-colors"></div> {item}
                </li>
              ))}
            </ul>
            <button className="text-[#f05a28] font-bold flex items-center gap-1.5 text-base group-hover:gap-2.5 transition-all">
              Tìm hiểu thêm <ChevronRight size={18} className="mt-0.5"/>
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// --- 5. QUY TRÌNH (TRANG MỚI - y hệt image_5.png) ---
const ProcessSection = () => (
  <section id="quy-trinh" className="py-28 bg-white border-t border-slate-100">
    <div className="container mx-auto px-4">
      <div className="text-center mb-20 max-w-4xl mx-auto">
        <span className="inline-block bg-[#f05a28]/10 text-[#f05a28] px-5 py-2 rounded-full font-bold text-sm mb-5">
          Quy trình làm việc chuyên nghiệp
        </span>
        <h2 className="text-5xl md:text-6xl font-extrabold text-[#002b5b] mb-6 tracking-tight">
          Vận chuyển <span className="text-[#f05a28]">bài bản, an toàn</span>
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
          Chúng tôi tuân thủ quy trình nghiêm ngặt để đảm bảo hàng hóa của bạn được vận chuyển an toàn, đúng hẹn và hiệu quả nhất.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        {/* Đường nối giữa các bước */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 hidden md:block z-0"></div>
        
        {[
          { icon: <ClipboardList />, title: "Nhận đơn hàng", desc: "Tiếp nhận thông tin, xác nhận yêu cầu và báo giá chi tiết cho khách hàng." },
          { icon: <Settings />, title: "Xử lý & Đóng gói", desc: "Kiểm tra hàng hóa, đóng gói chuẩn và hoàn tất thủ tục hải quan cần thiết." },
          { icon: <Truck />, title: "Vận chuyển", desc: "Vận chuyển hàng qua mạng lưới toàn cầu, theo dõi lộ trình realtime qua GPS." },
          { icon: <Target />, title: "Giao hàng & Hoàn tất", desc: "Giao nhận đúng địa điểm, thời gian, xác nhận chứng từ và đối soát." }
        ].map((step, i) => (
          <div key={i} className="bg-slate-50 p-9 rounded-3xl border border-slate-100 text-center relative z-10 hover:border-orange-200 hover:bg-white hover:shadow-xl transition-all group">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#f05a28] text-white flex items-center justify-center text-2xl font-black shadow-lg">
              {i + 1}
            </div>
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-8 mx-auto mt-6 text-[#002b5b] border-2 border-slate-100 group-hover:scale-110 group-hover:border-orange-200 transition-all">
              {React.cloneElement(step.icon, { size: 36 })}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-950 tracking-tight">{step.title}</h3>
            <p className="text-slate-600 text-base leading-relaxed font-medium">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-[#002b5b] text-white p-10 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl">
        <h4 className="text-3xl font-bold tracking-tight text-center md:text-left">
          Bạn có hàng hóa cần vận chuyển? <span className="text-[#4ade80]">Kết nối ngay!</span>
        </h4>
        <a href="#bao-gia" className="bg-[#f05a28] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#d44d1f] transition-all flex items-center gap-2 group shadow-lg whitespace-nowrap">
          Liên hệ ngay <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform"/>
        </a>
      </div>
    </div>
  </section>
)

// --- 6. BÁO GIÁ (TRANG MỚI - y hệt image_6.png) ---
const QuoteSection = () => (
  <section id="bao-gia" className="py-28 bg-slate-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <span className="inline-block bg-[#f05a28]/10 text-[#f05a28] px-5 py-2 rounded-full font-bold text-sm mb-5">
          Liên hệ với chúng tôi
        </span>
        <h2 className="text-5xl md:text-6xl font-extrabold text-[#002b5b] mb-6 tracking-tight">
          Nhận <span className="text-[#f05a28]">báo giá miễn phí</span>
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed font-medium mx-auto">
          Hãy để lại thông tin, đội ngũ chuyên gia của chúng tôi sẽ liên hệ lại ngay để tư vấn giải pháp và báo giá tối ưu nhất cho doanh nghiệp của bạn.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Thông tin liên hệ */}
        <div className="lg:col-span-1 space-y-8">
          {[
            { icon: <Phone size={28}/>, title: "Điện thoại", content: [COMPANY_INFO.phone1, COMPANY_INFO.phone2] },
            { icon: <Mail size={28}/>, title: "Email", content: [COMPANY_INFO.email] },
            { icon: <MapPin size={28}/>, title: "Địa chỉ", content: [COMPANY_INFO.address] },
          ].map((info, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex items-start gap-6 hover:shadow-xl transition-shadow">
              <div className="p-4 rounded-full bg-[#f05a28]/10 text-[#f05a28]">
                {info.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#002b5b] mb-2.5">{info.title}</h4>
                {info.content.map((text, idx) => (
                  <p key={idx} className="text-slate-700 font-medium leading-relaxed">{text}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Form báo giá */}
        <form className="lg:col-span-2 bg-white p-12 rounded-3xl shadow-xl border border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <h3 className="col-span-1 md:col-span-2 text-2xl font-bold text-[#002b5b] mb-4">Thông tin yêu cầu báo giá</h3>
          
          <div className="space-y-2">
            <label className="font-semibold text-slate-800">Họ và tên *</label>
            <input type="text" placeholder="Nguyễn Văn A" className="w-full bg-slate-50 px-5 py-4 rounded-xl border border-slate-200 outline-none focus:border-[#f05a28] focus:ring-1 focus:ring-[#f05a28]" />
          </div>
          <div className="space-y-2">
            <label className="font-semibold text-slate-800">Số điện thoại *</label>
            <input type="tel" placeholder="0912 345 678" className="w-full bg-slate-50 px-5 py-4 rounded-xl border border-slate-200 outline-none focus:border-[#f05a28]" />
          </div>
          <div className="space-y-2">
            <label className="font-semibold text-slate-800">Email *</label>
            <input type="email" placeholder="example@gmail.com" className="w-full bg-slate-50 px-5 py-4 rounded-xl border border-slate-200 outline-none focus:border-[#f05a28]" />
          </div>
          <div className="space-y-2">
            <label className="font-semibold text-slate-800">Loại hàng hóa *</label>
            <select className="w-full bg-slate-50 px-5 py-4 rounded-xl border border-slate-200 outline-none focus:border-[#f05a28] text-slate-600">
              <option>Chọn loại hàng</option>
              <option>Hàng container (FCL/LCL)</option>
              <option>Hàng đường bộ</option>
              <option>Hàng hàng không</option>
              <option>Hàng dự án</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="font-semibold text-slate-800">Điểm xuất phát *</label>
            <input type="text" placeholder="Ví dụ: TP.HCM" className="w-full bg-slate-50 px-5 py-4 rounded-xl border border-slate-200 outline-none focus:border-[#f05a28]" />
          </div>
          <div className="space-y-2">
            <label className="font-semibold text-slate-800">Điểm đến *</label>
            <input type="text" placeholder="Ví dụ: Hà Nội" className="w-full bg-slate-50 px-5 py-4 rounded-xl border border-slate-200 outline-none focus:border-[#f05a28]" />
          </div>
          <div className="space-y-2 col-span-1 md:col-span-2">
            <label className="font-semibold text-slate-800">Ghi chú thêm</label>
            <textarea placeholder="Mô tả chi tiết về hàng hóa, trọng lượng, kích thước..." className="w-full bg-slate-50 px-5 py-4 rounded-xl border border-slate-200 outline-none focus:border-[#f05a28] h-32"></textarea>
          </div>
          <button className="col-span-1 md:col-span-2 bg-[#f05a28] hover:bg-[#d44d1f] w-full py-5 rounded-xl font-bold text-xl text-white shadow-lg transition-all hover:scale-105">
            Gửi yêu cầu báo giá
          </button>
        </form>
      </div>
    </div>
  </section>
)

// --- 7. FOOTER ---
const Footer = () => (
  <footer className="bg-[#001f42] text-white/90 pt-20 pb-10 border-t border-white/10">
    <div className="container mx-auto px-
