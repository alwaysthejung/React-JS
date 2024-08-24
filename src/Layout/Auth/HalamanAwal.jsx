import React, { useState } from 'react';
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

        <footer className="text-gray-400 bg-black body-font">
          <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              {[
                { title: 'Need Help?', links: ['Help', 'Feedback'] },
                { title: 'Categories', links: ['First Link', 'Second Link', 'Third Link', 'Fourth Link'] },
                { title: 'View Website in', links: ['English', 'Indonesian'] },
              ].map((section, idx) => (
                <div key={idx} className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">{section.title}</h2>
                  <nav className="list-none mb-10">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <a href="#" className="text-gray-400 hover:text-white">{link}</a>
                      </li>
                    ))}
                  </nav>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black bg-opacity-75">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-gray-400 text-sm text-center sm:text-left">
                © 2024 Nobar —
                <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-500 ml-1" target="_blank">@alwaysthejung</a>
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a className="text-gray-400" href="#">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-400" href="#">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-400" href="#">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-400" href="#">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}