"use client"

export default function Page() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      backgroundColor: '#f8fafc'
    }}>
      <h1 style={{ color: '#1e40af', fontSize: '3rem', marginBottom: '1rem' }}>
        NHẬT THIÊM SƠN SÀI GÒN
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#475569' }}>
        Website đang được kết nối hệ thống. Vui lòng đợi trong giây lát...
      </p>
      <div style={{ marginTop: '2rem', padding: '1rem 2rem', background: '#2563eb', color: 'white', borderRadius: '8px' }}>
        Đã kết nối thành công!
      </div>
    </div>
  )
}
