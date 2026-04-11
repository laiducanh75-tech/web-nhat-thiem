import React, { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top bar */}
      <div className="bg-[#002b5b] text-white py-2 text-xs border-b border-white/10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><Phone size={14}/> 0888 447 239</span>
            <span className="flex items-center gap-1 hidden md:flex"><Mail size={14}/> nhatthiensonsaigon@gmail.com</span>
          </div>
          <div className="hidden sm:block">Giờ làm việc: Thứ 2 - Thứ 7: 8:00 - 18:00</div>
        </div>
      </div>
      {/* Main header */}
      <div className="bg-[#002b5b] text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="https://i.ibb.co/Xz900jC/logo-ts-red.png" alt="Logo" className="h-12 w-auto bg-white p-1 rounded" />
            <div className="font-bold leading-tight uppercase">
              Nhất Thiên Sơn Sài Gòn <span className="block text-orange-400 text-xs tracking-[0.2em]">LOGISTICS</span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center space-x-6 font-bold text-sm">
            <a href="#" className="hover:text-orange-400">Trang chủ</a>
            <a href="#dich-vu" className="hover:text-orange-400">Dịch vụ</a>
            <a href="#quy-trinh" className="hover:text-orange-400">Quy trình</a>
            <a href="#bao-gia" className="bg-[#f05a28] px-5 py-2.5 rounded-lg hover:bg-[#d44d1f] transition-all">Nhận báo giá</a>
          </nav>
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X/> : <Menu/>}</button>
        </div>
      </div>
    </header>
  )
}
