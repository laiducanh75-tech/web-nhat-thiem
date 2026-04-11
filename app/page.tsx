"use client"

import React, { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Truck, Ship, Plane, Box } from 'lucide-react'

// --- 1. HEADER ---
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-2xl text-blue-600">NHẬT THIÊM SƠN</div>
        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#dich-vu" className="hover:text-blue-600">Dịch vụ</a>
          <a href="#quy-trinh" className="hover:text-blue-600">Quy trình</a>
          <a href="#lien-he" className="hover:text-blue-600">Liên hệ</a>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-b px-4 py-4 space-y-4 flex flex-col">
          <a href="#dich-vu">Dịch vụ</a>
          <a href="#quy-trinh">Quy trình</a>
          <a href="#lien-he">Liên hệ</a>
        </div>
      )}
    </header>
  )
}

// --- 2. HERO ---
const Hero = () => (
  <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">NHẬT THIÊM SƠN SÀI GÒN</h1>
      <p className="text-xl mb-8 text-blue-100">Giải pháp Logistics & Vận tải hàng đầu khu vực miền Nam</p>
      <div className="flex justify-center gap-4">
        <a href="#lien-he" className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50">Liên hệ ngay</a>
        <a href="#dich-vu" className="border border-white px-8 py-3 rounded-full font-bold hover:bg-white/10">Tìm hiểu thêm</a>
      </div>
    </div>
  </section>
)

// --- 3. SERVICES ---
const Services = () => (
  <section id="dich-vu" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Dịch Vụ Của Chúng Tôi</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <Truck className="w-12 h-12 text-blue-600" />, title: "Vận tải đường bộ", desc: "Đội ngũ xe tải hiện đại, chạy xuyên suốt các tỉnh thành." },
          { icon: <Box className="w-12 h-12 text-blue-600" />, title: "Kho bãi & Lưu kho", desc: "Hệ thống kho bãi an toàn, quản lý bằng công nghệ cao." },
          { icon: <Ship className="w-12 h-12 text-blue-600" />, title: "Vận tải đường biển", desc: "Kết nối các cảng lớn, thủ tục nhanh gọn." }
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            {item.icon}
            <h3 className="text-xl font-bold my-4">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// --- 4. CONTACT ---
const Contact = () => (
  <section id="lien-he" className="py-20">
    <div className="container mx-auto px-4">
      <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">Liên Hệ Với Chúng Tôi</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4"><Phone /> <span>090 xxxx xxxx</span></div>
            <div className="flex items-center gap-4"><Mail /> <span>contact@nhatthiemsongon.com</span></div>
            <div className="flex items-center gap-4"><MapPin /> <span>TP. Hồ Chí Minh, Việt Nam</span></div>
          </div>
        </div>
        <form className="space-y-4">
          <input type="text" placeholder="Họ và tên" className="w-full p-3 rounded-lg text-black" />
          <input type="email" placeholder="Email" className="w-full p-3 rounded-lg text-black" />
          <textarea placeholder="Tin nhắn" className="w-full p-3 rounded-lg text-black h-32"></textarea>
          <button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-3 rounded-lg font-bold">Gửi yêu cầu</button>
        </form>
      </div>
    </div>
  </section>
)

// --- MAIN PAGE ---
export default function LogisticsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Contact />
      <footer className="py-8 text-center text-gray-500 border-t">
        © 2026 NHẬT THIÊM SƠN SÀI GÒN - Logistics Excellence
      </footer>
    </main>
  )
}
