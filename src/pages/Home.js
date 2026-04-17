import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ 
        fontFamily: 'Arial, sans-serif', 
        textAlign: 'center', 
        padding: '60px 20px', 
        backgroundColor: '#f9fafb', 
        minHeight: '100vh' 
    }}>

      {/* HERO */}
      <header>
        <h1 style={{ fontSize: '48px', fontWeight: '900', color: '#111827' }}>
          Market Fiyat Etiketi Oluşturma
        </h1>

        <p style={{ fontSize: '20px', color: '#4b5563', margin: '20px 0 40px' }}>
          Excel listenizi yükleyin, saniyeler içinde profesyonel market fiyat etiketi tasarlayın ve PDF olarak indirin.
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

        <div style={{ marginTop: '40px', color: '#6b7280', fontSize: '16px' }}>
          ✓ Excel ile ürün listesi yükleme • ✓ QR Kod • ✓ PDF Çıktısı • ✓ Ücretsiz kullanım
        </div>
      </header>

      {/* SEO CONTENT */}
      <section style={{ maxWidth: '900px', margin: '80px auto', textAlign: 'left' }}>

        <h2>Market Fiyat Etiketi Nedir?</h2>
        <p>
          Market fiyat etiketi, ürünlerin satış fiyatını, gramajını ve barkod bilgilerini müşteriye sunan en önemli satış araçlarından biridir. 
          Doğru hazırlanmış etiketler, müşteri güvenini artırır ve satışları doğrudan etkiler.
        </p>

        <h2>Fiyat Etiketi Tasarımı Nasıl Yapılır?</h2>
        <p>
          Etkili bir fiyat etiketi tasarımı için okunabilir fontlar, net fiyat alanı ve doğru ürün bilgileri kullanılmalıdır. 
          Hazırladığınız etiketlerin düzenli ve profesyonel görünmesi, müşterinin karar verme sürecini hızlandırır.
        </p>

        <h2>Market Etiketi İndir ve Hemen Kullan</h2>
        <p>
          Sistemimiz sayesinde hazır şablonları kullanarak saniyeler içinde market etiketi oluşturabilir ve PDF olarak indirebilirsiniz. 
          Kurulum gerektirmez, tamamen tarayıcı üzerinden çalışır.
        </p>

        <h2>Online Fiyat Etiketi Oluşturma Aracı</h2>
        <p>
          Gelişmiş etiket oluşturma aracımız ile Excel listenizi yükleyin, otomatik olarak etiketlerinizi oluşturun. 
          Küçük işletmeler ve marketler için hızlı ve pratik bir çözümdür.
        </p>

      </section>

      {/* FOOTER SEO */}
      <footer style={{ marginTop: '60px', fontSize: '14px', color: '#9ca3af' }}>
        Sorunlar için bize Whatsapp tan yazınız. İletişim:  +905437634039 İstanbul/Türkiye
      </footer>

    </div>
  );
};

export default Home;
