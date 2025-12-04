"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const IMAGES = [
  { src: "/images/cowork.jpg", alt: "Conference Room" },
  { src: "/images/greenroom3.jpg", alt: "Hot Desk" },
  { src: "/images/lounge.jpg", alt: "Lounge Area" },
  { src: "/images/reception.jpg", alt: "Reception Desk" },
  { src: "/images/walkway.jpg", alt: "Private Office" },
  { src: "/images/privateOffice3.jpg", alt: "Private Office" },
  { src: "/images/walkway2.jpg", alt: "Private Office" },
  { src: "/images/greenroom.jpg", alt: "Hot Desk" },
  { src: "/images/privateOffice2.jpg", alt: "Dedicated Office" },
  { src: "/images/lounge3.jpg", alt: "Dedicated Office" },
  { src: "/images/meetingRoom.jpg", alt: "Meeting Room" },
  { src: "/images/lounge2.jpg", alt: "Open Workspace" },
];

const ITEMS_PER_PAGE = 3;
const AUTO_SCROLL_INTERVAL = 5000;

const variants = {
  enter: (dir: "left" | "right") => ({
    x: dir === "right" ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: "left" | "right") => ({
    x: dir === "right" ? -300 : 300,
    opacity: 0,
  }),
};

const GalleryContainer = () => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const maxPage = Math.ceil(IMAGES.length / ITEMS_PER_PAGE);

  const paginate = (newDirection: "left" | "right") => {
    setDirection(newDirection);
    setPage((prev) =>
      newDirection === "right"
        ? (prev + 1) % maxPage
        : (prev - 1 + maxPage) % maxPage
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate("right");
    }, AUTO_SCROLL_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const currentImages = IMAGES.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <div className="relative w-full max-w-[1200px] mx-auto p-4">
      {/* Slide buttons */}
      <button
        onClick={() => paginate("left")}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full"
        aria-label="Previous"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => paginate("right")}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full"
        aria-label="Next"
      >
        <ChevronRight />
      </button>

      {/* Image slider */}
      <div className="overflow-hidden w-full">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={page}
            className="flex justify-center gap-4"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6 }}
          >
            {currentImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={200}
                  className="rounded-xl object-cover w-full h-[200px]"
                  priority
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: maxPage }).map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > page ? "right" : "left");
              setPage(i);
            }}
            className={`w-3 h-3 rounded-full ${
              i === page ? "bg-gray-900" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryContainer;
