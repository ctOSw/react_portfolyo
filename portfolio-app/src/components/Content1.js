import React from "react";
import profile from "../imgs/coding-bg.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Content1() {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 pb-8 flex flex-col md:flex-row justify-center gap-10 md:gap-14 text-white">
      {/* Sol Bölüm: Hakkımda ve Buton */}
      <div className="relative w-full md:w-1/2 p-6 sm:p-8 bg-black bg-opacity-30 backdrop-blur-lg rounded-3xl shadow-2xl transition-all duration-500 ease-in-out hover:shadow-[0_20px_50px_rgba(255,255,255,0.15)]">
        <p className="uppercase text-3xl sm:text-4xl font-bold mb-4 tracking-wide text-center md:text-left">
          hello i'm user57
        </p>
        <p className="text-base sm:text-lg leading-relaxed mb-6 font-light text-center md:text-left">
          I am a passionate developer in the world of web development. I love
          creating innovative solutions and developing projects that prioritize
          user experience. I build modern web applications using technologies
          like HTML, CSS, JavaScript, and React.
        </p>
        <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 sm:gap-6">
          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            View My Projects
          </button>
          <div className="flex justify-center  md:justify-start mt-2 sm:mt-0 space-x-6">
            <a
              href="#"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              <FaGithub size={25} />
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              <FaLinkedin size={25} />
            </a>
          </div>
        </div>
      </div>

      {/* Sağ Bölüm: Profil Fotoğrafı ve Beceriler */}
      <div className="relative w-full md:w-1/2 flex flex-col items-center p-6 sm:p-8 bg-black bg-opacity-30 backdrop-blur-lg rounded-3xl shadow-2xl transition-all duration-500 ease-in-out hover:shadow-[0_20px_50px_rgba(255,255,255,0.15)]">
        {/* Profil Resmi */}
        <div className="w-40 h-40 sm:w-52 sm:h-52 mb-6 overflow-hidden rounded-full border-4 border-white shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105">
          <img
            src={profile}
            alt="Profile Picture"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Beceriler */}
        <div className="text-center w-full">
          <h3 className="text-2xl sm:text-3xl my-3 font-semibold tracking-wide">
            Skills
          </h3>
          <ul className="text-base sm:text-lg space-y-2 font-light">
            <li>HTML5</li>
            <li>CSS3 / Tailwind CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Content1;
