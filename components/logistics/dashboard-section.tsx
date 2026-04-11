"use client"

import { Package, Ship, Clock, CheckCircle2, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const dashboardStats = [
  {
    title: "Lô hàng đang hoạt động",
    value: "1,248",
    change: "+12%",
    trend: "up",
    icon: Package,
    color: "#FF6B35",
    description: "So với tháng trước",
  },
  {
    title: "Tàu đang vận hành",
    value: "56",
    change: "+8%",
    trend: "up",
    icon: Ship,
    color: "#4ECDC4",
    description: "Trên các tuyến",
  },
  {
    title: "Thời gian giao hàng TB",
    value: "4.2",
    unit: "ngày",
    change: "-15%",
    trend: "down",
    icon: Clock,
    color: "#003366",
    description: "Cải thiện đáng kể",
  },
  {
    title: "Đơn hàng hoàn thành",
    value: "15,847",
    change: "+23%",
    trend: "up",
    icon: CheckCircle2,
    color: "#22c55e",
    description: "Trong tháng này",
  },
]

const recentShipments = [
  { id: "NTS-789456", route: "HCM → Singapore", status: "Đang vận chuyển", progress: 65, eta: "2 ngày" },
  { id: "NTS-789123", route: "Hải Phòng → Rotterdam", status: "Đang vận chuyển", progress: 35, eta: "18 ngày" },
  { id: "NTS-788999", route: "Đà Nẵng → Tokyo", status: "Đang xử lý", progress: 15, eta: "5 ngày" },
  { id: "NTS-788876", route: "HCM → Los Angeles", status: "Đã giao", progress: 100, eta: "Hoàn thành" },
]

export function DashboardSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#f8fafc]">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#003366]/10 text-[#003366] text-sm font-medium mb-4">
            <TrendingUp className="h-4 w-4" />
            Bảng điều khiển thời gian thực
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003366] mb-6">
            Theo dõi <span className="text-[#FF6B35]">hoạt động</span> của bạn
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hệ thống quản lý logistics thông minh giúp bạn theo dõi mọi lô hàng 
            và tối ưu hóa chuỗi cung ứng một cách hiệu quả.
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {dashboardStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
                  style={{ backgroundColor: stat.color }}
                />
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}15` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: stat.color }} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-[#003366]">{stat.value}</span>
                    {stat.unit && <span className="text-lg text-muted-foreground">{stat.unit}</span>}
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`flex items-center text-sm font-medium ${
                      stat.trend === "up" && stat.title !== "Thời gian giao hàng TB" 
                        ? "text-green-600" 
                        : stat.trend === "down" && stat.title === "Thời gian giao hàng TB"
                          ? "text-green-600"
                          : "text-red-500"
                    }`}>
                      {stat.trend === "up" ? (
                        <ArrowUpRight className="h-4 w-4" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4" />
                      )}
                      {stat.change}
                    </span>
                    <span className="text-sm text-muted-foreground">{stat.description}</span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Recent shipments table */}
        <Card className="border-0 shadow-xl overflow-hidden">
          <CardHeader className="bg-[#003366] text-white">
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5 text-[#FF6B35]" />
              Lô hàng gần đây
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#f8fafc] border-b">
                  <tr>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-[#003366]">Mã lô hàng</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-[#003366]">Tuyến đường</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-[#003366]">Trạng thái</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-[#003366]">Tiến độ</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-[#003366]">ETA</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {recentShipments.map((shipment, index) => (
                    <tr key={index} className="hover:bg-[#f8fafc] transition-colors">
                      <td className="py-4 px-6">
                        <span className="font-mono font-semibold text-[#003366]">{shipment.id}</span>
                      </td>
                      <td className="py-4 px-6 text-muted-foreground">{shipment.route}</td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          shipment.status === "Đã giao" 
                            ? "bg-green-100 text-green-700"
                            : shipment.status === "Đang vận chuyển"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-amber-100 text-amber-700"
                        }`}>
                          {shipment.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full rounded-full transition-all duration-500"
                              style={{ 
                                width: `${shipment.progress}%`,
                                backgroundColor: shipment.progress === 100 ? "#22c55e" : "#FF6B35"
                              }}
                            />
                          </div>
                          <span className="text-sm text-muted-foreground">{shipment.progress}%</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-muted-foreground">{shipment.eta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
