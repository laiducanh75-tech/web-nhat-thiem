import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NHẤT THIÊN SƠN SÀI GÒN - LOGISTICS",
  description: "Dịch vụ vận tải đường biển, đường bộ, hàng không uy tín tại TP.HCM",
  icons: {
    icon: "https://i.postimg.cc/bJtpQcDy/nts.jpg", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
