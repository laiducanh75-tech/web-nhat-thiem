import { Truck, Package, Warehouse } from "lucide-react"

const services = [
  {
    title: "Vận tải nội địa",
    description: "Dịch vụ vận chuyển hàng hóa chuyên nghiệp tuyến Sóc Sơn - Sài Gòn và toàn quốc với đội ngũ xe tải hiện đại.",
    icon: Truck,
  },
  {
    title: "Phân phối Sơn & Vật liệu",
    description: "Cung cấp các dòng sơn chính hãng chất lượng cao tại Sài Gòn, đảm bảo uy tín và giá cả cạnh tranh nhất.",
    icon: Package,
  },
  {
    title: "Dịch vụ Kho bãi",
    description: "Hệ thống kho bãi an toàn, hỗ trợ lưu trữ và kiểm soát hàng hóa chuyên nghiệp 24/7 cho khách hàng.",
    icon: Warehouse,
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white dark:bg-slate-900" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Dịch vụ của Nhật Thiêm</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 border rounded-xl hover:shadow-lg transition-shadow bg-slate-50 dark:bg-slate-800">
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
