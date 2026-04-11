"use client"

export default function Page() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center',
      backgroundColor: '#0f172a',
      color: 'white',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ fontSize: '4rem', color: '#38bdf8', marginBottom: '20px' }}>
        NHẬT THIÊM SƠN SÀI GÒN
      </h1>
      <div style={{ padding: '20px', border: '2px solid #38bdf8', borderRadius: '15px' }}>
        <p style={{ fontSize: '1.5rem' }}>Hệ thống Logistics - Vận tải chuyên nghiệp</p>
        <p style={{ color: '#94a3b8' }}>Website đang được nâng cấp giao diện mới...</p>
      </div>
      <footer style={{ marginTop: '50px', color: '#64748b' }}>
        © 2026 Nhật Thiêm Sơn Sài Gòn
      </footer>
    </div>
  )
}
