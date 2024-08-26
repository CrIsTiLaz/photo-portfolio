import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

function page() {
  return (
    <section className="section ">
      <div className="container mx-auto h-full relative">
        <div
          className="flex flex-col lg:flex-row h-full items-center 
        justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8"
        >
          <div className="flex flex-col lg:items-start">
            <h1 className="h2">Fitness</h1>
            <p className="mb-8 max-w-sm mt-4">
              Sunt Patrik, un <b>povestitor vizual</b> ce transformă fiecare
              moment prețios într-o poveste nemuritoare. Fie că este vorba
              despre o nuntă plină de iubire, un botez al bucuriei, o petrecere
              a râsetelor sau o întâlnire de familie călduroasă, scopul meu este
              să surprind frumusețea, dragostea și emoțiile autentice.
            </p>
            <p className="mb-12 max-w-sm">
              Fiecare <b>imagine</b> reflectă pasiunea mea pentru fotografie și
              angajamentul de a captura momentele importante cu sensibilitate.
            </p>{" "}
            <Link href={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              Hire me
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-1 lg:gap-2">
            <div
              className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]
             bg-accent overflow-hidden"
            >
              <Image
                className="object-cover h-full lg:h-[220px] hover:scale-110 
              transition-all duration-500"
                src="/sala/gym1.jpg"
                alt="photograph"
                width={400}
                height={400}
              />
            </div>

            <div
              className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]
             bg-accent overflow-hidden"
            >
              <Image
                className="object-cover h-full lg:h-[220px] hover:scale-110 
              transition-all duration-500"
                src="/sala/gym2.jpg"
                alt="photograph"
                width={400}
                height={400}
              />
            </div>

            <div
              className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]
             bg-accent overflow-hidden"
            >
              <Image
                className="object-cover h-full lg:h-[220px] hover:scale-110 
              transition-all duration-500"
                src="/sala/gym3.jpg"
                alt="photograph"
                width={400}
                height={400}
              />
            </div>

            <div className="relative max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <Image
                className="object-cover h-full lg:h-[220px] hover:scale-110 
              transition-all duration-500"
                src="/sala/gym4.jpg"
                alt="photograph"
                width={400}
                height={400}
              />
              <Link
                href="/portfolio/nunti"
                className="border border-white absolute bottom-4 right-4 flex items-center text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
              >
                Vezi toate imaginile
                <BiRightArrowAlt className="ml-2 w-6 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col lg:flex-row h-full items-center 
        justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8"
        >
          <div className="flex flex-col lg:items-start">
            <h1 className="h2">Nunti</h1>
            <p className="mb-8 max-w-sm mt-4">
              Sunt Patrik, un <b>povestitor vizual</b> ce transformă fiecare
              moment prețios într-o poveste nemuritoare. Fie că este vorba
              despre o nuntă plină de iubire, un botez al bucuriei, o petrecere
              a râsetelor sau o întâlnire de familie călduroasă, scopul meu este
              să surprind frumusețea, dragostea și emoțiile autentice.
            </p>
            <p className="mb-12 max-w-sm">
              Fiecare <b>imagine</b> reflectă pasiunea mea pentru fotografie și
              angajamentul de a captura momentele importante cu sensibilitate.
            </p>{" "}
            <Link href={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              Hire me
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-1 lg:gap-2">
            <div
              className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]
             bg-accent overflow-hidden"
            >
              <Image
                className="object-cover h-full lg:h-[220px] hover:scale-110 
              transition-all duration-500"
                src="/nunta/nunta1.jpg"
                alt="photograph"
                width={400}
                height={400}
              />
            </div>

            <div
              className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]
             bg-accent overflow-hidden"
            >
              <Image
                className="object-cover h-full lg:h-[220px] hover:scale-110 
              transition-all duration-500"
                src="/nunta/nunta3.jpg"
                alt="photograph"
                width={400}
                height={400}
              />
            </div>

            <div
              className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]
             bg-accent overflow-hidden"
            >
              <Image
                className="object-cover h-full lg:h-[220px] hover:scale-110 
              transition-all duration-500"
                src="/nunta/nunta2.jpg"
                alt="photograph"
                width={400}
                height={400}
              />
            </div>

            <div className="relative max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <Image
                className="object-cover h-full lg:h-[220px] hover:scale-110 
              transition-all duration-500"
                src="/nunta/nunta4.jpg"
                alt="photograph"
                width={400}
                height={400}
              />
              <Link
                href="/portfolio/nunti"
                className="border border-white absolute bottom-4 right-4 flex items-center text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
              >
                Vezi toate imaginile
                <BiRightArrowAlt className="ml-2 w-6 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;

// categorii
// weding
// baptism
// absolventi
// lifestyle
// nightlife
// fitness
// majorate

// cand intri poe categorie sa fie ca la jigovan

// carousel in landing

// in header cand faci hover pe portfolio sa fie un dropdown cu categoriile

// lista de servicii ca la costi

// faq
