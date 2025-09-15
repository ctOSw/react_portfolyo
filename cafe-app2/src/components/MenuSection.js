import React from "react";
import coffe from "../imgs/coffe.jpg";

export const menuItems = [
  {
    id: 1,
    name: "Espresso",
    description: "Yoğun ve aromatik espresso shot",
    src: coffe,
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "Süt köpüğü ile dengelenmiş taze kahve",
    src: coffe,
  },
  {
    id: 3,
    name: "Cheesecake",
    description: "Kremalı ve hafif tatlı, meyve soslu",
    src: coffe,
  },
  {
    id: 4,
    name: "Club Sandwich",
    description: "Tavuk, bacon ve taze sebzelerle",
    src: coffe,
  },
  {
    id: 5,
    name: "Mojito",
    description: "Ferahlık veren nane ve limon aromalı içecek",
    src: coffe,
  },
  {
    id: 6,
    name: "Brownie",
    description: "Çikolata severler için yoğun lezzet",
    src: coffe,
  },
];

function MenuSection() {
  return (
    <section
      id="menu"
      className="justify-items-center py-8 bg-gradient-to-b from-[#FFFDF6] to-[#f1eee5]"
    >
      <h1 className="text-4xl font-playfairDisplay italic font-bold mb-2">
        Menü
      </h1>
      <div className="flex flex-wrap justify-center gap-4 flex-wrap ">
        {menuItems.map((item) => (
          <div
            className="w-[90%] sm:w-1/2 md:w-1/2 lg:w-1/4 rounded-lg shadow-sm bg-[url(./imgs/bg1.png)] bg-[#fff] bg-center bg-cover  hover:shadow-md   transition duration-500"
            key={item.id}
          >
            <div>
              <img src={item.src} className="rounded-lg " alt="menü" />
            </div>
            <div className="mt-4 p-4">
              <h1 className="text-2xl text-[#503C3C] font-bold font-firaSans py-2">
                {item.name}
              </h1>
              <p className="font-playfairDisplay text-lg text-[#8C6A5D] font-semibold">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="my-5 ">
        <a
          className="font-libreFranklin text-lg bg-[#DCC5B2] text-white px-4 py-2 rounded-sm transition duration-700 hover:bg-[#BCA88D]"
          href="/"
        >
          Daha Fazla
        </a>
      </div>
    </section>
  );
}

export default MenuSection;
