import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./(components)/Header";
import Footer from "./(components)/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

// Metadate optimizate cu cuvinte cheie locale
export const metadata = {
  title: {
    default: "Stoian Patrik - Fotograf Profesionist Timișoara | Nunți, Botezuri, Absolvenți",
    template: "%s | Stoian Patrik - Fotograf Profesionist Timișoara",
  },
  description:
    "Stoian Patrik, fotograf profesionist din Timișoara, specializat în nunți, botezuri, absolvenți, lifestyle și majorate. Capturez momente speciale în Timișoara și în toată România.",
  keywords:
    "fotograf Timișoara, fotograf profesionist Timișoara, fotografie nunți Timișoara, fotografie botezuri Timișoara, fotografie absolvenți Timișoara, Stoian Patrik, lifestyle Timișoara, majorate Timișoara, București, România",
  authors: [{ name: "Stoian Patrik" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8",
};

export default function RootLayout({ children }) {
  // Schema Markup optimizat pentru SEO local
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Stoian Patrik - Fotograf Profesionist Timișoara",
    url: "https://stoianpatrik.ro/",
    description:
      "Stoian Patrik, fotograf profesionist din Timișoara, specializat în nunți, botezuri, absolvenți, lifestyle și majorate. Capturez momente speciale în Timișoara și în toată România.",
    image: "https://stoianpatrik.ro/opengraph.png",
    areaServed: {
      "@type": "City",
      name: "Timișoara",
    },
    sameAs: [
      "https://www.facebook.com/people/Stoian-Patrik-Fotograf/100089083395152/?mibextid=LQQJ4d&rdid=GiqoOPT5mghcBGSZ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DrG9dX9Sb%2F%3Fmibextid%3DLQQJ4d",
      "https://www.instagram.com/patrik_stoian_fotograf/",
    ],
    author: {
      "@type": "Person",
      name: "Stoian Patrik",
    },
  };

  return (
    <html lang="ro">
      <head>
        {/* Metadate esențiale */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="fotograf Timișoara, fotograf profesionist Timișoara, fotografie nunți Timișoara, fotografie botezuri Timișoara, fotografie absolvenți Timișoara, Stoian Patrik, lifestyle Timișoara, majorate Timișoara, București, România"
        />
        <meta name="author" content="Stoian Patrik" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Stoian Patrik, fotograf profesionist din Timișoara, specializat în nunți, botezuri, absolvenți, lifestyle și majorate. Capturez momente speciale în Timișoara și în toată România."
        />

        {/* Geo Meta Tags pentru SEO local */}
        <meta name="geo.region" content="RO-TM" />
        <meta name="geo.placename" content="Timișoara" />
        <meta name="geo.position" content="45.7489;21.2087" />

        {/* Open Graph pentru rețele sociale */}
        <meta
          property="og:title"
          content="Stoian Patrik - Fotograf Profesionist Timișoara"
        />
        <meta
          property="og:description"
          content="Stoian Patrik, fotograf profesionist din Timișoara, specializat în nunți, botezuri, absolvenți, lifestyle și majorate. Capturez momente speciale în Timișoara și în toată România."
        />
        <meta property="og:image" content="https://stoianpatrik.ro/opengraph.png" />
        <meta property="og:url" content="https://stoianpatrik.ro/" />
        <meta property="og:type" content="website" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://stoianpatrik.ro/" />

        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-PQ44PMEHEJ" />
    </html>
  );
}