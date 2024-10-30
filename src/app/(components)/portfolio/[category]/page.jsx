"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { X } from "lucide-react";

// Componenta Skeleton
const Skeleton = () => (
  <div className="w-full h-64 bg-gray-300 rounded-lg animate-pulse"></div>
);

export default function ImageGridViewer() {
  const { category } = useParams();
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchImages = async () => {
    try {
      setLoadingMore(true);
      const response = await fetch(
        `/api/pictures?folder=${category}&page=${page}`
      );
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
    } finally {
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    if (category) {
      fetchImages();
    }
  }, [page, category]);

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
    setLoading(true);
    setSelectedImage(image);
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="container mx-auto p-4 min-h-screen pb-20 pt-20">
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

        {/* Skeletons pentru încărcarea imaginilor suplimentare */}
        {loadingMore &&
          Array(8)
            .fill(0)
            .map((_, index) => (
              <div key={`skeleton-${index}`} className="cursor-pointer">
                <Skeleton />
              </div>
            ))}
      </Masonry>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={() => {
              setSelectedImage(null);
              setLoading(false);
            }}
            className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
            aria-label="Close full screen image"
          >
            <X size={32} />
          </button>

          {loading && <Skeleton />}

          <Image
            key={selectedImage}
            src={selectedImage}
            alt="Full screen view"
            width={800}
            height={600}
            className="object-contain max-w-full max-h-full rounded-lg"
            onLoad={() => setLoading(false)}
          />
        </div>
      )}
    </div>
  );
}
