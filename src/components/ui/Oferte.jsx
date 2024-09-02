"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { AiFillCheckCircle } from "react-icons/ai";
import { useId } from "react";

export function Oferte() {
  return (
    <div className="min-h-screen dark:bg-gray-900 py-16 lg:py-24 px-4">
      <h1 className="h2 text-center mb-24">Oferte disponibile</h1>
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
                  <p className="text-base text-center font-bold text-neutral-800 dark:text-white relative z-10">
                    {feature.title}
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
                <p className="text-base text-center font-bold text-neutral-800 dark:text-white relative z-10">
                  {feature.title}
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
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "Pachetul 1",
    services: [
      " Data Encryption",
      " Secure Access Controls",
      " Regular Security Audits",
      " Compliance Monitoring",
      " 24/7 Support",
    ],
  },
  {
    title: "Pachetul 2",
    services: [
      " Veți primi minim 800 de fotografii editate profesional (înfuncție de dinamica evenimentului, numărul acestora poate crește)",
      " Nunta va fi documentată, nu regizată, din punct de vedere al fotografiilor",
      " Vom fi alături de voi pe toată durata evenimentului și vom surprinde cele mai frumoase momente de la pregătirea mirilor, cununia civilă și religioasă, cât și petrecerea de la restaurant, până la sosirea tortului.",
      "  În funcție de eveniment, dar contracost, vă recomandăm să optați și pentru prezența celui de-al doilea fotograf din echipa noastră pentru o experiență completă. Contactează-ne",
    ],
  },
  {
    title: "Pachetul 3",
    services: [
      " Detailed Analytics Reports",
      " Engagement Metrics",
      " ROI Calculation",
      " Customizable Dashboards",
      " Trend Analysis",
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
