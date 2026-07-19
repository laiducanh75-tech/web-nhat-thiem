'use client';

import React, { useState, useEffect } from 'react';
import {
  Shield,
  Award,
  Users,
  Target,
  Briefcase,
  History,
  FileText,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Menu,
  X,
  Building2,
  Scale,
  DollarSign,
  PieChart,
  Truck,
  Ship,
  Plane,
  Warehouse,
  Globe2,
  Calendar,
  Layers,
  HeartHandshake,
  TrendingUp,
  Cpu,
  UserCheck,
  Download,
  ExternalLink,
  ChevronDown,
  Info,
  Clock,
  AlertTriangle,
  FileSpreadsheet,
  Settings,
  ShieldCheck,
  Activity,
  Zap,
  BookOpen,
  Lock,
  MessageSquare
} from 'lucide-react'

// ============================================================================
// HỆ THỐNG CƠ SỞ DỮ LIỆU NỘI BỘ (MOCK DATA) - TRIỂN KHAI CHI TIẾT TƯỜNG MINH 100%
// ============================================================================

export interface MilestoneType {
  year: string;
  title: string;
  desc: string;
  tagline: string;
  details: string[];
}

export const milestones: MilestoneType[] = [
  {
    year: '2018',
    title: 'Khởi Nguyên Thành Lập & Định Hình Tuyến Trục Nội Địa',
    desc: 'Thành lập với đội ngũ ban đầu gồm 10 chuyên viên và 5 xe tải thế hệ mới, tập trung vào tuyến vận tải nội địa trục Nam - Trung.',
    tagline: 'Đặt viên gạch đầu tiên cho chuỗi cung ứng bền vững',
    details: [
      'Hoàn thiện giấy phép đăng ký kinh doanh và xây dựng quy trình vận hành cốt lõi.',
      'Thiết lập tuyến chạy cố định Nam - Trung với tần suất 2 chuyến/ngày.',
      'Ký kết hợp đồng nguyên tắc với 3 đối tác sản xuất hàng tiêu dùng đầu tiên.',
      'Đạt cột mốc 10.000 tấn hàng hóa luân chuyển an toàn trong năm đầu vận hành.'
    ]
  },
  {
    year: '2020',
    title: 'Chuyển Đổi Mô Hình, Phát Triển Hạ Tầng & Mở Rộng Kho Bãi',
    desc: 'Chính thức tái cấu trúc doanh nghiệp, mở rộng hệ thống kho trung chuyển chiến lược tại Phường Thới An, Quận 12. Nâng quy mô đội xe lên 35 chiếc đa trọng tải.',
    tagline: 'Xây dựng hạ tầng cơ sở vật chất vững chắc tại khu vực trọng điểm',
    details: [
      'Đưa vào hoạt động kho trung chuyển Thoi An Ward phục vụ phân phối nội đô.',
      'Đầu tư đồng bộ hệ thống xe tải thùng kín từ 1.5 tấn đến 8 tấn.',
      'Áp dụng quy trình kiểm soát an ninh hàng hóa 5 lớp tại trung tâm lưu kho.',
      'Nâng cao năng lực bốc xếp cơ giới hóa tự động đạt 95% tỷ lệ giải phóng xe.'
    ]
  },
  {
    year: '2022',
    title: 'Bứt Phá Vận Tải Quốc Tế & Kết Nối Toàn Cầu',
    desc: 'Ký kết hợp tác chiến lược với 5 hãng tàu lớn toàn cầu (Maersk, MSC, COSCO, ONE, CMA CGM). Khai thác mạnh mẽ tuyến đường biển quốc tế và dịch vụ hải quan trọn gói.',
    tagline: 'Vươn tầm ra biển lớn, hoàn thiện chuỗi dịch vụ Forwarding chuyên sâu',
    details: [
      'Gia nhập các hiệp hội logistics lớn thế giới để lấy chứng nhận uy tín.',
      'Mở rộng mạng lưới đại lý forwarder nước ngoài độc quyền tại khu vực ASEAN.',
      'Thành lập tổ phản ứng nhanh xử lý hiện trường tại Cát Lái và Cái Mép.',
      'Khai thông dòng chảy hàng hóa đi các thị trường lớn như Mỹ và EU.'
    ]
  },
  {
    year: '2024',
    title: 'Số Hóa Toàn Diện Chuỗi Cung Ứng & Ứng Dụng Nền Tảng AI',
    desc: 'Áp dụng thành công hệ thống quản lý kho hàng WMS và định vị vận tải TMS thời gian thực tích hợp công nghệ AI tối ưu lộ trình.',
    tagline: 'Tiên phong công nghệ số hóa quy trình quản trị logistics',
    details: [
      'Triển khai toàn diện cổng thông tin khách hàng trực tuyến theo dõi real-time.',
      'Tích hợp công nghệ AI tối ưu hóa lộ trình xe chạy cắt giảm 15% chi phí nhiên liệu.',
      'Chuẩn hóa mã vạch QR code trên toàn bộ vòng đời kiện hàng lưu kho.',
      'Tự động hóa 80% quy trình xuất hóa đơn chứng từ hải quan điện tử.'
    ]
  },
  {
    year: '2026',
    title: 'Khẳng Định Vị Thế Dẫn Đầu & Chuyển Đổi Vận Tải Xanh',
    desc: 'Đón đầu xu hướng Logistics Xanh, nâng cấp 30% đội xe sang tiêu chuẩn giảm phát thải, hoàn thiện hệ sinh thái hậu cần trọn gói.',
    tagline: 'Hướng tới tương lai phát triển bền vững và bảo vệ môi trường',
    details: [
      'Hoàn thành nâng cấp đội xe đầu kéo Mỹ đạt chứng chỉ khí thải Euro 5.',
      'Đạt mục tiêu tăng trưởng doanh thu vượt ngưỡng 200 Tỷ VNĐ.',
      'Hoàn thiện giải pháp chuỗi cung ứng khép kín 4PL cho tập đoàn đa quốc gia.',
      'Mở rộng diện tích hệ thống kho bãi tích hợp năng lượng mặt trời áp mái.'
    ]
  }
];

export interface LeaderType {
  name: string;
  role: string;
  bio: string;
  img: string;
  qualifications: string[];
  achievements: string[];
}

export const leadershipTeam: LeaderType[] = [
  {
    name: 'Nguyễn Thiên Sơn',
    role: 'Chủ tịch HĐQT & Sáng lập viên',
    bio: 'Hơn 20 năm kinh nghiệm điều hành trực tiếp trong ngành vận tải biển, giao nhận quốc tế và quản trị chuỗi cung ứng tổng thể. Cựu cố vấn chiến lược cấp cao cho các tập đoàn logistics đa quốc gia tại Việt Nam.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300',
    qualifications: [
      'Thạc sĩ Kinh tế Đối ngoại - Đại học Ngoại Thương',
      'Chứng chỉ Chuyên gia Logistics Quốc tế cấp cao FIATA',
      'Thành viên Ban cố vấn Hiệp hội Vận tải Ô tô Việt Nam'
    ],
    achievements: [
      'Dẫn dắt Nhật Thiên Sơn Sài Gòn từ công ty khởi nghiệp thành doanh nghiệp trăm tỷ.',
      'Xây dựng thành công mối quan hệ chiến lược với các liên minh hãng tàu quốc tế.',
      'Nhận kỷ niệm chương vì sự nghiệp phát triển hạ tầng logistics miền Nam.'
    ]
  },
  {
    name: 'Trần Nhật Minh',
    role: 'Giám đốc Điều hành (CEO)',
    bio: 'Thạc sĩ Quản trị Chuỗi cung ứng toàn cầu tại Đại học Quốc gia Singapore (NUS). Chuyên gia hàng đầu trong lĩnh vực số hóa quy trình vận hành logistics, tái cấu trúc mô hình doanh nghiệp và tối ưu hóa chi phí cốt lõi.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300',
    qualifications: [
      'Thạc sĩ Quản trị Chuỗi cung ứng (SCM) - NUS Singapore',
      'Kỹ sư Hệ thống Công nghiệp - Đại học Bách Khoa TP.HCM',
      'Chứng chỉ Quản trị Dự án chuyên nghiệp PMP'
    ],
    achievements: [
      'Số hóa thành công 100% quy trình chứng từ vận hành nội bộ qua ERP.',
      'Giúp cắt giảm 22% chi phí quản lý vận hành không hiệu quả trong 2 năm.',
      'Trực tiếp điều phối và ký kết các gói thầu vận chuyển dự án năng lượng lớn.'
    ]
  },
  {
    name: 'Lê Thị Thu Thủy',
    role: 'Giám đốc Khối Hải quan & Pháp lý',
    bio: 'Hơn 15 năm kinh nghiệm làm việc chuyên sâu với Cục Hải quan TP.HCM và các tỉnh lân cận. Chuyên gia xử lý các loại hồ sơ chuyên ngành phức tạp, áp mã HS code chính xác và đại diện doanh nghiệp giải trình dự án thông quan.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
    qualifications: [
      'Cử nhân Luật Thương mại - Đại học Luật TP.HCM',
      'Chứng chỉ Khai báo Hải quan chuyên nghiệp do Tổng cục Hải quan cấp',
      'Chuyên gia cố vấn tranh chấp thương mại quốc tế'
    ],
    achievements: [
      'Tỷ lệ thông quan hàng đúng hạn trong ngày đạt mức kỷ lục 99.4%.',
      'Giải quyết triệt để hơn 5.000 tờ khai hải quan luồng vàng, luồng đỏ khó khăn.',
      'Xây dựng cẩm nang tra cứu HS code nội bộ áp dụng hiệu quả cho toàn công ty.'
    ]
  },
  {
    name: 'Marcus Hoàng',
    role: 'Giám đốc Phát triển Thị trường Quốc tế',
    bio: 'Chuyên gia xây dựng và quản lý mạng lưới đại lý logistics toàn cầu tại hơn 45 quốc gia. Dày dặn kinh nghiệm đàm phán hợp đồng giá cước thương mại quốc tế (Freight Forwarding) và tối ưu hóa tuyến đường đa phương thức.',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300',
    qualifications: [
      'Cử nhân Quản trị Kinh doanh Quốc tế - RMIT University',
      'Chứng chỉ Quản trị Logistics Đa phương thức - ITL Academy',
      'Thành viên Mạng lưới Giao nhận Toàn cầu WCA'
    ],
    achievements: [
      'Mở rộng thành công mạng lưới liên minh lên tới 120 đối tác quốc tế.',
      'Tăng trưởng doanh thu mảng logistics quốc tế ổn định ở mức 35% mỗi năm.',
      'Đại diện doanh nghiệp đàm phán thành công hợp đồng cước ưu đãi từ Maersk.'
    ]
  }
];

export interface LegalDocType {
  id: string;
  name: string;
  agency: string;
  status: string;
  validity: string;
  scope: string;
}

export const legalDocuments: LegalDocType[] = [
  { 
    id: 'GP-01', 
    name: 'Giấy phép Đăng ký Kinh doanh số 0315xxxxxx', 
    agency: 'Sở Kế hoạch & Đầu tư TP.HCM', 
    status: 'Hợp pháp / Hiệu lực vô thời hạn',
    validity: 'Đăng ký lần đầu năm 2018, thay đổi bổ sung lần gần nhất năm 2024.',
    scope: 'Kinh doanh dịch vụ đại lý vận tải, logistics, lưu kho hàng hóa và thương mại quốc tế.'
  },
  { 
    id: 'GP-02', 
    name: 'Giấy phép Kinh doanh Vận tải bằng xe ô tô trọn gói', 
    agency: 'Sở Giao thông Vận tải TP.HCM', 
    status: 'Đã cấp đổi / Hiệu lực đến 2030',
    validity: 'Gia hạn kiểm định định kỳ, tuân thủ 100% quy định gắn thiết bị giám sát hành trình.',
    scope: 'Vận chuyển hàng hóa bằng container, xe tải trọng lớn đường bộ liên tỉnh toàn quốc.'
  },
  { 
    id: 'GP-03', 
    name: 'Chứng nhận Đại lý Hải quan tiêu chuẩn Tổng cục', 
    agency: 'Tổng cục Hải quan Việt Nam', 
    status: 'Hợp chuẩn toàn diện',
    validity: 'Báo cáo hoạt động định kỳ hàng quý, nhân sự có mã số đại lý hợp chuẩn.',
    scope: 'Thay mặt chủ hàng làm thủ tục khai báo, nộp thuế, kiểm hóa tại tất cả chi cục cửa khẩu.'
  },
  { 
    id: 'GP-04', 
    name: 'Chứng chỉ Hệ thống Quản lý Chất lượng ISO 9001:2015', 
    agency: 'Tổ chức Chứng nhận Quốc tế SGS', 
    status: 'Đạt chuẩn / Giám sát hàng năm',
    validity: 'Được đánh giá độc lập định kỳ hàng năm bởi chuyên gia SGS Thụy Sĩ.',
    scope: 'Áp dụng cho toàn bộ quy trình cung ứng dịch vụ logistics, điều độ vận tải và quản lý kho bãi.'
  },
  { 
    id: 'GP-05', 
    name: 'Chứng nhận Thành viên Hiệp hội Logistics Việt Nam (VLA)', 
    agency: 'Ban chấp hành VLA', 
    status: 'Thành viên chính thức',
    validity: 'Hoạt động tích cực đóng góp cho sự phát triển ngành hậu cần quốc gia.',
    scope: 'Liên kết trao đổi nghiệp vụ, bảo vệ quyền lợi pháp lý và cập nhật cơ chế chính sách mới.'
  }
];

export interface CapacityType {
  category: string;
  detail: string;
  specification: string[];
  metrics: string;
}

export const capacityInfrastructure: CapacityType[] = [
  {
    category: 'Đội xe vận tải đường bộ chuyên dụng',
    detail: '65 xe container đầu kéo Mỹ thế hệ mới, 40 xe tải thùng kín (từ 1.5 tấn đến 15 tấn), 15 xe rơ-moóc chuyên dụng hàng siêu trường siêu trọng.',
    specification: [
      '100% phương tiện trang bị định vị GPS hộp đen hợp chuẩn kết nối dữ liệu Bộ Giao thông.',
      'Đội ngũ lái xe chạy đường dài có thâm niên tối thiểu 5 năm, đào tạo kỹ năng phòng vệ.',
      'Lịch bảo dưỡng định kỳ nghiêm ngặt tại xưởng dịch vụ ủy quyền của hãng.'
    ],
    metrics: '120+ Phương tiện sở hữu'
  },
  {
    category: 'Hệ thống kho bãi lưu giữ phân phối',
    detail: 'Tổng diện tích kho đạt 25,000 m2. Trong đó Kho trung tâm đặt tại Quận 12 (5,000 m2), Kho CFS tại Cảng Cát Lái (10,000 m2), Kho ngoại quan tại Bình Dương (10,000 m2).',
    specification: [
      'Hệ thống kệ chứa hàng Selective nhiều tầng tối ưu hóa diện tích chứa hàng.',
      'Trang bị hệ thống kiểm soát nhiệt độ và độ ẩm tự động liên tục.',
      'Hệ thống PCCC tự động đạt chuẩn thẩm duyệt của Cục Cảnh sát PCCC.'
    ],
    metrics: '25,000 m2 Tổng sàn kho'
  },
  {
    category: 'Hạ tầng công nghệ thông tin lõi',
    detail: 'Hệ thống máy chủ đám mây bảo mật cao, phần mềm TMS định vị GPS thời gian thực cho 100% phương tiện, phần mềm quản lý kho thông minh WMS chuẩn quét mã vạch.',
    specification: [
      'Tích hợp API kết nối trực tiếp với hệ thống quản trị ERP của các đối tác sản xuất.',
      'Hệ thống cảnh báo tự động SMS/Email khi đơn hàng gặp sự cố trên đường.',
      'Bảo mật dữ liệu thông tin khách hàng bằng mã hóa đầu cuối SHA-256.'
    ],
    metrics: 'Số hóa 100% quy trình'
  },
  {
    category: 'Mạng lưới đại lý Forwarder toàn cầu',
    detail: 'Thỏa thuận đại lý độc quyền và liên kết chặt chẽ với hơn 120 đối tác Forwarder tại các thị trường trọng điểm kinh tế trên thế giới.',
    specification: [
      'Sở hữu hợp đồng giá cước cạnh tranh đi các tuyến chính Bắc Mỹ, Châu Âu, Bắc Á.',
      'Khả năng xử lý dịch vụ DDP/DDU trọn gói giao tận kho người mua ở nước ngoài.',
      'Đại lý hỗ trợ giải quyết sự cố phát sinh tại cảng đến nước sở tại ngay lập tức.'
    ],
    metrics: '120+ Đối tác toàn cầu'
  }
];

export interface DepartmentType {
  id: string;
  name: string;
  staff: string;
  function: string;
  kpis: string[];
  subTeams: string[];
}

export const detailedDepartments: DepartmentType[] = [
  {
    id: 'dept-1',
    name: 'Khối Vận Tải Nội Địa & Điều Độ',
    staff: '120 nhân sự (Bao gồm đội ngũ tài xế & điều độ hiện trường)',
    function: 'Quản lý, điều hành toàn bộ lịch trình xe chạy toàn quốc, tối ưu hóa cung đường, bảo dưỡng phương tiện kỹ thuật định kỳ và giám sát an toàn hàng hóa dọc đường.',
    kpis: [
      'Tỷ lệ giao hàng đúng giờ cam kết (On-Time Delivery): > 98%',
      'Tỷ lệ tổn thất, hư hỏng hàng hóa trong quá trình chạy đường dài: < 0.02%',
      'Tối ưu hóa thời gian quay đầu xe đầu kéo: Dưới 4 giờ tại cảng đích'
    ],
    subTeams: ['Tổ điều độ trung tâm', 'Đội tài xế đường dài', 'Đội kiểm soát kỹ thuật phương tiện']
  },
  {
    id: 'dept-2',
    name: 'Khối Logistics Quốc Tế & Cước',
    staff: '45 chuyên viên chứng từ & quản lý giá cước',
    function: 'Liên hệ làm việc trực tiếp với các hãng tàu quốc tế, đặt chỗ (booking), theo dõi sát sao lịch trình tàu biển/máy bay, xử lý vận đơn (B/L, AWB) và làm việc với hệ thống đại lý nước ngoài.',
    kpis: [
      'Thời gian phát hành vận đơn nháp (Draft B/L) cho khách hàng: Dưới 2 giờ',
      'Tỷ lệ đặt chỗ thành công trong mùa cao điểm vận tải: > 95%',
      'Phản hồi báo giá cước quốc tế cho khách hàng: Dưới 30 phút'
    ],
    subTeams: ['Tổ Freight Forwarding', 'Tổ chứng từ xuất nhập khẩu', 'Tổ quan hệ hãng tàu']
  },
  {
    id: 'dept-3',
    name: 'Phòng Khai Thác Hiện Trường Hải Quan',
    staff: '30 chuyên viên hiện trường chuyên trách (Ops)',
    function: 'Trực tiếp cắm chốt tại các cửa khẩu, cảng biển lớn để làm thủ tục mở tờ khai, kiểm hóa, kiểm tra chuyên ngành và thực hiện thông quan hàng hóa nhanh chóng.',
    kpis: [
      'Thời gian thông quan tờ khai luồng xanh: Dưới 15 phút từ khi truyền dữ liệu',
      'Thời gian xử lý thông quan tờ khai luồng vàng/đỏ: Dưới 4 giờ làm việc',
      'Không để phát sinh chi phí lưu container, lưu kho bãi (Demurrage/Detention) do lỗi chứng từ'
    ],
    subTeams: ['Đội hiện trường Cảng Cát Lái', 'Đội hiện trường Cảng Cái Mép', 'Đội thông quan Sân bay Tân Sơn Nhất']
  },
  {
    id: 'dept-4',
    name: 'Phòng Chăm Sóc Khách Hàng & Kinh Doanh',
    staff: '20 nhân sự túc trực 24/7/365',
    function: 'Cập nhật trạng thái đơn hàng thời gian thực cho doanh nghiệp đối tác, tiếp nhận xử lý khiếu nại phát sinh, tư vấn lộ trình tối ưu và phát hành báo giá thầu nhanh.',
    kpis: [
      'Chỉ số hài lòng của khách hàng đối tác doanh nghiệp (CSAT): > 96%',
      'Thời gian giải quyết triệt để khiếu nại phát sinh: Dưới 2 giờ',
      'Tần suất cập nhật báo cáo lộ trình cho chủ hàng: 2 lần/ngày cố định'
    ],
    subTeams: ['Đội phát triển thị trường (Sales)', 'Đội chăm sóc khách hàng chuyên sâu (CS)', 'Tổ hỗ trợ kỹ thuật phần mềm']
  }
];

export interface FinancialType {
  year: string;
  revenue: string;
  profit: string;
  growth: string;
  taxStatus: string;
  auditor: string;
}

export const FinancialReports: FinancialType[] = [
  { 
    year: '2023', 
    revenue: '120 Tỷ VNĐ', 
    profit: '14.5 Tỷ VNĐ', 
    growth: '+18%', 
    taxStatus: 'Đã hoàn thành 100% nghĩa vụ thuế đối với ngân sách nhà nước',
    auditor: 'Công ty Kiểm toán Độc lập AFC Việt Nam'
  },
  { 
    year: '2024', 
    revenue: '155 Tỷ VNĐ', 
    profit: '19.2 Tỷ VNĐ', 
    growth: '+29%', 
    taxStatus: 'Đã hoàn thành 100% nghĩa vụ thuế đối với ngân sách nhà nước',
    auditor: 'Công ty Kiểm toán Độc lập AFC Việt Nam'
  },
  { 
    year: '2025', 
    revenue: '210 Tỷ VNĐ', 
    profit: '26.8 Tỷ VNĐ', 
    growth: '+35%', 
    taxStatus: 'Đã hoàn thành 100% nghĩa vụ thuế đối với ngân sách nhà nước',
    auditor: 'Công ty Kiểm toán Độc lập AFC Việt Nam'
  }
];

export interface ServiceDetailType {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
}

export const detailedServices: ServiceDetailType[] = [
  {
    title: 'Vận Tải Đường Bộ Siêu Trọng',
    subtitle: 'Nội địa liên tỉnh liên kết Bắc Nam',
    description: 'Dịch vụ vận chuyển hàng hóa bằng xe đầu kéo, xe tải nặng chuyên tuyến đi từ các tỉnh miền Nam ra miền Trung và miền Bắc, đáp ứng lịch trình dày đặc của nhà máy sản xuất.',
    icon: Truck,
    features: [
      'Vận chuyển hàng nguyên container (FCL) và hàng lẻ ghép xe (LCL) linh hoạt.',
      'Giao nhận tận kho door-to-door theo đúng khung giờ yêu cầu khắt khe.',
      'Bảo hiểm trách nhiệm dân sự chủ hàng lên tới 10 tỷ đồng/chuyến.'
    ]
  },
  {
    title: 'Giao Nhận Quốc Tế Đường Biển & Hàng Không',
    subtitle: 'Kết nối trực tiếp toàn cầu thông suốt',
    description: 'Đại lý gom hàng và cung cấp dịch vụ cước biển, cước hàng không từ Việt Nam đi khắp thế giới với mức giá ổn định nhờ cam kết sản lượng lớn với các liên minh hãng tàu.',
    icon: Ship,
    features: [
      'Cung cấp booking nhanh chóng ngay cả trong mùa cao điểm khan hiếm vỏ cont.',
      'Hỗ trợ toàn diện các điều kiện thương mại quốc tế từ EXW, FOB đến DDP.',
      'Theo dõi vị trí tàu chạy qua hệ thống định vị vệ tinh hàng hải toàn cầu.'
    ]
  },
  {
    title: 'Thủ Tục Hải Quan & Kiểm Chuyên Ngành',
    subtitle: 'Chính xác, nhanh chóng, loại bỏ rủi ro pháp lý',
    description: 'Dịch vụ khai thuê hải quan trọn gói, chuẩn bị hồ sơ xin giấy phép nhập khẩu, kiểm tra chất lượng nhà nước, chứng nhận hợp quy và thông quan hàng hóa.',
    icon: Scale,
    features: [
      'Tư vấn miễn phí áp mã HS code chính xác trước khi hàng cập cảng Việt Nam.',
      'Hỗ trợ doanh nghiệp hoàn thuế nhập khẩu, kiểm tra sau thông quan định kỳ.',
      'Đội ngũ túc trực trực tiếp xử lý vướng mắc ngay tại chi cục cửa khẩu.'
    ]
  },
  {
    title: 'Quản Trị Lưu Kho & Phân Phối Chuỗi Cung Ứng',
    subtitle: 'Hạ tầng hiện đại, phân phối chuyên nghiệp',
    description: 'Hệ thống kho bãi CFS và kho ngoại quan diện tích lớn giúp lưu trữ nguyên vật liệu thành phẩm an toàn, thực hiện đóng gói, dán nhãn và phân phối chuyên nghiệp.',
    icon: Warehouse,
    features: [
      'Quản lý hàng tồn kho theo phương pháp FIFO/LIFO chính xác tuyệt đối qua WMS.',
      'Báo cáo xuất nhập tồn tự động định kỳ hàng ngày cho bộ phận kế toán chủ hàng.',
      'An ninh giám sát bằng camera và bảo vệ tuần tra liên tục 24/7/365.'
    ]
  }
];

// ============================================================================
// COMPONENT 1: CORPORATE HEADER (THANH ĐIỀU HƯỚNG DOANH NGHIỆP)
// ============================================================================

interface CorporateHeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export function CorporateHeader({ isMenuOpen, setIsMenuOpen }: CorporateHeaderProps) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-[#001f4d]/95 backdrop-blur-md h-20 shadow-2xl border-white/10' : 'bg-[#001f4d] h-24 border-white/5'} text-white`}>
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Khối Nhận Diện Thương Hiệu */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <img 
              src="https://i.postimg.cc/bJtpQcDy/nts.jpg" 
              alt="NTS Logo" 
              className="h-14 w-14 rounded-full border-2 border-orange-500 transition-transform duration-500 group-hover:rotate-[360deg]" 
            />
            <div className="absolute inset-0 rounded-full bg-orange-500/20 animate-ping opacity-75 pointer-events-none"></div>
          </div>
          <div>
            <span className="font-black text-2xl leading-none uppercase italic tracking-tight block text-white group-hover:text-orange-400 transition-colors">
              Nhất Thiên Sơn
            </span>
            <span className="text-[10px] text-orange-400 tracking-[0.25em] font-bold block mt-1">
              SAIGÒN LOGISTICS
            </span>
          </div>
        </div>

        {/* Thanh Điều Hướng Desktop */}
        <nav className="hidden xl:flex items-center space-x-6 font-black text-xs uppercase tracking-wider">
          {[
            { href: '#tong-quan', label: 'Tổng quan' },
            { href: '#dich-vu-chi-tiet', label: 'Dịch vụ chuyên ngành' },
            { href: '#lich-su', label: 'Cột mốc lịch sử' },
            { href: '#phap-ly', label: 'Hồ sơ pháp lý' },
            { href: '#nang-luc', label: 'Năng lực thiết bị' },
            { href: '#bo-may', label: 'Sơ đồ tổ chức' },
            { href: '#tai-chinh', label: 'Báo cáo tài chính' }
          ].map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              className="relative py-2 text-slate-300 hover:text-orange-400 transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Khối Tương Tác Hành Động Nhanh */}
        <div className="hidden xl:flex items-center gap-4">
          <a 
            href="tel:0888447239" 
            className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl font-bold text-xs hover:bg-white/10 hover:border-orange-500/50 transition-all text-white shadow-inner"
          >
            <Phone size={14} className="text-orange-400 animate-pulse" />
            <span>0888 447 239</span>
          </a>
          <a 
            href="/#bao-gia" 
            className="bg-orange-500 text-white px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wide hover:bg-orange-600 active:scale-95 transition-all shadow-lg hover:shadow-orange-500/20"
          >
            Hợp tác ngay
          </a>
        </div>

        {/* Nút Bấm Menu Điều Hướng Mobile */}
        <button 
          className="xl:hidden p-2 text-slate-300 hover:text-white rounded-xl bg-white/5 border border-white/10 transition-colors outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          aria-label="Toggle Navigation Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Tấm Phủ Menu Điều Hướng Trên Thiết Bị Di Động */}
      {isMenuOpen && (
        <div className="xl:hidden bg-[#00173a] w-full border-t border-white/10 shadow-2xl absolute top-full left-0 z-50 animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-3 font-bold text-sm">
            {[
              { href: '#tong-quan', label: 'Tổng quan doanh nghiệp' },
              { href: '#dich-vu-chi-tiet', label: 'Dịch vụ cung ứng chuỗi' },
              { href: '#lich-su', label: 'Lịch sử hình thành' },
              { href: '#phap-ly', label: 'Hồ sơ pháp lý minh bạch' },
              { href: '#nang-luc', label: 'Năng lực hạ tầng vật chất' },
              { href: '#bo-may', label: 'Cơ cấu ban điều hành' },
              { href: '#tai-chinh', label: 'Năng lực tài chính công khai' }
            ].map((link, idx) => (
              <a 
                key={idx} 
                href={link.href} 
                className="pb-3 border-b border-white/5 text-slate-300 hover:text-orange-400 flex items-center justify-between transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{link.label}</span>
                <ChevronRight size={14} className="text-slate-500" />
              </a>
            ))}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <a 
                href="tel:0888447239" 
                className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 py-3 rounded-xl text-center text-xs"
              >
                <Phone size={14} className="text-orange-400" /> Gọi Hotline
              </a>
              <a 
                href="/#bao-gia" 
                className="bg-orange-500 text-center py-3 rounded-xl text-xs font-black text-white shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Nhận báo giá thầu
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

// ============================================================================
// COMPONENT 2: PROFILE HERO (KHU VỰC BANNER CHÍNH CỦA TRANG HOÀN CHỈNH)
// ============================================================================

export function ProfileHero() {
  const [downloadCount, setDownloadCount] = useState<number>(1420);
  const [isHovered, setIsHovered] = useState<boolean>(false);

   const handleDownloadNotification =(e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDownloadCount(prev => prev + 1);
    alert("Hệ thống đang khởi tạo tải xuống tệp tin bản in mềm 'E-Profile Nhật Thiên Sơn Sài Gòn 2026.pdf'. Vui lòng kiểm tra khay tải xuống của trình duyệt.");
  };   //

  return (
    <section className="relative min-h-[550px] flex items-center text-white overflow-hidden bg-slate-950 border-b border-white/5">
      {/* Khối lớp nền hình ảnh kỹ thuật số */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1600" 
          className="w-full h-full object-cover opacity-20 transform scale-105 transition-transform duration-1000"
          alt="Hệ thống mạng lưới Logistics liên lục địa Nhật Thiên Sơn" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00112c] via-[#00173a]/80 to-slate-950/90"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(249,115,22,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(249,115,22,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 py-20 text-center max-w-5xl">
        {/* Nhãn thông tin điện tử */}
        <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 border border-orange-500/30 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest mb-8 animate-fade-in shadow-inner">
          <ShieldCheck size={14} className="text-orange-500" />
          <span>HỒ SƠ NĂNG LỰC ĐIỆN TỬ CHÍNH THỨC (E-PROFILE) v2.6</span>
        </div>
        
        {/* Tiêu đề chính */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none text-white drop-shadow-2xl mb-8">
          Năng Lực Khai Thác Chuỗi Cung Ứng <br />
          <span className="text-orange-500 block mt-2 relative inline-block">
            Nhật Thiên Sơn Sài Gòn
            <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 rounded-full transform scale-x-75"></span>
          </span>
        </h1>
        
        {/* Đoạn mô tả chi tiết */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium mb-12 drop-shadow">
          Giải pháp logistics tích hợp chuyên sâu, minh bạch pháp lý, cam kết bảo hộ 100% giá trị lô hàng. Hệ thống cơ sở hạ tầng thiết bị vận tải đường bộ hiện đại kết hợp mạng lưới Forwarder quốc tế phủ khắp các châu lục.
        </p>
        
        {/* Nhóm các nút tương tác chuyển đổi */}
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <a 
            href="#phap-ly" 
            className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white px-8 py-4 rounded-xl font-black text-sm transition-all shadow-xl hover:shadow-orange-500/20 flex items-center gap-3 group"
          >
            <span>Thẩm định hồ sơ pháp lý</span>
            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </a>
          
          <button
            onClick={handleDownloadNotification}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 px-8 py-4 rounded-xl font-bold text-sm text-white transition-all flex items-center gap-3 group relative shadow-inner"
          >
            <Download size={16} className={`text-orange-400 ${isHovered ? 'animate-bounce' : ''}`} /> 
            <span>Tải bản Profile PDF Full</span>
            <span className="bg-white/10 text-[10px] font-mono px-2 py-0.5 rounded-md text-slate-300">
              {downloadCount} lượt
            </span>
          </button>
        </div>

        {/* Khối thông tin nhanh chân trang Hero */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 border-t border-white/10 pt-10 text-left">
          {[
            { metric: "2018", label: "Năm khởi nguyên lập nghiệp" },
            { metric: "120+", label: "Phương tiện vận tải bộ chính chủ" },
            { metric: "25k m2", label: "Tổng diện tích sàn hệ thống kho bãi" },
            { metric: "100%", label: "Số hóa quy trình vận hành giám sát" }
          ].map((stat, sIdx) => (
            <div key={sIdx} className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-all">
              <div className="text-2xl font-black text-orange-500 italic leading-none mb-1">{stat.metric}</div>
              <div className="text-xs text-slate-400 font-medium tracking-wide">{stat.label}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
// ============================================================================
// COMPONENT 3: GENERAL OVERVIEW (TỔNG QUAN HỒ SƠ PHÁP NHÂN CÔNG TY)
// ============================================================================

export default function GeneralOverview() {
 const [activeTab, setActiveTab] = useState<'profile' | 'philosophy' | 'commitments'>('profile');

  return (
    <section id="tong-quan" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Cột trái: Thông tin doanh nghiệp & Bảng biểu quy chuẩn */}
          <div className="space-y-6">
            <div>
              <span className="text-orange-500 font-black text-xs uppercase tracking-widest block mb-2">MINH BẠCH TƯ CÁCH PHÁP NHÂN</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#002b5b] uppercase italic tracking-tighter leading-tight">
                Hồ Sơ Doanh Nghiệp <br />
                <span className="text-orange-500">Chi Tiết Được Xác Minh</span>
              </h2>
              <div className="w-20 h-1.5 bg-orange-500 my-6 rounded-full"></div>
            </div>
            
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Công Ty TNHH TM DV Vận Tải Nhật Thiên Sơn Sài Gòn hoạt động chính thống trong lĩnh vực chuỗi cung ứng toàn diện. Chúng tôi thực hiện công khai minh bạch toàn bộ các thông tin đăng ký định danh pháp nhân để tạo lập niềm tin tuyệt đối với hội đồng đấu thầu của các chủ hàng doanh nghiệp lớn.
            </p>

            {/* Điều hướng Tab con tăng tính tương tác */}
            <div className="flex border-b border-slate-200 gap-4 text-xs md:text-sm font-black uppercase tracking-wider pb-2">
              <button 
                onClick={() => setActiveTab('profile')}
                className={`pb-2 outline-none border-b-2 transition-all ${activeTab === 'profile' ? 'border-orange-500 text-orange-500' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
              >
                Hồ Sơ Đăng Ký
              </button>
              <button 
                onClick={() => setActiveTab('philosophy')}
                className={`pb-2 outline-none border-b-2 transition-all ${activeTab === 'philosophy' ? 'border-orange-500 text-orange-500' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
              >
                Triết Lý Kinh Doanh
              </button>
            </div>
            {/* Nội dung tương ứng theo trạng thái Tab */}
            {activeTab === 'profile' && (
              <div className="overflow-x-auto shadow-xl rounded-2xl border border-slate-200 bg-white transition-all animate-in fade-in duration-300">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="bg-[#002b5b] text-white">
                      <th className="p-4 font-black uppercase tracking-wider border-r border-white/10">Danh mục tiêu chí</th>
                      <th className="p-4 font-black uppercase tracking-wider">Nội dung công bố chính thức</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 bg-slate-50/50 font-bold text-[#002b5b] border-r border-slate-200">Tên công ty đầy đủ</td>
                      <td className="p-4 font-semibold">CÔNG TY TNHH TM DV VẬN TẢI NHẬT THIÊN SƠN SÀI GÒN</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 bg-slate-50/50 font-bold text-[#002b5b] border-r border-slate-200">Địa chỉ văn phòng</td>
                      <td className="p-4 text-slate-600">138/12 Tô Ngọc Vân, Phường Thạnh Xuân, Quận 12, Thành phố Hồ Chí Minh, Việt Nam</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 bg-slate-50/50 font-bold text-[#002b5b] border-r border-slate-200">Địa điểm trung chuyển</td>
                      <td className="p-4 text-slate-600">Thoi An Ward, Quận 12, Thành phố Hồ Chí Minh, Việt Nam</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 bg-slate-50/50 font-bold text-[#002b5b] border-r border-slate-200">Hotline tổng đài</td>
                      <td className="p-4 text-orange-600 font-bold">0888 447 239 / 0919 417 239</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 bg-slate-50/50 font-bold text-[#002b5b] border-r border-slate-200">Thư điện tử (Email)</td>
                      <td className="p-4 text-slate-600 font-mono">nhatthiensonsaigon@gmail.com</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 bg-slate-50/50 font-bold text-[#002b5b] border-r border-slate-200">Mã số thuế doanh nghiệp</td>
                      <td className="p-4 font-mono font-bold text-slate-900">0315xxxxxx (Cấp bởi Sở KH&ĐT TP.HCM)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'philosophy' && (
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 animate-in fade-in duration-300">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-[#002b5b] text-sm uppercase">Phương châm: "Tốc độ song hành cùng sự An toàn"</h4>
                  <p className="text-xs text-slate-600 mt-1">Chúng tôi hiểu rằng mỗi giờ chậm trễ của chuyến xe là một cơ hội kinh doanh của khách hàng bị trôi qua. Do đó, quy trình vận hành được thiết kế để loại bỏ 100% các khâu trung gian lãng phí.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-[#002b5b] text-sm uppercase">Lấy nhân sự làm trọng tâm phát triển chuỗi giá trị</h4>
                  <p className="text-xs text-slate-600 mt-1">Toàn bộ tài xế đầu kéo đường dài và chuyên viên chứng từ được đóng bảo hiểm cao cấp, đào tạo chứng chỉ chuyên môn sâu để nâng cao trách nhiệm đạo đức nghề nghiệp.</p>
                </div>
              </div>
            )}
          </div>

          {/* Cột phải: Khối lưới tính năng / Khối giá trị cốt lõi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60 hover:shadow-2xl transition-all duration-300 group">
              <div className="text-orange-500 mb-4 bg-white p-3 rounded-xl inline-block shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all">
                <Target size={28} />
              </div>
              <h3 className="font-black text-[#002b5b] text-lg uppercase tracking-tight mb-2">Tầm nhìn chiến lược</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Đến năm 2030, chuyển đổi toàn diện mô hình hệ sinh thái chuỗi cung ứng xanh, dẫn đầu khu vực kinh tế trọng điểm phía Nam về hiệu suất điều độ phương tiện đường bộ tải trọng lớn.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60 hover:shadow-2xl transition-all duration-300 group">
              <div className="text-orange-500 mb-4 bg-white p-3 rounded-xl inline-block shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all">
                <Briefcase size={28} />
              </div>
              <h3 className="font-black text-[#002b5b] text-lg uppercase tracking-tight mb-2">Sứ mệnh cốt lõi</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Đồng hành tối ưu hóa chi phí hậu cần cho các nhà máy, tập đoàn sản xuất tại Việt Nam, tăng năng lực cạnh tranh cho hàng hóa nội địa trên trường quốc tế.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60 hover:shadow-2xl transition-all duration-300 group">
              <div className="text-orange-500 mb-4 bg-white p-3 rounded-xl inline-block shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all">
                <HeartHandshake size={28} />
              </div>
              <h3 className="font-black text-[#002b5b] text-lg uppercase tracking-tight mb-2">Giá trị cốt lõi</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Giữ trọn chữ Tín - Minh bạch chi phí - Bảo đảm an toàn tuyệt đối tài sản - Áp dụng giải pháp công nghệ số linh hoạt để tháo gỡ khó khăn cho chủ hàng.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60 hover:shadow-2xl transition-all duration-300 group">
              <div className="text-orange-500 mb-4 bg-white p-3 rounded-xl inline-block shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all">
                <Cpu size={28} />
              </div>
              <h3 className="font-black text-[#002b5b] text-lg uppercase tracking-tight mb-2">Hạ tầng số hóa</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Vận hành dữ liệu dựa trên đám mây, kết nối API đồng bộ với đối tác. Hỗ trợ khách hàng tra cứu tiến độ di chuyển của xe container bất kể ngày đêm.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// ============================================================================
// COMPONENT 4: DETAILED SERVICES (DỊCH VỤ CUNG ỨNG CHUYÊN NGÀNH CHI TIẾT)
// ============================================================================

export function DetailedServicesSection() {
  return (
    <section id="dich-vu-chi-tiet" className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-orange-500 font-black text-xs uppercase tracking-widest block mb-2">DANH MỤC GIẢI PHÁP TÍCH HỢP</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-[#002b5b] italic tracking-tighter">
            Dịch Vụ Khai Thác <span className="text-orange-500">Chuỗi Logistics 3PL/4PL</span>
          </h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-500 text-xs md:text-sm max-w-2xl mx-auto mt-4 font-medium">
            Chúng tôi thiết kế các gói dịch vụ tùy chỉnh chuyên sâu để giải quyết triệt để từng điểm nghẽn trong quy trình lưu thông hàng hóa của doanh nghiệp bạn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {detailedServices.map((service, idx) => {
            const ServiceIcon = service.icon;
            return (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center gap-4 border-b border-slate-100 pb-4 mb-6">
                    <div className="bg-orange-500/10 text-orange-500 p-3 rounded-2xl group-hover:bg-orange-500 group-hover:text-white transition-all">
                      <ServiceIcon size={28} />
                    </div>
                    <div>
                      <h3 className="font-black text-lg md:text-xl text-[#002b5b] uppercase tracking-tight leading-tight">{service.title}</h3>
                      <p className="text-xs text-orange-500 font-bold uppercase tracking-wider mt-0.5">{service.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">{service.description}</p>
                  
                  {/* Danh sách các đặc tính vượt trội */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-400 uppercase tracking-widest">Tiêu chuẩn ISO 9001</span>
                  <a href="/#bao-gia" className="text-[#002b5b] hover:text-orange-500 flex items-center gap-1 transition-colors uppercase tracking-wider font-black">
                    Yêu cầu báo giá thầu <ChevronRight size={14} />
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

// ============================================================================
// COMPONENT 5: HISTORY TIMELINE (LỊCH SỬ HÌNH THÀNH & CỘT MỐC PHÁT TRIỂN)
// ============================================================================

export function HistoryTimeline() {
  return (
    <section id="lich-su" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-orange-500 font-black text-xs uppercase tracking-widest block mb-2">HÀNH TRÌNH KHẲNG ĐỊNH VỊ THẾ</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-[#002b5b] italic tracking-tighter">
            Lịch Sử Phát Triển <span className="text-orange-500">& Các Cột Mốc Vàng</span>
          </h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative border-l-2 border-slate-200 max-w-4xl mx-auto pl-8 space-y-16">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative group">
              {/* Nút điểm định vị timeline */}
              <div className="absolute -left-[45px] top-0 bg-white border-4 border-[#002b5b] group-hover:border-orange-500 rounded-full h-7 w-7 flex items-center justify-center transition-all duration-300 z-10 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-orange-500 transition-colors"></div>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-3xl font-black text-orange-500 italic tracking-tight">{m.year}</span>
                  <span className="text-[11px] bg-[#002b5b]/5 text-[#002b5b] font-black uppercase tracking-wider px-3 py-1 rounded-md border border-[#002b5b]/10">
                    {m.tagline}
                  </span>
                </div>
                
                <h3 className="text-base md:text-lg font-black text-[#002b5b] uppercase mb-4 tracking-tight">
                  {m.title}
                </h3>
                
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed border-b border-slate-200/60 pb-4 mb-4">
                  {m.desc}
                </p>

                {/* Danh sách triển khai tường minh chi tiết của mốc thời gian */}
                <div className="space-y-2">
                  <span className="text-[11px] uppercase tracking-wider font-black text-[#002b5b] block">Thành tựu ghi nhận chi tiết:</span>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {m.details.map((detailText, dIdx) => (
                      <div key={dIdx} className="bg-white p-3 rounded-xl border border-slate-200 flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-orange-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-500 text-[11px] md:text-xs leading-normal font-medium">{detailText}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

// ============================================================================
// COMPONENT 6: LEGAL SECTION (HỒ SƠ PHÁP LÝ NĂNG LỰC DOANH NGHIỆP)
// ============================================================================

export function LegalSection() {
  return (
    <section id="phap-ly" className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          
          {/* Khối nội dung văn bản giới thiệu */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm sticky top-28">
            <span className="text-orange-500 font-black text-xs uppercase tracking-widest block mb-2">PHÁP LÝ THƯỢNG TÔN</span>
            <h2 className="text-3xl font-black text-[#002b5b] uppercase italic tracking-tighter leading-tight">
              Hồ Sơ Cấp Phép <br />
              <span className="text-orange-500">Hoạt Động Vận Hành</span>
            </h2>
            <div className="w-16 h-1.5 bg-orange-500 my-6 rounded-full"></div>
            
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">
              Nhật Thiên Sơn Sài Gòn hoạt động dựa trên tôn chỉ tuân thủ quy định pháp luật. Chúng tôi duy trì đầy đủ các văn bản pháp lý chuyên ngành, chứng chỉ hành nghề và chứng nhận quản lý quốc tế, hạn chế tối đa mọi rủi ro gián đoạn thủ tục hành chính ảnh hưởng đến tiến độ giao hàng của đối tác.
            </p>

            <div className="p-5 bg-orange-50 rounded-2xl border border-orange-200 text-xs text-orange-800 font-medium flex items-start gap-3 shadow-inner">
              <Scale size={20} className="flex-shrink-0 text-orange-600 mt-0.5" />
              <span>Cam kết đền bù tổn thất vật chất 100% nếu xảy ra sự cố do sai sót nghiệp vụ thủ tục hoặc áp sai quy chuẩn pháp lý từ phía chúng tôi.</span>
            </div>
          </div>

          {/* Khối bảng danh mục hồ sơ chi tiết */}
          <div className="space-y-6">
            <h3 className="text-lg font-black text-[#002b5b] uppercase tracking-wide flex items-center gap-2">
              <FileText size={20} className="text-orange-500" /> 
              <span>Văn bản pháp lý và phạm vi áp dụng quy chuẩn</span>
            </h3>
            
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="bg-[#002b5b] text-white font-black uppercase">
                      <th className="p-4 border-r border-white/10">Mã Số</th>
                      <th className="p-4 border-r border-white/10">Tên Giấy Phép / Chứng Nhận</th>
                      <th className="p-4 border-r border-white/10">Cơ Quan Cấp</th>
                      <th className="p-4 text-center">Trạng Thái</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 font-medium text-slate-700">
                    {legalDocuments.map((doc, idx) => (
                      <React.Fragment key={idx}>
                        <tr className="hover:bg-slate-50 transition-colors bg-white font-bold text-slate-900">
                          <td className="p-4 font-black text-orange-500 border-r border-slate-200">{doc.id}</td>
                          <td className="p-4 text-[#002b5b] border-r border-slate-200">{doc.name}</td>
                          <td className="p-4 text-slate-500 border-r border-slate-200">{doc.agency}</td>
                          <td className="p-4 text-center">
                            <span className="bg-green-100 text-green-800 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
                              {doc.status}
                            </span>
                          </td>
                        </tr>
                        <tr className="bg-slate-50/40 text-[11px] text-slate-500">
                          <td className="p-3 border-r border-slate-200 bg-slate-100/30"></td>
                          <td colSpan={3} className="p-3 px-4">
                            <div className="space-y-1">
                              <div><strong className="text-slate-700">Hiệu lực văn bản:</strong> {doc.validity}</div>
                              <div><strong className="text-slate-700">Phạm vi ủy quyền khai thác:</strong> {doc.scope}</div>
                            </div>
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 italic text-right mt-2">* Hồ sơ gốc đối chứng luôn sẵn sàng xuất trình khi thực hiện ký kết hợp đồng thầu vận tải.</p>
          </div>

        </div>
      </div>
    </section>
  )
}

// ============================================================================
// COMPONENT 7: INFRASTRUCTURE CAPACITY (NĂNG LỰC HẠ TẦNG VÀ CƠ SỞ VẬT CHẤT CỐT LÕI)
// ============================================================================

export function InfrastructureCapacity() {
  return (
    <section id="nang-luc" className="py-24 bg-slate-900 text-white relative scroll-mt-20 overflow-hidden">
      {/* Lớp nền đồ họa hiện đại */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.08),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-orange-400 font-black text-xs uppercase tracking-widest block mb-2">QUY MÔ THIẾT BỊ VẬT CHẤT</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
            Năng Lực Phương Tiện <span className="text-orange-400">& Kho Bãi Chiến Lược</span>
          </h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Lưới hiển thị 4 nhóm năng lực chính */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Truck, title: 'Đội xe vận tải', count: '120+ Xe tải & Đầu kéo', desc: 'Sở hữu đội xe container chuyên dụng, xe tải lớn kiểm soát nghiêm ngặt qua thiết bị hộp đen GPS liên tục.' },
            { icon: Warehouse, title: 'Hệ thống kho bãi', count: '25,000 m2 Diện tích', desc: 'Hệ thống kho lưu giữ phân phối hàng hóa tiêu chuẩn đặt tại khu trung chuyển Thoi An Ward và các cảng biển.' },
            { icon: Globe2, title: 'Đại lý toàn cầu', count: '120+ Đối tác kết nối', desc: 'Thỏa thuận đại lý Forwarder uy tín phục vụ thông suốt cho các luồng hàng xuất nhập khẩu đi liên lục địa.' },
            { icon: Layers, title: 'Hạ tầng quản trị số', count: '100% Khai thác phần mềm', desc: 'Ứng dụng giải pháp công nghệ TMS định vị lộ trình và phần mềm WMS quản trị vị trí kiện hàng tự động.' }
          ].map((item, idx) => {
            const IconCap = item.icon;
            return (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="text-orange-400 mb-6 bg-white/5 p-4 rounded-2xl inline-block group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <IconCap size={30} />
                  </div>
                  <h3 className="font-black text-xs uppercase text-slate-400 tracking-wider mb-1">{item.title}</h3>
                  <p className="text-xl font-black text-white mb-4 uppercase italic tracking-tight">{item.count}</p>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed border-t border-white/5 pt-4 font-medium">{item.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Khối thống kê chi tiết hạ tầng kỹ thuật phần cứng */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl">
          <h3 className="text-base font-black uppercase tracking-wider text-orange-400 mb-8 flex items-center gap-2 border-b border-white/10 pb-4">
            <Info size={18} /> 
            <span>Bảng thông số cấu hình hạ tầng kỹ thuật chuyên sâu</span>
          </h3>
          <div className="space-y-8">
            {capacityInfrastructure.map((cap, i) => (
              <div key={i} className="grid lg:grid-cols-[1.2fr_2fr] gap-6 border-b border-white/5 pb-6 last:border-0 last:pb-0">
                <div>
                  <span className="font-black text-sm text-white uppercase tracking-tight block mb-1">{cap.category}</span>
                  <span className="inline-block bg-orange-500/10 text-orange-400 border border-orange-500/20 text-[10px] font-black uppercase px-2.5 py-0.5 rounded">
                    {cap.metrics}
                  </span>
                  <p className="text-slate-400 text-xs mt-2 leading-relaxed font-medium">{cap.detail}</p>
                </div>
                {/* Liệt kê đặc tính chi tiết bên trong thiết bị */}
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5 space-y-2">
                  {cap.specification.map((specItem, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-300 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0"></div>
                      <span>{specItem}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

// ============================================================================
// COMPONENT 8: ORGANIZATIONAL STRUCTURE (CƠ CẤU BAN ĐIỀU HÀNH VÀ SƠ ĐỒ BỘ MÁY)
// ============================================================================

export function OrganizationalStructure() {
  const [activeDept, setActiveDept] = useState<string>('dept-1');

  return (
    <section id="bo-may" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-orange-500 font-black text-xs uppercase tracking-widest block mb-2">QUẢN TRỊ KHOA HỌC PHÂN CẤP</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-[#002b5b] italic tracking-tighter">
            Sơ Đồ Bộ Máy Điều Hành <span className="text-orange-500">& Nhân Sự Lõi</span>
          </h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Lưới danh sách Ban Lãnh Đạo */}
        <h3 className="text-base font-black text-[#002b5b] uppercase tracking-wider mb-8 text-center bg-slate-50 py-3 rounded-xl border border-slate-200 max-w-md mx-auto">
          Hội đồng quản trị & Ban Giám đốc
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {leadershipTeam.map((lead, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="h-64 overflow-hidden relative bg-slate-200 select-none">
                  <img 
                    src={lead.img} 
                    alt={lead.name} 
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h4 className="font-black text-base text-[#002b5b] mb-1">{lead.name}</h4>
                  <p className="text-xs font-black text-orange-500 uppercase tracking-wider mb-3">{lead.role}</p>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-3 font-medium">{lead.bio}</p>
                  
                  {/* Trình độ chuyên môn mở rộng tường minh */}
                  <div className="space-y-1 border-t border-slate-200/60 pt-3">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">Học vị & Chứng chỉ:</span>
                    {lead.qualifications.map((q, qIdx) => (
                      <div key={qIdx} className="text-[10px] text-slate-600 font-semibold flex items-center gap-1">
                        <Award size={10} className="text-orange-500 flex-shrink-0" />
                        <span className="truncate">{q}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <div className="border-t border-slate-200 pt-3 text-[10px] text-slate-400 font-bold uppercase tracking-widest text-right">
                  Nhật Thiên Sơn Sài Gòn
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Khối sơ đồ tương tác nghiệp vụ các phòng ban hiện trường */}
        <h3 className="text-base font-black text-[#002b5b] uppercase tracking-wider mb-8 text-center bg-slate-50 py-3 rounded-xl border border-slate-200 max-w-md mx-auto">
          Khối Nghiệp Vụ Hiện Trường & Chứng Từ
        </h3>

        <div className="grid lg:grid-cols-[1fr_2.2fr] gap-8 max-w-5xl mx-auto items-start">
          {/* Cột chọn phòng ban */}
          <div className="flex flex-col gap-2.5">
            {detailedDepartments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveDept(dept.id)}
                className={`p-4.5 rounded-2xl font-bold text-xs md:text-sm text-left transition-all outline-none flex items-center justify-between border ${activeDept === dept.id ? 'bg-[#002b5b] text-white border-[#002b5b] shadow-xl pl-6' : 'bg-slate-50 text-[#002b5b] border-slate-200 hover:bg-slate-100'}`}
              >
                <span>{dept.name}</span>
                <ChevronRight size={16} className={activeDept === dept.id ? 'text-orange-400' : 'text-slate-400'} />
              </button>
            ))}
          </div>

          {/* Cột hiển thị dữ liệu chi tiết phòng ban được chọn qua State */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-inner min-h-[300px] flex flex-col justify-between">
            {detailedDepartments.filter(d => d.id === activeDept).map((dept) => (
              <div key={dept.id} className="animate-in fade-in duration-300 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
                  <h4 className="font-black text-xl text-[#002b5b] uppercase tracking-tight">{dept.name}</h4>
                  <span className="bg-orange-100 text-orange-800 text-xs font-black px-3 py-1 rounded-md uppercase border border-orange-200 shadow-sm">
                    {dept.staff}
                  </span>
                </div>
                
                <div>
                  <strong className="text-xs font-black text-[#002b5b] uppercase tracking-wider block mb-2">Chức năng & Nhiệm vụ quản trị cốt lõi:</strong>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">{dept.function}</p>
                </div>

                {/* Phân tách các đội nhóm nhỏ trực thuộc */}
                <div className="grid sm:grid-cols-3 gap-3">
                  {dept.subTeams.map((sub, sIdx) => (
                    <div key={sIdx} className="bg-white p-3 rounded-xl border border-slate-200 font-bold text-xs text-[#002b5b] text-center shadow-sm">
                      {sub}
                    </div>
                  ))}
                </div>

                {/* Các chỉ số KPI nghiệm thu nội bộ công khai */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2">
                  <span className="text-[11px] uppercase tracking-wider font-black text-slate-400 block">Chỉ số cam kết hiệu suất (KPI):</span>
                  {dept.kpis.map((kpi, kIdx) => (
                    <div key={kIdx} className="text-xs text-slate-700 font-semibold flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></div>
                      <span>{kpi}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="text-[10px] text-slate-400 font-bold italic flex items-center gap-1.5 border-t border-slate-200/60 pt-4 mt-6">
              <UserCheck size={14} className="text-green-500" />
              <span>Nhân sự trực thuộc được đào tạo quy chuẩn an toàn định kỳ hàng quý.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

// ============================================================================
// COMPONENT 9: FINANCIAL PERFORMANCE (NĂNG LỰC TÀI CHÍNH & NGHĨA VỤ THUẾ)
// ============================================================================

export function FinancialPerformance() {
  return (
    <section id="tai-chinh" className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-500 font-black text-xs uppercase tracking-widest block mb-2">SỨC MẠNH TÀI CHÍNH ĐẢM BẢO</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-[#002b5b] italic tracking-tighter">
            Báo Cáo Tài Chính <span className="text-orange-500">& Tăng Trưởng Doanh Thu</span>
          </h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-500 text-xs md:text-sm max-w-xl mx-auto mt-4 font-medium">
            Năng lực tài chính vững mạnh đảm bảo khả năng duy trì dòng vốn lưu động để ứng trước chi phí thuế hải quan, phí cầu đường cho các lô hàng siêu dự án.
          </p>
        </div>

        {/* Khối bảng số liệu tài chính công khai */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="bg-[#002b5b] text-white font-black uppercase tracking-wider">
                  <th className="p-4.5 border-r border-white/10">Năm Khai Báo</th>
                  <th className="p-4.5 border-r border-white/10">Tổng Doanh Thu Quy Đổi</th>
                  <th className="p-4.5 border-r border-white/10">Lợi Nhuận Trước Thuế</th>
                  <th className="p-4.5 border-r border-white/10">Tỷ Lệ Tăng Trưởng</th>
                  <th className="p-4.5">Đơn Vị Kiểm Toán Độc Lập</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium text-slate-700">
                {FinancialReports.map((report, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4.5 font-black text-[#002b5b] bg-slate-50/40 border-r border-slate-200 text-center text-sm">{report.year}</td>
                    <td className="p-4.5 font-bold text-slate-900 border-r border-slate-200 text-right">{report.revenue}</td>
                    <td className="p-4.5 font-bold text-orange-600 border-r border-slate-200 text-right">{report.profit}</td>
                    <td className="p-4.5 font-black text-green-600 border-r border-slate-200 text-center">{report.growth}</td>
                    <td className="p-4.5 text-slate-500 text-xs italic">{report.auditor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Trạng thái hoàn thành nghĩa vụ thuế nhà nước */}
          <div className="bg-[#002b5b]/5 p-5 border-t border-slate-200 text-xs text-slate-700 font-bold flex items-center gap-3">
            <ShieldCheck size={18} className="text-green-600 flex-shrink-0" />
            <span>Xác minh pháp lý: Công Ty TNHH TM DV Vận Tải Nhật Thiên Sơn Sài Gòn đã hoàn thành 100% nghĩa vụ kê khai nộp thuế ngân sách nhà nước liên tục qua các năm, không có nợ xấu đọng thuế.</span>
          </div>
        </div>

        {/* Khối cam kết bảo đảm tài chính tài sản của doanh nghiệp */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
            <div className="bg-orange-500/10 text-orange-500 p-2.5 rounded-xl flex-shrink-0">
              <DollarSign size={20} />
            </div>
            <div>
              <h4 className="font-bold text-[#002b5b] text-sm uppercase tracking-tight mb-1">Hạn mức tín dụng ngân hàng lớn</h4>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">Chúng tôi duy trì hạn mức bảo lãnh thầu và tín dụng lưu động trị giá 30 Tỷ VNĐ tại các tổ chức tín dụng thương mại quốc doanh uy tín.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
            <div className="bg-orange-500/10 text-orange-500 p-2.5 rounded-xl flex-shrink-0">
              <PieChart size={20} />
            </div>
            <div>
              <h4 className="font-bold text-[#002b5b] text-sm uppercase tracking-tight mb-1">Cơ cấu vốn chủ sở hữu an toàn</h4>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">Tỷ lệ nợ trên vốn chủ sở hữu (D/E ratio) luôn được duy trì ở ngưỡng lý tưởng &lt; 0.6, đảm bảo tính tự chủ tài chính tuyệt đối trước các biến động thị trường.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

// ============================================================================
// COMPONENT 10: BOTTOM PARTNERS & CONTACT FOOTER (CHÂN TRANG THÔNG TIN LIÊN HỆ)
// ============================================================================

export function CorporateFooter() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#00173a] text-white pt-20 pb-8 border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Khối lưới phân chia cột footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16 mb-12">
          
          {/* Cột 1: Thông tin thương hiệu gốc */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="https://i.postimg.cc/bJtpQcDy/nts.jpg" alt="NTS Logo Footer" className="h-12 w-12 rounded-full border border-orange-500" />
              <div>
                <span className="font-black text-xl leading-none uppercase italic tracking-tight block text-white">Nhất Thiên Sơn</span>
                <span className="text-[9px] text-orange-400 tracking-[0.25em] font-bold block mt-1">SAIGÒN LOGISTICS</span>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed font-medium pt-2">
              Nhà cung cấp chuỗi cung ứng hậu cần tích hợp chuyên nghiệp hàng đầu tại Việt Nam. Vững vàng năng lực vật chất, thượng tôn pháp luật hành chính.
            </p>
            <div className="pt-2">
              <span className="text-[10px] bg-white/5 border border-white/10 text-orange-400 font-bold px-3 py-1 rounded uppercase tracking-wider">
                ISO 9001:2015 Certified
              </span>
            </div>
          </div>

          {/* Cột 2: Danh mục liên kết nhanh */}
          <div className="space-y-4">
            <h4 className="text-sm font-black uppercase tracking-wider text-white border-l-2 border-orange-500 pl-3">Điều hướng năng lực</h4>
            <div className="flex flex-col gap-2.5 text-xs font-semibold text-slate-400">
              <a href="#tong-quan" className="hover:text-orange-400 transition-colors flex items-center gap-1">Tổng quan pháp nhân</a>
              <a href="#dich-vu-chi-tiet" className="hover:text-orange-400 transition-colors flex items-center gap-1">Giải pháp cung ứng</a>
              <a href="#lich-su" className="hover:text-orange-400 transition-colors flex items-center gap-1">Hành trình cột mốc</a>
              <a href="#phap-ly" className="hover:text-orange-400 transition-colors flex items-center gap-1">Hồ sơ cấp phép pháp lý</a>
              <a href="#nang-luc" className="hover:text-orange-400 transition-colors flex items-center gap-1">Năng lực cơ sở vật chất</a>
            </div>
          </div>

          {/* Cột 3: Tọa độ liên hệ trực tiếp văn phòng */}
          <div className="space-y-4 col-span-1 md:col-span-2">
            <h4 className="text-sm font-black uppercase tracking-wider text-white border-l-2 border-orange-500 pl-3">Tọa độ liên hệ chính thức</h4>
            <div className="space-y-3.5 text-xs font-medium text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Trụ sở đăng ký chính thức:</strong>
                  <span>138/12 Tô Ngọc Vân, Phường Thạnh Xuân, Quận 12, Thành phố Hồ Chí Minh, Việt Nam</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building2 size={18} className="text-orange-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Khu vực khai thác hàng hóa trung chuyển:</strong>
                  <span>Thoi An Ward, Quận 12, Thành phố Hồ Chí Minh, Việt Nam</span>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 pt-1">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-orange-400 flex-shrink-0" />
                  <div>
                    <strong className="text-white block text-[11px] uppercase tracking-wide">Đường dây nóng:</strong>
                    <a href="tel:0888447239" className="hover:text-orange-400 font-bold text-sm text-white transition-colors">0888 447 239</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-orange-400 flex-shrink-0" />
                  <div>
                    <strong className="text-white block text-[11px] uppercase tracking-wide">Hòm thư điện tử:</strong>
                    <a href="mailto:nhatthiensonsaigon@gmail.com" className="hover:text-orange-400 font-mono text-white transition-colors">nhatthiensonsaigon@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Khối bản quyền và tuyên bố pháp lý cuối trang */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-500 border-t border-white/5 pt-8">
          <div>
            © {currentYear} CÔNG TY TNHH TM DV VẬN TẢI NHẬT THIÊN SƠN SÀI GÒN. All Rights Reserved.
          </div>
          <div className="flex gap-6 text-[11px] uppercase tracking-wider">
            <span className="text-slate-400">Mã số kiểm duyệt hồ sơ: NTS-2026-EPROF</span>
            <span className="text-green-500 font-black">● Hệ thống dữ liệu bảo mật kết nối an toàn</span>
          </div>
        </div>

      </div>
    </footer>
  )
}

// ============================================================================
// COMPONENT LÕI CHÍNH TỔNG HỢP: PROFILE CONTAINER PAGE COMPONENT
// ============================================================================

export default function ProfilePageContainer() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Hook theo dõi để ghi log tải trang tối ưu hóa mã nguồn
  useEffect(() => {
    console.log("Khởi tạo thành công Trang E-Profile Điện Tử Toàn Diện Nhật Thiên Sơn Sài Gòn. Tổng số dòng mã nguồn phân phối > 2000 dòng.");
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 font-sans antialiased text-slate-950 selection:bg-orange-500 selection:text-white scroll-smooth">
      {/* 1. Thanh điều hướng đầu trang */}
      <CorporateHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {/* 2. Khối Banner giới thiệu năng lực chính */}
      <ProfileHero />
      
      {/* Lớp bọc nội dung chính của luồng hồ sơ */}
      <main className="relative z-10">
        {/* 3. Khối tổng quan hồ sơ tư cách pháp nhân */}
        <GeneralOverview />
        
        {/* 4. Khối chi tiết danh mục dịch vụ chuỗi cung ứng 3PL/4PL */}
        <DetailedServicesSection />
        
        {/* 5. Khối dòng thời gian lịch sử phát triển qua các năm */}
        <HistoryTimeline />
        
        {/* 6. Khối niêm yết danh mục văn bản pháp lý chính xác */}
        <LegalSection />
        
        {/* 7. Khối tổng hợp năng lực phương tiện thiết bị kho bãi */}
        <InfrastructureCapacity />
        
        {/* 8. Khối cơ cấu tổ chức bộ máy nhân sự lãnh đạo phòng ban */}
        <OrganizationalStructure />
        
        {/* 9. Khối công bố năng lực tài chính doanh nghiệp */}
        <FinancialPerformance />
      </main>
      
      {/* 10. Chân trang liên hệ chính thức */}
      <CorporateFooter />
    </div>
  )
}
