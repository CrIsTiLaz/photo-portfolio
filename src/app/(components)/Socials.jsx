import Link from "next/link";
import React from "react";
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
} from "react-icons/im";

import {
  AiOutlineYoutube,
  AiFillFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

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

function Socials() {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        {socialLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.path}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Socials;

//intrebari pentru patrik:

//- in ce limba vrea sa fie siteul
//- sa imi trimita poza cu el cu aparatul
// ce retele de socializare are
// testimoniale
