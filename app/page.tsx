"use client"

import React, { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Truck, Ship, Plane, Box, Search, ChevronRight, ClipboardList, Settings, Target, ShieldCheck, Globe } from 'lucide-react'

export default function LogisticsPage() {
  const [isOpen, setIsOpen] = useState(false)
  
  // ẢNH LOGO CỦA ÔNG
  const myLogo = "https://i.postimg.cc/bJtpQcDy/nts.jpg"
  
  // ẢNH NỀN BẾN CẢNG CONTAINER HOÀNH TRÁNG (DÙNG ẢNH UNPLASH CHẤT LƯỢNG CAO)
  const heroBg = "https://images.unsplash.com/photo-1590496794008-383c8070b257?auto=format&fit=crop&q=80"

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      
      {/* 1. TOP BAR */}
      <div className="bg-[#001f42] text-white py-2 text-[10px] md:text-xs border-b border-white/10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-3 md:gap-6">
            <span className="flex items-center gap-1 font-bold"><Phone size={12} className="text-orange-400"/> 0888 447 239</span>
            <span className="hidden sm:flex items-center gap-1 font-bold"><Mail size={12} className="text-orange-400"/> nhatthiensonsaigon@gmail.com</span>
          </div>
          <div className="font-semibold uppercase tracking-tight">T2 - T7: 08:00 - 18:00</div>
        </div>
      </div>

      {/* 2. HEADER */}
      <header className="sticky top-0 z-50 bg-[#002b5b] text-white shadow-xl hover:bg-[#003670] transition-colors">
        <div className="container mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={myLogo} alt="Logo" className="h-10 md:h-14 w-auto bg-white p-1 rounded shadow-md" />
            <div>
              <div className="font-black text-lg md:text-xl leading-none uppercase italic text-white">Nhất Thiên Sơn</div>
              <div className="text-[8px] md:text-[10px] text-orange-400 tracking-[0.2em] font-bold uppercase mt-0.5">SAIGÒN LOGISTICS</div>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-5 font-bold text-xs uppercase text-white">
            <a href="#" className="hover:text-orange-400 transition-colors">Trang chủ</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Dịch vụ</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Theo dõi</a>
            <a href="#bao-gia" className="bg-[#f05a28] px-5 py-3 rounded-lg hover:bg-[#d44d1f] transition-all shadow-lg active:scale-95 text-white">NHẬN BÁO GIÁ</a>
          </nav>

          <button className="lg:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={28}/> : <Menu size={28}/>}</button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-[#001f42] p-5 flex flex-col gap-4 border-t border-white/10 animate-in slide-in-from-top text-white">
            <a href="#" className="font-bold border-b border-white/5 pb-2 uppercase text-sm" onClick={() => setIsOpen(false)}>Trang chủ</a>
            <a href="#" className="font-bold border-b border-white/5 pb-2 uppercase text-sm" onClick={() => setIsOpen(false)}>Dịch vụ</a>
            <a href="#bao-gia" className="bg-orange-500 text-center py-3 rounded-lg font-black uppercase text-sm" onClick={() => setIsOpen(false)}>Nhận báo giá</a>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION - CÓ HÌNH NỀN HOÀNH TRÁNG, CHỮ ĐƯỢC TỐI ƯU */}
      <section className="relative h-[450px] md:h-[650px] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} className="w-full h-full object-cover" alt="Bến cảng Container" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002b5b]/95 via-[#002b5b]/70 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-6xl font-black mb-4 leading-tight uppercase italic tracking-tight text-white">
              Giải pháp Logistics <br className="hidden md:block"/><span className="text-white">Thông minh</span>
            </h1>
            <p className="text-sm md:text-2xl font-bold mb-10 text-green-400 uppercase tracking-widest italic">
              Nhanh chóng • Đáng tin cậy • Toàn cầu
            </p>
            
            {/* BOX THEO DÕI ĐƠN HÀNG (MÀU CAM NỔI BẬT) */}
            <div className="bg-[#f05a28] p-0.5 rounded-2xl shadow-xl max-w-lg mx-auto md:mx-0 overflow-hidden">
              <div className="bg-[#002b5b]/50 backdrop-blur-sm p-5 md:p-6 rounded-[14px]">
                <label className="block font-black mb-3 flex items-center justify-center md:justify-start gap-2 text-lg text-white uppercase italic tracking-tighter">
                  <Search size={20} className="text-orange-500"/> Theo dõi đơn hàng
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input type="text" placeholder="Nhập mã vận đơn..." className="flex-1 px-4 py-3.5 rounded-xl text-black outline-none font-bold text-sm" />
                  <button className="bg-orange-500 text-white px-6 py-3.5 rounded-xl font-black text-sm hover:bg-white hover:text-[#002b5b] transition-all uppercase active:scale-95 shadow-md">Kiểm tra</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DỊCH VỤ - GRID 4 CỘT */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-black uppercase text-[#002b5b]">Dịch vụ <span className="text-orange-500">toàn diện</span></h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mt-2 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "ĐƯỜNG BIỂN", icon: <Ship size={32}/>, color: "border-green-500" },
              { title: "ĐƯỜNG BỘ", icon: <Truck size={32}/>, color: "border-orange-500" },
              { title: "HÀNG KHÔNG", icon: <Plane size={32}/>, color: "border-blue-500" },
              { title: "KHO BÃI", icon: <Box size={32}/>, color: "border-yellow-500" }
            ].map((s, i) => (
              <div key={i} className={`bg-white p-8 rounded-3xl shadow-md border-b-8 ${s.color} text-center hover:shadow-lg transition-shadow`}>
                <div className="text-[#002b5b] mb-4 flex justify-center">{s.icon}</div>
                <h3 className="text-base font-black text-[#002b5b] uppercase tracking-tighter">{s.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. QUY TRÌNH 4 BƯỚC */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { step: "01", title: "NHẬN ĐƠN" },
              { step: "02", title: "XỬ LÝ" },
              { step: "03", title: "GIAO NHẬN" },
              { step: "04", title: "HOÀN TẤT" }
            ].map((p, i) => (
              <div key={i} className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-inner">
                <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-black mx-auto mb-3 text-sm">{p.step}</div>
                <h3 className="font-black text-[10px] md:text-xs uppercase text-[#002b5b]">{p.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FORM BÁO GIÁ */}
      <section id="bao-gia" className="py-16 bg-slate-900 text-white border-t-4 border-orange-500">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase italic tracking-tighter text-orange-500 leading-tight">Gửi <br className='hidden md:block' /> Yêu cầu ngay</h2>
              <div className="space-y-4 text-sm font-bold text-white/90">
                <p className="flex items-center justify-center md:justify-start gap-3"><Phone className="text-orange-500" size={18}/> 0888 447 239</p>
                <p className="flex items-center justify-center md:justify-start gap-3"><Mail className="text-orange-500" size={18}/> nhatthiensonsaigon@gmail.com</p>
                <p className="flex items-center justify-center md:justify-start gap-3"><MapPin className="text-orange-500" size={18}/> Q.12, TP.HCM</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-xl text-slate-900 border-2 border-slate-100">
              <div className="space-y-3">
                <input type="text" placeholder="Họ và tên *" className="w-full p-3.5 bg-slate-100 rounded-xl outline-none font-bold text-sm border-2 border-transparent focus:border-orange-500 shadow-inner" />
                <input type="tel" placeholder="Điện thoại *" className="w-full p-3.5 bg-slate-100 rounded-xl outline-none font-bold text-sm border-2 border-transparent focus:border-orange-500 shadow-inner" />
                <textarea placeholder="Nội dung cần báo giá..." className="w-full p-3.5 bg-slate-100 rounded-xl outline-none font-bold text-sm h-24 focus:border-orange-500 shadow-inner"></textarea>
                <button className="w-full bg-[#f05a28] text-white py-4 rounded-xl font-black text-lg shadow-lg hover:bg-orange-600 uppercase active:scale-95 transition-all text-white">Gửi yêu cầu</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-[#001f42] text-white py-12 text-center border-t border-white/5">
        <div className="container mx-auto px-4">
          <img src={myLogo} alt="Footer Logo" className="h-14 w-auto mx-auto bg-white p-2 rounded-xl mb-6 shadow-md" />
          <h4 className="text-sm font-black uppercase mb-4 tracking-tight text-white">NHẤT THIÊN SƠN SÀI GÒN LOGISTICS</h4>
          <p className="text-white/20 text-[8px] font-bold uppercase tracking-[0.3em] pt-6 border-t border-white/5">
            © 2026 NHẬT THIÊM SƠN SÀI GÒN
          </p>
        </div>
      </footer>
    </main>
  )
}
