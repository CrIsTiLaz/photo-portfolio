"use client";
import React, { useState, useEffect } from "react";
import Socials from "./Socials";
import MobileNav from "./MobileNav";
import Link from "next/link";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full px-[30px] lg:px-[100px] z-50 h-[40px] lg:h-[100px] flex items-center transition-colors duration-500 ${
        isScrolled
          ? "bg-white/30 backdrop-blur-md text-primary shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link href="/" className="max-w-[200px]">
          Patrik
        </Link>

        <nav className="hidden lg:flex gap-x-12 font-semibold">
          <Link href="/" className="hover:text-primary transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-primary transition">
            About
          </Link>

          <Link href="/portfolio" className="hover:text-primary transition">
            Portfolio
          </Link>

          <Link href="/contact" className="hover:text-primary transition">
            Contact
          </Link>
        </nav>
      </div>
      <Socials />

      <MobileNav />
    </header>
  );
}

export default Header;
