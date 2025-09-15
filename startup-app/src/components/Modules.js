import React from "react";
import htmlcssicon from "../imgs/html-css-icon.png";
import jsicon from "../imgs/js-icon.png";
import reacticon from "../imgs/react-icon.png";
import dbicon from "../imgs/db-icon.png";

const courseModules = [
  {
    title: "HTML & CSS Temelleri",
    description:
      "Modern web sayfalarının iskeletini ve stilini en baştan öğren.",
    icon: htmlcssicon, // sen ekle
  },
  {
    title: "JavaScript ile Dinamiklik",
    description:
      "Etkileşimli ve kullanıcı dostu web uygulamaları geliştirmeyi keşfet.",
    icon: jsicon,
  },
  {
    title: "React ile Modern Frontend",
    description:
      "Bileşen tabanlı mimariyle güçlü ve ölçeklenebilir arayüzler kur.",
    icon: reacticon,
  },
  {
    title: "Backend ve Veri Tabanı",
    description:
      "Node.js ve veritabanı entegrasyonu ile full-stack gücünü kazan.",
    icon: dbicon,
  },
];

function CourseModules() {
  return (
    <div className="justify-items-center">
      <h1 className="uppercase font-firaSans font-bold text-3xl my-3">
        öne çıkan kurslar
      </h1>
      <div className="flex flex-wrap justify-center gap-4 ">
        {courseModules.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#FBF8EF] rounded-2xl shadow-md p-6 flex flex-col items-center text-center 
               hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="justify-items-center mb-4">
              <img
                src={item.icon}
                alt={item.description}
                className="w-16 h-16 object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold font-firaSans text-[#065084] mb-2">
                {item.title}
              </h1>
              <p className="text-md font-semibold text-[#0F828C] font-libertinus">
                {item.description}
              </p>
            </div>
            <button className="uppercase mt-5 bg-[#3887BE] text-white py-1 px-4 text-lg rounded-sm transition-all duration-300 hover:bg-[#38419D] ">
              başla
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseModules;
