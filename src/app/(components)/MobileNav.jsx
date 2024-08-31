"use client";
import React, { useState, useEffect } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { CgMenuRightAlt } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

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
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

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
    <nav className="text-primary xl:hidden">
      <div
        onClick={() => setOpenMenu(true)}
        className={`text-3xl cursor-pointer ${
          isScrolled ? "text-black" : "text-white"
        }`}
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
          className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer"
        >
          <FaTimes />
        </div>
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl">
          <li>
            <Link href="/" onClick={handleMenuClose}>
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" onClick={handleMenuClose}>
              About
            </Link>
          </li>

          <li>
            <Link href="/portfolio" onClick={handleMenuClose}>
              Portfolio
            </Link>
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
