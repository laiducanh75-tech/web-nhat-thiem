import { Search, ChevronRight } from 'lucide-react'

export const HeroSection = () => (
  <section className="relative h-[600px] flex items-center text-white overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1590496794008-383c8070b257?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Port" />
      <div className="absolute inset-0 bg-[#002b5b]/70 backdrop-blur-[1px]"></div>
    </div>
    <div className="container mx-auto px-4 relative z-10">
      <h1 className="text-5xl md:text-7xl font-black mb-4">Giải pháp Logistics <span className="text-orange-400">Thông minh</span></h1>
      <p className="text-2xl md:text-3xl font-bold mb-10 text-green-400">Nhanh chóng • Đáng tin cậy • Toàn cầu</p>
      <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-md max-w-2xl shadow-2xl">
        <label className="block font-bold mb-3 flex items-center gap-2"><Search size={20}/> Theo dõi lộ trình đơn hàng</label>
        <div className="flex flex-col sm:flex-row gap-2">
          <input type="text" placeholder="Nhập mã vận đơn (VD: NTS-123456)" className="flex-1 px-5 py-4 rounded-xl text-black outline-none" />
          <button className="bg-[#f05a28] px-8 py-4 rounded-xl font-black hover:bg-[#d44d1f] transition-all uppercase">Theo dõi</button>
        </div>
      </div>
    </div>
  </section>
)
