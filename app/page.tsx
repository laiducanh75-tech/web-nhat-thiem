"use client"

import React, { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Truck, Ship, Plane, Box, Search, ChevronRight, ClipboardList, Settings, Target, ShieldCheck, Globe } from 'lucide-react'

export default function LogisticsPage() {
  const [isOpen, setIsOpen] = useState(false)
  const myImg = "https://i.postimg.cc/bJtpQcDy/nts.jpg"

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* 1. TOP BAR */}
      <div className="bg-[#001f42] text-white py-2.5 text-xs border-b border-white/10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-1.5 font-bold"><Phone size={14} className="text-orange-400"/> 0888 447 239</span>
            <span className="flex items-center gap-1.5 hidden md:flex font-bold"><Mail size={14} className="text-orange-400"/> nhatthiensonsaigon@gmail.com</span>
          </div>
          <div className="font-semibold uppercase tracking-wider hidden sm:block text-orange-400">Thứ 2 - Thứ 7: 08:00 - 18:00</div>
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
            <a href="#" className="hover:text-orange-400 transition-colors">Dịch vụ</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Theo dõi</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Biên bản</a>
            <a href="#bao-gia" className="bg-[#f05a28] px-7 py-3.5 rounded-xl hover:bg-[#d44d1f] transition-all shadow-lg hover:scale-105 active:scale-95">NHẬN BÁO GIÁ</a>
          </nav>

          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={32}/> : <Menu size={32}/>}</button>
        </div>
      </header>

      {/* 3. HERO SECTION - KHÔNG ẢNH NỀN */}
      <section className="bg-[#002b5b] py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tighter uppercase italic">
                Giải pháp Logistics <br/><span className="text-orange-500">Thông minh</span>
              </h1>
              <p className="text-xl md:text-2xl font-bold mb-10 text-green-400 uppercase tracking-widest italic">
                Nhanh chóng • Đáng tin cậy • Toàn cầu
              </p>
              
              <div className="bg-[#f05a28] p-1 rounded-3xl shadow-2xl max-w-xl border border-white/20">
                <div className="bg-[#002b5b] p-8 rounded-[22px]">
                  <label className="block font-black mb-4 flex items-center gap-3 text-2xl text-white uppercase italic">
                    <Search size={28} className="text-orange-500"/> Theo dõi đơn hàng
                  </label>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input type="text" placeholder="Nhập mã vận đơn của bạn..." className="flex-1 px-6 py-5 rounded-2xl text-black outline-none text-lg font-bold" />
                    <button className="bg-orange-500 text-white px-8 py-5 rounded-2xl font-black text-xl hover:bg-white hover:text-[#002b5b] transition-all uppercase shadow-lg">Kiểm tra</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 hidden md:block">
               <img src={myImg} alt="Banner" className="w-full max-w-lg mx-auto rounded-[3rem] shadow-2xl border-8 border-white/5" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. DỊCH VỤ TOÀN DIỆN - 4 CỘT */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 text-[#002b5b]">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 italic">Dịch vụ <span className="text-orange-500">toàn diện</span></h2>
            <div className="w-24 h-2 bg-orange-500 mx-auto rounded-full mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "VẬN TẢI ĐƯỜNG BIỂN", icon: <Ship size={40}/>, color: "border-green-500", desc: "Giải pháp vận chuyển tối ưu cho mọi lô hàng." },
              { title: "VẬN TẢI ĐƯỜNG BỘ", icon: <Truck size={40}/>, color: "border-orange-500", desc: "Đội ngũ chuyên nghiệp, giao hàng đúng hẹn." },
              { title: "VẬN TẢI HÀNG KHÔNG", icon: <Plane size={40}/>, color: "border-blue-500", desc: "Nhanh chóng, an toàn và bảo mật tuyệt đối." },
              { title: "KHO BÃI & PHÂN PHỐI", icon: <Box size={40}/>, color: "border-yellow-500", desc: "Hệ thống quản lý thông minh, hiện đại." }
            ].map((s, i) => (
              <div key={i} className={`bg-white p-10 rounded-[40px] shadow-xl hover:-translate-y-3 transition-all border-b-[12px] ${s.color} group`}>
                <div className="text-[#002b5b] mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-[#002b5b] uppercase tracking-tight">{s.title}</h3>
                <p className="text-slate-500 font-semibold text-sm leading-relaxed mb-6">{s.desc}</p>
                <div className="text-orange-500 font-black text-sm uppercase flex items-center gap-1 group-hover:gap-3 transition-all">Chi tiết <ChevronRight size={16}/></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. QUY TRÌNH 4 BƯỚC */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 text-[#002b5b]">Quy trình <span className="text-orange-500">4 bước</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "NHẬN ĐƠN", icon: <ClipboardList/> },
              { step: "02", title: "XỬ LÝ", icon: <Settings/> },
              { step: "03", title: "VẬN CHUYỂN", icon: <Truck/> },
              { step: "04", title: "HOÀN TẤT", icon: <Target/> }
            ].map((p, i) => (
              <div key={i} className="text-center p-10 bg-slate-50 rounded-[3rem] hover:bg-[#002b5b] hover:text-white transition-all group shadow-inner">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center font-black mx-auto mb-6 text-xl shadow-lg group-hover:scale-110 transition-transform">{p.step}</div>
                <h3 className="font-black text-xl mb-2 uppercase">{p.title}</h3>
                <p className="text-xs font-bold opacity-60 uppercase tracking-widest">Minh bạch - An toàn</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FORM BÁO GIÁ */}
      <section id="bao-gia" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter uppercase italic">Liên hệ <br/><span className="text-orange-500">Báo giá</span></h2>
              <div className="space-y-8 text-xl font-bold">
                <div className="flex items-center gap-5 italic text-orange-400 uppercase tracking-widest"> <ShieldCheck size={32}/> Chuyên gia Logistics 24/7</div>
                <div className="flex items-center gap-5 p-4 bg-white/5 rounded-2xl"><Phone className="text-orange-500" size={28}/> 0888 447 239</div>
                <div className="flex items-center gap-5 p-4 bg-white/5 rounded-2xl"><Mail className="text-orange-500" size={28}/> nhatthiensonsaigon@gmail.com</div>
                <div className="flex items-start gap-5 p-4 bg-white/5 rounded-2xl"><MapPin className="text-orange-500 shrink-0 mt-1" size={28}/> 138/10 Khu Phố 37, Thới An, Q.12, TP.HCM</div>
              </div>
            </div>
            
            <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl text-slate-900">
              <h3 className="text-2xl font-black mb-8 uppercase text-[#002b5b] text-center italic">Gửi yêu cầu ngay</h3>
              <div className="space-y-4">
                <input type="text" placeholder="Họ và tên *" className="w-full p-5 bg-slate-100 rounded-2xl outline-none font-bold focus:ring-2 ring-orange-500" />
                <input type="tel" placeholder="Điện thoại *" className="w-full p-5 bg-slate-100 rounded-2xl outline-none font-bold focus:ring-2 ring-orange-500" />
                <textarea placeholder="Thông tin hàng hóa, quy cách..." className="w-full p-5 bg-slate-100 rounded-2xl outline-none font-bold h-36 focus:ring-2 ring-orange-500"></textarea>
                <button className="w-full bg-[#f05a28] text-white py-6 rounded-2xl font-black text-2xl shadow-xl hover:bg-[#002b5b] transition-all uppercase active:scale-95">Gửi yêu cầu ngay</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-[#001f42] text-white py-16 text-center border-t border-white/5">
        <div className="container mx-auto px-4">
          <img src={myImg} alt="Footer Logo" className="h-20 w-auto mx-auto bg-white p-3 rounded-2xl mb-8 shadow-2xl" />
          <h4 className="text-2xl font-black uppercase mb-4 tracking-tighter">Nhất Thiên Sơn Sài Gòn Logistics</h4>
          <div className="flex justify-center gap-8 text-orange-400 font-black mb-10 text-xs tracking-widest italic">
             <span className="flex items-center gap-2 tracking-tighter italic"><Globe size={18}/> TOÀN CẦU</span>
             <span className="flex items-center gap-2 tracking-tighter italic"><Truck size={18}/> NỘI ĐỊA</span>
             <span className="flex items-center gap-2 tracking-tighter italic"><ShieldCheck size={18}/> AN TOÀN</span>
          </div>
          <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em] pt-10 border-t border-white/5">
            © 2026 NHẬT THIÊM SƠN SÀI GÒN - ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </main>
  )
}
