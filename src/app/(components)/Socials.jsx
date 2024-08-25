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
