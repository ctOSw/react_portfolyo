import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#F5E9DA] text-[#37353E] py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Logo */}
        <div className="text-center md:text-left">
          <h1 className="font-bold text-2xl  font-firaSans ">Kafe Logo</h1>
          <p className="text-md mt-2 ">
            © 2025 Kafe Adı. Tüm hakları saklıdır.
          </p>
        </div>

        {/* Navigasyon Linkleri */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6  text-lg font-semibold font-libreFranklin">
          <a href="/Menü" className="hover:text-black transition duration-300">
            Menü
          </a>
          <a
            href="/Hakkımızda"
            className="hover:text-black transition duration-300"
          >
            Hakkımızda
          </a>
          <a
            href="/İletişim"
            className="hover:text-black transition duration-300"
          >
            İletişim
          </a>
          <a
            href="/Sipariş"
            className="hover:text-black transition duration-300"
          >
            Sipariş
          </a>
        </div>

        {/* Sosyal Medya */}
        <div className="flex justify-center md:justify-end gap-4 text-xl">
          <a
            href="instagram"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="facebook"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition duration-300"
          >
            <FaFacebookSquare />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
