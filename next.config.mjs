/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Thêm dòng này nếu bạn muốn xuất ra file tĩnh cho Netlify
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
