"use client"

import { MapPin, Globe2 } from "lucide-react"

const locations = [
  { name: "Việt Nam", position: { top: "45%", left: "72%" }, primary: true },
  { name: "Singapore", position: { top: "55%", left: "68%" } },
  { name: "Thượng Hải", position: { top: "38%", left: "75%" } },
  { name: "Tokyo", position: { top: "35%", left: "82%" } },
  { name: "Rotterdam", position: { top: "28%", left: "35%" } },
  { name: "Hamburg", position: { top: "26%", left: "36%" } },
  { name: "Los Angeles", position: { top: "38%", left: "12%" } },
  { name: "New York", position: { top: "35%", left: "22%" } },
  { name: "Dubai", position: { top: "42%", left: "52%" } },
  { name: "Sydney", position: { top: "72%", left: "85%" } },
]

const routes = [
  { from: "Việt Nam", to: "Thượng Hải" },
  { from: "Việt Nam", to: "Singapore" },
  { from: "Singapore", to: "Rotterdam" },
  { from: "Thượng Hải", to: "Los Angeles" },
  { from: "Rotterdam", to: "New York" },
  { from: "Dubai", to: "Việt Nam" },
]

export function GlobalMapSection() {
  return (
    <section className="py-20 md:py-28 bg-[#003366] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6B35]/20 text-[#FF6B35] text-sm font-medium mb-4">
            <Globe2 className="h-4 w-4" />
            Mạng lưới toàn cầu
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Kết nối <span className="text-[#4ECDC4]">toàn thế giới</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            Mạng lưới vận chuyển của chúng tôi kết nối hơn 200 cảng biển và 150 sân bay 
            trên khắp các châu lục, đảm bảo hàng hóa của bạn đến mọi nơi trên thế giới.
          </p>
        </div>

        {/* Map container */}
        <div className="relative bg-[#002244] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <div className="aspect-[2/1] md:aspect-[3/1] relative p-8 md:p-12">
            {/* World map SVG background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <svg viewBox="0 0 1000 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4ECDC4" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#FF6B35" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                {/* Simplified continents */}
                <path d="M150,150 Q200,100 280,120 L320,150 Q350,180 380,160 L420,140 Q480,120 520,150 L550,180 Q580,160 600,180 L580,220 Q550,250 500,240 L450,260 Q400,280 350,250 L300,230 Q250,210 200,230 L150,200 Z" fill="url(#mapGradient)" />
                <path d="M650,100 Q700,80 750,100 L800,130 Q850,150 880,180 L900,220 Q920,260 900,300 L850,340 Q800,360 750,340 L700,300 Q650,260 640,220 L650,180 Q660,140 650,100 Z" fill="url(#mapGradient)" />
                <path d="M80,180 Q100,160 140,170 L180,200 Q200,240 180,280 L140,310 Q100,320 80,290 L70,240 Q60,200 80,180 Z" fill="url(#mapGradient)" />
                <path d="M820,350 Q860,330 900,350 L930,400 Q940,440 920,460 L880,470 Q840,460 820,430 L810,390 Q810,360 820,350 Z" fill="url(#mapGradient)" />
              </svg>
            </div>

            {/* Animated route lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF6B35" stopOpacity="0" />
                  <stop offset="50%" stopColor="#FF6B35" stopOpacity="1" />
                  <stop offset="100%" stopColor="#4ECDC4" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Route lines with animation */}
              <path d="M720,225 Q600,150 350,140" stroke="url(#routeGradient)" strokeWidth="2" fill="none" strokeDasharray="10,5" className="animate-pulse" />
              <path d="M720,225 Q700,280 680,275" stroke="#4ECDC4" strokeWidth="2" fill="none" strokeDasharray="10,5" opacity="0.6" />
              <path d="M680,275 Q500,200 350,140" stroke="#FF6B35" strokeWidth="2" fill="none" strokeDasharray="10,5" opacity="0.6" />
              <path d="M350,140 Q250,120 120,190" stroke="#4ECDC4" strokeWidth="2" fill="none" strokeDasharray="10,5" opacity="0.6" />
              <path d="M720,225 Q750,180 750,175" stroke="#FF6B35" strokeWidth="2" fill="none" strokeDasharray="10,5" opacity="0.6" />
            </svg>

            {/* Location markers */}
            {locations.map((location, index) => (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                style={{ top: location.position.top, left: location.position.left }}
              >
                {/* Pulse effect for primary location */}
                {location.primary && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#FF6B35]/30 animate-ping" />
                  </div>
                )}
                
                {/* Marker */}
                <div className={`relative flex items-center justify-center w-4 h-4 md:w-5 md:h-5 rounded-full ${
                  location.primary ? 'bg-[#FF6B35]' : 'bg-[#4ECDC4]'
                } shadow-lg transition-transform group-hover:scale-150`}>
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  <span className="text-sm font-medium text-[#003366]">{location.name}</span>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white" />
                </div>
              </div>
            ))}
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 md:p-8 bg-[#001a33] border-t border-white/10">
            {[
              { value: "200+", label: "Cảng biển" },
              { value: "150+", label: "Sân bay" },
              { value: "50+", label: "Quốc gia" },
              { value: "24/7", label: "Hỗ trợ" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#FF6B35] mb-1">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Region cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { region: "Châu Á - Thái Bình Dương", ports: "80+ cảng", transit: "3-7 ngày" },
            { region: "Châu Âu", ports: "60+ cảng", transit: "18-25 ngày" },
            { region: "Châu Mỹ", ports: "40+ cảng", transit: "20-30 ngày" },
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FF6B35]/20 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-[#FF6B35]" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">{item.region}</h3>
                <p className="text-white/60 text-sm">{item.ports} • Transit: {item.transit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
