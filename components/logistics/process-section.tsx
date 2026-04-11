import { ClipboardList, Settings, Truck, Target } from 'lucide-react'

export const ProcessSection = () => (
  <section id="quy-trinh" className="py-20 bg-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-black text-[#002b5b] mb-12 uppercase tracking-tight">Quy trình <span className="text-orange-500">chuyên nghiệp</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { step: "01", title: "Nhận đơn", icon: <ClipboardList size={40}/>, desc: "Tiếp nhận yêu cầu và báo giá nhanh." },
          { step: "02", title: "Xử lý hàng", icon: <Settings size={40}/>, desc: "Kiểm tra, đóng gói chuẩn quốc tế." },
          { step: "03", title: "Vận chuyển", icon: <Truck size={40}/>, desc: "Giao nhận an toàn qua GPS." },
          { step: "04", title: "Hoàn tất", icon: <Target size={40}/>, desc: "Giao tận tay và đối soát chứng từ." }
        ].map((item, i) => (
          <div key={i} className="p-8 rounded-3xl bg-slate-50 border-b-4 border-orange-500 hover:shadow-2xl transition-all group">
            <div className="text-5xl font-black text-slate-200 mb-4 group-hover:text-orange-200 transition-colors">{item.step}</div>
            <div className="text-[#002b5b] flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-slate-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)
