import React from "react";
import cafeInterior from "../imgs/cafe-interior.jpg";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import CafeInteriorSection from "./CafeInteriorSection";

function AboutSection() {
  return (
    <section className="bg-[#FAF9EE] justify-items-center pt-12 pb-4">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 ">
        <motion.div
          className="w-full px-5 md:w-1/2 lg:w-1/4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          // animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            width={"100%"}
            className="rounded-lg"
            src={cafeInterior}
            alt="kafe iç mekan"
          />
        </motion.div>

        <motion.div
          className="w-full  md:w-1/2 bg-[#F4EAE0] p-3 text-black rounded-sm"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          // animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-firaSans font-bold text-[#503C3C] text-3xl ">
            Biz Kimiz ?
          </h1>
          <p className="font-playfairDisplay font-semibold text-lg text-[#3E3232] ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            vel dicta minima facilis eveniet sed, provident laborum aliquid
            recusandae porro, sapiente totam odit est? Repellendus quisquam
            quaerat quia. Itaque, harum.
          </p>
          <p className="font-firaSans mt-4 text-lg text-[#503C3C]">
            Bizi Takip Edin
          </p>
          <div className="flex mt-1 gap-3 text-2xl text-[#8D493A]">
            <a href="/instagram">
              <FaInstagram />
            </a>
            <a href="/facebook">
              <FaFacebookSquare />
            </a>
          </div>
        </motion.div>
      </div>

      <CafeInteriorSection />
    </section>
  );
}

export default AboutSection;
