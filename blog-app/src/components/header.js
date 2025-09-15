import { useState, useRef, useEffect } from "react";
import { FiMenu, FiX, FiMoon } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [menuHeight, setMenuHeight] = useState("0px");

  useEffect(() => {
    setMenuHeight(menuOpen ? `${menuRef.current.scrollHeight}px` : "0px");
  }, [menuOpen]);

  return (
    <header className="bg-gray-50 shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">MyBlog</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center font-shareTech">
          <a
            href="#home"
            className="text-gray-700 text-xl hover:text-gray-900 transition"
          >
            Home
          </a>
          <a
            href="#blog"
            className="text-gray-700 text-xl hover:text-gray-900 transition"
          >
            Blog
          </a>
          <a
            href="#about"
            className="text-gray-700 text-xl hover:text-gray-900 transition"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-700 text-xl hover:text-gray-900 transition"
          >
            Contact
          </a>

          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-gray-900"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu with animated height */}
      <div
        ref={menuRef}
        style={{ maxHeight: menuHeight }}
        className="md:hidden bg-gray-50 overflow-hidden transition-all duration-300 shadow-md"
      >
        <nav className="flex flex-col px-6 py-4 space-y-3">
          <a
            href="#home"
            className="text-gray-700 hover:text-gray-900 transition"
          >
            Home
          </a>
          <a
            href="#blog"
            className="text-gray-700 hover:text-gray-900 transition"
          >
            Blog
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-gray-900 transition"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-gray-900 transition"
          >
            Contact
          </a>

          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="mt-2 text-gray-700 hover:text-gray-900 transition flex items-center">
            <FiMoon size={20} className="mr-2" /> Dark Mode
          </button>
        </nav>
      </div>
    </header>
  );
}
