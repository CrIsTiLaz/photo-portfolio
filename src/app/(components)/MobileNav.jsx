"use client";
import React, { useState, useEffect } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AiFillCaretDown } from "react-icons/ai";

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

function MobileNav() {
  const [openMenu, setOpenMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  const handleDropdownClose = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="text-primary xl:hidden">
      <div
        onClick={() => setOpenMenu(true)}
        className="text-3xl cursor-pointer"
      >
        <CgMenuRightAlt />
      </div>

      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20"
      >
        <div
          onClick={handleMenuClose}
          className="text-4xl absolute z-30 left-4 top-6 text-primary cursor-pointer"
        >
          <FaTimes />
        </div>

        <ul className="h-full flex flex-col pt-36 items-center gap-y-16 text-primary font-primary font-bold text-3xl">
          <li>
            <Link href="/" onClick={handleMenuClose}>
              Home
            </Link>
          </li>

          <li>
            <DropdownMenu onOpenChange={(open) => setDropdownOpen(open)}>
              <DropdownMenuTrigger className="cursor-pointer flex items-center">
                Portfolio
                <AiFillCaretDown
                  className={`ml-1 transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </DropdownMenuTrigger>

              <DropdownMenuContent className="font-primary">
                <DropdownMenuSeparator />
                {[
                  { url: "nunti", label: "Nunți" },
                  { url: "botezuri", label: "Botezuri" },
                  { url: "absolventi", label: "Absolvenți" },
                  { url: "lifestyle", label: "Lifestyle" },
                  { url: "nightlife", label: "Nightlife" },
                  { url: "fitness", label: "Fitness" },
                  { url: "majorate", label: "Majorate" },
                ].map(({ url, label }) => (
                  <DropdownMenuItem key={url} asChild>
                    <Link
                      href={`/portfolio/${url}`}
                      onClick={() => {
                        handleMenuClose();
                        handleDropdownClose();
                      }}
                    >
                      {label}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem asChild className="font-bold">
                  <Link href="/portfolio" onClick={handleMenuClose}>
                    Toate categoriile
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          <li>
            <Link href="/contact" onClick={handleMenuClose}>
              Contact
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
}

export default MobileNav;
