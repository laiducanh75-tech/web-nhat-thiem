import React from 'react';

export default function GioiThieuPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans antialiased selection:bg-amber-500 selection:text-stone-950">
      
      {/* 1. HERO SECTION - ĐẦU TRANG HOÀNH TRÁNG */}
      <header className="relative py-24 px-6 text-center bg-gradient-to-b from-stone-900 to-stone-950 border-b border-stone-900">
        <div className="max-w-4xl mx-auto">
          <span className="text-amber-500 tracking-[0.25em] text-xs font-bold uppercase block mb-4">
            Công Ty TNHH TM DV Vận Tải Nhất Thiên Sơn Sài Gòn
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-100 leading-tight mb-6">
            Năng Lực Đóng Hàng & <br />
            <span className="text-amber-500">Vận Chuyển Container</span>
          </h1>
          <p className="text-stone-400 text-base md:text-lg max-w-2xl mx-auto mb-8 font-light">
            Hình ảnh nhật ký ghi nhận quy trình kiểm tra, nghiệm thu vỏ container sạch sẽ, quấn pallet an toàn và đóng hàng thực tế đạt chuẩn xuất khẩu.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:0888447239" className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-stone-950 font-medium rounded-sm transition-all duration-350 shadow-lg text-sm tracking-wider uppercase">
              Liên Hệ Ngay: 0888.447.239
            </a>
          </div>
        </div>
      </header>

      {/* 2. KHỐI TIÊU CHUẨN NĂNG LỰC */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-stone-900">
        <div className="p-6 bg-stone-900/50 border border-stone-850 rounded-sm">
          <div className="text-amber-500 text-2xl mb-3">✓</div>
          <h3 className="font-serif text-lg text-stone-200 mb-2">Vỏ Container Đạt Chuẩn</h3>
          <p className="text-sm text-stone-400 font-light leading-relaxed">100% container rỗng được kiểm tra kỹ lưỡng từ sàn, vách, cửa đóng kín kẽ, không han gỉ, không lọt sáng trước khi xếp hàng.</p>
        </div>
        <div className="p-6 bg-stone-900/50 border border-stone-850 rounded-sm">
          <div className="text-amber-500 text-2xl mb-3">✓</div>
          <h3 className="font-serif text-lg text-stone-200 mb-2">Đóng Gói Chống Va Đập</h3>
          <p className="text-sm text-stone-400 font-light leading-relaxed">Hàng hóa được cố định vững chắc trên pallet gỗ, quấn màng PE nhiều lớp chống ẩm mốc dịch chuyển trong suốt quá trình vận tải.</p>
        </div>
        <div className="p-6 bg-stone-900/50 border border-stone-850 rounded-sm">
          <div className="text-amber-500 text-2xl mb-3">✓</div>
          <h3 className="font-serif text-lg text-stone-200 mb-2">Giám Sát 24/7 Linh Hoạt</h3>
          <p className="text-sm text-stone-400 font-light leading-relaxed">Đáp ứng tiến độ đóng hàng liên tục bất kể ngày đêm (ca kíp bốc xếp ca đêm), chụp ảnh nghiệm thu từng công đoạn rõ ràng công khai.</p>
        </div>
      </section>

      {/* 3. NHẬT KÝ HÌNH ẢNH THỰC TẾ (8 Ô LƯỚI CHI TIẾT) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber-500 tracking-[0.3em] text-xs uppercase block mb-3">— Thực Tế Nghiệm Thu</span>
          <h2 className="font-serif text-2xl md:text-3xl text-stone-100">Quy Trình Đóng Hàng Từng Bước</h2>
          <div className="w-12 h-0.5 bg-amber-500 mx-auto mt-4 opacity-50"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          
          {/* Ảnh 1 */}
          <div className="overflow-hidden border border-stone-850 rounded-sm aspect-square bg-stone-900 group relative">
            <img src="/images/cont-1.jpg" alt="Kiểm tra vỏ container rỗng" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-stone-950 to-transparent pt-10">
              <p className="text-xs text-stone-300 font-light">1. Kiểm tra vỏ cont rỗng</p>
            </div>
          </div>

          {/* Ảnh 2 */}
          <div className="overflow-hidden border border-stone-850 rounded-sm aspect-square bg-stone-900 group relative">
            <img src="/images/cont-2.jpg" alt="Kiểm tra sàn container sạch sẽ" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-stone-950 to-transparent pt-10">
              <p className="text-xs text-stone-300 font-light">2. Nghiệm thu sàn đạt chuẩn</p>
            </div>
          </div>

          {/* Ảnh 3 */}
          <div className="overflow-hidden border border-stone-850 rounded-sm aspect-square bg-stone-900 group relative">
            <img src="/images/cont-3.jpg" alt="Hàng hóa quấn pallet màng PE" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-stone-950 to-transparent pt-10">
              <p className="text-xs text-stone-300 font-light">3. Quấn pallet chống dịch chuyển</p>
            </div>
          </div>

          {/* Ảnh 4 */}
          <div className="overflow-hidden border border-stone-850 rounded-sm aspect-square bg-stone-900 group relative">
            <img src="/images/cont-4.jpg" alt="Kiểm tra an ninh hàng hóa" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-stone-950 to-transparent pt-10">
              <p className="text-xs text-stone-300 font-light">4. Kiểm tra an ninh nghiêm ngặt</p>
            </div>
          </div>

          {/* Ảnh 5 */}
          <div className="overflow-hidden border border-stone-850 rounded-sm aspect-square bg-stone-900 group relative">
            <img src="/images/cont-5.jpg" alt="Bốc xếp hàng vào container" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-stone-950 to-transparent pt-10">
              <p className="text-xs text-stone-300 font-light">5. Sắp xếp hàng vuông vắn</p>
            </div>
          </div>

          {/* Ảnh 6 */}
          <div className="overflow-hidden border border-stone-850 rounded-sm aspect-square bg-stone-900 group relative">
            <img src="/images/cont-6.jpg" alt="Đóng hàng tăng ca ca đêm" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-stone-950 to-transparent pt-10">
              <p className="text-xs text-stone-300 font-light">6. Giám sát bốc xếp ca đêm</p>
            </div>
          </div>

          {/* Ảnh 7 */}
          <div className="overflow-hidden border border-stone-850 rounded-sm aspect-square bg-stone-900 group relative">
            <img src="/images/cont-7.jpg" alt="Hàng hóa xếp kín container" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-stone-950 to-transparent pt-10">
              <p className="text-xs text-stone-300 font-light">7. Hoàn tất xếp kín hàng hóa</p>
            </div>
          </div>

          {/* Ảnh 8 */}
          <div className="overflow-hidden border border-stone-850 rounded-sm aspect-square bg-stone-900 group relative">
            <img src="/images/cont-8.jpg" alt="Đóng cửa container hãng ONE kẹp chì" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-stone-950 to-transparent pt-10">
              <p className="text-xs text-stone-300 font-light">8. Đóng cửa cont hãng ONE & Kẹp chì</p>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER ĐƠN GIẢN CUỐI TRANG */}
      <footer className="py-12 text-center text-xs text-stone-500 border-t border-stone-900">
        <p>© 2026 Nhất Thiên Sơn Sài Gòn Logistics. All rights reserved.</p>
        <p className="mt-1 className-stone-600">Địa chỉ: Thoi An Ward, Quận 12, TP. Hồ Chí Minh</p>
      </footer>

    </div>
  );
}
