import Header from "./(components)/Header";
import AnimRoutes from "./(components)/AnimRoutes";
import { motion } from "framer-motion";
import Hero from "./(components)/Hero";

export default function Home() {
  return (
    <>
      <div>
        {" "}
        {/* Adăugat padding-top pentru spațiu suplimentar */}
        <Hero />
      </div>
    </>
  );
}
