import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    // Sayfa başlığı SEO için kritik
    document.title = "Ücretsiz Market Fiyat Etiket Programı | Raf Etiketi Tasarım";
    window.scrollTo(0, 0);

    // Animasyon efekti
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="seo-home">
      <style>{`
        .seo-home {
          font-family: 'Calibri', 'Candara', 'Segoe UI', 'Arial', sans-serif;
          background-color: #f8fafc;
          color: #1e293b;
          line-height: 1.7;
        }

        /* Hero Alanı - H1 */
        .hero-box {
          padding: 100px 5% 60px;
          text-align: center;
          background: linear-gradient(180deg, #ffffff 0%, #f0fdf4 100%);
        }
        .hero-box h1 {
          font-size: clamp(32px, 5vw, 64px);
          font-weight: 800;
          color: #065f46;
          margin-bottom: 25px;
          line-height: 1.2;
        }
        .hero-box p {
          font-size: 19px;
          color: #475569;
          max-width: 850px;
          margin: 0 auto 40px;
        }

        /* CTA Buton */
        .cta-btn {
          background: #16a34a;
          color: white;
          padding: 20px 50px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: bold;
          font-size: 20px;
          display: inline-block;
          transition: 0.3s;
          box-shadow: 0 10px 20px rgba(22, 163, 74, 0.2);
        }
        .cta-btn:hover {
          transform: translateY(-3px);
          background: #15803d;
          box-shadow: 0 15px 30px rgba(22, 163, 74, 0.3);
        }

        /* Blog ve İçerik Bölümleri - H2 & H3 */
        .content-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 60px 5%;
        }
        .seo-section {
          background: white;
          padding: 50px;
          border-radius: 30px;
          margin-bottom: 40px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 6px rgba(0,0,0,0.02);
        }
        .seo-section h2 {
          font-size: 32px;
          color: #064e3b;
          margin-bottom: 20px;
          border-left: 5px solid #16a34a;
          padding-left: 15px;
        }
        .seo-section h3 {
          font-size: 24px;
          color: #16a34a;
          margin-top: 30px;
          margin-bottom: 15px;
        }
        .feature-list {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin-top: 30px;
        }
        .feature-list li {
          background: #f0fdf4;
          padding: 20px;
          border-radius: 15px;
          border-left: 4px solid #16a34a;
        }

        /* Animasyon */
        .reveal { opacity: 0; transform: translateY(20px); transition: 0.8s ease-out; }
        .reveal.visible { opacity: 1; transform: translateY(0); }

        footer { background: #064e3b; color: #d1fae5; padding: 50px 5%; text-align: center; margin-top: 60px; }
      `}</style>

      {/* --- ANA BAŞLIK (H1) --- */}
      <header className="hero-box reveal">
        <h1>Profesyonel Market ve Mağaza <br/>Fiyat Etiketi Çözümleri</h1>
        <p>
          İşletmenizin raf düzenini profesyonel bir seviyeye taşımak ve fiyat karmaşasına son vermek için geliştirdiğimiz 
          <strong> Mağaza Fiyat Etiket Editörü</strong>, hız ve estetiği bir araya getiriyor.
        </p>
        <Link to="/editor" className="cta-btn">Ücretsiz Etiket Tasarla →</Link>
      </header>

      <main className="content-wrap">
        {/* --- İKİNCİ BÖLÜM (H2) --- */}
        <section className="seo-section reveal">
          <h2>Hızlı, Pratik ve Ücretsiz Fiyat Etiket Programı</h2>
          <p>
            Küçük esnafımızdan büyük market zincirlerine kadar herkesin ihtiyacına hitap eden <strong>Bakkal Etiket Programı</strong> ve 
            gelişmiş <strong>Market Fiyat Etiket Programı</strong> modüllerimizle tanışın. Sektörde en çok ihtiyaç duyulan 
            <strong> Toplu Market Etiketi Basma</strong> özelliği ile yüzlerce ürünün fiyatını aynı anda güncelleyebilir, zaman kaybının önüne geçebilirsiniz.
          </p>
          <p>
            Üstelik temel özelliklerimizi kullanmak için bir servet ödemenize gerek yok; <strong>Ücretsiz Fiyat Etiket Programı</strong> arayışındaki 
            işletmeler için sunduğumuz çözümlerle maliyetlerinizi düşürüyoruz.
          </p>
        </section>

        {/* --- ÜÇÜNCÜ BÖLÜM (H2 & H3) --- */}
        <section className="seo-section reveal">
          <h2>Sektörel Raf Fiyat Etiketi Tasarımı</h2>
          <p>
            Her mağazanın ruhu farklıdır. Bu yüzden <strong>Mağaza Raf Etiketi Programı</strong> aracımız; manav, şarküteri, kasap veya züccaciye 
            gibi farklı alanlara özel <strong>Raf Fiyat Etiketi Tasarımı</strong> yapmanıza imkan tanır.
          </p>

          <ul className="feature-list">
            <li>
              <h3>Mağaza Ürün Fiyat Etiketi</h3>
              Şık, okunaklı ve modern tasarımlar ile müşteri memnuniyetini artırın.
            </li>
            <li>
              <h3>Market Ürün Fiyat Etiketi</h3>
              Barkod uyumlu, standart ölçülerde seri üretim ve hızlı baskı imkanı.
            </li>
            <li>
              <h3>Fiyat Etiket Programı</h3>
              Excel entegrasyonu ile hatasız veri aktarımı ve anlık fiyat güncelleme.
            </li>
          </ul>
        </section>

        {/* --- SON MESAJ --- */}
        <section className="reveal" style={{textAlign: 'center', padding: '40px 0'}}>
          <p style={{fontSize: '20px', fontStyle: 'italic', color: '#065f46'}}>
            "MarketFiyatEtiketi.com olarak, sadece ürün satmıyor; işletmenizin operasyonel gücünü artıracak dijital araçlar sunuyoruz."
          </p>
          <div style={{marginTop: '30px'}}>
             <Link to="/editor" className="cta-btn">Değişimi Fark Edin - Hemen Başlayın</Link>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 MarketFiyatEtiketi.com — Dijital Raf ve Fiyatlandırma Çözümleri</p>
      </footer>
    </div>
  );
};

export default Home;