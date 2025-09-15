import React from "react";

function Header() {
  return (
    <header className="fixed w-full left-0 top-0 justify-items-center z-40 py-[2em] bg-[#03506F] ">
      <nav className="flex w-1/2  flex-col md:flex-row justify-around items-center gap-2">
        <div className="uppercase text-white flex items-center gap-6">
          <p className="font-firaSans text-2xl font-semibold">Logo</p>
          <a
            href="/kurslar"
            className="transition duration-500 rounded-sm hover:bg-[#146C94] py-1 px-4"
          >
            Kurslar
          </a>
        </div>

        <div className="w-64">
          <input
            className="w-full py-2 px-3 rounded-lg outline-none bg-[#146C94]/70  shadow-sm text-white focus:outline-[#19A7CE]   "
            placeholder="Ara..."
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
