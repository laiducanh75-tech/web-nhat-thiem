"use client"

import React, { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Truck, Ship, Plane, Box, Search, ChevronRight } from 'lucide-react'

export default function LogisticsPage() {
  const [isOpen, setIsOpen] = useState(false)
  const directImg = "https://i.postimg.cc/bJtpQcDy/nts.jpg" // Link ảnh ông vừa tạo

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* 1. TOP BAR */}
      <div className="bg-[#001f42] text-white py-2 text-xs border-b border-white/10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1.5"><Phone size={14} className="text-orange-400"/> 0888 447 239</span>
            <span className="hidden md:flex items-center gap-1.5"><Mail size={14} className="text-orange-400"/> nhatthiensonsaigon@gmail.com</span>
          </div>
          <div className="font-bold uppercase tracking-widest">Thứ 2 - Thứ 7: 08:00 - 18:00</div>
        </div>
      </div>

      {/* 2. HEADER - DÙNG ẢNH LOGO CỦA ÔNG */}
      <header className="sticky top-0 z-50 bg-[#002b5b] text-white shadow-xl">
        <div className="container mx-auto px-4 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={directImg} alt="Logo NTS" className="h-14 w-auto bg-white p-1 rounded shadow-md" />
            <div>
              <div className="font-black text-xl md:text-2xl leading-tight uppercase tracking-tight">Nhất Thiên Sơn</div>
              <div className="text-[10px] text-orange-400 tracking-[0.3em] font-bold">SAIGÒN LOGISTICS</div>
            </div>
          </div>
          <nav className="hidden lg:flex items-center space-x-6 font-bold text-sm uppercase">
            <a href="#" className="hover:text-orange-400">Trang chủ</a>
            <a href="#" className="hover:text-orange-400">Dịch vụ</a>
            <a href="#" className="hover:text-orange-400">Theo dõi</a>
            <a href="#" className="bg-[#f05a28] px-6 py-3 rounded-lg hover:bg-[#d44d1f] shadow-lg">NHẬT BÁO GIÁ</a>
          </nav>
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={30}/> : <Menu size={30}/>}</button>
        </div>
      </header>

      {/* 3. HERO BANNER - DÙNG ẢNH BẾN CẢNG CỦA ÔNG */}
      <section className="relative h-[600px] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={directImg} className="w-full h-full object-cover" alt="Port Background" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002b5b]/90 to-[#002b5b]/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight uppercase italic">Giải pháp Logistics <br/><span className="text-white">Thông minh</span></h1>
            <p className="text-2xl md:text-4xl font-bold mb-10 text-[#4ade80] uppercase tracking-widest italic">Nhanh chóng • Đáng tin cậy • Toàn cầu</p>
            
            {/* BOX THEO DÕI (MÀU CAM) */}
            <div className="bg-[#f05a28] p-1.5 rounded-2xl shadow-2xl max-w-xl">
              <div className="bg-[#002b5b]/40 backdrop-blur-md p-6 rounded-[14px]">
                <label className="block font-black mb-4 flex items-center gap-2 text-xl text-white uppercase italic">Theo dõi đơn hàng</label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input type="text" placeholder="Nhập mã vận đơn..." className="flex-1 px-5 py-4 rounded-xl text-black outline-none font-bold shadow-inner" />
                  <button className="bg-white text-[#002b5b] px-8 py-4 rounded-xl font-black hover:bg-slate-100 uppercase shadow-lg">Kiểm tra</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DỊCH VỤ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "ĐƯỜNG BIỂN", icon: <Ship size={40}/> },
            { title: "ĐƯỜNG BỘ", icon: <Truck size={40}/> },
            { title: "KHO BÃI", icon: <Box size={40}/> }
          ].map((s, i) => (
            <div key={i} className="bg-white p-10 rounded-[30px] shadow-xl border-b-8 border-[#002b5b] hover:border-orange-500 transition-all group text-center">
              <div className="text-orange-500 mb-6 flex justify-center">{s.icon}</div>
              <h3 className="text-xl font-black text-[#002b5b] uppercase">{s.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-[#001f42] text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <img src={directImg} alt="Footer Logo" className="h-16 w-auto mx-auto bg-white p-2 rounded-xl mb-6 shadow-lg" />
          <div className="text-lg font-bold opacity-80 uppercase tracking-widest">© 2026 NHẤT THIÊM SƠN SÀI GÒN</div>
        </div>
      </footer>
    </main>
  )
}
