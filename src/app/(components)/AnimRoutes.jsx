import React from "react";
import Link from "next/link";

// import About from "@/(components)/About";
// import Portfolio from "@/(components)/Portfolio";
// import Contact from "@/(components)/Contact";

function AnimRoutes() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/clinics">Contact</Link>
      <Link
        href="/clinics"
        className={` 
         
         text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor `}
      >
        Cabinete
      </Link>
    </div>
  );
}

export default AnimRoutes;
