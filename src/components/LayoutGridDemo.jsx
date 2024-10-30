"use client";
import React, { useEffect, useState, useCallback } from "react";
import { LayoutGrid } from "../components/ui/layout-grid";

const IMAGES_PER_LOAD = 5; // Numărul de imagini pe care le încarci per cerere

export function LayoutGridDemo() {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1); // Pagina curentă pentru infinite scroll
  const [hasMore, setHasMore] = useState(true); // Flag pentru a indica dacă mai sunt imagini de încărcat

  // Funcție pentru a încărca imaginile pe baza paginii curente
  const fetchImages = useCallback(async () => {
    try {
      const response = await fetch(
        `/api/pictures?folder=nunta&page=${page}&limit=${IMAGES_PER_LOAD}`
      );
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const images = await response.json();

      if (!Array.isArray(images))
        throw new Error("API response is not an array");

      // Verificăm dacă mai sunt imagini de încărcat
      if (images.length < IMAGES_PER_LOAD) {
        setHasMore(false);
      }

      const imageCards = images.map((image, index) => ({
        id: index + cards.length + 1, // Menținem indexul unic
        content: <SkeletonOne />,
        className: "col-span-1",
        thumbnail: image.url,
      }));

      setCards((prevCards) => [...prevCards, ...imageCards]);
    } catch (error) {
      console.error("Eroare la obținerea imaginilor:", error);
    }
  }, [page]);

  // Efect pentru încărcarea imaginilor inițiale și a celor suplimentare
  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  // Funcție de apel atunci când se derulează aproape de finalul paginii
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 100 &&
        hasMore
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore]);

  return (
    <div className="h-screen py-20 w-full mb-24">
      <LayoutGrid cards={cards} />
      {!hasMore && (
        <p className="text-center mt-4">Toate imaginile au fost încărcate.</p>
      )}
    </div>
  );
}

const SkeletonOne = () => (
  <div>
    <p className="font-normal text-base text-white"></p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      O descriere generică pentru imagine.
    </p>
  </div>
);
