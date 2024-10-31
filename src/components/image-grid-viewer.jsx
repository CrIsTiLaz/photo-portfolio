"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { X } from "lucide-react";

const Spinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="w-12 h-12 border-4 border-t-transparent border-gray-500 rounded-full animate-spin"></div>
  </div>
);

export function ImageGridViewer() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    try {
      const response = await fetch(`/api/pictures?folder=nunti&page=${page}`);
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        setImages((prevImages) => [
          ...prevImages,
          ...data.slice(1).map((item) => item.url),
        ]);
        if (data.length < 8) setHasMore(false);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

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

  const handleImageClick = (image) => {
    setLoading(true); // Setează starea la true când imaginea este deschisă
    setSelectedImage(image);
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="container mx-auto p-4 min-h-screen pb-20">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden rounded-lg relative"
            onClick={() => handleImageClick(image)}
          >
            <Image
              src={image}
              alt={`Grid item ${index + 1}`}
              width={500}
              height={500}
              className="object-cover w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </Masonry>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
            aria-label="Close full screen image"
          >
            <X size={32} />
          </button>
          {loading && <Spinner />}
          {/* Imaginea deschisă */}
          <Image
            src={selectedImage}
            alt="Full screen view"
            width={800}
            height={600}
            className="object-contain max-w-full max-h-full rounded-lg"
            onLoad={() => setLoading(false)} // Ascunde textul "Loading..." după încărcare
          />
        </div>
      )}
    </div>
  );
}
