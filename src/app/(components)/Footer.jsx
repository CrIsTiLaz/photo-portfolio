"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AiOutlineYoutube,
  AiFillFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import { usePathname } from "next/navigation";

const socialLinks = [
  {
    path: "https://www.facebook.com/people/Stoian-Patrik-Fotograf/100089083395152/?mibextid=LQQJ4d&rdid=GiqoOPT5mghcBGSZ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DrG9dX9Sb%2F%3Fmibextid%3DLQQJ4d",
    icon: <AiFillFacebook className="group-hover:text-white w-6 h-6" />,
  },
  {
    path: "https://www.instagram.com/patrik_stoian_fotograf/",
    icon: <AiOutlineInstagram className="group-hover:text-white w-6 h-6" />,
  },
];

const quickLinks01 = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/portfolio",
    display: "Portfolio",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const quickLinks02 = [
  {
    path: "/user-register",
    display: "Creez cont",
  },
  {
    path: "/clinic-register",
    display: "Creez cont pentru clinică",
  },
  {
    path: "/login",
    display: "Mă conectez",
  },
];

const quickLinks03 = [
  {
    path: "/contact",
    display: "Contact us",
  },
];

function Footer() {
  const pathname = usePathname();

  // Ascunde footer-ul pe ruta specifică "/portfolio/nunti"
  if (pathname === "/portfolio/nunti") {
    return null;
  }

  const year = new Date().getFullYear();
  return (
    <footer className="text-primary py-12">
      <hr
        style={{
          border: "none",
          borderTop: "1px solid #e0e0e0",
          marginBottom: 20,
          padding: 0,
        }}
      />
      <div className="container mx-auto px-4 lg:px-16">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-8">
          {/* Logo and Copyright */}
          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl font-bold">P.S</h1>
            <p className="text-sm leading-7 font-light text-neutral-600">
              Copyright © {year} Patrik Stoian <br />
              Made by Cristian Lazea
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-neutral-600">
              Linkuri rapide
            </h2>
            <ul className="space-y-2">
              {quickLinks01.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="text-sm leading-7 font-light text-neutral-600 hover:text-primary transition duration-300"
                  >
                    {link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-xl font-semibold mb-4 text-neutral-600">
              Urmărește-mă
            </h2>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.path}
                  className="text-neutral-600 hover:text-primary transition duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
