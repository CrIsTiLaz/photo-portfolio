import Header from "./(components)/Header";
import AnimRoutes from "./(components)/AnimRoutes";
import { motion } from "framer-motion";
import Hero from "./(components)/home/Hero";
import Services from "./(components)/home/Services";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCards";
import { InfiniteMovingCardsDemoLeft } from "@/components/InfiniteMovingCardsLeft";
import { ImagesSliderDemo } from "@/components/ImagesSliderDemo";

export default function Home() {
  return (
    <>
      <div>
        <ImagesSliderDemo />
        <Services />

        <InfiniteMovingCardsDemoLeft />
      </div>
    </>
  );
}
