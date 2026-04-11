"use client"

import React, { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Truck, Ship, Plane, Box, Search, ChevronRight } from 'lucide-react'

export default function LogisticsPage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      {/* TOP BAR */}
      <div className="bg-[#002b5b] text-white py-2 text-xs md:text-sm border-b border-white/10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><Phone size={14} /> 0888 447 239</span>
            <span className="flex items-center gap-1 hidden md:flex"><Mail size={14} /> nhatthiensonsaigon@gmail.com</span>
          </div>
          <div className="hidden md:block">Giờ làm việc: Thứ 2 - Thứ 7: 8:00 - 18:00</div>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#002b5b] text-white shadow-lg">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1 rounded">
              <div className="text-[#002b5b] font-bold text-xl leading-none">NTS</div>
            </div>
            <div>
              <div className="font-bold text-lg leading-tight uppercase">Nhất Thiên Sơn Sài Gòn</div>
              <div className="text-[10px] text-orange-400 tracking-[0.2em] font-bold">LOGISTICS</div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-6 font-medium text-sm">
            <a href="#" className="hover:text-orange-400 underline decoration-orange-400 underline-offset-8">Trang chủ</a>
            <a href="#" className="hover:text-orange-400">Dịch vụ</a>
            <a href="#" className="hover:text-orange-400">Theo dõi</a>
            <a href="#" className="hover:text-orange-400">Về chúng tôi</a>
            <a href="#" className="hover:text-orange-400">Liên hệ</a>
            <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded">Theo dõi lô hàng</button>
            <button className="bg-[#f05a28] hover:bg-[#d44d1f] px-4 py-2 rounded font-bold">Nhận báo giá</button>
          </nav>

          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* HERO SECTION (Dựa theo image_dd6dda.jpg) */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover" 
            alt="Logistics background"
          />
          <div className="absolute inset-0 bg-[#002b5b]/70 backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 border border-white/20 px-4 py-1 rounded-full text-sm mb-6">
              Đối tác vận tải tin cậy của bạn
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Giải pháp Logistics <span className="text-white">Thông minh</span>
            </h1>
            <p className="text-4xl md:text-5xl font-bold text-[#4ade80] mb-8">
              Nhanh chóng • Đáng tin cậy • Toàn cầu
            </p>
            
            {/* TRACKING BOX */}
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-md max-w-xl mb-8">
              <label className="block text-sm mb-2 flex items-center gap-2"><Search size={16}/> Theo dõi lộ trình của bạn</label>
              <div className="flex gap-2">
                <input type="text" placeholder="Nhập mã theo dõi (VD: NTS-123456)" className="flex-1 bg-white px-4 py-3 rounded-lg text-slate-900 outline-none" />
                <button className="bg-[#f05a28] px-6 py-3 rounded-lg font-bold hover:bg-[#d44d1f] transition-colors">Theo dõi</button>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="bg-[#f05a28] px-8 py-4 rounded-lg font-bold text-lg">Nhận báo giá miễn phí →</button>
              <button className="bg-white/20 border border-white/30 px-8 py-4 rounded-lg font-bold text-lg backdrop-blur-sm">Tìm hiểu dịch vụ</button>
            </div>
          </div>
        </div>
      </section>

      {/* DỊCH VỤ (Dựa theo image_dd69f5.png) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#002b5b] mb-4">Giải pháp vận chuyển <span className="text-[#f05a28]">toàn diện</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Chúng tôi cung cấp đầy đủ các dịch vụ logistics từ vận tải đường biển, đường bộ, hàng không đến kho bãi.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 container mx-auto px-4">
          {[
            { title: "Vận tải đường biển", icon: <Ship />, color: "border-t-[#4ade80]", items: ["Hàng nguyên container (FCL)", "Hàng lẻ ghép container (LCL)", "Vận chuyển hàng đặc biệt"] },
            { title: "Vận tải đường bộ", icon: <Truck />, color: "border-t-[#f05a28]", items: ["Vận chuyển nội địa", "Vận chuyển xuyên biên giới", "Xe chuyên dụng các loại"] },
            { title: "Vận tải hàng không", icon: <Plane />, color: "border-t-[#002b5b]", items: ["Express delivery", "Hàng hóa đặc biệt", "Door-to-door service"] },
            { title: "Kho bãi & Phân phối", icon: <Box />, color: "border-t-orange-300", items: ["Kho ngoại quan", "Dịch vụ fulfillment", "Quản lý tồn kho"] }
          ].map((s, i) => (
            <div key={i} className={`bg-white p-8 rounded-2xl shadow-sm border-t-4 ${s.color} hover:shadow-xl transition-all group`}>
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-[#002b5b] group-hover:bg-[#002b5b] group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <ul className="text-slate-500 text-sm space-y-3 mb-6 text-left">
                {s.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> {item}
                  </li>
                ))}
              </ul>
              <button className="text-[#f05a28] font-bold flex items-center gap-1 text-sm">Tìm hiểu thêm <ChevronRight size={16}/></button>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
