import React from "react";

const pricingPlans = [
  {
    title: "Ücretsiz",
    price: "0 tl",
    features: ["HTML & CSS dersleri", "Topluluk erişimi", "Sınırlı içerik"],
    cta: "Kaydol",
  },
  {
    title: "Standart",
    price: "499 tl",
    features: ["Tüm modüllere erişim", "Eğitmen desteği", "Proje ödevleri"],
    cta: "Kaydol",
  },
  {
    title: "Profesyonel",
    price: "899 tl",
    features: [
      "Standart paketin tümü",
      "1-1 mentorluk",
      "Sertifika ve iş yönlendirmesi",
    ],
    cta: "Kaydol",
  },
];

function Plan() {
  return (
    <div className="justify-items-center w-full py-3 bg-[#77B0AA] ">
      <h1 className="uppercase font-firaSans font-bold text-3xl my-3">
        Planlar
      </h1>
      <div className="flex flex-wrap justify-center gap-4 ">
        {pricingPlans.map((item, idx) => (
          <div
            className="w-80 bg-[#fff]  shadow-sm transition duration-300 hover:shadow-md  hover:shadow-md p-8 rounded-tr-[4em] rounded-bl-[4em] rounded-tl-[1em] rounded-br-[1em] p-4 flex flex-col items-center text-center"
            key={idx}
          >
            <h1 className="my-2 font-firaSans text-xl font-semibold">
              {item.title}
            </h1>
            <p className="text-lg font-firaSans"> {item.price}</p>
            {item.features.map((feature, i) => (
              <p key={i} className="font-libertinus font-lg">
                {feature}
              </p>
            ))}
            <button className="my-4 bg-[#7EA1FF] py-2 px-5 text-lg rounded-lg text-white transition duration-300 hover:bg-[#7AA2E3] hover:rotate-[0.1rad] ">
              {item.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plan;
