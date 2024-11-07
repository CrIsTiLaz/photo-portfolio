"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { AiFillCheckCircle } from "react-icons/ai";
import { useId } from "react";
import GetStartedButton from "@/components/ui/button-cool";

export function Oferte() {
  return (
    <div className="min-h-screen dark:bg-gray-900 py-16 lg:py-24 px-4">
      <h1 className="h2 text-center mb-4">Oferte disponibile</h1>
      <p className="text-center text-neutral-600 dark:text-neutral-400 mb-12">
        Valabil pentru 2024-2025
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {grid.map((feature, featureIndex) => (
          <div key={featureIndex} className="relative">
            {feature.title === "Pachetul 2" && (
              // Boxul galben cu textul "Popular"
              <div className="absolute ml-9 mt-2 top-4 bg-yellow-400 text-white px-3 py-1 rounded-3xl z-50">
                Popular
              </div>
            )}
            {feature.title === "Pachetul 2" ? (
              <BackgroundGradient
                key={feature.title}
                className="rounded-[22px] bg-white dark:bg-zinc-900"
              >
                <div className="relative p-6 rounded-3xl overflow-hidden bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white">
                  <Grid size={20} />
                  <p className="text-xl text-center font-bold text-neutral-800 dark:text-white relative z-10">
                    {feature.title}
                  </p>
                  <p className="text-lg text-center font-bold text-neutral-600 dark:text-neutral-400 mt-2 relative z-10">
                    {feature.price}
                  </p>
                  <ul className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-10">
                    {feature.services.map((service, index) => (
                      <li
                        key={`${feature.title}-${index}`} // Cheia trebuie să fie unică
                        className="flex items-start mb-4"
                      >
                        <AiFillCheckCircle className="text-2xl mr-2 mt-1" />
                        <span className="text-left flex-1">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </BackgroundGradient>
            ) : (
              <div className="relative p-6 rounded-3xl overflow-hidden bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white">
                <Grid size={20} />
                <p className="text-xl text-center font-bold text-neutral-800 dark:text-white relative z-10">
                  {feature.title}
                </p>
                <p className="text-lg text-center font-bold text-neutral-600 dark:text-neutral-400 mt-2 relative z-10">
                  {feature.price}
                </p>
                <ul className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-10">
                  {feature.services.map((service, index) => (
                    <li
                      key={`${feature.title}-${index}`} // Cheia trebuie să fie unică
                      className="flex items-start mb-4"
                    >
                      <AiFillCheckCircle className="text-2xl mr-2 mt-1" />
                      <span className="text-left flex-1">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Render "Servicii extra disponibile" below "Pachetul 2" */}
            {feature.title === "Pachetul 2" && (
              <div className="relative p-6 rounded-3xl overflow-hidden bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white mt-8">
                <Grid size={20} />
                <p className="text-lg text-center font-bold text-neutral-800 dark:text-white mb-4 relative z-10">
                  Servicii extra disponibile:
                </p>
                <ul className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-10">
                  <li className="flex items-start mb-4">
                    <AiFillCheckCircle className="text-2xl mr-2 mt-1" />
                    <span className="text-left flex-1">
                      Cununie civilă - 400 euro
                    </span>
                  </li>
                  <li className="flex items-start mb-4">
                    <AiFillCheckCircle className="text-2xl mr-2 mt-1" />
                    <span className="text-left flex-1">
                      Second shooter - 300 euro
                    </span>
                  </li>
                  <li className="flex items-start mb-4">
                    <AiFillCheckCircle className="text-2xl mr-2 mt-1" />
                    <span className="text-left flex-1">
                      Albume foto - preț la cerere
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 px-4 lg:px-24">
        <p className="text-left text-neutral-600 dark:text-neutral-400">
          * Prețurile afișate nu includ costuri suplimentare de transport sau
          cazare, care vor fi acoperite de dvs.
        </p>
      </div>
    </div>
  );
}

const grid = [
  {
    title: "Pachetul 1",
    price: "1000€",
    services: [
      " Prezența unui fotograf alături de voi pe toată durata evenimentului, surprinzând cele mai frumoase momente de la cununia civilă, pregătirea mirilor, cununia religioasă, cat si petrecerea de la sala de evenimente, inclusiv după sosirea tortului.",
      " Veti primi minim 700 de fotografii editate profesional (numărul poate crește in funcție de dinamica evenimentului), disponibile spre descărcare la calitate maxima.",
      " Din punct de vedere al fotografiilor, nunta va fi documentată, nu regizată. ",
      " Same day edit a 20 cadre, pentru a te putea bucura de un mic rezumat al celei mai speciale zile din viata voastră. ",
    ],
  },
  {
    title: "Pachetul 2",
    price: "1250€",
    services: [
      " Include tot ce include pachetul 1.",
      ' Ședință foto "Save the date", stabilită de comun acord la rezervarea pachetului. ',
    ],
  },
  {
    title: "Pachetul 3",
    price: "1600€",
    services: [
      " Include tot ce include pachetul 2. ",
      ' Ședință foto "Trash the dress", care se va face după eveniment, într-o locație diferita de locația petrecerii, alesă de comun acord.',
    ],
  },
];

export const Grid = ({ pattern, size }) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
