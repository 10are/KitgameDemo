import React from 'react';

function Header() {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src="/logo.png" 
              className="h-8"
            />
            <ul className="flex space-x-6 text-white">
              <li className="text-sm hover:text-red-500 transition duration-300 ease-in-out">Ana Sayfa</li>
              <li className="text-sm hover:text-red-500 transition duration-300 ease-in-out">Yeni</li>
              <li className="text-sm hover:text-red-500 transition duration-300 ease-in-out">OldSchool</li>
              <li className="text-sm hover:text-red-500 transition duration-300 ease-in-out">Yeni ve Popüler</li>
              <li className="text-sm hover:text-red-500 transition duration-300 ease-in-out">Listem</li>
            </ul>
          </div>
          <div className="flex items-center space-x-6">
            <i className="fas fa-search text-white text-2xl hover:text-red-500 transition duration-300 ease-in-out"></i>
            <i className="fas fa-gift text-white text-2xl hover:text-red-500 transition duration-300 ease-in-out"></i>
            <i className="fas fa-bell text-white text-2xl hover:text-red-500 transition duration-300 ease-in-out"></i>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="Netflix Kullanıcı"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
