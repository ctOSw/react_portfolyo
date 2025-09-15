import React from "react";
import coffeeCup from "../imgs/coffee-cup.png";
import { FaChevronDown } from "react-icons/fa";
import { Tooltip } from "antd";

function HeroSection() {
  return (
    <section className="pt-[35%]  lg:pt-[22%] h-screen bg-[url(./imgs/hero-bg.jpg)] bg-cover w-full justify-items-center relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      {/* Content */}
      <div>
        <div className="inset-0 flex flex-col  items-center justify-center text-white text-center">
          <div className="text-5xl w-full font-bold drop-shadow-lg flex justify-center items-center md:gap-2 font-playfairDisplay">
            <h1 className="w-1/2 md:w-full"> Her Yudumda Mutluluk </h1>
            <img src={coffeeCup} className="hidden sm:block" alt="coffee-cup" />
          </div>
          <p className="mt-4 drop-shadow-lg text-lg font-playfairDisplay font-semibold">
            Günün keyfi burada başlıyor
          </p>
          <div className="flex w-full flex-wrap justify-center drop-shadow-lg items-center gap-4">
            <a
              href="/Sipariş"
              className=" mt-6 px-6 py-3 border border-[#603F26] bg-[#fff] text-[#3B3030] font-semibold rounded-lg shadow-md hover:bg-[#603F26] hover:text-white transition  duration-500"
            >
              Hemen Sipariş Ver
            </a>
            <a
              href="/"
              className="mt-6 px-6 py-3 bg-[#6C4E31] text-white font-semibold rounded-lg shadow-md hover:bg-[#603F26] transition duration-500"
            >
              Menüyü Gör
            </a>
          </div>
          <Tooltip title="Menüye git">
            <a
              href="#menu"
              className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer"
            >
              <FaChevronDown size={40} />
            </a>
          </Tooltip>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
