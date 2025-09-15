import React from "react";
import { Carousel } from "antd";

const images = [
  "/imgs/cafe-interior2.jpg",
  "/imgs/cafe-interior3.jpg",
  "/imgs/cafe-interior4.jpg",
];

const CafeInterior = () => (
  <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <h1 className="font-firaSans text-2xl sm:text-3xl font-semibold text-center my-4">
      İçeriden Görüntüler
    </h1>
    <Carousel arrows infinite className="rounded-lg overflow-hidden">
      {images.map((img, idx) => (
        <div key={idx}>
          <img
            src={img}
            alt={`Cafe ${idx + 2}`}
            loading="lazy"
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] object-cover rounded-lg"
          />
        </div>
      ))}
    </Carousel>
  </div>
);

export default React.memo(CafeInterior);
