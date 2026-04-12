"use client"

import React, { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Truck, Ship, Plane, Box, Search, ChevronRight, ClipboardList, Settings, Target, ShieldCheck, Globe } from 'lucide-react'

export default function LogisticsPage() {
  const [isOpen, setIsOpen] = useState(false)
  // ĐÂY LÀ LINK ẢNH CHIẾN THẦN CỦA ÔNG
  const myBanner = "https://i.postimg.cc/bJtpQcDy/nts.jpg" 

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* 1. TOP BAR */}
      <div className="bg-[#001f42] text-white py-2.5 text-xs border-b border-white/10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5 font-bold"><Phone size={14} className="text-orange-400"/> 0888 447 239</span>
            <span className="flex items-center gap-1.5 hidden md:flex font-bold"><Phone size={14} className="text-orange-400"/> -0919 417 239</span>
          </div>
          <div className="font-semibold uppercase tracking-wider hidden sm:block">Thứ 2 - Thứ 7: 08:00 - 18:00</div>
        </div>
      </div>

      {/* 2. HEADER */}
      <header className="sticky top-0 z-50 bg-[#002b5b] text-white shadow-2xl">
        <div className="container mx-auto px-4 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Logo vẫn giữ bản gốc hoặc ông có thể thay link myBanner vào đây nếu muốn */}
            <img src="https://i.postimg.cc/bJtpQcDy/nts.jpg" alt="Logo" className="h-16 w-auto bg-white p-1.5 rounded-lg shadow-lg" />
            <div>
              <div className="font-black text-xl md:text-2xl leading-none uppercase tracking-tight">Nhất Thiên Sơn</div>
              <div className="text-[10px] md:text-xs text-orange-400 tracking-[0.3em] font-bold mt-1">SÀIGÒN LOGISTICS</div>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-6 font-bold text-sm uppercase">
            <a href="#" className="hover:text-orange-400 transition-colors">Trang chủ</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Dịch vụ</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Theo dõi</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Biên bản</a>
            <a href="#bao-gia" className="bg-[#f05a28] px-7 py-3.5 rounded-xl hover:bg-[#d44d1f] transition-all shadow-lg hover:scale-105">NHẬN BÁO GIÁ</a>
          </nav>

          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={32}/> : <Menu size={32}/>}</button>
        </div>
        {isOpen && (
          <div className="lg:hidden bg-[#001f42] p-6 flex flex-col gap-4 border-t border-white/10">
            <a href="#" className="font-bold border-b border-white/5 pb-2">Trang chủ</a>
            <a href="#bao-gia" className="bg-orange-500 text-center py-3 rounded-xl font-black uppercase">Nhận báo giá</a>
          </div>
        )}
      </header>

      {/* 3. HERO BANNER - ĐÃ THAY ẢNH CỦA ÔNG VÀO ĐÂY */}
      <section className="relative h-[700px] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={myBanner} className="w-full h-full object-cover" alt="Bến cảng Nhất Thiên Sơn" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002b5b]/95 via-[#002b5b]/70 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[1] tracking-tighter uppercase italic">Giải pháp Logistics <br/><span className="text-white">Thông minh</span></h1>
            <p className="text-2xl md:text-3xl font-bold mb-12 text-[#4ade80] uppercase tracking-widest italic">Nhanh chóng • Đáng tin cậy • Toàn cầu</p>
            
            <div className="bg-[#f05a28] p-1 rounded-3xl shadow-2xl max-w-2xl border border-white/20">
              <div className="bg-[#002b5b]/40 backdrop-blur-xl p-8 rounded-[22px]">
                <label className="block font-black mb-4 flex items-center gap-3 text-2xl text-white uppercase italic">
                  <Search size={28} className="text-white"/> Theo dõi đơn hàng
                </label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input type="text" placeholder="Nhập mã vận đơn của bạn..." className="flex-1 px-6 py-5 rounded-2xl text-black outline-none text-lg font-bold shadow-inner" />
                  <button className="bg-white text-[#002b5b] px-10 py-5 rounded-2xl font-black text-xl hover:bg-orange-500 hover:text-white transition-all uppercase shadow-lg">Kiểm tra</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DỊCH VỤ CHI TIẾT */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 text-[#002b5b]">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Dịch vụ <span className="text-orange-500">toàn diện</span></h2>
            <p className="text-slate-500 font-bold text-lg italic">Uy tín tạo nên thương hiệu Nhất Thiên Sơn</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "VẬN TẢI ĐƯỜNG BIỂN", icon: <Ship size={40}/>, color: "border-green-500" },
              { title: "VẬN TẢI ĐƯỜNG BỘ", icon: <Truck size={40}/>, color: "border-orange-500" },
              { title: "VẬN TẢI HÀNG KHÔNG", icon: <Plane size={40}/>, color: "border-blue-500" },
              { title: "KHO BÃI & CẢNG", icon: <Box size={40}/>, color: "border-yellow-500" }
            ].map((s, i) => (
              <div key={i} className={`bg-white p-10 rounded-[40px] shadow-xl hover:-translate-y-3 transition-all border-b-[12px] ${s.color} group`}>
                <div className="text-[#002b5b] mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-[#002b5b] uppercase">{s.title
