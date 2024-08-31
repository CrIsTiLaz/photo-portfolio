import Image from "next/image";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        <div
          className="flex flex-col lg:flex-row h-full 
          items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16"
        >
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dnbooicju/image/upload/v1725133263/Patrik_x3dg0z.jpg"
              alt="man"
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex-1 pt-36 pb-14 lg:pt-5 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">About me</h1>
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
            </p>

            {/* <h2 className="text-xl font-bold mb-4">Serviciile mele includ:</h2>
            <ul className="list-disc list-inside mb-12 text-left">
              <li>Fotografii pentru logodnă</li>
              <li>Fotografii pentru nuntă</li>
              <li>Fotografii pentru botez</li>
              <li>Fotografii pentru petreceri</li>
              <li>Fotografii de familie</li>
              <li>Sesiuni foto private</li>
            </ul> */}

            <Link href={"/portfolio"} className="btn">
              View my work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
