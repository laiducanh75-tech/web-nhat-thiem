"use client"

import React, { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Truck, Ship, Plane, Box, Search, ChevronRight, ClipboardList, Settings, Target } from 'lucide-react'

// --- TRANG WEB TỔNG HỢP NHẤT THIÊN SƠN ---
export default function LogisticsPage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      {/* 1. TOP BAR */}
      <div className="bg-[#002b5b] text-white py-2 text-xs border-b border-white/10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><Phone size={14} className="text-orange-400"/> 0888 447 239</span>
            <span className="flex items-center gap-1 hidden md:flex"><Mail size={14} className="text-orange-400"/> nhatthiensonsaigon@gmail.com</span>
          </div>
          <div className="hidden sm:block">Thứ 2 - Thứ 7: 8:00 - 18:00</div>
        </div>
      </div>

      {/* 2. HEADER & LOGO XE CÔNG ĐỎ */}
      <header className="sticky top-0 z-50 bg-[#002b5b] text-white shadow-xl">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://i.ibb.co/Xz900jC/logo-ts-red.png" alt="Logo" className="h-12 w-auto bg-white p-1 rounded" />
            <div>
              <div className="font-bold text-lg leading-tight uppercase">Nhất Thiên Sơn Sài Gòn</div>
              <div className="text-[10px] text-orange-400 tracking-[0.2em] font-bold">LOGISTICS</div>
            </div>
          </div>
          <nav className="hidden lg:flex items-center space-x-6 font-bold text-sm">
            <a href="#" className="hover:text-orange-400">Trang chủ</a>
            <a href="#dich-vu" className="hover:text-orange-400">Dịch vụ</a>
            <a href="#quy-trinh" className="hover:text-orange-400">Quy trình</a>
            <a href="#bao-gia" className="bg-[#f05a28] px-5 py-2.5 rounded-lg hover:bg-[#d44d1f] transition-all shadow-lg">Nhận báo giá</a>
          </nav>
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X/> : <Menu/>}</button>
        </div>
        {isOpen && (
          <div className="lg:hidden bg-[#001f42] p-5 flex flex-col gap-4 border-t border-white/10">
            <a href="#" onClick={() => setIsOpen(false)}>Trang chủ</a>
            <a href="#dich-vu" onClick={() => setIsOpen(false)}>Dịch vụ</a>
            <a href="#quy-trinh" onClick={() => setIsOpen(false)}>Quy trình</a>
            <a href="#bao-gia" onClick={() => setIsOpen(false)} className="text-orange-400 font-bold">Nhận báo giá</a>
          </div>
        )}
      </header>

      {/* 3. HERO BANNER (Bến cảng & Ô tra cứu) */}
      <section className="relative h-[550px] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1590496794008-383c8070b257?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Port" />
          <div className="absolute inset-0 bg-[#002b5b]/70 backdrop-blur-[1px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-4">Giải pháp Logistics <span className="text-orange-400">Thông minh</span></h1>
          <p className="text-2xl md:text-3xl font-bold mb-10 text-green-400 uppercase">Nhanh chóng • Đáng tin cậy • Toàn cầu</p>
          <div className="bg-white/10 p-7 rounded-3xl border border-white/20 backdrop-blur-md max-w-2xl shadow-2xl">
            <label className="block font-bold mb-4 flex items-center gap-2 text-lg"><Search size={22} className="text-orange-400"/> Theo dõi lộ trình đơn hàng</label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input type="text" placeholder="Nhập mã vận đơn (VD: NTS-123456)" className="flex-1 px-5 py-4 rounded-xl text-black outline-none text-lg" />
              <button className="bg-[#f05a28] px-8 py-4 rounded-xl font-black hover:bg-[#d44d1f] transition-all uppercase shadow-lg">Theo dõi</button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DỊCH VỤ */}
      <section id="dich-vu" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-[#002b5b] mb-16 uppercase tracking-tight">Dịch vụ <span className="text-orange-500">toàn diện</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { title: "Vận tải đường biển", icon: <Ship />, color: "border-t-[#4ade80]" },
              { title: "Vận tải đường bộ", icon: <Truck />, color: "border-t-[#f05a28]" },
              { title: "Vận tải hàng không", icon: <Plane />, color: "border-t-[#002b5b]" },
              { title: "Kho bãi & Phân phối", icon: <Box />, color: "border-t-orange-300" }
            ].map((s, i) => (
              <div key={i} className={`bg-white p-8 rounded-3xl shadow-lg border-t-8 ${s.color} hover:-translate-y-2 transition-all`}>
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 text-[#002b5b]">{s.icon}</div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Giải pháp vận chuyển tối ưu, đảm bảo an toàn và đúng tiến độ cho mọi lô hàng.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. QUY TRÌNH (Theo hình mẫu) */}
      <section id="quy-trinh" className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-[#002b5b] mb-16 uppercase tracking-tight">Quy trình <span className="text-orange-500">4 bước</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Nhận đơn", icon: <ClipboardList size={32}/> },
              { step: "02", title: "Xử lý", icon: <Settings size={32}/> },
              { step: "03", title: "Vận chuyển", icon: <Truck size={32}/> },
              { step: "04", title: "Giao nhận", icon: <Target size={32}/> }
            ].map((p, i) => (
              <div key={i} className="relative p-8 rounded-3xl bg-slate-50 group hover:bg-[#002b5b] transition-all">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-black mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">{p.step}</div>
                <div className="text-[#002b5b] group-hover:text-white flex justify-center mb-4 transition-colors">{p.icon}</div>
                <h3 className="font-bold text-xl group-hover:text-white transition-colors">{p.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BÁO GIÁ & LIÊN HỆ */}
      <section id="bao-gia" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
            <div className="bg-[#002b5b] text-white p-12 md:w-2/5 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-black mb-6 tracking-tight">Liên hệ báo giá</h2>
                <p className="text-white/70 mb-10 font-medium leading-relaxed">Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7.</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 font-bold text-lg"><Phone className="text-orange-400"/> 0888 447 239-0919 417 239</div>
                  <div className="flex items-center gap-4 font-bold"><Mail className="text-orange-400 shrink-0"/> nhatthiensonsaigon@gmail.com</div>
                  <div className="flex items-start gap-4 font-medium"><MapPin className="text-orange-400 shrink-0"/> 138/10 Khu Phố 37, Phường Thới An, Quận 12, TP.HCM</div>
                </div>
              </div>
            </div>
            <div className="p-12 md:w-3/5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input type="text" placeholder="Họ và tên *" className="p-4 bg-slate-50 rounded-xl border-none outline-none focus:ring-2 focus:ring-orange-500" />
                <input type="tel" placeholder="Số điện thoại *" className="p-4 bg-slate-50 rounded-xl border-none outline-none focus:ring-2 focus:ring-orange-500" />
                <input type="email" placeholder="Email" className="p-4 bg-slate-50 rounded-xl border-none outline-none focus:ring-2 focus:ring-orange-500 sm:col-span-2" />
                <textarea placeholder="Ghi chú hàng hóa (loại hàng, trọng lượng...)" className="p-4 bg-slate-50 rounded-xl border-none outline-none focus:ring-2 focus:ring-orange-500 sm:col-span-2 h-32"></textarea>
                <button className="sm:col-span-2 bg-[#f05a28] text-white py-5 rounded-xl font-black text-xl hover:bg-[#d44d1f] shadow-lg transition-all hover:scale-[1.02]">GỬI YÊU CẦU NGAY</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-[#002b5b] text-white py-16 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <img src="https://i.ibb.co/Xz900jC/logo-ts-red.png" alt="Logo Footer" className="h-16 w-auto mx-auto bg-white p-2 rounded-xl mb-6 shadow-lg" />
          <p className="text-2xl font-black mb-2 uppercase tracking-tight">NHẤT THIÊN SƠN SÀI GÒN LOGISTICS</p>
          <p className="text-white/50 text-sm mb-10">Giải pháp vận tải hàng đầu - Uy tín - Tận tâm - Chuyên nghiệp</p>
          <div className="border-t border-white/10 pt-8 text-white/40 text-xs font-medium">
            © 2026 Toàn bộ bản quyền được bảo lưu bởi NHẤT THIÊN SƠN SÀI GÒN.
          </div>
        </div>
      </footer>
    </main>
  )
}
