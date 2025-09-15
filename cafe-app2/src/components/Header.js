import { Dropdown } from "antd";
import React from "react";
import "../index.css";
import { FaPhoneAlt } from "react-icons/fa";
import DrawerMenu from "./DrawerMenu";

const items = [
  {
    id: 1,
    label: (
      <a className="font-semibold text-[#fff] " target="_blank" href="/">
        Tatlılar
      </a>
    ),
    type: "link",
  },
  {
    id: 2,
    label: (
      <a className="font-semibold text-[#fff] " target="_blank" href="/">
        İçecekler
      </a>
    ),
    type: "link",
  },
  {
    id: 3,
    label: (
      <a className="font-semibold text-[#fff] " target="_blank" href="/">
        Ana Yemekler
      </a>
    ),
    type: "link",
  },

  {
    id: 4,
    label: (
      <a className="font-semibold text-[#fff] " target="_blank" href="/">
        Çocuk Menüsü
      </a>
    ),
    type: "link",
  },

  {
    id: 5,
    label: (
      <a className="font-semibold text-[#fff] " target="_blank" href="/">
        Salatalar
      </a>
    ),
    type: "link",
  },

  {
    id: 6,
    label: (
      <a
        className="font-semibold text-[#fff] hover:text-black"
        target="_blank"
        href="/"
      >
        Atıştırmalıklar
      </a>
    ),
    type: "link",
  },
];

function Header() {
  return (
    <header className="fixed justify-items-center  bg-[#FFFDF6]  pb-8 pt-4 z-40 shadow-md  top-0 left-0 w-full">
      <div className="hidden  md:block justify-items-end w-full pr-10 text-[#000000] ">
        <span className="flex items-center gap-1">
          <FaPhoneAlt /> +90 555 555 55 55
        </span>
      </div>
      <nav className="flex justify-between items-center w-full  lg:w-1/2 justify-around">
        <div>
          <h1 className="font-bold text-3xl text-[#222831] font-firaSans">
            Logo
          </h1>
        </div>
        <div className="hidden md:flex gap-4 items-center font-semibold font-libreFranklin">
          <a
            href="/"
            className="text-lg text-[#181C14] transition duration-500 hover:bg-[#EEEEEE] rounded-sm px-4 py-2"
          >
            {" "}
            Anasayfa
          </a>
          <Dropdown menu={{ items }} placement="bottom">
            <a
              href="/"
              className="text-lg text-[#181C14] transition duration-500 hover:bg-[#EEEEEE] rounded-sm px-4 py-2"
            >
              Menü
            </a>
          </Dropdown>
          <div>
            <a
              href="/Hakkımızda"
              className="text-lg text-[#181C14] transition duration-500 hover:bg-[#EEEEEE] rounded-sm px-4 py-2"
            >
              Hakkımızda
            </a>
          </div>
          <div>
            <a
              href="/İletişim"
              className="text-lg text-[#181C14] transition duration-500 hover:bg-[#EEEEEE] rounded-sm px-4 py-2"
            >
              İletişim
            </a>
          </div>
          <div>
            <a
              href="/Sipariş"
              className="text-lg text-[#181C14] transition duration-500 hover:bg-[#EEEEEE] rounded-sm px-4 py-2"
            >
              Sipariş
            </a>
          </div>
        </div>
        <DrawerMenu />
      </nav>
    </header>
  );
}

export default Header;
