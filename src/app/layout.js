import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./(components)/Header";
import Footer from "./(components)/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stoian Patrik - Fotograf Profesional",
  description:
    "Salut! Sunt Stoian Patrik, un fotograf pasionat de capturarea momentelor speciale. Explorează portofoliul meu pentru a descoperi lumea prin obiectivul meu.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Stoian Patrik, fotograf, nunti, botezuri, absolventi, lifestyle, nightlife, fitness, majorate"
        />
        <meta name="author" content="Stoian Patrik" />

        {/* Open Graph Tags pentru Social Media */}
        <meta
          property="og:title"
          content="Stoian Patrik - Fotograf Profesional"
        />
        <meta
          property="og:description"
          content="Explorează portofoliul meu pentru a descoperi lumea prin obiectivul meu."
        />
        <meta property="og:image" content="/opengraph.png" />
        <meta property="og:url" content="https://stoianpatrik.ro/" />
        <meta property="og:type" content="website" />

        <title>Stoian Patrik - Fotograf Profesional</title>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-M1X8396CFB" />
    </html>
  );
}
