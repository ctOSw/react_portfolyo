import React from "react";

function Content1() {
  return (
    <div className="pt-24 h-screen relative bg-center bg-cover bg-fixed bg-no-repeat bg-[url(./imgs/bg-img1.jpg)]">
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-white font-firaSans text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Welcome to My Blog
        </h1>
        <p className="text-gray-200 font-firaSans text-lg sm:text-xl md:text-2xl mb-6 max-w-2xl">
          Sharing my thoughts on web development, design, and technology.
        </p>
        <div className="font-firaSans  flex flex-col  sm:flex-row gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition">
            Read Articles
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-6 py-3 rounded-md transition">
            About Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Content1;
