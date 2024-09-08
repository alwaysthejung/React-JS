import React, { useState } from 'react';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
const images = [
  '/images/1.jpeg',
  '/images/2.jpeg',
  '/images/3.jpeg',
  '/images/5.jpeg',
];

export default function HalamanAwal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-fixed bg-center" style={{ backgroundImage: "url('/images/bg.jpg')" }}>
        <div className="text-white">
          <header className="flex w-full h-20 items-center justify-between gap-4 bg-black bg-opacity-50">
            <h1 className="logo text-4xl ml-20 text-red-600 font-bold">NOBAR</h1>
            <div className="mr-20 flex items-center gap-4">
              {/* Dropdown Button */}
              <div className="relative inline-block text-left">
                <button
                  className="border border-white px-4 py-2 hover:bg-white hover:text-black transition"
                  onClick={toggleDropdown}
                >
                  English
                </button>
                {/* Dropdown Menu */}
                <div
                  className={`dropdown-menu absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-50 ${
                    isOpen ? 'block' : 'hidden'
                  }`}
                >
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black">
                    English
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black">
                    Indonesian
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black">
                    French
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black">
                    Deutsch
                  </a>
                </div>
              </div>
              <button className="border border-red bg-red-600 text-white px-4 py-2 hover:bg-red-900 transition ml-2">
                <Link to="/login">Sign In</Link>
              </button>
            </div>
          </header>

          {/* Konten utama di sini */}
          <main className="text-center flex flex-col h-screen justify-center items-center">
            <h1 className="text-4xl mb-2">Film trending, Drakor, Anime, dan lainnya.</h1>
            <p className="text-lg mb-2">Nonton di manapun. Batalkan kapanpun.</p>
            <p className="text-sm mb-6">Siap untuk menonton? Masukkan email Anda untuk membuat atau memulai kembali keanggotaan.</p>
            <div className="flex justify-center">
              <input type="email" placeholder="Alamat email" className="px-4 py-2 text-black rounded-l-md w-80" />
              <button className="px-4 py-2 bg-red-600 text-white rounded-r-md hover:bg-red-700 transition">
                <a href="register.html">Get Started</a>
              </button>
            </div>
          </main>
        </div>

        <section className="bg-black bg-opacity-70 text-white py-4 mt-auto">
          <div className="container px-5 py-24 mx-auto text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Trending Now</h1>
            <div className="flex flex-wrap justify-center gap-5 -m-4 mt-10">
              {images.map((src, index) => (
                <img key={index} alt="gallery" className="w-44 h-50 object-cover object-center" src={src} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer/>
    </>
  );
}