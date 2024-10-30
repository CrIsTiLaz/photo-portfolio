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
    e.stopPropagation();
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="relative w-full min-h-screen p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4">
      {cards.map((card, i) => (
        <div key={i} className="col-span-1">
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              "relative overflow-hidden rounded-xl",
              selected?.id === card.id
                ? "absolute inset-0 h-screen z-10 flex justify-center items-center"
                : lastSelected?.id === card.id
                ? "z-40 bg-white h-full"
                : "bg-white h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
      {selected && (
        <motion.div
          className="absolute h-full w-full left-0 top-0 z-10 opacity-100 pointer-events-auto"
          animate={{ opacity: selected ? 0.7 : 0 }}
        >
          <button
            onClick={handleCloseClick}
            className="absolute top-4 right-11 bg-white rounded-full p-2 z-[80]"
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
      className="object-cover object-top w-full h-64" // Înălțime fixă pentru imagini
      alt="thumbnail"
    />
  );
};
