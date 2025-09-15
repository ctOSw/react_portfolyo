import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiX } from "react-icons/si"; // X ikon

function Footer() {
  return (
    <footer className=" py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo / Blog adı */}
        <div className="text-gray-800 text-xl font-bold font-shareTech">
          MyBlog
        </div>

        {/* Footer linkleri */}
        <div className="flex space-x-6 text-gray-700 font-shareTech">
          <a href="#about" className="hover:text-gray-900 transition">
            About
          </a>
          <a href="#blog" className="hover:text-gray-900 transition">
            Blog
          </a>
          <a href="#contact" className="hover:text-gray-900 transition">
            Contact
          </a>
        </div>

        {/* Sosyal medya ikonları */}
        <div className="flex space-x-4 text-gray-600">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-900 transition"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-900 transition"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-900 transition"
          >
            <SiX size={22} />
          </a>
        </div>
      </div>

      {/* Telif hakkı */}
      <div className="mt-8 text-center text-gray-500 text-sm font-shareTech">
        © 2025 MyBlog. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
