import Header from "./(components)/Header";
import AnimRoutes from "./(components)/AnimRoutes";
import { motion } from "framer-motion";
import Hero from "./(components)/home/Hero";
import Services from "./(components)/home/Services";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCards";
import { Testimonial } from "@/components/Testimonial";
import { ImagesSliderDemo } from "@/components/ImagesSliderDemo";
import { BackgroundGradientDemo } from "@/components/BackgroundGradient";
import { HoverBorderGradientDemo } from "@/components/HoverBorder";
import { Oferte } from "@/components/ui/Oferte";
import About from "./(components)/about/About";
import Faq from "./(components)/home/Faq";

export default function Home() {
  return (
    <>
      <div>
        <ImagesSliderDemo />
        <About />
        <Oferte />
        <Testimonial />
        <Faq />
      </div>
    </>
  );
}
