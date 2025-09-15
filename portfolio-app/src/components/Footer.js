import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer
      className="w-full py-8 sm:py-10 text-white"
      style={{
        background: "linear-gradient(to top, #0D131F, #1A2735)",
      }}
    >
      <div className="container mx-auto flex flex-col items-center gap-6 sm:gap-8 px-4">
        <div className="flex justify-center space-x-4 sm:space-x-6">
          <a href="#" aria-label="GitHub Profile">
            <FaGithub size={28} />
          </a>
          <a href="#" aria-label="LinkedIn Profile">
            <FaLinkedin size={28} />
          </a>
          <a href="#" aria-label="Twitter Profile">
            <FaXTwitter size={28} />
          </a>
          <a href="#" aria-label="Send an email">
            <FaEnvelope size={28} />
          </a>
        </div>

        <p className="text-center text-sm sm:text-base max-w-2xl font-light px-4">
          Have a project in mind? Let's build something great together. Feel
          free to reach out to me!
        </p>

        <p className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-4">
          &copy; {new Date().getFullYear()} user57. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
