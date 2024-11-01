"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonial() {
  return (
    <div>
      <h1 className="h2 text-center mt-16 mb-12">Testimoniale</h1>

      <div className=" h-[40rem] gap-10 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />

        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "“Am colaborat cu Patrik pentru un proiect foto-video și am fost extrem de mulțumit de rezultat. Profesionalismul și creativitatea au transformat fiecare moment într-o operă de artă. Recomand cu încredere pentru servicii de top!”",
    name: "Sebastian Lupu",
    title: "Frizer",
  },
  {
    quote:
      "“Calitatea excepțională a fotografiilor și designul au transformat fiecare pagină a albumului într-o amintire de neuitat. Este impecabil, iar detaliile reflectă munca depusă în folosul amintirilor noastre. Îl voi păstra mereu cu drag și voi retrăi cu emoție fiecare clipă de fiecare dată când îl voi răsfoi!”",
    name: "Stefania",
    title: "Absolventa",
  },
  {
    quote:
      "“Patrik a fost întotdeauna fotograful nostru de încredere, în special când ne-a făcut albumele minunate din clasa a 12-a. Fiecare proiect la care am lucrat împreună a fost o experiență grozavă, iar rezultatele au fost mereu peste așteptări. Recomand cu toata increderea !”",
    name: "Horatiu",
    title: "Absolvent",
  },
  {
    quote:
      "“Patrik este un fotograf pe care îl voi recomanda întotdeauna cu plăcere. Atât experiența și talentul cât și căldura și promptitudinea cu care lucrează cu clientii îl fac un fotograf deosebit”",
    name: "Irina",
    title: "Majorat",
  },
  {
    quote:
      "“Am avut o experiență extraordinară cu Patrik pentru pozele de album din clasa a 12-a. A reușit să surprindă momente speciale și ne-a făcut să ne simțim foarte confortabil în fața camerei. Profesionalismul și creativitatea lui au depășit așteptările noastre. Suntem extrem de mulțumiți de rezultat și recomandăm cu căldură serviciile lui. Mulțumim, Patrik, pentru amintirile frumoase pe care ni le-ai oferit!”",
    name: "Stefania",
    title: "Absolventa",
  },
];
