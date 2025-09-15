import React from "react";
import webdevimg from "../imgs/web-dev.png";

function Hero() {
  return (
    <section className="flex flex-col-reverse items-center sm:flex-row  rounded-bl-[3em] rounded-br-[3em] justify-center py-32  gap-12 w-full bg-gradient-to-r from-[#708993] to-[#19183B] ">
      <div className="py-12 text-center">
        <h1 className="uppercase text-[#E7F2EF] font-firaSans text-3xl font-semibold">
          Modern Web Gelişrtirme Kursu
        </h1>
        <p className="font-libertinus text-[#E7F2EF] text-xl my-3">
          Frontend’den full-stack’e uzanan pratik odaklı bir öğrenme deneyimi
        </p>
        <p className="font-libertinus text-xl text-[#E7F2EF]">
          Proje tabanlı içeriklerle gerçek dünyaya hazır hale gel
        </p>
        <button className="uppercase mt-4 bg-[#320A6B] text-white font-semibold px-4 py-2 rounded-md transition duration-500 hover:bg-[#1F2544] hover:scale-[1.05] ">
          kaydol
        </button>
      </div>
      <div>
        <img src={webdevimg} alt="web-developer" />
      </div>
    </section>
  );
}

export default Hero;
