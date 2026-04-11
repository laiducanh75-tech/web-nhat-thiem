"use client"

import React, { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Truck, Ship, Plane, Box, Search, ChevronRight } from 'lucide-react'

export default function LogisticsPage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      {/* 1. TOP BAR - Đen/Xanh đậm */}
      <div className="bg-[#001f42] text-white py-2 text-xs md:text-sm border-b border-white/10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4 md:gap-8">
            <span className="flex items-center gap-1.5"><Phone size={14} className="text-orange-400"/> 0888 447 239</span>
            <span className="hidden md:flex items-center gap-1.5"><Mail size={14} className="text-orange-400"/> nhatthiensonsaigon@gmail.com</span>
          </div>
          <div className="font-medium">Thứ 2 - Thứ 7: 08:00 - 18:00</div>
        </div>
      </div>

      {/* 2. HEADER - Logo Xe Tải Đỏ */}
      <header className="sticky top-0 z-50 bg-[#002b5b] text-white shadow-xl">
        <div className="container mx-auto px-4 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://i.ibb.co/Xz900jC/logo-ts-red.png" alt="Logo NTS" className="h-14 w-auto bg-white p-1 rounded shadow-md" />
            <div>
              <div className="font-black text-lg md:text-2xl leading-tight uppercase tracking-tight">Nhất Thiên Sơn</div>
              <div className="text-[10px] md:text-xs text-orange-400 tracking-[0.3em] font-bold">SAIGÒN LOGISTICS</div>
            </div>
          </div>
          <nav className="hidden lg:flex items-center space-x-8 font-bold text-sm uppercase">
            <a href="#" className="hover:text-orange-400 transition-colors">Trang chủ</a>
            <a href="#dich-vu" className="hover:text-orange-400 transition-colors">Dịch vụ</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Theo dõi</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Biên bản</a>
            <a href="#lien-he" className="bg-[#f05a28] px-6 py-3 rounded-lg hover:bg-[#d44d1f] transition-all shadow-lg">NHẬN BÁO GIÁ</a>
          </nav>
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={30}/> : <Menu size={30}/>}</button>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-[#001f42] p-6 flex flex-col gap-4 border-t border-white/10 animate-in fade-in zoom-in">
            <a href="#" className="font-bold py-2 border-b border-white/5">Trang chủ</a>
            <a href="#dich-vu" className="font-bold py-2 border-b border-white/5">Dịch vụ</a>
            <a href="#lien-he" className="bg-orange-500 text-center py-3 rounded-xl font-black">NHẬN BÁO GIÁ</a>
          </div>
        )}
      </header>

      {/* 3. HERO BANNER - Hình Bến Cảng Container chuẩn nts.jpg */}
      <section className="relative h-[600px] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1590496794008-383c8070b257?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Port Background" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002b5b]/90 to-[#002b5b]/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[1.1] tracking-tight">Giải pháp Logistics <br/><span className="text-white">Thông minh</span></h1>
            <p className="text-2xl md:text-4xl font-bold mb-12 text-[#4ade80] uppercase tracking-widest">Nhanh chóng • Đáng tin cậy • Toàn cầu</p>
            
            {/* BOX THEO DÕI ĐƠN HÀNG - Màu Cam trắng chuẩn bài */}
            <div className="bg-[#f05a28] p-1.5 rounded-2xl shadow-2xl max-w-2xl">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-[14px]">
                <label className="block font-black mb-4 flex items-center gap-2 text-xl text-white uppercase tracking-tighter italic">Theo dõi đơn hàng</label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input type="text" placeholder="Nhập mã vận đơn..." className="flex-1 px-6 py-4 rounded-xl text-black outline-none text-lg font-bold shadow-inner" />
                  <button className="bg-white text-[#002b5b] px-10 py-4 rounded-xl font-black text-lg hover:bg-slate-100 transition-all uppercase shadow-lg active:scale-95">Kiểm tra</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DỊCH VỤ - Chia 3 cột xịn xò */}
      <section id="dich-vu" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "VẬN TẢI ĐƯỜNG BIỂN", icon: <Ship size={48}/>, desc: "Kết nối các cảng biển lớn trên toàn thế giới." },
              { title: "VẬN TẢI ĐƯỜNG BỘ", icon: <Truck size={48}/>, desc: "Đội xe container hùng hậu, phục vụ 24/7." },
              { title: "KHO BÃI - CẢNG", icon: <Box size={48}/>, desc: "Hệ thống kho bãi hiện đại, lưu kho an toàn." }
            ].map((s, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] shadow-xl hover:shadow-2xl transition-all border-b-8 border-[#002b5b] hover:border-orange-500 group">
                <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-2xl font-black mb-4 text-[#002b5b]">{s.title}</h3>
                <p className="text-slate-500 font-bold leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER - Logo và Thông tin chuẩn */}
      <footer id="lien-he" className="bg-[#001f42] text-white py-20 border-t border-white/10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <img src="https://i.ibb.co/Xz900jC/logo-ts-red.png" alt="Footer Logo" className="h-16 w-auto bg-white p-2 rounded-xl" />
              <div>
                <div className="text-2xl font-black leading-none uppercase">Nhất Thiên Sơn</div>
                <div className="text-sm text-orange-400 font-bold tracking-widest">LOGISTICS</div>
              </div>
            </div>
            <div className="space-y-6 text-lg font-bold">
              <div className="flex items-start gap-4"><MapPin className="text-orange-400 shrink-0 mt-1"/> 138/10 Khu Phố 57, P. Thới An, Q.12, TP.HCM</div>
              <div className="flex items-center gap-4"><Phone className="text-orange-400"/> 0888 447 239
                                                                                            0919417239</div>
              <div className="flex items-center gap-4"><Mail className="text-orange-400"/> nhatthiensonsaigon@gmail.com</div>
            </div>
          </div>
          <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
            <h3 className="text-3xl font-black mb-8 text-orange-400 uppercase italic">Gửi yêu cầu báo giá</h3>
            <div className="space-y-4">
              <input type="text" placeholder="Họ và tên *" className="w-full p-4 bg-white/10 rounded-xl outline-none border border-white/20 focus:border-orange-500 font-bold" />
              <input type="tel" placeholder="Số điện thoại *" className="w-full p-4 bg-white/10 rounded-xl outline-none border border-white/20 focus:border-orange-500 font-bold" />
              <button className="w-full bg-[#f05a28] py-5 rounded-xl font-black text-xl hover:bg-[#d44d1f] transition-all uppercase shadow-lg">Gửi ngay</button>
            </div>
          </div>
        </div>
        <div className="text-center mt-20 pt-10 border-t border-white/5 text-white/40 text-xs font-bold uppercase tracking-[0.5em]">
          © 2026 NHẤT THIÊN SƠN SÀI GÒN - ALL RIGHTS RESERVED
        </div>
      </footer>
    </main>
  )
}
