import { ArrowRight } from "lucide-react";
import Link from "next/link"; // Pentru redirecționare către oferta descărcabilă
import { cn } from "@/lib/utils";

export default function GetStartedButton({
  text = "Descarcă oferta",
  className,
  downloadUrl,
}) {
  return (
    <div className="min-h-12 w-48">
      <Link href={downloadUrl} target="_blank" download>
        <button
          className={cn(
            "group flex h-12 w-40 items-center justify-center gap-3 rounded-lg bg-orange-700 p-2 font-bold transition-colors duration-100 ease-in-out hover:bg-orange-800",
            className
          )}
        >
          <span
            className={cn(
              "text-white transition-colors duration-100 ease-in-out group-hover:text-orange-100"
            )}
          >
            {text}
          </span>
          <div
            className={cn(
              "relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-full transition-transform duration-100",
              "bg-orange-600 group-hover:bg-orange-100"
            )}
          >
            <div className="absolute left-0 flex h-7 w-14 -translate-x-1/2 items-center justify-center transition-all duration-200 ease-in-out group-hover:translate-x-0">
              <ArrowRight
                size={16}
                className={cn(
                  "size-7 transform p-1 text-orange-100 opacity-0 group-hover:opacity-100"
                )}
              />
              <ArrowRight
                size={16}
                className={cn(
                  "size-7 transform p-1 text-white opacity-100 transition-transform duration-300 ease-in-out group-hover:opacity-0"
                )}
              />
            </div>
          </div>
        </button>
      </Link>
    </div>
  );
}
