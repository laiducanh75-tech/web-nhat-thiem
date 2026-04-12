"use client"

import React, { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Truck, Ship, Plane, Box, Search, ChevronRight, ClipboardList, Settings, Target, ShieldCheck, Globe } from 'lucide-react'

export default function LogisticsPage() {
  const [isOpen, setIsOpen] = useState(false)
  // ẢNH CHIẾN THẦN CỦA ÔNG Ở ĐÂY
  const myImg = "https://i.postimg.cc/bJtpQcDy/nts.jpg"

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* 1. TOP BAR */}
      <div className="bg-[#001f42] text-white py-2.5 text-xs border-b border-white/10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5 font-bold"><Phone size={14} className="text-orange-400"/> 0888 447 239</span>
            <span className="flex items-center gap-1.5 hidden md:flex font-bold"><Mail size={14} className="text-orange-400"/> nhatthiensonsaigon@gmail.com</span>
          </div>
          <div className="font-semibold uppercase tracking-wider hidden sm:block">Thứ 2 - Thứ 7: 08:00 - 18:00</div>
        </div>
      </div>

      {/* 2. HEADER */}
      <header className="sticky top-0 z-50 bg-[#002b5b] text-white shadow-2xl">
        <div className="container mx-auto px-4 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={myImg} alt="Logo" className="h-16 w-auto bg-white p-1.5 rounded-lg shadow-lg" />
            <div>
              <div className="font-black text-xl md:text-2xl leading-none uppercase tracking-tight">Nhất Thiên Sơn</div>
              <div className="text-[10px] md:text-xs text-orange-400 tracking-[0.3em] font-bold mt-1 uppercase">SAIGÒN LOGISTICS</div>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-6 font-bold text-sm uppercase">
            <a href="#" className="hover:text-orange-400 transition-colors">Trang chủ</a>
            <div className="relative group cursor-pointer py-2">
               <span className="flex items-center gap-1 hover:text-orange-400">Dịch vụ <ChevronRight size={14} className="rotate-90"/></span>
            </div>
            <a href="#" className="hover:text-orange-400 transition-colors">Theo dõi</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Biên bản</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Liên hệ</a>
            <a href="#bao-gia" className="bg-[#f05a28] px-7 py-3.5 rounded-xl hover:bg-[#d44d1f] transition-all shadow-lg hover:scale-105 active:scale-95">NHẬN BÁO GIÁ</a>
          </nav>

          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={32}/> : <Menu size={32}/>}</button>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-[#001f42] p-6 flex flex-col gap-4 border-t border-white/10">
            <a href="#" className="font-bold border-b border-white/5 pb-2">Trang chủ</a>
            <a href="#" className="font-bold border-b border-white/5 pb-2">Dịch vụ</a>
            <a href="#bao-gia" className="bg-orange-500 text-center py-3 rounded-xl font-black uppercase">Nhận báo giá</a>
          </div>
        )}
      </header>

      {/* 3. HERO BANNER - BỐ CỤC ĐẦY ĐỦ NHƯ TRANG ĐẦU */}
      <section className="relative h-[700px] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={myImg} className="w-full h-full object-cover" alt="Bến cảng Nhất Thiên Sơn" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002b5b]/95 via-[#002b5b]/70 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[1] tracking-tighter uppercase italic">Giải pháp Logistics <br/><span className="text-white">Thông minh</span></h1>
            <p className="text-2xl md:text-3xl font-bold mb-12 text-[#4ade80] uppercase tracking-widest italic">Nhanh chóng • Đáng tin cậy • Toàn cầu</p>
            
            {/* BOX THEO DÕI ĐƠN HÀNG (MÀU CAM) */}
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

      {/* 4. DỊCH VỤ CHI TIẾT - 4 CỘT KHÔI PHỤC */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 text-[#002b5b]">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Dịch vụ <span className="text-orange-500">toàn diện</span></h2>
            <p className="text-slate-500 font-bold text-lg italic uppercase">Uy tín tạo nên thương hiệu Nhất Thiên Sơn</p>
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
                <h3 className="text-xl font-bold mb-4 text-[#002b5b] uppercase">{s.title}</h3>
                <p className="text-slate-500 font-semibold text-sm leading-relaxed uppercase">Giải pháp tối ưu nhất cho lô hàng của bạn.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. QUY TRÌNH LÀM VIỆC - KHÔI PHỤC */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "NHẬN ĐƠN", icon: <ClipboardList/> },
              { step: "02", title: "XỬ LÝ", icon: <Settings/> },
              { step: "03", title: "VẬN CHUYỂN", icon: <Truck/> },
              { step: "04", title: "HOÀN TẤT", icon: <Target/> }
            ].map((p, i) => (
              <div key={i} className="text-center p-10 bg-slate-50 rounded-[3rem] hover:bg-[#002b5b] hover:text-white transition-all group">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center font-black mx-auto mb-6 text-xl shadow-lg">{p.step}</div>
                <h3 className="font-black text-xl mb-2 uppercase">{p.title}</h3>
                <p className="text-sm font-bold opacity-60 uppercase">Chuyên nghiệp - Minh bạch</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FORM BÁO GIÁ - KHÔI PHỤC */}
      <section id="bao-gia" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter uppercase italic text-orange-500">Báo giá</h2>
              <div className="space-y-8 text-xl font-bold">
                <div className="flex items-center gap-5"><Phone className="text-orange-500"/> 0888 447 239</div>
                <div className="flex items-center gap-5"><Mail className="text-orange-500"/> nhatthiensonsaigon@gmail.com</div>
                <div className="flex items-start gap-5"><MapPin className="text-orange-500 shrink-0"/> 138/10 Khu Phố 35, Thới An, Q.12, TP.HCM</div>
              </div>
            </div>
            <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl text-slate-900">
              <h3 className="text-2xl font-black mb-8 uppercase text-[#002b5b] text-center italic">Gửi yêu cầu ngay</h3>
              <div className="space-y-4">
                <input type="text" placeholder="Họ và tên *" className="w-full p-5 bg-slate-100 rounded-2xl outline-none font-bold shadow-sm" />
                <input type="tel" placeholder="Điện thoại *" className="w-full p-5 bg-slate-100 rounded-2xl outline-none font-bold shadow-sm" />
                <textarea placeholder="Thông tin hàng hóa..." className="w-full p-5 bg-slate-100 rounded-2xl outline-none font-bold h-36 shadow-sm"></textarea>
                <button className="w-full bg-[#f05a28] text-white py-6 rounded-2xl font-black text-2xl shadow-xl hover:bg-[#d44d1f] transition-all uppercase hover:scale-[1.02] active:scale-95">Gửi báo giá</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER ĐẦY ĐỦ NHƯ TRANG ĐẦU */}
      <footer className="bg-[#001f42] text-white py-20 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <img src={myImg} alt="Footer Logo" className="h-24 w-auto mx-auto bg-white p-3 rounded-2xl mb-8 shadow-2xl" />
          <h4 className="text-3xl font-black uppercase mb-4 tracking-tighter">Nhất Thiên Sơn Sài Gòn Logistics</h4>
          <div className="flex justify-center gap-10 text-orange-400 font-black mb-12 text-xs">
             <span className="flex items-center gap-2 tracking-tighter italic"><Globe size={18}/> TOÀN CẦU</span>
             <span className="flex items-center gap-2 tracking-tighter italic"><Truck size={18}/> NỘI ĐỊA</span>
             <span className="flex items-center gap-2 tracking-tighter italic"><ShieldCheck size={18}/> AN TOÀN</span>
          </div>
          <div className="pt-10 border-t border-white/5 text-white/30 text-[10px] font-black uppercase tracking-[0.5em]">
            © 2026 NHẤT THIÊN SƠN SÀI GÒN - ALL RIGHTS RESERVED
          </div>
        </div>
      </footer>
    </main>
  )
}
