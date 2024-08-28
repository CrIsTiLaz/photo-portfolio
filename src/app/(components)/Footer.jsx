import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AiOutlineYoutube,
  AiFillFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

const socialLinks = [
  {
    path: "https://www.youtube.com/",
    icon: <AiOutlineYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.facebook.com",
    icon: <AiFillFacebook className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks01 = [
  {
    path: "/",
    display: "Acasă",
  },
  {
    path: "/clinics",
    display: "Cabinete",
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
    display: "Creez cont pentru clinica",
  },
  {
    path: "/login",
    display: "Ma conectez",
  },
];

const quickLinks03 = [
  {
    path: "/contact",
    display: "Contact us",
  },
];

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <h1>P.S</h1>
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
              Copyright © {year} Patrik Stoian. Toate drepturile rezervate
            </p>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Linkuri rapide
            </h2>

            <ul>
              {quickLinks01.map((link, index) => (
                <li key={index} className="mb-4">
                  <Link
                    href={link.path}
                    className="text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor"
                  >
                    {link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Vreau sa:
            </h2>

            <ul>
              {quickLinks02.map((link, index) => (
                <li key={index} className="mb-4">
                  <Link
                    href={link.path}
                    className="text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor"
                  >
                    {link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Suport
            </h2>

            <ul>
              {quickLinks03.map((link, index) => (
                <li key={index} className="mb-4">
                  <Link
                    href={link.path}
                    className="text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor"
                  >
                    {link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

{
  /* <h1 style={{ fontWeight: 'bold', marginTop: '0', fontSize: '25px' }}>SmileSeek</h1> */
}
