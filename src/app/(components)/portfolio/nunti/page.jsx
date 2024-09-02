import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { ParallaxScrollDemo } from "@/components/ParallaxScrollDemo";

function page() {
  return (
    <section className="section ">
      {/* <div className="container mx-auto h-full relative">
        <div
          className="flex flex-col lg:flex-row h-full items-center 
          justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1 lg:gap-6">
            <div className="relative">
              <Image
                className="object-cover w-full h-auto hover:scale-110 transition-all duration-500 block mx-auto"
                src="/sala/sala5.jpg"
                alt="photograph"
                layout="responsive"
                width={800}
                height={533}
              />
            </div>

            <div className="relative">
              <Image
                className="object-cover w-full h-auto hover:scale-110 transition-all duration-500 block mx-auto"
                src="/sala/gym2.jpg"
                alt="photograph"
                layout="responsive"
                width={800}
                height={533}
              />
            </div>

            <div className="relative">
              <Image
                className="object-cover w-full h-auto hover:scale-110 transition-all duration-500 block mx-auto"
                src="/sala/gym4.jpg"
                alt="photograph"
                layout="responsive"
                width={800}
                height={533}
              />
            </div>

            <div className="relative">
              <Image
                className="object-cover w-full h-auto hover:scale-110 transition-all duration-500 block mx-auto"
                src="/sala/gym3.jpg"
                alt="photograph"
                layout="responsive"
                width={800}
                height={533}
              />
              <Link
                href="/portfolio/lucianLuca"
                className="absolute bottom-4 right-4 flex items-center text-white px-4 py-2 rounded-md border border-white hover:bg-gray-800 transition-colors"
              >
                <BiRightArrowAlt className="ml-2 w-6 h-5" />
              </Link>
            </div>

            <div className="relative">
              <Image
                className="object-cover w-full h-auto hover:scale-110 transition-all duration-500 block mx-auto"
                src="/sala/gym2.jpg"
                alt="photograph"
                layout="responsive"
                width={800}
                height={533}
              />
            </div>

            <div className="relative">
              <Image
                className="object-cover w-full h-auto hover:scale-110 transition-all duration-500 block mx-auto lg:mt-[-230px]"
                src="/sala/sala5.jpg"
                alt="photograph"
                layout="responsive"
                width={800}
                height={533}
              />
            </div>
          </div>
        </div>
      </div> */}

      <ParallaxScrollDemo />
    </section>
  );
}

export default page;
