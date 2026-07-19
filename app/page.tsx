"use client"

import React, { useState, useEffect } from 'react'
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Truck,
  Ship,
  Plane,
  Box,
  Search,
  ClipboardList,
  Settings,
  Target,
  Linkedin,
  Facebook,
  Youtube,
  Instagram,
  Navigation,
  Shield,
  Clock,
  Globe,
  Award,
  Users,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  FileText,
  Briefcase,
  Star,
  Quote
} from 'lucide-react'

// ==========================================
// MẢNG DỮ LIỆU CHUẨN ĐỂ MỞ RỘNG CODE (MOCK DATA)
// ==========================================

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

const servicesData = [
  {
    title: 'VẬN TẢI ĐƯỜNG BIỂN QUỐC TẾ',
    icon: Ship,
    color: 'border-green-500',
    description: 'Dịch vụ vận chuyển hàng nguyên container (FCL) và hàng lẻ (LCL) tới các cảng lớn trên toàn thế giới với chi phí tối ưu nhất.',
    features: ['Hợp đồng với nhiều hãng tàu lớn', 'Lịch trình ổn định hàng tuần', 'Hỗ trợ gom hàng lẻ chuyên nghiệp']
  },
  {
    title: 'VẬN TẢI NỘI ĐỊA & XUYÊN BIÊN GIỚI',
    icon: Truck,
    color: 'border-orange-500',
    description: 'Sở hữu đội xe tải, xe container hùng hậu, đáp ứng nhu cầu vận chuyển hàng hóa nội địa và liên vận quốc tế (Lào, Campuchia).',
    features: ['Hệ thống định vị GPS 24/7', 'Đội ngũ tài xế giàu kinh nghiệm', 'Vận chuyển hàng siêu trường, siêu trọng']
  },
  {
    title: 'VẬN TẢI HÀNG KHÔNG SIÊU TỐC',
    icon: Plane,
    color: 'border-blue-500',
    description: 'Giải pháp tối ưu cho các lô hàng cần giao gấp, hàng giá trị cao, linh kiện điện tử, dược phẩm với thời gian kết nối nhanh nhất.',
    features: ['Đại lý của nhiều hãng hàng không', 'Dịch vụ Airport-to-Airport', 'Thủ tục thông quan nhanh gọn']
  },
  {
    title: 'DỊCH VỤ KHO BÃI & PHÂN PHỐI',
    icon: Box,
    color: 'border-yellow-500',
    description: 'Hệ thống kho bãi hiện đại, tiêu chuẩn cao, vị trí chiến lược giúp doanh nghiệp tối ưu chi phí lưu kho và quản lý chuỗi cung ứng.',
    features: ['Quản lý bằng phần mềm chuyên dụng', 'Hệ thống PCCC tự động đạt chuẩn', 'Dịch vụ đóng gói, dán nhãn hàng hóa']
  },
  {
    title: 'KHAI BÁO HẢI QUAN TRỌN GÓI',
    icon: ClipboardList,
    color: 'border-purple-500',
    description: 'Tư vấn và thực hiện các thủ tục thông quan hàng hóa xuất nhập khẩu, áp mã HS code, kiểm tra chuyên ngành nhanh chóng.',
    features: ['Hạn chế tối đa rủi ro pháp lý', 'Xử lý hồ sơ khó, áp mã thuế chuẩn', 'Đại diện doanh nghiệp làm việc với cơ quan chức năng']
  },
  {
    title: 'VẬN CHUYỂN HÀNG THƯƠNG MẠI ĐIỆN TỬ',
    icon: Settings,
    color: 'border-pink-500',
    description: 'Giải pháp hậu cần (Fulfillment) toàn diện cho các doanh nghiệp E-commerce, từ khâu lưu kho, đóng gói đến giao hàng chặng cuối.',
    features: ['Tích hợp API với các sàn TMĐT', 'Thu hộ COD uy tín, đối soát nhanh', 'Tỷ lệ giao hàng thành công cao']
  }
]

const coreValues = [
  { icon: Shield, title: 'An Toàn Tuyệt Đối', desc: 'Hàng hóa của quý khách được bảo hiểm toàn diện và giám sát chặt chẽ suốt hành trình.' },
  { icon: Clock, title: 'Đúng Hẹn Lịch Trình', desc: 'Chỉ số đúng giờ (OTP) luôn đạt trên 98%, giảm thiểu tối đa đứt gãy chuỗi cung ứng.' },
  { icon: Globe, title: 'Mạng Lưới Toàn Cầu', desc: 'Đối tác chiến lược tại hơn 100 quốc gia, sẵn sàng tiếp nhận mọi lô hàng bất cứ đâu.' },
  { icon: Award, title: 'Giải Pháp Tối Ưu', desc: 'Thiết kế lộ trình riêng biệt giúp doanh nghiệp tiết kiệm từ 15-30% chi phí logistics.' }
]

const faqs = [
  { q: 'Thời gian xử lý báo giá vận chuyển là bao lâu?', a: 'Đối với các tuyến đường thông thường, chúng tôi sẽ phản hồi báo giá trong vòng 2 giờ làm việc. Với các dự án hàng siêu trường siêu trọng hoặc đa phương thức phức tạp, thời gian phản hồi có thể từ 4-8 giờ.' },
  { q: 'Nhất Thiên Sơn Sài Gòn có hỗ trợ mua bảo hiểm hàng hóa không?', a: 'Có, chúng tôi là đối tác của các công ty bảo hiểm uy tín hàng đầu. Chúng tôi hỗ trợ khách hàng mua bảo hiểm hàng hóa xuất nhập khẩu trọn gói để bảo vệ quyền lợi tối đa trước mọi rủi ro dọc đường.' },
  { q: 'Làm thế nào để tôi có thể theo dõi lộ trình của đơn hàng?', a: 'Quý khách chỉ cần nhập mã đơn hàng (NTS Code) vào thanh công cụ tìm kiếm trên website hoặc liên hệ trực tiếp với chuyên viên phụ trách để nhận cập nhật trạng thái thời gian thực qua Zalo/Email.' },
  { q: 'Công ty có văn phòng chính và khu vực khai thác ở đâu?', a: 'Văn phòng chính của chúng tôi đặt tại Quận 12, TP.HCM. Chúng tôi có năng lực khai thác giao nhận tại toàn bộ các cảng biển, sân bay và khu công nghiệp lớn tại khu vực phía Nam và trên toàn quốc.' }
]

const testimonials = [
  { name: 'Nguyễn Đình Nam', role: 'Giám đốc Chuỗi cung ứng, TechVina', content: 'Nhất Thiên Sơn Sài Gòn là đối tác logistics đáng tin cậy nhất mà chúng tôi từng hợp tác. Đội ngũ xử lý thủ tục hải quan cực kỳ nhanh và chuyên nghiệp.', stars: 5 },
  { name: 'Trần Thị Mai', role: 'Trưởng phòng XNK, GreenFood Việt Nam', content: 'Hàng nông sản xuất khẩu luôn đòi hỏi thời gian khắt khe. Nhờ giải pháp vận tải biển tối ưu của NTS, chúng tôi chưa bao giờ bị trễ tàu hay phạt hợp đồng.', stars: 5 },
  { name: 'David Nguyễn', role: 'CEO, Đông Dương Logistics', content: 'Hợp tác cùng Nhất Thiên Sơn giúp chúng tôi giải quyết được bài toán xe chạy rỗng chiều về, tối ưu hóa đáng kể chi phí vận tải nội địa.', stars: 5 }
]

const blogPosts = [
  { title: 'Xu hướng Logistics xanh và giải pháp cắt giảm phát thải năm 2026', date: '15/07/2026', excerpt: 'Ngành vận tải toàn cầu đang chuyển dịch mạnh mẽ sang năng lượng xanh. Doanh nghiệp cần chuẩn bị những gì để thích ứng?', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600' },
  { title: 'Quy trình thông quan hàng hóa nhập khẩu từ thị trường Châu Âu', date: '10/07/2026', excerpt: 'Chi tiết các bước chuẩn bị chứng từ, khai báo VNACCS và các lỗi thường gặp khiến lô hàng bị chậm trễ tại cảng.', img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=600' },
  { title: 'Tìm hiểu về các phương thức vận tải đa phương thức phổ biến', date: '02/07/2026', excerpt: 'Sự kết hợp hoàn hảo giữa đường biển, đường sắt và đường bộ giúp tối ưu chi phí cho các doanh nghiệp xuất nhập khẩu.', img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=600' }
]

// ==========================================
// SUB-COMPONENTS ĐỂ CHIA TÁCH VÀ TĂNG TÍNH MODULAR
// ==========================================

function Header({ isOpen, setIsOpen, logo }: { isOpen: boolean, setIsOpen: (o: boolean) => void, logo: string }) {
  return (
    <header className="sticky top-0 z-50 bg-[#001f4d] text-white shadow-xl">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-10 w-10 rounded-full border border-white/20" />
          <div>
            <div className="font-black text-xl leading-none uppercase italic tracking-tight">Nhất Thiên Sơn</div>
            <div className="text-[9px] text-orange-400 tracking-[0.2em] font-bold mt-1">SAIGÒN LOGISTICS</div>
          </div>
        </div>

        <nav className="hidden lg:flex items-center space-x-8 font-bold text-base">
          <a href="#" className="hover:text-orange-400 transition-colors">Trang chủ</a>
          <a href="#dich-vu" className="hover:text-orange-400 transition-colors">Dịch vụ</a>
          <a href="#ve-chung-toi" className="hover:text-orange-400 transition-colors">Về chúng tôi</a>
          <a href="#quy-trinh" className="hover:text-orange-400 transition-colors">Quy trình</a>
          <a href="#faq" className="hover:text-orange-400 transition-colors">Hỏi đáp</a>
          <a href="#tin-tuc" className="hover:text-orange-400 transition-colors">Tin tức</a>
          <a href="#lien-he" className="hover:text-orange-400 transition-colors">Liên hệ</a>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button className="rounded-xl border border-white/35 px-5 py-2 text-sm font-bold hover:bg-white/10 transition-colors">
            Cổng khách hàng
          </button>
          <a href="#bao-gia" className="rounded-xl bg-[#ff6b35] px-5 py-2 text-sm font-bold hover:bg-[#ff8358] transition-colors">
            Nhận báo giá
          </a>
        </div>

        <button className="lg:hidden p-2 text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#00173a] p-6 flex flex-col gap-4 border-t border-white/10 animate-in fade-in slide-in-from-top duration-300">
          <a href="#" className="font-bold border-b border-white/5 pb-2 hover:text-orange-400" onClick={() => setIsOpen(false)}>Trang chủ</a>
          <a href="#dich-vu" className="font-bold border-b border-white/5 pb-2 hover:text-orange-400" onClick={() => setIsOpen(false)}>Dịch vụ</a>
          <a href="#ve-chung-toi" className="font-bold border-b border-white/5 pb-2 hover:text-orange-400" onClick={() => setIsOpen(false)}>Về chúng tôi</a>
          <a href="#quy-trinh" className="font-bold border-b border-white/5 pb-2 hover:text-orange-400" onClick={() => setIsOpen(false)}>Quy trình</a>
          <a href="#bao-gia" className="bg-orange-500 text-center py-3 rounded-xl font-black block text-white" onClick={() => setIsOpen(false)}>Nhận báo giá</a>
        </div>
      )}
    </header>
  )
}

function HeroSection({ bgImg }: { bgImg: string }) {
  const [trackId, setTrackId] = useState('')
  const [searchResult, setSearchResult] = useState<string | null>(null)

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    if (!trackId.trim()) {
      setSearchResult('Vui lòng nhập mã vận đơn để kiểm tra.')
      return
    }
    setSearchResult(`Hệ thống đang tìm kiếm vận đơn [${trackId}]. Bản cập nhật thời gian thực đang được kết nối...`)
  }

  return (
    <section className="relative min-h-[600px] lg:h-[680px] flex items-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={bgImg} className="w-full h-full object-cover object-center" alt="Logistics Port Background" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002b5b]/95 via-[#002b5b]/75 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="bg-orange-500/20 text-orange-400 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-4 inline-block border border-orange-500/30">
              Công Ty TNHH TM DV Vận Tải Nhật Thiên Sơn Sài Gòn
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tighter uppercase italic drop-shadow-2xl">
              Giải pháp Logistics <br />
              <span className="text-orange-500">Thông minh & Toàn diện</span>
            </h1>
            <p className="text-md md:text-xl text-slate-300 max-w-xl mb-8 mx-auto lg:mx-0">
              Chúng tôi tối ưu hóa chuỗi cung ứng của bạn bằng các dịch vụ vận tải đường biển, đường bộ và đường hàng không chuyên nghiệp, an toàn, nhanh chóng nhất.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#dich-vu" className="bg-orange-500 hover:bg-orange-600 px-6 py-3.5 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg">
                Khám phá dịch vụ <ChevronRight size={18} />
              </a>
              <a href="#lien-he" className="bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3.5 rounded-xl font-bold transition-all">
                Liên hệ văn phòng
              </a>
            </div>
          </div>

          {/* TRACKING CARD BOX */}
          <div id="theo-doi" className="bg-[#ff6b35] p-0.5 rounded-2xl shadow-2xl max-w-lg w-full mx-auto">
            <div className="bg-[#002b5b]/90 backdrop-blur-md p-8 rounded-[14px]">
              <h2 className="font-black mb-4 flex items-center gap-3 text-2xl text-white uppercase italic tracking-tighter">
                <Search size={26} className="text-orange-500" /> Hệ thống định vị lô hàng
              </h2>
              <p className="text-xs text-slate-300 mb-6">
                Nhập mã vận đơn của Nhất Thiên Sơn Sài Gòn để cập nhật vị trí chính xác của container hoặc kiện hàng của bạn.
              </p>
              <form onSubmit={handleTrack} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={trackId}
                    onChange={(e) => setTrackId(e.target.value)}
                    placeholder="Mã đơn (Ví dụ: NTS-2026...)"
                    className="flex-1 px-5 py-4 rounded-xl text-black outline-none font-bold text-sm shadow-inner focus:ring-2 ring-orange-500"
                  />
                  <button type="submit" className="bg-orange-500 text-white px-6 py-4 rounded-xl font-black text-sm hover:bg-white hover:text-[#002b5b] transition-all uppercase shadow-lg">
                    Tra cứu
                  </button>
                </div>
              </form>
              {searchResult && (
                <div className="mt-4 p-4 rounded-xl bg-white/10 border border-white/10 text-sm font-semibold text-orange-300 animate-fade-in">
                  {searchResult}
                </div>
              )}
              <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center text-[11px] text-slate-400">
                <div>
                  <span className="block font-bold text-white text-base">100%</span>
                  Bảo mật dữ liệu
                </div>
                <div>
                  <span className="block font-bold text-white text-base">24/7</span>
                  Cập nhật liên tục
                </div>
                <div>
                  <span className="block font-bold text-white text-base">Toàn quốc</span>
                  Mạng lưới phủ rộng
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  return (
    <section className="bg-[#001f4d] text-white py-12 relative z-20 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <div className="text-3xl md:text-5xl font-black text-orange-500 mb-2">10K+</div>
            <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-400">Chuyến hàng an toàn</div>
          </div>
          <div className="p-4">
            <div className="text-3xl md:text-5xl font-black text-orange-500 mb-2">500+</div>
            <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-400">Khách hàng doanh nghiệp</div>
          </div>
          <div className="p-4">
            <div className="text-3xl md:text-5xl font-black text-orange-500 mb-2">99.2%</div>
            <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-400">Đúng giờ & Đúng hẹn</div>
          </div>
          <div className="p-4">
            <div className="text-3xl md:text-5xl font-black text-orange-500 mb-2">24/7</div>
            <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-400">Hỗ trợ kỹ thuật tổng đài</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section id="dich-vu" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-orange-500 font-bold text-sm uppercase tracking-widest block mb-2">DANH MỤC DỊCH VỤ</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-[#002b5b] italic tracking-tighter">
            Hệ Thống Dịch Vụ <span className="text-orange-500">Logistics Toàn Diện</span>
          </h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 mt-4">
            Chúng tôi cung cấp các giải pháp chuỗi cung ứng đầu cuối linh hoạt, giúp tối ưu chi phí và tăng tốc độ phân phối cho mọi loại hình doanh nghiệp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((s, i) => {
            const IconComponent = s.icon
            return (
              <div key={i} className={`bg-white p-8 rounded-2xl shadow-xl border-t-4 ${s.color} hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group`}>
                <div>
                  <div className="text-[#002b5b] mb-6 p-4 bg-slate-50 inline-block rounded-xl group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-lg font-black text-[#002b5b] uppercase mb-4 tracking-tight">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{s.description}</p>
                  <ul className="space-y-2 mb-6">
                    {s.features.map((f, idx) => (
                      <li key={idx} className="text-xs text-slate-700 flex items-center gap-2 font-medium">
                        <CheckCircle2 size={14} className="text-green-500 flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-widest italic">An Toàn - Uy Tín</span>
                  <a href="#bao-gia" className="text-orange-500 group-hover:text-[#002b5b] font-bold text-xs uppercase tracking-wider flex items-center gap-1 transition-colors">
                    Yêu cầu tư vấn <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="ve-chung-toi" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-orange-500 rounded-3xl transform rotate-3 translate-x-3 translate-y-3 -z-10 opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-[450px] object-cover rounded-3xl shadow-2xl" 
              alt="Warehouse operations" 
            />
            <div className="absolute bottom-6 left-6 bg-[#002b5b] p-6 rounded-2xl text-white max-w-xs shadow-xl hidden sm:block">
              <p className="text-3xl font-black text-orange-500">24 Giờ</p>
              <p className="text-sm font-bold mt-1 uppercase tracking-wider">Hỗ trợ thông quan và giải phóng hàng hóa</p>
            </div>
          </div>

          <div>
            <span className="text-orange-500 font-bold text-sm uppercase tracking-widest block mb-2">VỀ CHÚNG TÔI</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-[#002b5b] italic tracking-tighter leading-tight">
              Người Đồng Hành Uy Tín Trên <span className="text-orange-500">Mọi Cung Đường Vận Tải</span>
            </h2>
            <div className="w-16 h-1.5 bg-orange-500 my-6 rounded-full"></div>
            <p className="text-slate-600 leading-relaxed mb-6">
              Công Ty TNHH TM DV Vận Tải Nhật Thiên Sơn Sài Gòn tự hào là đơn vị logistics tiên phong, chuyên cung cấp các giải pháp vận tải toàn diện. Với sự tập trung vào công nghệ quản lý và tối ưu quy trình khai thác, chúng tôi cam kết mang lại trải nghiệm dịch vụ logistics vượt trội.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Chúng tôi sở hữu mạng lưới đối tác rộng lớn, đội xe tải đa dạng tải trọng và đội ngũ nhân sự am hiểu sâu sắc các quy định pháp lý, hải quan xuất nhập khẩu.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coreValues.map((val, idx) => {
                const IconVal = val.icon
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="text-orange-500 mt-1 bg-orange-50 p-2 rounded-lg h-10 w-10 flex items-center justify-center flex-shrink-0">
                      <IconVal size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#002b5b] text-base mb-1">{val.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WorkflowSection() {
  return (
    <section id="quy-trinh" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,107,53,0.1),transparent_40%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-orange-400 font-bold text-sm uppercase tracking-widest block mb-2">VẬN HÀNH CHUYÊN NGHIỆP</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
            Quy Trình Giao Nhận <span className="text-orange-400">Chuẩn Hóa 4 Bước</span>
          </h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-400 mt-4 text-sm">
            Hệ thống quản trị số hóa giúp đơn hàng của bạn được luân chuyển mượt mà, minh bạch từ lúc tiếp nhận cho đến khi bàn giao an toàn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {[
            { step: '01', title: 'TIẾP NHẬN & TƯ VẤN', desc: 'Nhận thông tin yêu cầu, kiểm tra đặc tính hàng hóa và tư vấn giải pháp, lộ trình vận tải tối ưu chi phí.', icon: ClipboardList },
            { step: '02', title: 'ĐÓNG GÓI & ĐIỀU PHỐI', desc: 'Tập kết hàng hóa, thực hiện đóng gói chuẩn quy cách, hoàn thiện hồ sơ chứng từ, thủ tục hải quan cần thiết.', icon: Settings },
            { step: '03', title: 'VẬN CHUYỂN AN TOÀN', desc: 'Bốc xếp lên phương tiện chuyên dụng, thực hiện vận chuyển theo lộ trình kèm hệ thống giám sát GPS thời gian thực.', icon: Truck },
            { step: '04', title: 'GIAO NHẬN TẬN NƠI', desc: 'Kiểm tra tình trạng nguyên vẹn, bàn giao hàng hóa tận tay người nhận kèm biên bản giao nhận đầy đủ.', icon: Target },
          ].map((p, i) => {
            const IconStep = p.icon
            return (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl relative group hover:bg-white/10 transition-all duration-300">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center font-black text-xl shadow-lg transform group-hover:scale-110 transition-transform">
                  {p.step}
                </div>
                <div className="text-orange-400 mb-4 mt-2">
                  <IconStep size={28} />
                </div>
                <h3 className="font-black text-base uppercase text-white mb-3 tracking-tight">{p.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{p.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-orange-500 font-bold text-sm uppercase tracking-widest block mb-2">ĐÁNH GIÁ THỰC TẾ</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-[#002b5b] italic tracking-tighter">
            Khách Hàng Nói <span className="text-orange-500">Về Chúng Tôi</span>
          </h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-xl flex flex-col justify-between relative">
              <Quote className="absolute top-6 right-6 text-slate-100 h-12 w-12 -z-0" />
              <div className="relative z-10">
                <div className="flex gap-1 mb-4 text-amber-500">
                  {[...Array(t.stars)].map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm italic leading-relaxed mb-6">"{t.content}"</p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#002b5b] rounded-full text-white font-black flex items-center justify-center text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#002b5b]">{t.name}</h4>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function QuoteFormSection() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', cargoType: 'Chọn loại hàng', origin: '', destination: '', message: ''
  })
  const [status, setStatus] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.phone || !formData.email) {
      setStatus('Vui lòng điền đầy đủ các thông tin bắt buộc (*).')
      return
    }
    setStatus('Yêu cầu của bạn đã được gửi đi thành công! Chuyên viên từ Nhật Thiên Sơn Sài Gòn sẽ liên hệ lại trong vòng 2 giờ.')
    setFormData({ name: '', phone: '', email: '', cargoType: 'Chọn loại hàng', origin: '', destination: '', message: '' })
  }

  return (
    <section id="bao-gia" className="bg-[#ececef] py-24" aria-labelledby="quote-heading">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_1.6fr] overflow-hidden rounded-2xl shadow-2xl">
          
          {/* THÔNG TIN LIÊN HỆ GẮN TRỰC TIẾP TRONG BANNER LIÊN HỆ */}
          <aside id="lien-he" className="bg-[#001f4d] p-8 md:p-12 text-white flex flex-col justify-between">
            <div>
              <p className="text-cyan-300 tracking-[0.25em] text-xs font-semibold uppercase">KẾT NỐI NGAY</p>
              <h2 className="mt-4 text-4xl md:text-5xl font-black leading-[1.1] uppercase italic tracking-tight">
                Nhận Báo Giá <br />
                <span className="text-[#ff6b35]">Vận Tải Nhanh</span>
              </h2>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                Đội ngũ chuyên viên tổng đài của Nhất Thiên Sơn Sài Gòn luôn sẵn sàng túc trực hỗ trợ xử lý lộ trình và báo giá chi tiết 24/7.
              </p>

              <div className="mt-10 space-y-6 text-sm font-semibold">
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 rounded-xl bg-white/5 p-3 border border-white/10 flex-shrink-0">
                    <Phone size={18} className="text-orange-400" />
                  </span>
                  <div>
                    <p className="text-base text-white">0888 447 239</p>
                    <p className="text-slate-400 font-normal text-xs mt-0.5">Kênh tiếp nhận báo giá nhanh</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 rounded-xl bg-white/5 p-3 border border-white/10 flex-shrink-0">
                    <Phone size={18} className="text-orange-400" />
                  </span>
                  <div>
                    <p className="text-base text-white">0919 417 239</p>
                    <p className="text-slate-400 font-normal text-xs mt-0.5">Hotline hỗ trợ khẩn cấp 24/7</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 rounded-xl bg-white/5 p-3 border border-white/10 flex-shrink-0">
                    <Mail size={18} className="text-orange-400" />
                  </span>
                  <div>
                    <p className="text-base text-white">nhatthiensonsaigon@gmail.com</p>
                    <p className="text-slate-400 font-normal text-xs mt-0.5">Hòm thư tiếp nhận hồ sơ thầu</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 rounded-xl bg-white/5 p-3 border border-white/10 flex-shrink-0">
                    <MapPin size={18} className="text-orange-400" />
                  </span>
                  <div>
                    <p className="text-base text-white">138/12 Tô Ngọc Vân, P. Thạnh Xuân, Q. 12, TP.HCM</p>
                    <p className="text-slate-400 font-normal text-xs mt-0.5">Khu vực phân phối Thới An Ward</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-3">Mạng xã hội công ty</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((item, idx) => {
                  const IconSoc = item.icon
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      aria-label={item.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-orange-500 hover:bg-orange-500 transition-all"
                    >
                      <IconSoc size={16} />
                    </a>
                  )
                })}
              </div>
            </div>
          </aside>

          {/* FORM ĐĂNG KÝ XỬ LÝ STATE */}
          <div className="bg-[#efeff2] p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h3 id="quote-heading" className="text-3xl md:text-4xl font-black text-[#001f4d] uppercase italic tracking-tight">
                Phiếu Yêu Cầu <span className="text-orange-500">Khảo Sát Giá</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1 mb-8">Vui lòng điền thông tin chi tiết về kiện hàng để chúng tôi tính toán chi phí chính xác nhất.</p>

              {status && (
                <div className={`mb-6 p-4 rounded-xl text-sm font-bold ${status.includes('thành công') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {status}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block mb-2 text-xs uppercase font-bold text-slate-700">Họ và tên khách hàng *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Nguyễn Văn A"
                      className="w-full rounded-xl border border-slate-300 bg-white px-5 py-3.5 outline-none focus:ring-2 ring-orange-500 text-sm font-medium"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-xs uppercase font-bold text-slate-700">Số điện thoại liên hệ *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="0888 447 239"
                      className="w-full rounded-xl border border-slate-300 bg-white px-5 py-3.5 outline-none focus:ring-2 ring-orange-500 text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block mb-2 text-xs uppercase font-bold text-slate-700">Địa chỉ Email nhận thông báo *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="example@company.com"
                      className="w-full rounded-xl border border-slate-300 bg-white px-5 py-3.5 outline-none focus:ring-2 ring-orange-500 text-sm font-medium"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-xs uppercase font-bold text-slate-700">Hình thức / Phương thức vận tải *</label>
                    <select 
                      value={formData.cargoType}
                      onChange={(e) => setFormData({...formData, cargoType: e.target.value})}
                      className="w-full rounded-xl border border-slate-300 bg-white px-5 py-[0.92rem] outline-none focus:ring-2 ring-orange-500 text-sm font-medium text-slate-700"
                    >
                      <option>Chọn loại hình vận chuyển</option>
                      <option>Hàng Nguyên Container (FCL) - Đường biển</option>
                      <option>Hàng Lẻ Ghép Container (LCL) - Đường biển</option>
                      <option>Vận tải đường bộ nội địa bằng xe tải</option>
                      <option>Vận tải hàng không quốc tế</option>
                      <option>Khai báo hải quan trọn gói</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block mb-2 text-xs uppercase font-bold text-slate-700">Điểm xuất phát (Origin) *</label>
                    <input
                      type="text"
                      value={formData.origin}
                      onChange={(e) => setFormData({...formData, origin: e.target.value})}
                      placeholder="Tỉnh/Thành phố hoặc Tên Cảng đi"
                      className="w-full rounded-xl border border-slate-300 bg-white px-5 py-3.5 outline-none focus:ring-2 ring-orange-500 text-sm font-medium"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-xs uppercase font-bold text-slate-700">Điểm đích đến (Destination) *</label>
                    <input
                      type="text"
                      value={formData.destination}
                      onChange={(e) => setFormData({...formData, destination: e.target.value})}
                      placeholder="Tỉnh/Thành phố hoặc Tên Cảng đến"
                      className="w-full rounded-xl border border-slate-300 bg-white px-5 py-3.5 outline-none focus:ring-2 ring-orange-500 text-sm font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-xs uppercase font-bold text-slate-700">Mô tả quy cách, trọng lượng, kích thước hàng hóa</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Ví dụ: 10 kiện hàng máy móc tổng trọng lượng 2.5 tấn, kích thước mỗi kiện 1.2m x 1m x 1m, yêu cầu bảo quản khô ráo..."
                    className="h-32 w-full rounded-xl border border-slate-300 bg-white px-5 py-4 outline-none focus:ring-2 ring-orange-500 text-sm font-medium resize-none"
                  ></textarea>
                </div>

                <button type="submit" className="w-full rounded-xl bg-[#ff6b35] py-4 text-lg font-black text-white hover:bg-[#ff7d4f] transition-all shadow-lg active:scale-[0.99]">
                  GỬI YÊU CẦU BÁO GIÁ ĐƠN HÀNG
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold text-sm uppercase tracking-widest block mb-2">HỖ TRỢ KHÁCH HÀNG</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-[#002b5b] italic tracking-tighter">
            Câu Hỏi <span className="text-orange-500">Thường Gặp</span>
          </h2>
          <div className="w-16 h-1.5 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border border-slate-200 rounded-xl overflow-hidden transition-all shadow-sm">
              <button 
                onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                className="w-full bg-slate-50 p-5 font-bold text-[#002b5b] text-left flex justify-between items-center text-sm md:text-base outline-none"
              >
                <span>{f.q}</span>
                <HelpCircle size={18} className={`text-orange-500 transform transition-transform ${activeIdx === i ? 'rotate-180' : ''}`} />
              </button>
              {activeIdx === i && (
                <div className="p-5 bg-white text-slate-600 text-sm border-t border-slate-100 leading-relaxed animate-fade-in">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BlogSection() {
  return (
    <section id="tin-tuc" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-500 font-bold text-sm uppercase tracking-widest block mb-2">TIN TỨC CHUYÊN NGÀNH</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-[#002b5b] italic tracking-tighter">
            Góc Nhìn <span className="text-orange-500">& Kiến Thức Logistics</span>
          </h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <article key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col justify-between hover:shadow-2xl transition-all group">
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-[#002b5b] text-white text-[11px] font-bold px-3 py-1 rounded-md uppercase">
                    {post.date}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-black text-base text-[#002b5b] line-clamp-2 group-hover:text-orange-500 transition-colors mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a href="#tin-tuc" className="text-xs font-bold text-[#002b5b] group-hover:text-orange-500 flex items-center gap-1 transition-colors uppercase tracking-wider">
                  Đọc thêm bài viết <ChevronRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function MapSection() {
  return (
    <section className="h-[350px] relative overflow-hidden border-t-4 border-orange-500">
      <iframe
        title="Google Maps Bản Đồ Vị Trí Nhất Thiên Sơn Sài Gòn"
        src="https://www.google.com/maps?q=138/12+To+Ngoc+Van,+Thanh+Xuan,+Quan+12,+Ho+Chi+Minh,+Viet+Nam&z=15&output=embed"
        className="absolute inset-0 w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  )
}

function Footer({ logo }: { logo: string }) {
  return (
    <footer className="bg-[#001f4d] text-white">
      {/* Thanh định vị nhanh */}
      <div className="border-b border-white/10 px-4 py-6 bg-[#00173a]">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 text-xs md:text-sm">
          <div className="flex items-center gap-2 text-slate-300">
            <MapPin size={18} className="text-orange-500 flex-shrink-0" />
            <span>Văn phòng khai thác vận tải: 138/12 Tô Ngọc Vân, P. Thạnh Xuân, Q. 12, TP.HCM, Việt Nam</span>
          </div>
          <a 
            href="https://www.google.com/maps?q=138/12+To+Ngoc+Van,+Thanh+Xuan,+Quan+12,+Ho+Chi+Minh,+Viet+Nam"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-[#ff6b35] px-6 py-2.5 text-xs font-bold inline-flex items-center gap-2 hover:bg-[#ff8358] transition-colors"
          >
            <Navigation size={14} /> Mở Google Maps Chỉ Đường
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Footer Corporate Logo" className="h-10 w-10 rounded-full border border-white/10" />
              <div>
                <span className="font-black text-lg tracking-wider uppercase italic block">Nhất Thiên Sơn</span>
                <span className="text-[8px] text-slate-400 tracking-widest font-bold uppercase block -mt-1">SAIGÒN LOGISTICS</span>
              </div>
            </div>
            <p className="mt-6 text-slate-400 text-xs leading-relaxed">
              Thành lập nhằm mang lại giá trị vận tải tối ưu cho doanh nghiệp Việt Nam vươn xa thế giới. Hệ thống hạ tầng kết nối chuỗi cung ứng linh hoạt và tiết kiệm.
            </p>
            <div className="mt-6 flex gap-2">
              {socialLinks.map((item, idx) => {
                const IconComp = item.icon
                return (
                  <a
                    key={idx}
                    href={item.href}
                    aria-label={item.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-orange-500 transition-colors"
                  >
                    <IconComp size={14} />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h4 className="text-base font-black uppercase mb-6 tracking-wider text-orange-400">Giải Pháp Vận Tải</h4>
            <ul className="space-y-3 text-slate-400 text-xs font-medium">
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"><ChevronRight size={12} /> Vận tải đường biển quốc tế</li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"><ChevronRight size={12} /> Vận tải nội địa bằng xe tải & đầu kéo</li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"><ChevronRight size={12} /> Dịch vụ thông quan hải quan trọn gói</li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"><ChevronRight size={12} /> Vận tải đường hàng không</li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"><ChevronRight size={12} /> Lưu kho bãi và đóng gói logistics</li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-black uppercase mb-6 tracking-wider text-orange-400">Thông Tin Pháp Lý</h4>
            <ul className="space-y-3 text-slate-400 text-xs font-medium">
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"><ChevronRight size={12} /> Giới thiệu năng lực doanh nghiệp</li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"><ChevronRight size={12} /> Điều khoản sử dụng hệ thống</li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"><ChevronRight size={12} /> Chính sách bảo hiểm hàng hóa</li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"><ChevronRight size={12} /> Quy định giải quyết khiếu nại</li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"><ChevronRight size={12} /> Tuyển dụng tài xế & nhân viên XNK</li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-black uppercase mb-6 tracking-wider text-orange-400">Bản Tin Đăng Ký</h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">Đăng ký nhận thông tin điều chỉnh phụ phí cước biển (BAF/CAF) và xu hướng logistics sớm nhất.</p>
            <div className="space-y-2">
              <input 
                type="email" 
                placeholder="Nhập email của bạn..." 
                className="w-full bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl text-xs outline-none focus:ring-1 ring-orange-500"
              />
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-xl text-xs font-bold transition-colors">
                Đăng ký nhận tin
              </button>
            </div>
          </div>
        </div>

        {/* Khối tóm tắt thông số liên hệ cuối trang */}
        <div className="mt-16 border-t border-white/10 border-b border-white/10 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs md:text-sm">
          <div>
            <p className="font-bold text-base text-white">0888 447 239 / 0919 417 239</p>
            <p className="text-slate-400 text-xs mt-0.5">Tổng đài tiếp nhận thông tin khách hàng</p>
          </div>
          <div>
            <p className="font-bold text-base text-white">nhatthiensonsaigon@gmail.com</p>
            <p className="text-slate-400 text-xs mt-0.5">Hòm thư tiếp nhận yêu cầu báo giá nhanh</p>
          </div>
          <div>
            <p className="font-bold text-base text-white">Thới An Ward, Quận 12, TP.HCM</p>
            <p className="text-slate-400 text-xs mt-0.5">Khu vực phân phối và bãi xe trung chuyển</p>
          </div>
        </div>

        <div className="pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-[11px] text-slate-500 font-medium">
          <p>© 2026 CÔNG TY TNHH TM DV VẬN TẢI NHẬT THIÊN SƠN SÀI GÒN. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Chính sách bảo mật dữ liệu</span>
            <span className="hover:text-white cursor-pointer">Điều khoản dịch vụ hệ thống</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ==========================================
// MAIN COMPONENT EXPORT CHÍNH
// ==========================================

export default function LogisticsPage() {
  const [isOpen, setIsOpen] = useState(false)

  const myLogo = 'https://i.postimg.cc/bJtpQcDy/nts.jpg'
  const maerskBg = 'https://images.unsplash.com/photo-1590496794008-383c8070b257?auto=format&fit=crop&q=80'

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden antialiased selection:bg-orange-500 selection:text-white">
      {/* 1. THANH ĐIỀU HƯỚNG HEADER */}
      <Header isOpen={isOpen} setIsOpen={setIsOpen} logo={myLogo} />

      {/* 2. KHU VỰC HERO BANNER VÀ ĐỊNH VỊ TRA CỨU ĐƠN HÀNG */}
      <HeroSection bgImg={maerskBg} />

      {/* 3. KHỐI THỐNG KÊ DOANH NGHIỆP */}
      <StatsSection />

      {/* 4. KHU VỰC CHI TIẾT HỆ THỐNG DỊCH VỤ VẬN TẢI */}
      <ServicesSection />

      {/* 5. KHU VỰC GIỚI THIỆU DOANH NGHIỆP & GIÁ TRỊ CỐT LÕI */}
      <AboutSection />

      {/* 6. KHU VỰC QUY TRÌNH GIAO NHẬN 4 BƯỚC SỐ HÓA */}
      <WorkflowSection />

      {/* 7. KHU VỰC ĐÁNH GIÁ THỰC TẾ TỪ CÁC ĐỐI TÁC */}
      <TestimonialsSection />

      {/* 8. KHU VỰC PHIẾU FORM KHẢO SÁT GIÁ VÀ THÔNG TIN TỔNG ĐÀI CHÍNH */}
      <QuoteFormSection />

      {/* 9. KHU VỰC CÁC CÂU HỎI THƯỜNG GẶP (FAQ CHUẨN) */}
      <FaqSection />

      {/* 10. KHU VỰC BẢN TIN KIẾN THỨC LOGISTICS & XU HƯỚNG */}
      <BlogSection />

      {/* 11. KHU VỰC BẢN ĐỒ VỊ TRÍ NHÚNG GOOGLE MAPS */}
      <MapSection />

      {/* 12. KHU VỰC CHÂN TRANG FOOTER DOANH NGHIỆP TỔNG THỂ */}
      <Footer logo={myLogo} />
    </main>
  )
}
