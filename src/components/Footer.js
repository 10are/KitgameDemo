import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Hakkımızda</h2>
            <p>Kitap dünyasına yeni bir soluk getiriyoruz. En sevdiğiniz kitapları keşfedin ve satın alın.</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Bağlantılar</h2>
            <ul className="space-y-2">
              <li><a href="#">Anasayfa</a></li>
              <li><a href="#">Kitaplar</a></li>
              <li><a href="#">Yazarlar</a></li>
              <li><a href="#">İletişim</a></li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Hızlı Erişim</h2>
            <ul className="space-y-2">
              <li><a href="#">Hesabım</a></li>
              <li><a href="#">Siparişlerim</a></li>
              <li><a href="#">Yardım Merkezi</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Bizi Takip Edin</h2>
            <div className="flex space-x-2">
              <a href="#" className="text-white hover:text-red-500"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white hover:text-red-500"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white hover:text-red-500"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
