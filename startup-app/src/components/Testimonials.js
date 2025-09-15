import React from "react";

const testimonials = [
  {
    name: "Zeynep T.",
    comment:
      "Kurs sayesinde ilk freelance işimi aldım, anlatım çok anlaşılırdı.",
  },
  {
    name: "Emre K.",
    comment:
      "Gerçek projelerle öğrendim, sadece teori değil uygulama da çok güçlüydü.",
  },
  {
    name: "Ayşe B.",
    comment: "React bölümünde öğrendiklerimle stajda hemen fark yarattım.",
  },
  {
    name: "Mert Y.",
    comment:
      "Backend modülleri sayesinde full-stack geliştirme mantığını kavradım.",
  },
];

function Testimonials() {
  return (
    <section className="py-12 ">
      <h2 className="text-3xl font-firaSans font-semibold text-center mb-8">
        Kullanıcı Yorumları
      </h2>
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#FBF8EF] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-[45%] lg:w-[30%]"
          >
            <p className="text-gray-700 mb-4 text-lg font-libertinus">
              "{item.comment}"
            </p>
            <h3 className="text-gray-900 font-firaSans font-semibold text-right">
              - {item.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
