import Image from "next/image";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative max-w-full lg:max-w-7xl">
        {/* Titlul "About me" deasupra imaginii și textului */}
        <div className="mt-20 ">
          <h1 className="h1 text-left mb-16">About me</h1>

          <div
            className="flex flex-col lg:flex-row h-full 
            items-start justify-center gap-x-24 lg:text-left mt-0 "
          >
            <div className="rounded-3xl flex-1 order-2 lg:order-none overflow-hidden mb-10 ">
              <Image
                src="https://res.cloudinary.com/dnbooicju/image/upload/v1725133263/Patrik_x3dg0z.jpg"
                alt="man"
                layout="responsive"
                width={1000}
                height={1000}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="flex-1 pb-14 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
              <p className="mb-8 max-w-sm">
                Sunt Patrik, un <b>povestitor vizual</b> ce transformă fiecare
                moment prețios într-o poveste nemuritoare. Fie că este vorba
                despre o nuntă plină de iubire, un botez al bucuriei, o
                petrecere a râsetelor sau o întâlnire de familie călduroasă,
                scopul meu este să surprind frumusețea, dragostea și emoțiile
                autentice.
              </p>
              <p className="mb-12 max-w-sm">
                Fiecare <b>imagine</b> reflectă pasiunea mea pentru fotografie
                și angajamentul de a captura momentele importante cu
                sensibilitate.
              </p>
              <Link href={"/portfolio"} className="btn">
                View my work →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
