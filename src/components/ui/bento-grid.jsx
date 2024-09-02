import { cn } from "@/lib/utils";
import Link from "next/link"; // Import Link for navigation
import { Button, buttonVariants } from "@/components/ui/button";
import { AiOutlineArrowRight } from "react-icons/ai";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, header, icon }) => {
  return (
    <div
      className={cn(
        "row-span-1 h-[100%] rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="flex items-center justify-between mt-2 mb-2">
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200">
            {title}
          </div>
          {/* <Link
            className={`bg-black text-white hover:bg-gray-800 rounded-md px-4 py-2 transition duration-300 ${buttonVariants(
              { variant: "outline" }
            )}`}
            href={"/contact"}
          >
            Vezi mai multe <AiOutlineArrowRight />
          </Link> */}
          <Link href={"/portfolio/nunti"}>
            <Button>
              {" "}
              Vezi mai multe{" "}
              <AiOutlineArrowRight color="white" className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
