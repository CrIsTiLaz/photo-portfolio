import React from "react";
// import WomanImg from "/photograph.jpg";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col justify-center">
          <div
            className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 
          lg:w-auto z-10 lg:absolute flex flex-col 
          justify-center items-center lg:items-start"
          >
            <h1 className="h1">
              photographer <br /> & film maker{" "}
            </h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
              Timisoara, Romania
            </p>
            <Link href={"/contact"} className="btn mb-[30px]">
              Hire me
            </Link>
          </div>

          <div className="flex justify-end  lg:translate-x-20">
            {/* Mutarea întregii secțiuni mai la dreapta */}
            <div className="bg-blue-100 p-4">
              <div className="lg:mr-[-150px] lg:ml-[-150px] mt-[70px] flex justify-center">
                <Image
                  src="/photographCut.png"
                  alt="photograph"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
