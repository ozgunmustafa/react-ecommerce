import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light py-40">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-6 mb-20">
            <ul className="footer-menu">
              <li>
                <a href="/">Kategoriler</a>
              </li>
              <li>
                <a href="/">Gömlek</a>
              </li>
              <li>
                <a href="/">T-shirt</a>
              </li>
              <li>
                <a href="/">Pantolon</a>
              </li>
              <li>
                <a href="/">Şort</a>
              </li>
              <li>
                <a href="/">Aksesuar</a>
              </li>
            </ul>

            <ul className="footer-menu">
              <li>
                <a href="/">ÜYELİK iŞLEMLERİ</a>
              </li>
              <li>
                <a href="/">Giriş Yap</a>
              </li>
              <li>
                <a href="/">Kayıt Ol</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-6 mb-20">
            <ul className="footer-menu">
              <li>
                <a href="/">BURASI HAKKINDA</a>
              </li>
              <li>
                <a href="/">Tarihçe</a>
              </li>
              <li>
                <a href="/">Markalar</a>
              </li>
              <li>
                <a href="/">Koşulsuz Müşteri Mutluluğu</a>
              </li>
              <li>
                <a href="/">THE ONE - Özel Müşteri Programı</a>
              </li>
              <li>
                <a href="/">Özel Dikim</a>
              </li>
              <li>
                <a href="/">Hediye Danışmanlığı</a>
              </li>
              <li>
                <a href="/">Kişisel Müşteri Danışmanlığı</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-6 mb-20">
            <ul className="footer-menu">
              <li>
                <a href="/">MÜŞTERİ HİZMETLERİ</a>
              </li>
              <li>
                <a href="/">Bize Sorun</a>
              </li>
              <li>
                <a href="/">Sıkça Sorulan Sorular</a>
              </li>
              <li>
                <a href="/">Ücretsiz Kargo İade</a>
              </li>
              <li>
                <a href="/">Üyelik Sözleşmesi</a>
              </li>
            </ul>

            <ul className="footer-menu">
              <li>Bize Ulaşın</li>
              <li>
                <i className="fas fa-map-marker-alt"></i>Cengizhan Mahallesi
                1620/22 Sokak No:55 Bayraklı/İzmir
              </li>
              <li>
                {' '}
                <a href="/">
                  <i className="fas fa-phone"></i>+90 507 386 11 25
                </a>{' '}
              </li>
              <li>
                {' '}
                <a href="/">
                  <i className="fas fa-envelope"></i>ozzgunmustafa@gmail.com
                </a>{' '}
              </li>
            </ul>
          </div>

          <div className="col-lg-3 text-center mb-20">
            <img src="img/logo.svg" alt="" className="w-75 mb-30" />

            <p className="fw-700"> Bizi Takip Edin</p>
            <ul className="social-icons">
              <li>
                <a href="/">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
