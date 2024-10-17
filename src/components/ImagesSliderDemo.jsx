"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../components/ui/images-slider";
import Link from "next/link";

export function ImagesSliderDemo() {
  const images = [
    "/hero/gallery-7_Majorat-Gabi_2023_10000.avif",
    "/hero/STOP1212.avif",
    "/hero/STOP1641-short2.jpg",
    "/hero/STOP8776-2_1.avif",
  ];
  return (
    <ImagesSlider className="h-[100vh]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-start "
      >
        <motion.p className="font-bold text-4xl md:text-5xl lg:text-6xl text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Fotograf & <br /> povestitor vizual
        </motion.p>

        <Link className="justify-center text-center" href={"/contact"}>
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span>Contact →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </Link>
      </motion.div>
    </ImagesSlider>
  );
}
