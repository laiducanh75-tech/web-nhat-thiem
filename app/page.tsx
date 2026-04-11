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
      backgroundColor: '#f8fafc',
      padding: '20px'
    }}>
      <h1 style={{ color: '#2563eb', fontSize: '3rem', marginBottom: '10px' }}>
        NHẬT THIÊM SƠN SÀI GÒN
      </h1>
      <p style={{ fontSize: '1.5rem', color: '#475569' }}>
        Website đang được thiết lập hệ thống.
      </p>
      <div style={{ marginTop: '20px', padding: '15px 30px', background: '#2563eb', color: 'white', borderRadius: '8px', fontWeight: 'bold' }}>
        LIÊN HỆ BÁO GIÁ: 09xx xxx xxx
      </div>
    </div>
  )
}
