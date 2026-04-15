import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ 
        fontFamily: 'Arial, sans-serif', 
        textAlign: 'center', 
        padding: '80px 20px', 
        backgroundColor: '#f9fafb', 
        minHeight: '100vh' 
    }}>
      <h1 style={{ fontSize: '48px', fontWeight: '900', color: '#111827' }}>Market Fiyat Etiketi</h1>
      <p style={{ fontSize: '20px', color: '#4b5563', margin: '20px 0 40px' }}>
        Excel listenizi yükleyin, profesyonel etiketlerinizi saniyeler içinde hazırlayın.
      </p>
      <button 
        onClick={() => navigate('/editor')}
        style={{
          backgroundColor: '#16a34a',
          color: 'white',
          padding: '20px 60px',
          fontSize: '24px',
          borderRadius: '16px',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 'bold',
          boxShadow: '0 10px 20px rgba(22,163,74,0.3)'
        }}
      >
        🚀 Hemen Ücretsiz Başla
      </button>
      <div style={{ marginTop: '50px', color: '#9ca3af', fontSize: '18px' }}>
        ✓ Excel Desteği • ✓ QR Kod • ✓ PDF Çıktısı
      </div>
    </div>
  );
};

export default Home;