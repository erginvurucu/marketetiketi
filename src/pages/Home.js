import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Sayfa yüklendiğinde en üste kaydır ve FAQ gibi etkileşimleri hazırla
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Scroll reveal efekti için basit bir observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, []);

  const toggleFaq = (e) => {
    const item = e.currentTarget;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  };

  return (
    <div className="modern-home">
      {/* Paylaştığın index.html tasarımını buraya entegre ediyoruz */}
      <style>{`
        .modern-home { font-family: 'DM Sans', sans-serif; background: #f7fdf9; color: #0c1a0f; }
        .hero { padding: 100px 5%; text-align: center; background: radial-gradient(circle at top right, #e8f5e9, transparent); }
        .hero h1 { font-family: 'Syne', sans-serif; font-size: clamp(40px, 8vw, 80px); line-height: 0.9; margin-bottom: 24px; }
        .btn-main { background: #1aad50; color: white; padding: 20px 40px; border-radius: 100px; text-decoration: none; font-weight: 800; display: inline-block; transition: 0.3s; }
        .btn-main:hover { transform: scale(1.05); background: #14803c; }
        .reveal { opacity: 0; transform: translateY(30px); transition: 1s all; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .faq-item { background: white; border: 1px solid #d1e8d9; border-radius: 16px; margin-bottom: 12px; cursor: pointer; padding: 20px; }
        .faq-answer { display: none; margin-top: 15px; color: #4d7a5c; }
        .faq-item.open .faq-answer { display: block; }
        /* Buraya paylaştığın diğer özel CSS'leri ekleyebiliriz */
      `}</style>

      {/* --- HERO SECTION --- */}
      <section className="hero reveal">
        <h1>Profesyonel Fiyat<br/><span style={{color: '#1aad50'}}>Etiketi Sistemi</span></h1>
        <p style={{maxWidth: '700px', margin: '0 auto 40px', fontSize: '20px', color: '#4d7a5c'}}>
          Market ve mağazalar için ücretsiz, hızlı ve Excel destekli raf etiketi tasarım aracı.
        </p>
        <Link to="/editor" className="btn-main">🚀 HEMEN BAŞLA — ÜCRETSİZ</Link>
      </section>

      {/* --- BLOG & İÇERİK BÖLÜMÜ --- */}
      <section style={{padding: '80px 5%'}} className="reveal">
        <h2 style={{fontSize: '40px', marginBottom: '40px', textAlign: 'center'}}>Neler Yapabilirsiniz?</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'}}>
          <div className="card" style={{background: 'white', padding: '30px', borderRadius: '24px', border: '1px solid #d1e8d9'}}>
            <h3>📊 Excel Entegrasyonu</h3>
            <p>Ürün listenizi Excel'den yükleyin, binlerce etiketi saniyeler içinde toplu olarak hazırlayın.</p>
          </div>
          <div className="card" style={{background: 'white', padding: '30px', borderRadius: '24px', border: '1px solid #d1e8d9'}}>
            <h3>📱 QR & Barkod Desteği</h3>
            <p>Müşterileriniz için QR kodlar veya hızlı kasa işlemleri için EAN-13 barkodlar ekleyin.</p>
          </div>
          <div className="card" style={{background: 'white', padding: '30px', borderRadius: '24px', border: '1px solid #d1e8d9'}}>
            <h3>🖨️ Kolay Yazdırma</h3>
            <p>Standart A4 veya özel etiket kağıtlarına tam uyumlu PDF çıktıları alın.</p>
          </div>
        </div>
      </section>

      {/* --- SSS (FAQ) BÖLÜMÜ --- */}
      <section style={{padding: '80px 5%', background: '#fff'}} className="reveal">
        <h2 style={{textAlign: 'center', marginBottom: '40px'}}>Sıkça Sorulan Sorular</h2>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <div className="faq-item" onClick={toggleFaq}>
            <strong>Sistem ücretli mi?</strong>
            <div className="faq-answer">Hayır, tamamen ücretsizdir ve herhangi bir kurulum gerektirmez.</div>
          </div>
          <div className="faq-item" onClick={toggleFaq}>
            <strong>Excel dosyalarımı kaydediyor musunuz?</strong>
            <div className="faq-answer">Hayır, tüm işlemler tarayıcınızda gerçekleşir. Verileriniz gizlidir ve sunucularımıza yüklenmez.</div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer style={{padding: '60px 5%', textAlign: 'center', borderTop: '1px solid #d1e8d9'}}>
        <p>© 2026 MarketFiyatEtiketi.com — Profesyonel Raf Çözümleri</p>
      </footer>
    </div>
  );
};

export default Home;