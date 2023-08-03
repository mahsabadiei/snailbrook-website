"use client";
import { useState } from "react";
import Image from "next/image";
import prevIcon from "@/public/prev-icon.svg";
import nextIcon from "@/public/next-icon.svg";

const videos = [
  { id: "", src: "", type: "" },
  { id: "", src: "", type: "" },
  { id: "", src: "", type: "" },
];

export default function Carousel({}: any) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === videos.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? videos.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-4">
        {/* <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 w-full h-full"
        > */}
        {videos.map((video: any, index: number) => {
          if (index === currentSlide) {
            return (
              <video
                key={video.id}
                src={video.src}
                width="392"
                height="163"
                controls
                className="animate-fadeIn"
              />
            );
          }
        })}
        {/* </Swipe> */}
      </div>
      <div className="flex flex-row items-center justify-center sm:justify-start gap-4">
        <button
          onClick={handlePrevSlide}
          className="px-8 py-3 rounded-[14px] border border-gray-gradient-light bg-gray-gradient-medium"
        >
          <Image src={prevIcon} alt="arrow" priority />
        </button>
        <button
          onClick={handleNextSlide}
          className="px-8 py-3 rounded-[14px] border border-gray-gradient-light bg-gray-gradient-medium"
        >
          <Image src={nextIcon} alt="arrow" priority />
        </button>
      </div>
    </div>
  );
}
