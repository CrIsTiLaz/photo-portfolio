import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, header, icon, path }) => {
  return (
    <div
      className={cn(
        "row-span-1 h-[100%] rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="relative w-full h-48 lg:h-full overflow-hidden rounded-t-xl">
        <Image
          src={header.props.src}
          alt="Header"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="flex items-center justify-between mt-2 mb-2">
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200">
            {title}
          </div>
          <Link href={path}>
            {" "}
            {/* Folosim path-ul dinamic */}
            <Button>
              Vezi mai multe{" "}
              <AiOutlineArrowRight color="white" className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
