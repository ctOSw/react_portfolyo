import { Avatar, Rate } from "antd";
import React from "react";
const testimonials = [
  {
    id: 1,
    name: "Ayşe Yılmaz",
    shortName: "AY",
    comment:
      "Latte gerçekten harikaydı! Ortam çok huzurlu, arkadaşlarımla keyifli vakit geçirdim.",
    favorite: "Latte",
    rate: 5,
  },
  {
    id: 2,
    name: "Mehmet Demir",
    shortName: "MD",
    comment: "Kahvaltı tabağı doyurucuydu, servis hızlıydı. Tekrar geleceğim.",
    favorite: "Kahvaltı Tabağı",
    rate: 4,
  },
  {
    id: 3,
    name: "Elif Kaya",
    shortName: "EK",
    comment:
      "Tatlılar mükemmel! Özellikle cheesecake favorim oldu, mutlaka denemelisiniz.",
    favorite: "Cheesecake",
    rate: 5,
  },
  {
    id: 4,
    name: "Can Öztürk",
    shortName: "CÖ",
    comment:
      "Soğuk kahveler çok iyi, ama müzik biraz yüksek geldi. Genel olarak güzel bir deneyimdi.",
    favorite: "Soğuk Kahve",
    rate: 3,
  },
];

function TestimonialsSection() {
  return (
    <section className="relative justify-items-center  py-12 bg-[url(./imgs/cafe-bg.jpg)]  bg-cover">
      <h1 className="p-6 mb-4  text-3xl font-playfairDisplay   text-black italic font-bold">
        Müşteri Yorumları
      </h1>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 "></div>
      {/* Overlay */}
      <div className="flex items-center   justify-center gap-8 flex-wrap">
        {testimonials.map((item) => (
          <div
            className=" w-full  flex gap-2  lg:w-1/3  border border-[#607274] bg-transparent backdrop-blur-md p-5 rounded-tr-[50px] rounded-bl-[50px] rounded-tl-md rounded-br-md "
            key={item.id}
          >
            <div>
              <Avatar className="bg-[#607274] ">{item.shortName}</Avatar>
            </div>
            <div>
              <p className="font-firaSans text-xl font-bold">
                Favori : {item.favorite}
              </p>
              <p className="font-playfairDisplay font-bold font-normal xl:text-lg my-4">
                {item.comment}
              </p>
              <Rate disabled value={item.rate} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
