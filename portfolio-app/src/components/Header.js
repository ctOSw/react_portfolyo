import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // react-icons

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`px-6 md:px-12 py-5 fixed top-0 right-0 left-0 z-20 transition-colors duration-500 font-notoSans uppercase
        ${
          isMenuOpen
            ? "bg-color1" // Menü açıksa sabit arka plan
            : isScrolled
            ? "bg-color1 backdrop-blur-md" // Scroll sonrası
            : "bg-transparent backdrop-blur-sm" // Başlangıç
        }`}
    >
      <nav className="container flex items-center justify-between">
        {/* Logo */}
        <div>
          <a
            className="text-3xl md:text-4xl font-bold italic text-color4"
            href="#"
          >
            LOGO
          </a>
        </div>

        {/* Desktop Menü */}
        <div className="hidden md:flex text-white gap-6">
          <a
            className="px-4 py-2 font-semibold text-lg transition duration-300 ease-in hover:bg-color2/30 rounded-sm"
            href="#"
          >
            Home
          </a>
          <a
            className="px-4 py-2 font-semibold text-lg transition duration-300 ease-in hover:bg-color2/30 rounded-sm"
            href="#"
          >
            My Projects
          </a>
          <a
            className="px-4 py-2 font-semibold text-lg transition duration-300 ease-in hover:bg-color2/30 rounded-sm"
            href="#"
          >
            About me
          </a>
          <a
            className="px-4 py-2 font-semibold text-lg transition duration-300 ease-in hover:bg-color2/30 rounded-sm"
            href="#"
          >
            Contact
          </a>
        </div>

        {/* Mobil Menü Butonu */}
        <button
          className="md:hidden text-white transition-transform duration-300 hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>
      </nav>

      {/* Mobil Menü */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-500 transform origin-top 
          ${
            isMenuOpen
              ? "scale-y-100 opacity-100"
              : "scale-y-0 opacity-0 pointer-events-none"
          } 
          bg-color1 text-white flex flex-col items-center gap-4 py-6 shadow-lg`}
      >
        <a
          className="px-4 py-2 font-semibold text-lg hover:bg-color2/30 rounded-sm"
          href="#"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </a>
        <a
          className="px-4 py-2 font-semibold text-lg hover:bg-color2/30 rounded-sm"
          href="#"
          onClick={() => setIsMenuOpen(false)}
        >
          My Projects
        </a>
        <a
          className="px-4 py-2 font-semibold text-lg hover:bg-color2/30 rounded-sm"
          href="#"
          onClick={() => setIsMenuOpen(false)}
        >
          About me
        </a>
        <a
          className="px-4 py-2 font-semibold text-lg hover:bg-color2/30 rounded-sm"
          href="#"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </a>
      </div>
    </header>
  );
}

export default Header;
