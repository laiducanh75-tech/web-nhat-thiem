 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/app/page.tsx b/app/page.tsx
index 6377c746c6b6248fb07530b637e2c4eb227b4708..def1c6f5aed93c59967bc6e5d994779aba6bd88d 100644
--- a/app/page.tsx
+++ b/app/page.tsx
@@ -1,178 +1,463 @@
 "use client"
 
 import React, { useState } from 'react'
-import { Menu, X, Phone, Mail, MapPin, Truck, Ship, Plane, Box, Search, ChevronRight, ClipboardList, Settings, Target, ShieldCheck, Globe } from 'lucide-react'
+import {
+  Menu,
+  X,
+  Phone,
+  Mail,
+  MapPin,
+  Truck,
+  Ship,
+  Plane,
+  Box,
+  Search,
+  ClipboardList,
+  Settings,
+  Target,
+  Linkedin,
+  Facebook,
+  Youtube,
+  Instagram,
+  Navigation,
+} from 'lucide-react'
+
+const socialLinks = [
+  { icon: Linkedin, href: '#', label: 'LinkedIn' },
+  { icon: X, href: '#', label: 'X' },
+  { icon: Facebook, href: '#', label: 'Facebook' },
+  { icon: Youtube, href: '#', label: 'YouTube' },
+  { icon: Instagram, href: '#', label: 'Instagram' },
+]
 
 export default function LogisticsPage() {
   const [isOpen, setIsOpen] = useState(false)
-  
-  // LOGO CỦA ÔNG
-  const myLogo = "https://i.postimg.cc/bJtpQcDy/nts.jpg"
-  
-  // HÌNH NỀN BẾN CẢNG HOÀNH TRÁNG (KIỂU MAERSK)
-  const maerskBg = "https://images.unsplash.com/photo-1590496794008-383c8070b257?auto=format&fit=crop&q=80"
+
+  const myLogo = 'https://i.postimg.cc/bJtpQcDy/nts.jpg'
+  const maerskBg =
+    'https://images.unsplash.com/photo-1590496794008-383c8070b257?auto=format&fit=crop&q=80'
 
   return (
     <main className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
-      
-      {/* 1. TOP BAR */}
-      <div className="bg-[#001f42] text-white py-2 text-[10px] md:text-xs border-b border-white/10">
-        <div className="container mx-auto px-4 flex justify-between items-center">
-          <div className="flex gap-4 md:gap-6">
-            <span className="flex items-center gap-1.5 font-bold"><Phone size={12} className="text-orange-400"/> 0888 447 239</span>
-            <span className="hidden sm:flex items-center gap-1.5 font-bold"><Mail size={12} className="text-orange-400"/> nhatthiensonsaigon@gmail.com</span>
-          </div>
-          <div className="font-semibold uppercase tracking-widest italic">T2 - T7: 08:00 - 18:00</div>
-        </div>
-      </div>
-
-      {/* 2. HEADER */}
-      <header className="sticky top-0 z-50 bg-[#002b5b] text-white shadow-xl">
-        <div className="container mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
+      <header className="sticky top-0 z-50 bg-[#001f4d] text-white shadow-xl">
+        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
           <div className="flex items-center gap-3">
-            <img src={myLogo} alt="Logo" className="h-10 md:h-14 w-auto bg-white p-1 rounded shadow-md" />
-            <div>
-              <div className="font-black text-lg md:text-xl leading-none uppercase italic">Nhất Thiên Sơn</div>
-              <div className="text-[8px] md:text-[10px] text-orange-400 tracking-[0.2em] font-bold mt-0.5">SAIGÒN LOGISTICS</div>
-            </div>
+            <img src={myLogo} alt="Logo" className="h-8 w-8 rounded-full" />
           </div>
-          
-          <nav className="hidden lg:flex items-center space-x-6 font-bold text-xs uppercase">
-            <a href="#" className="hover:text-orange-400">Trang chủ</a>
-            <a href="#" className="hover:text-orange-400">Dịch vụ</a>
-            <a href="#" className="hover:text-orange-400">Quy trình</a>
-            <a href="#bao-gia" className="bg-[#f05a28] px-5 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition-all shadow-lg active:scale-95">NHẬN BÁO GIÁ</a>
+
+          <nav className="hidden lg:flex items-center space-x-10 font-bold text-base">
+            <a href="#" className="hover:text-orange-400 transition-colors">
+              Trang chủ
+            </a>
+            <a href="#dich-vu" className="hover:text-orange-400 transition-colors">
+              Dịch vụ
+            </a>
+            <a href="#theo-doi" className="hover:text-orange-400 transition-colors">
+              Theo dõi
+            </a>
+            <a href="#lien-he" className="hover:text-orange-400 transition-colors">
+              Liên hệ
+            </a>
           </nav>
 
-          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={28}/> : <Menu size={28}/>}</button>
+          <div className="hidden lg:flex items-center gap-3">
+            <button className="rounded-full border border-white/35 px-6 py-2.5 font-bold hover:bg-white/10 transition-colors">
+              Cổng khách hàng
+            </button>
+            <a
+              href="#bao-gia"
+              className="rounded-full bg-[#ff6b35] px-6 py-2.5 font-bold hover:bg-[#ff8358] transition-colors"
+            >
+              Nhận báo giá
+            </a>
+          </div>
+
+          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
+            {isOpen ? <X size={28} /> : <Menu size={28} />}
+          </button>
         </div>
 
-        {/* Mobile Menu */}
         {isOpen && (
-          <div className="lg:hidden bg-[#001f42] p-6 flex flex-col gap-4 border-t border-white/10 animate-in fade-in zoom-in duration-300">
-            <a href="#" className="font-bold border-b border-white/5 pb-2 uppercase text-sm">Trang chủ</a>
-            <a href="#bao-gia" className="bg-orange-500 text-center py-3.5 rounded-xl font-black uppercase text-sm">Nhận báo giá</a>
+          <div className="lg:hidden bg-[#00173a] p-6 flex flex-col gap-4 border-t border-white/10 animate-in fade-in zoom-in duration-300">
+            <a href="#" className="font-bold border-b border-white/5 pb-2">
+              Trang chủ
+            </a>
+            <a href="#dich-vu" className="font-bold border-b border-white/5 pb-2">
+              Dịch vụ
+            </a>
+            <a href="#theo-doi" className="font-bold border-b border-white/5 pb-2">
+              Theo dõi
+            </a>
+            <a href="#lien-he" className="font-bold border-b border-white/5 pb-2">
+              Liên hệ
+            </a>
+            <a href="#bao-gia" className="bg-orange-500 text-center py-3 rounded-xl font-black">
+              Nhận báo giá
+            </a>
           </div>
         )}
       </header>
 
-      {/* 3. HERO BANNER - KIỂU MAERSK, CHỮ ĐÃ TỐI ƯU */}
-      <section className="relative h-[500px] md:h-[650px] flex items-center text-white overflow-hidden">
+      <section className="relative h-[500px] md:h-[620px] flex items-center text-white overflow-hidden">
         <div className="absolute inset-0 z-0">
-          <img src={maerskBg} className="w-full h-full object-cover" alt="Maersk Port" />
-          <div className="absolute inset-0 bg-gradient-to-r from-[#002b5b]/95 via-[#002b5b]/60 to-transparent"></div>
+          <img src={maerskBg} className="w-full h-full object-cover" alt="Logistics Port" />
+          <div className="absolute inset-0 bg-gradient-to-r from-[#002b5b]/95 via-[#002b5b]/65 to-transparent"></div>
         </div>
-        
+
         <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
           <div className="max-w-4xl">
             <h1 className="text-4xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tighter uppercase italic text-white drop-shadow-2xl">
-              Giải pháp Logistics <br/><span className="text-orange-500">Thông minh</span>
+              Giải pháp Logistics <br />
+              <span className="text-orange-500">Thông minh</span>
             </h1>
             <p className="text-lg md:text-3xl font-bold mb-12 text-[#4ade80] uppercase tracking-widest italic">
               Nhanh chóng • Đáng tin cậy • Toàn cầu
             </p>
-            
-            {/* BOX THEO DÕI ĐƠN HÀNG */}
-            <div className="bg-[#f05a28] p-0.5 rounded-2xl shadow-2xl max-w-xl mx-auto md:mx-0">
+
+            <div
+              id="theo-doi"
+              className="bg-[#f05a28] p-0.5 rounded-2xl shadow-2xl max-w-xl mx-auto md:mx-0"
+            >
               <div className="bg-[#002b5b]/60 backdrop-blur-md p-6 rounded-[14px]">
                 <label className="block font-black mb-3 flex items-center justify-center md:justify-start gap-2 text-xl text-white uppercase italic tracking-tighter">
-                  <Search size={24} className="text-orange-500"/> Theo dõi đơn hàng
+                  <Search size={24} className="text-orange-500" /> Theo dõi đơn hàng
                 </label>
                 <div className="flex flex-col sm:flex-row gap-3">
-                  <input type="text" placeholder="Mã đơn (VD: NTS-123456)..." className="flex-1 px-5 py-4 rounded-xl text-black outline-none font-bold text-sm shadow-inner" />
-                  <button className="bg-orange-500 text-white px-8 py-4 rounded-xl font-black text-sm hover:bg-white hover:text-[#002b5b] transition-all uppercase shadow-lg active:scale-95">Theo dõi</button>
+                  <input
+                    type="text"
+                    placeholder="Mã đơn (VD: NTS-123456)..."
+                    className="flex-1 px-5 py-4 rounded-xl text-black outline-none font-bold text-sm shadow-inner"
+                  />
+                  <button className="bg-orange-500 text-white px-8 py-4 rounded-xl font-black text-sm hover:bg-white hover:text-[#002b5b] transition-all uppercase shadow-lg active:scale-95">
+                    Theo dõi
+                  </button>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
 
-      {/* 4. DỊCH VỤ TOÀN DIỆN */}
-      <section className="py-20 bg-slate-50">
+      <section id="dich-vu" className="py-20 bg-slate-50">
         <div className="container mx-auto px-4">
           <div className="text-center mb-16">
-            <h2 className="text-3xl md:text-5xl font-black uppercase text-[#002b5b] italic tracking-tighter">Dịch vụ <span className="text-orange-500">toàn diện</span></h2>
+            <h2 className="text-3xl md:text-5xl font-black uppercase text-[#002b5b] italic tracking-tighter">
+              Dịch vụ <span className="text-orange-500">toàn diện</span>
+            </h2>
             <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-3 rounded-full"></div>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
             {[
-              { title: "VẬN TẢI ĐƯỜNG BIỂN", icon: <Ship size={36}/>, color: "border-green-500" },
-              { title: "VẬN TẢI ĐƯỜNG BỘ", icon: <Truck size={36}/>, color: "border-orange-500" },
-              { title: "VẬN TẢI HÀNG KHÔNG", icon: <Plane size={36}/>, color: "border-blue-500" },
-              { title: "KHO BÃI & PHÂN PHỐI", icon: <Box size={36}/>, color: "border-yellow-500" }
+              { title: 'VẬN TẢI BIỂN', icon: <Ship size={36} />, color: 'border-green-500' },
+              { title: 'VẬN TẢI ĐƯỜNG BỘ', icon: <Truck size={36} />, color: 'border-orange-500' },
+              { title: 'VẬN TẢI HÀNG KHÔNG', icon: <Plane size={36} />, color: 'border-blue-500' },
+              { title: 'KHO BÃI & PHÂN PHỐI', icon: <Box size={36} />, color: 'border-yellow-500' },
             ].map((s, i) => (
-              <div key={i} className={`bg-white p-8 rounded-[2.5rem] shadow-xl border-b-[10px] ${s.color} text-center hover:-translate-y-2 transition-transform cursor-pointer`}>
+              <div
+                key={i}
+                className={`bg-white p-8 rounded-[2.5rem] shadow-xl border-b-[10px] ${s.color} text-center hover:-translate-y-2 transition-transform cursor-pointer`}
+              >
                 <div className="text-[#002b5b] mb-5 flex justify-center">{s.icon}</div>
                 <h3 className="text-base font-black text-[#002b5b] uppercase leading-tight">{s.title}</h3>
-                <p className="text-[10px] text-slate-400 mt-4 font-bold uppercase tracking-widest italic">Uy tín - An toàn</p>
+                <p className="text-[10px] text-slate-400 mt-4 font-bold uppercase tracking-widest italic">
+                  Uy tín - An toàn
+                </p>
               </div>
             ))}
           </div>
         </div>
       </section>
 
-      {/* 5. QUY TRÌNH 4 BƯỚC - ĐÃ THÊM TIÊU ĐỀ LÙ LÙ Ở ĐÂY */}
       <section className="py-20 bg-white">
         <div className="container mx-auto px-4">
           <div className="text-center mb-16">
-            <h2 className="text-3xl md:text-5xl font-black uppercase text-[#002b5b] italic tracking-tighter">Quy trình <span className="text-orange-500">4 bước</span></h2>
+            <h2 className="text-3xl md:text-5xl font-black uppercase text-[#002b5b] italic tracking-tighter">
+              Quy trình <span className="text-orange-500">4 bước</span>
+            </h2>
             <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-3 rounded-full"></div>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
             {[
-              { step: "01", title: "NHẬN ĐƠN", icon: <ClipboardList/> },
-              { step: "02", title: "XỬ LÝ", icon: <Settings/> },
-              { step: "03", title: "VẬN CHUYỂN", icon: <Truck/> },
-              { step: "04", title: "GIAO NHẬN", icon: <Target/> }
+              { step: '01', title: 'NHẬN ĐƠN', icon: <ClipboardList /> },
+              { step: '02', title: 'XỬ LÝ', icon: <Settings /> },
+              { step: '03', title: 'VẬN CHUYỂN', icon: <Truck /> },
+              { step: '04', title: 'GIAO NHẬN', icon: <Target /> },
             ].map((p, i) => (
               <div key={i} className="text-center group">
-                <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-500 text-white rounded-full flex items-center justify-center font-black mx-auto mb-6 text-xl md:text-2xl shadow-lg border-4 border-white group-hover:scale-110 transition-transform">{p.step}</div>
+                <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-500 text-white rounded-full flex items-center justify-center font-black mx-auto mb-6 text-xl md:text-2xl shadow-lg border-4 border-white group-hover:scale-110 transition-transform">
+                  {p.step}
+                </div>
                 <h3 className="font-black text-sm md:text-lg uppercase text-[#002b5b] tracking-tighter">{p.title}</h3>
               </div>
             ))}
           </div>
         </div>
       </section>
 
-      {/* 6. FORM LIÊN HỆ BÁO GIÁ */}
-      <section id="bao-gia" className="py-20 bg-slate-900 text-white border-t-4 border-orange-500">
-        <div className="container mx-auto px-4 max-w-6xl">
-          <div className="grid md:grid-cols-2 gap-12 items-center">
-            <div className="text-center md:text-left">
-              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter uppercase italic text-orange-500">Liên hệ báo giá</h2>
-              <div className="space-y-6 text-sm md:text-lg font-bold">
-                <p className="flex items-center justify-center md:justify-start gap-4"><Phone className="text-orange-500" size={24}/> 0888 447 239</p>
-                <p className="flex items-center justify-center md:justify-start gap-4"><Mail className="text-orange-500" size={24}/> nhatthiensonsaigon@gmail.com</p>
-                <p className="flex items-start justify-center md:justify-start gap-4"><MapPin className="text-orange-500 shrink-0" size={24}/> 138/10 Khu Phố 57, Phường Thới An, TP.HCM,Việt Nam</p>
+      <section id="bao-gia" className="bg-[#ececef] py-14 md:py-20" aria-labelledby="quote-heading">
+        <div className="container mx-auto px-4">
+          <div className="grid lg:grid-cols-[1fr_1.6fr] overflow-hidden rounded-none lg:rounded-sm shadow-2xl">
+            <aside id="lien-he" className="bg-[#001f4d] p-8 md:p-12 text-white">
+              <p className="text-cyan-300 tracking-[0.25em] text-sm font-semibold uppercase">Liên hệ với chúng tôi</p>
+              <h2 className="mt-4 text-5xl font-black leading-[1.05]">
+                Nhận
+                <span className="block text-[#ff6b35]">Báo giá ngay</span>
+              </h2>
+              <p className="mt-6 text-lg text-slate-200">
+                Chuyên gia logistics của chúng tôi sẽ phân tích yêu cầu và phản hồi trong vòng 2 giờ làm việc.
+              </p>
+
+              <div className="mt-10 space-y-6 text-sm font-semibold">
+                <div className="flex items-start gap-3">
+                  <span className="mt-0.5 rounded-xl bg-[#0a3b78] p-2.5">
+                    <Phone size={18} className="text-cyan-300" />
+                  </span>
+                  <div>
+                    <p>0888447239</p>
+                    <p className="text-slate-300 font-normal">Thứ 2 – Thứ 7, 8h-20h</p>
+                  </div>
+                </div>
+                <div className="flex items-start gap-3">
+                  <span className="mt-0.5 rounded-xl bg-[#0a3b78] p-2.5">
+                    <Phone size={18} className="text-cyan-300" />
+                  </span>
+                  <div>
+                    <p>0919417239</p>
+                    <p className="text-slate-300 font-normal">Thứ 2 – Thứ 7, 8h-20h</p>
+                  </div>
+                </div>
+                <div className="flex items-start gap-3">
+                  <span className="mt-0.5 rounded-xl bg-[#0a3b78] p-2.5">
+                    <Mail size={18} className="text-cyan-300" />
+                  </span>
+                  <div>
+                    <p>nhatthiensonsaigon@gmail.com</p>
+                    <p className="text-slate-300 font-normal">Phản hồi trong 2 giờ</p>
+                  </div>
+                </div>
+                <div className="flex items-start gap-3">
+                  <span className="mt-0.5 rounded-xl bg-[#0a3b78] p-2.5">
+                    <MapPin size={18} className="text-cyan-300" />
+                  </span>
+                  <div>
+                    <p>138/12 Tô Ngọc Vân, P.Thạnh Xuân, Q.12, TP.HCM, Việt Nam</p>
+                    <p className="text-slate-300 font-normal">Văn phòng chính</p>
+                  </div>
+                </div>
+              </div>
+
+              <button className="mt-8 w-full rounded-xl bg-[#ff6b35] py-4 text-xl font-bold hover:bg-[#ff855b] transition-colors">
+                Gọi ngay: 0888447239
+              </button>
+
+              <div className="mt-8 flex items-center gap-3">
+                {socialLinks.map((item) => {
+                  const Icon = item.icon
+                  return (
+                    <a
+                      key={item.label}
+                      href={item.href}
+                      aria-label={item.label}
+                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-slate-300 hover:text-white hover:border-white/40 transition-colors"
+                    >
+                      <Icon size={18} />
+                    </a>
+                  )
+                })}
               </div>
-            </div>
-            
-            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl text-slate-900 border-2 border-slate-100">
-              <div className="space-y-4">
-                <div className="grid grid-cols-2 gap-4">
-                  <input type="text" placeholder="Họ và tên *" className="w-full p-4 bg-slate-100 rounded-xl outline-none font-bold text-sm focus:ring-2 ring-orange-500" />
-                  <input type="tel" placeholder="Số điện thoại *" className="w-full p-4 bg-slate-100 rounded-xl outline-none font-bold text-sm focus:ring-2 ring-orange-500" />
+            </aside>
+
+            <div className="bg-[#efeff2] p-8 md:p-12">
+              <h3 id="quote-heading" className="text-5xl font-black text-[#001f4d]">
+                Yêu cầu báo giá
+              </h3>
+
+              <div className="mt-8 space-y-5">
+                <div className="grid md:grid-cols-2 gap-5">
+                  <div>
+                    <label className="block mb-2 text-sm uppercase font-bold text-slate-700">Họ và tên *</label>
+                    <input
+                      type="text"
+                      placeholder="Nguyễn Văn A"
+                      className="w-full rounded-xl border border-slate-300 bg-white px-5 py-3.5 outline-none focus:ring-2 ring-[#ff6b35]"
+                    />
+                  </div>
+                  <div>
+                    <label className="block mb-2 text-sm uppercase font-bold text-slate-700">Số điện thoại *</label>
+                    <input
+                      type="tel"
+                      placeholder="0888447239"
+                      className="w-full rounded-xl border border-slate-300 bg-white px-5 py-3.5 outline-none focus:ring-2 ring-[#ff6b35]"
+                    />
+                  </div>
+                </div>
+
+                <div className="grid md:grid-cols-2 gap-5">
+                  <div>
+                    <label className="block mb-2 text-sm uppercase font-bold text-slate-700">Email *</label>
+                    <input
+                      type="email"
+                      placeholder="email@congty.com"
+                      className="w-full rounded-xl border border-slate-300 bg-white px-5 py-3.5 outline-none focus:ring-2 ring-[#ff6b35]"
+                    />
+                  </div>
+                  <div>
+                    <label className="block mb-2 text-sm uppercase font-bold text-slate-700">Loại hàng hóa *</label>
+                    <select className="w-full rounded-xl border border-slate-300 bg-white px-5 py-[0.96rem] outline-none focus:ring-2 ring-[#ff6b35] text-slate-700">
+                      <option>Chọn loại hàng</option>
+                      <option>Hàng container</option>
+                      <option>Hàng nguyên chuyến</option>
+                      <option>Hàng lẻ</option>
+                    </select>
+                  </div>
+                </div>
+
+                <div className="grid md:grid-cols-2 gap-5">
+                  <div>
+                    <label className="block mb-2 text-sm uppercase font-bold text-slate-700">Điểm xuất phát *</label>
+                    <input
+                      type="text"
+                      placeholder="Thành phố, Quốc gia"
+                      className="w-full rounded-xl border border-slate-300 bg-white px-5 py-3.5 outline-none focus:ring-2 ring-[#ff6b35]"
+                    />
+                  </div>
+                  <div>
+                    <label className="block mb-2 text-sm uppercase font-bold text-slate-700">Điểm đến *</label>
+                    <input
+                      type="text"
+                      placeholder="Thành phố, Quốc gia"
+                      className="w-full rounded-xl border border-slate-300 bg-white px-5 py-3.5 outline-none focus:ring-2 ring-[#ff6b35]"
+                    />
+                  </div>
+                </div>
+
+                <div>
+                  <div className="mb-2 flex items-center justify-between">
+                    <label className="text-sm uppercase font-bold text-slate-700">Thông tin thêm</label>
+                    <span className="text-xs text-slate-500">0/500</span>
+                  </div>
+                  <textarea
+                    placeholder="Mô tả yêu cầu vận chuyển, trọng lượng, kích thước, yêu cầu đặc biệt..."
+                    className="h-40 w-full rounded-xl border border-slate-300 bg-white px-5 py-4 outline-none focus:ring-2 ring-[#ff6b35]"
+                  ></textarea>
                 </div>
-                <input type="email" placeholder="Địa chỉ Email" className="w-full p-4 bg-slate-100 rounded-xl outline-none font-bold text-sm focus:ring-2 ring-orange-500" />
-                <textarea placeholder="Ghi chú hàng hóa (loại hàng, trọng lượng...)" className="w-full p-4 bg-slate-100 rounded-xl outline-none font-bold text-sm h-32 focus:ring-2 ring-orange-500 shadow-inner"></textarea>
-                <button className="w-full bg-[#f05a28] text-white py-5 rounded-xl font-black text-xl shadow-xl hover:bg-[#002b5b] transition-all uppercase active:scale-95 shadow-lg">Gửi yêu cầu ngay</button>
+
+                <button className="w-full rounded-xl bg-[#ff6b35] py-4 text-2xl font-bold text-white hover:bg-[#ff7d4f] transition-colors">
+                  Gửi yêu cầu báo giá →
+                </button>
               </div>
             </div>
           </div>
         </div>
       </section>
 
-      {/* 7. FOOTER */}
-      <footer className="bg-[#001f42] text-white py-12 text-center border-t border-white/5">
-        <div className="container mx-auto px-4">
-          <img src={myLogo} alt="Footer Logo" className="h-16 w-auto mx-auto bg-white p-2 rounded-xl mb-6 shadow-md" />
-          <h4 className="text-xs md:text-sm font-black uppercase mb-4 tracking-tight">NHẤT THIÊN SƠN SÀI GÒN LOGISTICS</h4>
-          <p className="text-white/20 text-[8px] font-bold uppercase tracking-[0.4em] pt-6 border-t border-white/5">
-            © 2026 NHẤT THIÊN SƠN SÀI GÒN - ALL RIGHTS RESERVED
-          </p>
+      <section className="h-[250px] relative overflow-hidden">
+        <iframe
+          title="Google Maps"
+          src="https://www.google.com/maps?q=138/12+To+Ngoc+Van,+Thanh+Xuan,+Quan+12,+Ho+Chi+Minh,+Viet+Nam&z=15&output=embed"
+          className="absolute inset-0 w-full h-full border-0"
+          loading="lazy"
+          referrerPolicy="no-referrer-when-downgrade"
+        ></iframe>
+      </section>
+
+      <footer className="bg-[#001f4d] text-white">
+        <div className="border-b border-white/10 px-4 py-6">
+          <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 text-sm">
+            <div className="flex items-center gap-2">
+              <MapPin size={18} className="text-[#ff6b35]" />
+              <span>138/12 Tô Ngọc Vân, P.Thạnh Xuân, Q.12, TP.HCM, Việt Nam</span>
+            </div>
+            <button className="rounded-full bg-[#ff6b35] px-7 py-3 font-bold inline-flex items-center gap-2">
+              <Navigation size={16} /> Chỉ đường
+            </button>
+          </div>
+        </div>
+
+        <div className="container mx-auto px-4 py-14">
+          <div className="grid gap-10 md:grid-cols-4">
+            <div>
+              <img src={myLogo} alt="Footer Logo" className="h-9 w-9 rounded-full" />
+              <p className="mt-6 text-slate-300 leading-relaxed">
+                Kết nối thế giới qua logistics thông minh. Được tin dùng bởi 5.000+ doanh nghiệp tại 150 quốc gia.
+              </p>
+              <div className="mt-7 flex gap-3">
+                {socialLinks.map((item) => {
+                  const Icon = item.icon
+                  return (
+                    <a
+                      key={item.label}
+                      href={item.href}
+                      aria-label={item.label}
+                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-slate-300 hover:text-white hover:border-white/40 transition-colors"
+                    >
+                      <Icon size={16} />
+                    </a>
+                  )
+                })}
+              </div>
+            </div>
+
+            <div>
+              <h4 className="text-2xl font-black uppercase mb-5">Dịch vụ</h4>
+              <ul className="space-y-3 text-slate-300">
+                <li>Vận tải biển</li>
+                <li>Vận tải hàng không</li>
+                <li>Vận tải đường bộ</li>
+                <li>Kho bãi</li>
+                <li>Thông quan hải quan</li>
+                <li>Chuỗi cung ứng</li>
+              </ul>
+            </div>
+
+            <div>
+              <h4 className="text-2xl font-black uppercase mb-5">Công ty</h4>
+              <ul className="space-y-3 text-slate-300">
+                <li>Về chúng tôi</li>
+                <li>Tuyển dụng</li>
+                <li>Tin tức & Báo chí</li>
+                <li>Phát triển bền vững</li>
+                <li>Quan hệ nhà đầu tư</li>
+              </ul>
+            </div>
+
+            <div>
+              <h4 className="text-2xl font-black uppercase mb-5">Hỗ trợ</h4>
+              <ul className="space-y-3 text-slate-300">
+                <li>Theo dõi lô hàng</li>
+                <li>Cổng khách hàng</li>
+                <li>Tài liệu</li>
+                <li>Truy cập API</li>
+                <li>Trung tâm trợ giúp</li>
+              </ul>
+            </div>
+          </div>
+
+          <div className="mt-12 border-t border-white/10 border-b border-white/10 py-8 grid md:grid-cols-3 gap-6">
+            <div>
+              <p className="font-bold">0888447239 / 0919417239</p>
+              <p className="text-slate-300 text-sm">Đường dây hỗ trợ</p>
+            </div>
+            <div>
+              <p className="font-bold">nhatthiensonsaigon@gmail.com</p>
+              <p className="text-slate-300 text-sm">Liên hệ chung</p>
+            </div>
+            <div>
+              <p className="font-bold">138/12 Tô Ngọc Vân, P.Thạnh Xuân, Q.12, TP.HCM, Việt Nam</p>
+              <p className="text-slate-300 text-sm">Văn phòng chính</p>
+            </div>
+          </div>
+
+          <div className="pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-slate-400">
+            <p>© 2025 LogiFlow Logistics. Bảo lưu mọi quyền.</p>
+            <div className="flex gap-6">
+              <span>Chính sách bảo mật</span>
+              <span>Điều khoản dịch vụ</span>
+              <span>Chính sách Cookie</span>
+            </div>
+          </div>
         </div>
       </footer>
     </main>
   )
 }
 
EOF
)
