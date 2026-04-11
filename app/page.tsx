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
      fontFamily: 'sans-serif',
      padding: '20px'
    }}>
      <h1 style={{ color: '#2563eb', fontSize: '3rem' }}>NHẬT THIÊM SƠN SÀI GÒN</h1>
      <p style={{ fontSize: '1.5rem' }}>Hệ thống đang khởi động...</p>
      <div style={{ marginTop: '20px', padding: '15px', background: '#e2e8f0', borderRadius: '8px' }}>
        Đang cấu hình lại các linh kiện giao diện. Vui lòng đợi!
      </div>
    </div>
  )
}
