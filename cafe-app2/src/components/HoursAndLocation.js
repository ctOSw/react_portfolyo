import React from "react";

function HoursAndLocation() {
  return (
    <section className="py-12 bg-[#FFFDF6] justify-items-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start">
        {/* Harita */}
        <div className="w-full md:w-1/2 h-64 md:h-96">
          <iframe
            title="Kafe Konumu"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1259875.5135051436!2d35.78306343053152!3d41.919691219744365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1str!2sus!4v1757180799300!5m2!1str!2sus"
            width="100%"
            height="100%"
            className="border-0 rounded-lg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Çalışma Saatleri */}
        <div className="w-full md:w-1/2 flex flex-col justify-center bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
          <h2 className="font-playfairDisplay text-2xl font-bold mb-4">
            Çalışma Saatlerimiz
          </h2>
          <ul className="space-y-2 text-[#37353E] font-semibold">
            <li>Pazartesi - Cuma: 08:00 - 22:00</li>
            <li>Cumartesi: 09:00 - 23:00</li>
            <li>Pazar: 09:00 - 21:00</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HoursAndLocation;
