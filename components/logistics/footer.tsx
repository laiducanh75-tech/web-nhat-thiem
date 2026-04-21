import React from 'react';
import { Facebook } from 'lucide-react'; // Thư viện icon phổ biến, bạn nên cài nếu chưa có

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t mt-12 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Phần Tên Công Ty/Thương Hiệu */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nhật Thiêm Sóc Sơn Sài Gòn. All rights reserved.
        </p>

        {/* Phần Liên Kết Facebook */}
        <a 
          href="https://www.facebook.com/nhatthiensonsaigon.vn" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
        >
          {/* Icon Facebook - sẽ đẹp hơn nhiều */}
          {/* Nếu chưa cài lucide-react, tạm thời comment dòng dưới */}
          <Facebook size={20} /> 
          <span className="font-medium text-sm">Theo dõi Nhật Thiêm trên Facebook</span>
        </a>

      </div>
    </footer>
  );
}
