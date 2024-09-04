"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FaTimes } from "react-icons/fa";

export const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleCloseClick = (e) => {
    e.stopPropagation(); // Opțional: pentru a opri propagarea clicului către div-ul părinte
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="relative w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "absolute inset-0 h-screen z-10 flex justify-center items-center flex-wrap flex-col" // Schimbă w-[85vw] la w-screen
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-[100%]"
                : "bg-white rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
      {selected && (
        <motion.div
          className={cn(
            "absolute h-full w-full left-0 top-0 z-10",
            "opacity-100",
            selected?.id ? "pointer-events-auto" : "pointer-events-none"
          )}
          animate={{ opacity: selected ? 0.7 : 0 }}
        >
          <button
            onClick={handleCloseClick}
            className=" bold absolute top-4 right-11 bg-white rounded-full p-2 z-[80] "
          >
            <FaTimes />
          </button>
        </motion.div>
      )}
    </div>
  );
};

const ImageComponent = ({ card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200"
      )}
      alt="thumbnail"
    />
  );
};
