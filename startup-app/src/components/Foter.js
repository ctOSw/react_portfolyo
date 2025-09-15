import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#19183B] text-[#E7F2EF] py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo / Başlık */}
        <h1 className="text-xl font-firaSans font-semibold">
          Modern Web Kursu
        </h1>

        {/* Sosyal İkonlar */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#DAF5FF] transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#DAF5FF] transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#DAF5FF] transition-colors"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Alt Kısım */}
      <div className="mt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Modern Web Kursu. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}

export default Footer;
