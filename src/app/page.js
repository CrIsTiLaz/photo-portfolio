import Header from "./(components)/Header";
import AnimRoutes from "./(components)/AnimRoutes";
import { motion } from "framer-motion";
import Hero from "./(components)/home/Hero";
import Services from "./(components)/home/Services";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <Services />
      </div>
    </>
  );
}
