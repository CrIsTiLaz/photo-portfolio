import { AiFillCheckCircle } from "react-icons/ai";
import Link from "next/link";

function Services() {
  return (
    <section>
      <div className="px-4 mx-auto pt-[150px] pb-20 lg:w-[80%]">
        <h2 className="heading text-center pb-10 h1">Rezervă sesiune foto</h2>

        <div className="grid grid-cols-1 lg:gap-5 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 text-center ">
          <div className="hover:shadow-xl hover:scale-105 transition-transform">
            {/* Div-ul superior - doar colțurile de sus rotunjite */}
            <div className="w-full flex items-center justify-center bg-black text-white rounded-t-lg p-4">
              <h3 className="text-xl font-bold">Pachetul 1</h3>
            </div>

            {/* Div-ul inferior - fără margine superioară, doar colțurile de jos rotunjite */}
            <div className="flex flex-col items-center p-8 shadow-lg border-l-2 border-r-2 border-b-2 border-gray-200 rounded-b-lg">
              <div className="flex items-center justify-center p-4">
                <p className="text-gray-700">
                  Descriere scurtă a pachetului 1, care include informații
                  despre serviciile oferite și avantajele acestora.
                </p>
              </div>
            </div>
          </div>

          <div className="relative hover:shadow-xl hover:scale-105 transition-transform">
            {/* Div-ul superior - doar colțurile de sus rotunjite */}
            <div className="w-full flex items-center justify-center bg-black text-white rounded-t-lg p-4">
              <h3 className="text-xl font-bold">Pachetul 1</h3>
              {/* Badge-ul „Popular” este acum fixat și vizibil tot timpul */}
              <div className="absolute top-0 right-0 mt-2 mr-2 bg-yellow-400 text-white text-sm font-bold py-1 px-3 rounded-full">
                Popular
              </div>
            </div>

            {/* Div-ul inferior - fără margine superioară, doar colțurile de jos rotunjite */}
            <div className="flex flex-col items-center p-8 shadow-lg border-l-2 border-r-2 border-b-2 border-gray-200 rounded-b-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <AiFillCheckCircle className=" text-2xl" />
                </div>
                <p className="text-gray-700">
                  Veți primi minim 800 de fotografii editate profesional (în
                  funcție de dinamica evenimentului, numărul acestora poate
                  crește)
                </p>
              </div>

              <div className="flex items-start pt-10">
                <div className="flex-shrink-0 mr-3">
                  <AiFillCheckCircle className=" text-2xl" />
                </div>
                <p className="text-gray-700">
                  Nunta va fi documentată, nu regizată, din punct de vedere al
                  fotografiilor
                </p>
              </div>

              <div className="flex items-start pt-10">
                <div className="flex-shrink-0 mr-3">
                  <AiFillCheckCircle className=" text-2xl" />
                </div>
                <p className="text-gray-700">
                  Vom fi alături de voi pe toată durata evenimentului și vom
                  surprinde cele mai frumoase momente de la pregătirea mirilor,
                  cununia civilă și religioasă, cât și petrecerea de la
                  restaurant, până la sosirea tortului.
                </p>
              </div>

              <div className="flex items-start pt-10">
                <div className="flex-shrink-0 mr-3">
                  <AiFillCheckCircle className=" text-2xl" />
                </div>
                <p className="text-gray-700">
                  În funcție de eveniment, dar contracost, vă recomandăm să
                  optați și pentru prezența celui de-al doilea fotograf din
                  echipa noastră pentru o experiență completă. Contactează-ne
                </p>
              </div>
              <Link href={"/contact"} className="btn">
                Contact
              </Link>
            </div>
          </div>

          <div className="hover:shadow-xl hover:scale-105 transition-transform">
            {/* Div-ul superior - doar colțurile de sus rotunjite */}
            <div className="w-full flex items-center justify-center bg-black text-white rounded-t-lg p-4">
              <h3 className="text-xl font-bold">Pachetul 1</h3>
            </div>

            {/* Div-ul inferior - fără margine superioară, doar colțurile de jos rotunjite */}
            <div className="flex flex-col items-center p-8 shadow-lg border-l-2 border-r-2 border-b-2 border-gray-200 rounded-b-lg">
              <div className="flex items-center justify-center p-4">
                <p className="text-gray-700">
                  Descriere scurtă a pachetului 1, care include informații
                  despre serviciile oferite și avantajele acestora.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
