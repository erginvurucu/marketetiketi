import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet'; // SEO için gerekli kütüphane
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    // Sayfa yüklendiğinde en üste kaydır
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-container">
      {/* SEO Ayarları */}
      <Helmet>
        <title>Market Fiyat Etiketi Sistemi | Ücretsiz ve Hızlı Etiket Oluştur</title>
        <meta name="description" content="Marketiniz için profesyonel fiyat etiketlerini saniyeler içinde hazırlayın. Excel desteği, QR kod ve toplu yazdırma özellikleriyle tamamen ücretsiz." />
        <meta name="keywords" content="market fiyat etiketi, raf etiketi oluşturma, ücretsiz etiket basma, qr kodlu etiket, excelden etiket yazdırma" />
        <link rel="canonical" href="https://marketfiyatetiketi.com/" />
      </Helmet>

      {/* --- HEADER (Semantik SEO için Header) --- */}
      <header className="site-header">
        <div className="header-logo">🏷️</div>
        <div>
          <h1 className="header-title">Market Fiyat Etiketi Sistemi</h1>
          <div className="header-sub">Kolay · Hızlı · Profesyonel</div>
        </div>
        <div className="header-btns">
          <Link to="/editor" className="btn btn-green btn-sm">
            🚀 Hemen Başla
          </Link>
        </div>
      </header>

      {/* --- ANA İÇERİK --- */}
      <main className="main-content" style={{ maxWidth: '1300px', margin: '32px auto', padding: '0 20px' }}>
        
        {/* Tanıtım Kartı */}
        <section className="hero-section" style={{ background: 'white', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
          <div style={{ background: 'linear-gradient(135deg, #16a34a, #15803d)', color: 'white', padding: '40px 20px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '15px' }}>
              Profesyonel Market ve Mağaza <br /> Fiyat Etiketi Çözümleri
            </h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', opacity: '0.9', fontSize: '16px' }}>
              İşletmenizin raf düzenini profesyonel bir seviyeye taşımak ve fiyat karmaşasına son vermek için geliştirdiğimiz 
              <strong> Mağaza Fiyat Etiket Editörü</strong>, hız ve estetiği bir araya getiriyor.
            </p>
          </div>

          <div style={{ padding: '40px 30px' }}>
            <p style={{ fontSize: '16px', color: '#4b5563', lineHeight: '1.8', marginBottom: '30px', textAlign: 'center' }}>
              Günümüz perakende dünyasında, doğru ve şık sunum satışları doğrudan etkiler. Kullanıcı dostu 
              <strong> Raf Etiketi Tasarım Programı</strong> sayfamız sayesinde, teknik bilgiye ihtiyaç duymadan dakikalar içinde kurumsal görünümlü etiketler hazırlayabilirsiniz.
            </p>

            {/* Özellik Kartları (3'lü Grid) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px' }}>
              <article style={{ background: '#f0fdf4', border: '2px solid #dcfce7', borderRadius: '12px', padding: '20px' }}>
                <div style={{ fontSize: '32px', marginBottom: '10px' }}>⚡</div>
                <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#15803d', marginBottom: '10px' }}>Hızlı & Pratik</h3>
                <p style={{ fontSize: '14px', color: '#4b5563' }}>Küçük esnaftan büyük market zincirlerine kadar herkesin ihtiyacına hitap eden <strong>Bakkal Etiket Programı</strong> modülümüzle tanışın.</p>
              </article>

              <article style={{ background: '#dbeafe', border: '2px solid #93c5fd', borderRadius: '12px', padding: '20px' }}>
                <div style={{ fontSize: '32px', marginBottom: '10px' }}>📦</div>
                <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#1d4ed8', marginBottom: '10px' }}>Toplu Etiket Basma</h3>
                <p style={{ fontSize: '14px', color: '#4b5563' }}>Sektörde en çok ihtiyaç duyulan <strong>Toplu Market Etiketi Basma</strong> özelliği ile yüzlerce ürünün fiyatını aynı anda güncelleyebilir, zaman kaybının önüne geçebilirsiniz.</p>
              </article>

              <article style={{ background: '#fff7ed', border: '2px solid #fed7aa', borderRadius: '12px', padding: '20px' }}>
                <div style={{ fontSize: '32px', marginBottom: '10px' }}>🎁</div>
                <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#c2410c', marginBottom: '10px' }}>Ücretsiz Kullanım</h3>
                <p style={{ fontSize: '14px', color: '#4b5563' }}>Maliyetlerinizi düşürüyoruz. <strong>Ücretsiz Fiyat Etiket Programı</strong> arayışındaki işletmeler için sunduğumuz çözümlerle tanışın.</p>
              </article>
            </div>

            {/* Sektörel Bilgilendirme (H2 Kullanımı Önemli) */}
            <section style={{ background: '#f9fafb', borderRadius: '12px', padding: '25px', marginBottom: '30px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#111827', marginBottom: '15px' }}>🏪 Sektörel Raf Fiyat Etiketi Tasarımı</h2>
              <p style={{ fontSize: '15px', color: '#4b5563', marginBottom: '20px' }}>
                Her mağazanın ruhu farklıdır. <strong>Mağaza Raf Etiketi Programı</strong> aracımız; manav, şarküteri, kasap veya züccaciye gibi farklı alanlara özel <strong>Raf Fiyat Etiketi Tasarımı</strong> yapmanıza imkân tanır.
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', listStyle: 'none', padding: 0 }}>
                <li style={{ background: 'white', padding: '15px', borderRadius: '10px', border: '1px solid #e5e7eb', textAlign: 'center', fontWeight: '800' }}>🏷️ Mağaza Ürün Fiyat Etiketi</li>
                <li style={{ background: 'white', padding: '15px', borderRadius: '10px', border: '1px solid #e5e7eb', textAlign: 'center', fontWeight: '800' }}>📊 Market Ürün Fiyat Etiketi</li>
                <li style={{ background: 'white', padding: '15px', borderRadius: '10px', border: '1px solid #e5e7eb', textAlign: 'center', fontWeight: '800' }}>📋 Fiyat Etiket Programı</li>
              </ul>
            </section>

            {/* CTA Alt Bölüm */}
            <div style={{ background: 'linear-gradient(135deg, #1e3a8a, #1d4ed8)', borderRadius: '12px', padding: '30px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ flex: '1', minWidth: '300px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '900', marginBottom: '10px' }}>Hemen Profesyonel Etiketlerinizi Oluşturun</h3>
                <p style={{ fontSize: '14px', opacity: '0.9' }}>Sadece ürün satmıyor; işletmenizin operasyonel gücünü artıracak dijital araçlar sunuyoruz. Raflarınızdaki değişimi fark edin!</p>
              </div>
              <Link to="/editor" className="btn" style={{ background: 'white', color: '#1d4ed8', padding: '15px 30px', fontSize: '16px' }}>
                🚀 Ücretsiz Kullanmaya Başla
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer SEO Linkleri */}
      <footer style={{ textAlign: 'center', padding: '40px 20px', color: '#9ca3af', fontSize: '13px' }}>
        <p>© 2026 MarketFiyatEtiketi.com | Her Hakkı Saklıdır.</p>
        <p style={{ marginTop: '10px' }}>
          Anahtar Kelimeler: Barkodlu Etiket, Raf Etiketi Yazdırma, Market Otomasyonu, Ücretsiz PDF Etiket
        </p>
      </footer>
    </div>
  );
};

export default Home;