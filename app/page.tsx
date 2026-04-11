"use client"

import React, { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Truck, Ship, Plane, Box, Search, ChevronRight, ClipboardList, Settings, Target } from 'lucide-react'

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
          <div className="hidden md:block">Thứ 2 - Thứ 7: 8:00 - 18:00</div>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#002b5b] text-white shadow-lg">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://i.ibb.co/Xz900jC/logo-ts-red.png" alt="Logo" className="h-12 w-auto bg-white p-1 rounded" />
            <div>
              <div className="font-bold text-lg leading-tight uppercase">Nhất Thiên Sơn Sài Gòn</div>
              <div className="text-[10px] text-orange-400 tracking-[0.2em] font-bold">LOGISTICS</div>
            </div>
          </div>
          <nav className="hidden lg:flex items-center space-x-6 font-medium text-sm">
            <a href="#" className="hover:text-orange-400">Trang chủ</a>
            <a href="#dich-vu" className="hover:text-orange-400">Dịch vụ</a>
            <a href="#quy-trinh" className="hover:text-orange-400">Quy trình</a>
            <a href="#bao-gia" className="bg-[#f05a28] px-4 py-2 rounded font-bold hover:bg-[#d44d1f]">Nhận báo giá</a>
          </nav>
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isOpen && (
          <div className="lg:hidden bg-[#001f42] p-4 flex flex-col gap-3">
            <a href="#">Trang chủ</a>
            <a href="#dich-vu">Dịch vụ</a>
            <a href="#quy-trinh">Quy trình</a>
            <a href="#bao-gia" className="text-orange-400 font-bold">Nhận báo giá</a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative h-[500px] flex items-center text-white">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-30" alt="bg" />
          <div className="absolute inset-0 bg-[#002b5b]/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Giải pháp Logistics <span className="text-orange-400">Thông minh</span></h1>
          <p className="text-xl md:text-2xl mb-8">Nhanh chóng • Đáng tin cậy • Toàn cầu</p>
          <div className="bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-md max-w-xl">
            <label className="block text-sm mb-2">Theo dõi đơn hàng</label>
            <div className="flex gap-2">
              <input type="text" placeholder="Mã vận đơn..." className="flex-1 bg-white px-4 py-2 rounded text-slate-900" />
              <button className="bg-[#f05a28] px-6 py-2 rounded font-bold">Tìm kiếm</button>
            </div>
          </div>
        </div>
      </section>

      {/* DỊCH VỤ */}
      <section id="dich-vu" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Dịch vụ vận chuyển toàn diện</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Đường biển", icon: <Ship /> },
              { title: "Đường bộ", icon: <Truck /> },
              { title: "Hàng không", icon: <Plane /> },
              { title: "Kho bãi", icon: <Box /> }
            ].map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg border-t-4 border-orange-500 transition-all">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 mx-auto text-[#002b5b]">{s.icon}</div>
                <h3 className="font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500">Dịch vụ chuyên nghiệp, giá thành tối ưu cho doanh nghiệp.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUY TRÌNH (Từ image_dd6a53.png) */}
      <section id="quy-trinh" className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 uppercase text-[#002b5b]">Quy trình 4 bước</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Nhận đơn", icon: <ClipboardList /> },
              { step: 2, title: "Xử lý", icon: <Settings /> },
              { step: 3, title: "Vận chuyển", icon: <Truck /> },
              { step: 4, title: "Giao nhận", icon: <Target /> }
            ].map((p, i) => (
              <div key={i} className="relative p-6 border rounded-2xl bg-slate-50">
                <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">{p.step}</div>
                <h3 className="font-bold mb-2">{p.title}</h3>
                <div className="text-blue-900 flex justify-center mb-2">{p.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BÁO GIÁ (Từ image_dd6a7a.png) */}
      <section id="bao-gia" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#002b5b]">Nhận báo giá miễn phí</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Họ và tên" className="p-3 border rounded-lg" />
              <input type="tel" placeholder="Số điện thoại" className="p-3 border rounded-lg" />
              <input type="email" placeholder="Email" className="p-3 border rounded-lg" />
              <select className="p-3 border rounded-lg text-slate-500"><option>Loại hàng hóa</option></select>
              <textarea placeholder="Ghi chú thêm..." className="p-3 border rounded-lg md:col-span-2 h-32"></textarea>
              <button className="md:col-span-2 bg-[#f05a28] text-white py-4 rounded-xl font-bold text-xl">Gửi yêu cầu ngay</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#002b5b] text-white py-12 border-t border-white/10 text-center">
        <div className="container mx-auto px-4">
          <p className="font-bold text-xl mb-4">NHẤT THIÊN SƠN SÀI GÒN LOGISTICS</p>
          <p className="text-sm text-white/60">Địa chỉ: 138/10 Khu Phố 37, Phường Thới An, TP.HCM</p>
          <p className="text-sm text-white/60 mt-2">© 2026 Toàn bộ bản quyền được bảo lưu.</p>
        </div>
      </footer>
    </main>
  )
}
