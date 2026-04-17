import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ fontFamily: "'Nunito', sans-serif", color: '#1f2937', backgroundColor: '#f9fafb' }}>
      
      {/* --- NAVBAR --- */}
      <nav style={{ padding: '20px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <div style={{ fontSize: '24px', fontWeight: '900', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '10px' }}>
          🏷️ <span style={{ color: '#111827' }}>MarketEtiketi</span>
        </div>
        <Link to="/editor" style={{ textDecoration: 'none', backgroundColor: '#16a34a', color: 'white', padding: '10px 25px', borderRadius: '50px', fontWeight: '700', transition: '0.3s' }}>
          Editörü Aç
        </Link>
      </nav>

      {/* --- HERO SECTION (Giriş) --- */}
      <header style={{ padding: '80px 5%', textAlign: 'center', background: 'linear-gradient(180deg, white 0%, #f0fdf4 100%)' }}>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '900', lineHeight: '1.1', marginBottom: '20px', color: '#111827' }}>
          Profesyonel Fiyat Etiketlerini <br />
          <span style={{ color: '#16a34a' }}>Saniyeler İçinde</span> Hazırlayın
        </h1>
        <p style={{ fontSize: '18px', color: '#4b5563', maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.6' }}>
          Marketiniz için QR kodlu, barkodlu ve Excel destekli raf etiketlerini tamamen ücretsiz ve online olarak tasarlayın. Kurulum gerektirmez.
        </p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/editor" style={{ textDecoration: 'none', backgroundColor: '#16a34a', color: 'white', padding: '18px 40px', borderRadius: '12px', fontSize: '18px', fontWeight: '800', boxShadow: '0 10px 20px rgba(22, 163, 74, 0.2)' }}>
            🚀 Ücretsiz Başla
          </Link>
          <a href="#ozellikler" style={{ textDecoration: 'none', backgroundColor: 'white', color: '#374151', padding: '18px 40px', borderRadius: '12px', fontSize: '18px', fontWeight: '700', border: '1px solid #d1d5db' }}>
            Özellikleri İncele
          </a>
        </div>
      </header>

      {/* --- İSTATİSTİK / GÜVEN BANT --- */}
      <div id="ozellikler" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', padding: '60px 5%', backgroundColor: 'white' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '40px', marginBottom: '10px' }}>⚡</div>
          <h3 style={{ fontWeight: '800' }}>Işık Hızında</h3>
          <p style={{ color: '#6b7280' }}>Excel listenizi yükleyin, etiketleriniz anında hazır olsun.</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '40px', marginBottom: '10px' }}>📱</div>
          <h3 style={{ fontWeight: '800' }}>QR Kod Desteği</h3>
          <p style={{ color: '#6b7280' }}>Müşterileriniz için ürün detaylarına giden QR kodlar ekleyin.</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '40px', marginBottom: '10px' }}>🖨️</div>
          <h3 style={{ fontWeight: '800' }}>Kolay Yazdırma</h3>
          <p style={{ color: '#6b7280' }}>A4 veya özel etiket kağıtlarına tam uyumlu PDF çıktısı.</p>
        </div>
      </div>

      {/* --- NASIL ÇALIŞIR? --- */}
      <section style={{ padding: '80px 5%', backgroundColor: '#f3f4f6' }}>
        <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: '900', marginBottom: '50px' }}>3 Adımda Etiket Basın</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {[
            { s: "1", t: "Bilgileri Girin", d: "Ürün adı, fiyatı ve birim bilgilerini yazın veya Excel'den aktarın." },
            { s: "2", t: "Tasarımı Seçin", d: "Hazır şablonlarımızdan marketinize en uygun olanı belirleyin." },
            { s: "3", t: "PDF Olarak Al", d: "Yazdır butonuna basın ve profesyonel çıktılarınızı alın." }
          ].map((item, index) => (
            <div key={index} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '20px', width: '300px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <span style={{ backgroundColor: '#16a34a', color: 'white', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: '900', marginBottom: '20px' }}>{item.s}</span>
              <h4 style={{ fontWeight: '800', marginBottom: '10px' }}>{item.t}</h4>
              <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.5' }}>{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer style={{ padding: '60px 5%', backgroundColor: '#111827', color: 'white', textAlign: 'center' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '20px' }}>Market Fiyat Etiketi Sistemi</h2>
        <p style={{ opacity: '0.6', maxWidth: '600px', margin: '0 auto 30px' }}>Esnaflar ve mağaza sahipleri için geliştirilmiş ücretsiz yardımcı araçtır.</p>
        <div style={{ borderTop: '1px solid #374151', paddingTop: '30px', fontSize: '14px', opacity: '0.5' }}>
          © 2026 marketfiyatetiketi.com - Tüm Hakları Saklıdır.
        </div>
      </footer>
    </div>
  );
};

export default Home;