"use client"

import React, { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Truck, Ship, Plane, Box, Search, ChevronRight, ClipboardList, Settings, Target, ShieldCheck, Globe } from 'lucide-react'

export default function LogisticsPage() {
  const [isOpen, setIsOpen] = useState(false)
  
  // LOGO CỦA ÔNG
  const myLogo = "https://i.postimg.cc/bJtpQcDy/nts.jpg"
  
  // HÌNH NỀN BẾN CẢNG HOÀNH TRÁNG (KIỂU MAERSK)
  const maerskBg = "https://images.unsplash.com/photo-1590496794008-383c8070b257?auto=format&fit=crop&q=80"

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      
      {/* 1. TOP BAR */}
      <div className="bg-[#001f42] text-white py-2 text-[10px] md:text-xs border-b border-white/10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4 md:gap-6">
            <span className="flex items-center gap-1.5 font-bold"><Phone size={12} className="text-orange-400"/> 0888 447 239</span>
            <span className="hidden sm:flex items-center gap-1.5 font-bold"><Mail size={12} className="text-orange-400"/> nhatthiensonsaigon@gmail.com</span>
          </div>
          <div className="font-semibold uppercase tracking-widest italic">T2 - T7: 08:00 - 18:00</div>
        </div>
      </div>

      {/* 2. HEADER */}
      <header className="sticky top-0 z-50 bg-[#002b5b] text-white shadow-xl">
        <div className="container mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={myLogo} alt="Logo" className="h-10 md:h-14 w-auto bg-white p-1 rounded shadow-md" />
            <div>
              <div className="font-black text-lg md:text-xl leading-none uppercase italic">Nhất Thiên Sơn</div>
              <div className="text-[8px] md:text-[10px] text-orange-400 tracking-[0.2em] font-bold mt-0.5">SAIGÒN LOGISTICS</div>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-6 font-bold text-xs uppercase">
            <a href="#" className="hover:text-orange-400">Trang chủ</a>
            <a href="#" className="hover:text-orange-400">Dịch vụ</a>
            <a href="#" className="hover:text-orange-400">Quy trình</a>
            <a href="#bao-gia" className="bg-[#f05a28] px-5 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition-all shadow-lg active:scale-95">NHẬN BÁO GIÁ</a>
          </nav>

          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={28}/> : <Menu size={28}/>}</button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-[#001f42] p-6 flex flex-col gap-4 border-t border-white/10 animate-in fade-in zoom-in duration-300">
            <a href="#" className="font-bold border-b border-white/5 pb-2 uppercase text-sm">Trang chủ</a>
            <a href="#bao-gia" className="bg-orange-500 text-center py-3.5 rounded-xl font-black uppercase text-sm">Nhận báo giá</a>
          </div>
        )}
      </header>

      {/* 3. HERO BANNER - KIỂU MAERSK, CHỮ ĐÃ TỐI ƯU */}
      <section className="relative h-[500px] md:h-[650px] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={maerskBg} className="w-full h-full object-cover" alt="Maersk Port" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002b5b]/95 via-[#002b5b]/60 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tighter uppercase italic text-white drop-shadow-2xl">
              Giải pháp Logistics <br/><span className="text-orange-500">Thông minh</span>
            </h1>
            <p className="text-lg md:text-3xl font-bold mb-12 text-[#4ade80] uppercase tracking-widest italic">
              Nhanh chóng • Đáng tin cậy • Toàn cầu
            </p>
            
            {/* BOX THEO DÕI ĐƠN HÀNG */}
            <div className="bg-[#f05a28] p-0.5 rounded-2xl shadow-2xl max-w-xl mx-auto md:mx-0">
              <div className="bg-[#002b5b]/60 backdrop-blur-md p-6 rounded-[14px]">
                <label className="block font-black mb-3 flex items-center justify-center md:justify-start gap-2 text-xl text-white uppercase italic tracking-tighter">
                  <Search size={24} className="text-orange-500"/> Theo dõi đơn hàng
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input type="text" placeholder="Mã đơn (VD: NTS-123456)..." className="flex-1 px-5 py-4 rounded-xl text-black outline-none font-bold text-sm shadow-inner" />
                  <button className="bg-orange-500 text-white px-8 py-4 rounded-xl font-black text-sm hover:bg-white hover:text-[#002b5b] transition-all uppercase shadow-lg active:scale-95">Theo dõi</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DỊCH VỤ TOÀN DIỆN */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase text-[#002b5b] italic tracking-tighter">Dịch vụ <span className="text-orange-500">toàn diện</span></h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-3 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { title: "VẬN TẢI ĐƯỜNG BIỂN", icon: <Ship size={36}/>, color: "border-green-500" },
              { title: "VẬN TẢI ĐƯỜNG BỘ", icon: <Truck size={36}/>, color: "border-orange-500" },
              { title: "VẬN TẢI HÀNG KHÔNG", icon: <Plane size={36}/>, color: "border-blue-500" },
              { title: "KHO BÃI & PHÂN PHỐI", icon: <Box size={36}/>, color: "border-yellow-500" }
            ].map((s, i) => (
              <div key={i} className={`bg-white p-8 rounded-[2.5rem] shadow-xl border-b-[10px] ${s.color} text-center hover:-translate-y-2 transition-transform cursor-pointer`}>
                <div className="text-[#002b5b] mb-5 flex justify-center">{s.icon}</div>
                <h3 className="text-base font-black text-[#002b5b] uppercase leading-tight">{s.title}</h3>
                <p className="text-[10px] text-slate-400 mt-4 font-bold uppercase tracking-widest italic">Uy tín - An toàn</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. QUY TRÌNH 4 BƯỚC - ĐÃ THÊM TIÊU ĐỀ LÙ LÙ Ở ĐÂY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase text-[#002b5b] italic tracking-tighter">Quy trình <span className="text-orange-500">4 bước</span></h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-3 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[
              { step: "01", title: "NHẬN ĐƠN", icon: <ClipboardList/> },
              { step: "02", title: "XỬ LÝ", icon: <Settings/> },
              { step: "03", title: "VẬN CHUYỂN", icon: <Truck/> },
              { step: "04", title: "GIAO NHẬN", icon: <Target/> }
            ].map((p, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-500 text-white rounded-full flex items-center justify-center font-black mx-auto mb-6 text-xl md:text-2xl shadow-lg border-4 border-white group-hover:scale-110 transition-transform">{p.step}</div>
                <h3 className="font-black text-sm md:text-lg uppercase text-[#002b5b] tracking-tighter">{p.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FORM LIÊN HỆ BÁO GIÁ */}
      <section id="bao-gia" className="py-20 bg-slate-900 text-white border-t-4 border-orange-500">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter uppercase italic text-orange-500">Liên hệ báo giá</h2>
              <div className="space-y-6 text-sm md:text-lg font-bold">
                <p className="flex items-center justify-center md:justify-start gap-4"><Phone className="text-orange-500" size={24}/> 0888 447 239</p>
                <p className="flex items-center justify-center md:justify-start gap-4"><Mail className="text-orange-500" size={24}/> nhatthiensonsaigon@gmail.com</p>
                <p className="flex items-start justify-center md:justify-start gap-4"><MapPin className="text-orange-500 shrink-0" size={24}/> 138/10 Khu Phố 57, Phường Thới An, TP.HCM,Việt Nam</p>
              </div>
            </div>
            
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl text-slate-900 border-2 border-slate-100">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Họ và tên *" className="w-full p-4 bg-slate-100 rounded-xl outline-none font-bold text-sm focus:ring-2 ring-orange-500" />
                  <input type="tel" placeholder="Số điện thoại *" className="w-full p-4 bg-slate-100 rounded-xl outline-none font-bold text-sm focus:ring-2 ring-orange-500" />
                </div>
                <input type="email" placeholder="Địa chỉ Email" className="w-full p-4 bg-slate-100 rounded-xl outline-none font-bold text-sm focus:ring-2 ring-orange-500" />
                <textarea placeholder="Ghi chú hàng hóa (loại hàng, trọng lượng...)" className="w-full p-4 bg-slate-100 rounded-xl outline-none font-bold text-sm h-32 focus:ring-2 ring-orange-500 shadow-inner"></textarea>
                <button className="w-full bg-[#f05a28] text-white py-5 rounded-xl font-black text-xl shadow-xl hover:bg-[#002b5b] transition-all uppercase active:scale-95 shadow-lg">Gửi yêu cầu ngay</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-[#001f42] text-white py-12 text-center border-t border-white/5">
        <div className="container mx-auto px-4">
          <img src={myLogo} alt="Footer Logo" className="h-16 w-auto mx-auto bg-white p-2 rounded-xl mb-6 shadow-md" />
          <h4 className="text-xs md:text-sm font-black uppercase mb-4 tracking-tight">NHẤT THIÊN SƠN SÀI GÒN LOGISTICS</h4>
          <p className="text-white/20 text-[8px] font-bold uppercase tracking-[0.4em] pt-6 border-t border-white/5">
            © 2026 NHẤT THIÊN SƠN SÀI GÒN - ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </main>
  )
}
