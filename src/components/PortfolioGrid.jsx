import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export function BentoGridSecondDemo() {
  return (
    <div className="">
      <BentoGrid className="w-[90%]  md:auto-rows-[30rem] mx-auto ">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const items = [
  {
    title: "Wedding",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: (
      <Image
        src="/nunta/nunta1.jpg" // Înlocuiește cu calea reală către imaginea ta
        alt="The Dawn of Innovation"
        width={400}
        height={200}
        className="object-cover w-full h-full rounded-xl"
      />
    ),
    icon: (
      <Image
        alt="peace"
        width={20}
        height={20}
        src={"/wedding-rings.png"}
      ></Image>
    ),
  },
  {
    title: "Baptism",
    description: "Dive into the transformative power of technology.",
    header: (
      <Image
        src="/sala/gym2.jpg" // Înlocuiește cu calea reală către imaginea ta
        alt="The Digital Revolution"
        width={400}
        height={200}
        className="object-cover w-full h-full rounded-xl"
      />
    ),
    icon: (
      <Image alt="peace" width={20} height={20} src={"/chrismon.png"}></Image>
    ),
    // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Absolventi",
    description: "Discover the beauty of thoughtful and functional design.",
    header: (
      <Image
        src="/absolventi.jpg" // Înlocuiește cu calea reală către imaginea ta
        alt="The Art of Design"
        width={400}
        height={200}
        className="object-cover w-full h-full rounded-xl"
      />
    ),
    icon: (
      <Image alt="peace" width={20} height={20} src={"/graduate.png"}></Image>
    ),
  },
  {
    title: "Lifestyle",
    description:
      "Understand the impact of effective communication in our lives.",
    header: (
      <Image
        src="/majorat.jpg" // Înlocuiește cu calea reală către imaginea ta
        alt="The Power of Communication"
        width={400}
        height={200}
        className="object-cover w-full h-full rounded-xl"
      />
    ),
    icon: (
      <Image alt="peace" width={20} height={20} src={"/quality-of-life.png"} />
    ),
  },
  {
    title: "Nightlife",
    description: "Join the quest for understanding and enlightenment.",
    header: (
      <Image
        src="/nightlife.jpg" // Înlocuiește cu calea reală către imaginea ta
        alt="The Pursuit of Knowledge"
        width={400}
        height={200}
        className="object-cover w-full h-full rounded-xl"
      />
    ),
    icon: <Image alt="peace" width={20} height={20} src={"/cocktail.png"} />,
  },
  {
    title: "Fitness",
    description: "Experience the thrill of bringing ideas to life.",
    header: (
      <Image
        src="/sala/gym1.jpg" // Înlocuiește cu calea reală către imaginea ta
        alt="The Joy of Creation"
        width={400}
        height={200}
        className="object-cover w-full h-full rounded-xl"
      />
    ),
    icon: <Image alt="peace" width={20} height={20} src={"/dumbbell.png"} />,
  },
  {
    title: "Majorate",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: (
      <Image
        src="/majorat.jpg" // Înlocuiește cu calea reală către imaginea ta
        alt="The Spirit of Adventure"
        width={400}
        height={200}
        className="object-cover w-full h-full rounded-xl"
      />
    ),
    icon: <Image alt="peace" width={20} height={20} src={"/cake.png"} />,
  },
];
