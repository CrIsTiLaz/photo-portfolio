"use client";
import React, { useState, useEffect } from "react";
import Socials from "./Socials";
import MobileNav from "./MobileNav";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AiFillCaretDown } from "react-icons/ai";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  // Handle dropdown open/close state
  const handleOpenChange = (open) => {
    setIsOpen(open);
  };

  return (
    <header
      className={`fixed w-full px-4 lg:px-16 z-50 h-[60px] lg:h-[90px] flex items-center transition-colors duration-500 ${
        isScrolled
          ? "bg-white/30 backdrop-blur-md text-primary shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link href="/" className="max-w-[200px] font-extrabold">
          P.S
        </Link>

        <nav className="hidden lg:flex gap-x-12 font-bold">
          <Link href="/" className="hover:text-primary transition">
            Home
          </Link>

          <li className="list-none">
            <DropdownMenu onOpenChange={handleOpenChange}>
              <DropdownMenuTrigger className="cursor-pointer flex items-center">
                Portfolio
                <AiFillCaretDown
                  className={`ml-1 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </DropdownMenuTrigger>

              <DropdownMenuContent className="font-primary">
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/portfolio/nunti">Nunți</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/portfolio/botezuri">Botezuri</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/portfolio/absolventi">Absolvenți</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/portfolio/lifestyle">Lifestyle</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/portfolio/nightlife">Nightlife</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/portfolio/fitness">Fitness</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/portfolio/majorate">Majorate</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="font-bold">
                  <Link href="/portfolio">Toate categoriile</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

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
