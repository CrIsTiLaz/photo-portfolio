import React from "react";
import Socials from "./Socials";
// import Logo from "./Socials";
import MobileNav from "./MobileNav";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-pink-200 fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[130px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link href="/" className="max-w-[200px]">
          <Image src="/next.svg" alt="Logo" width={90} height={90} />
        </Link>

        <nav className="hidden lg:flex gap-x-12 font-semibold">
          <Link
            href="/"
            className="text-[#696c6d] hover:text-primary transition"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-[#696c6d] hover:text-primary transition"
          >
            About
          </Link>

          <Link
            href="/portfolio"
            className="text-[#696c6d] hover:text-primary transition"
          >
            Portfolio
          </Link>

          <Link
            href="/contact"
            className="text-[#696c6d] hover:text-primary transition"
          >
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
