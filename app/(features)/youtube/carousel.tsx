"use client";
import { useState } from "react";
import Image from "next/image";
import { Video } from "./content";
import dynamic from "next/dynamic";
import prevIcon from "@/public/prev-icon.svg";
import nextIcon from "@/public/next-icon.svg";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

type CarouselProps = {
  list: Video[];
};

export default function Carousel({ list }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const onNextSlide = () => {
    let newSlide = currentSlide + 1 === list.length - 1 ? 0 : currentSlide + 2;
    setCurrentSlide(newSlide);
  };

  const onPrevSlide = () => {
    let newSlide = currentSlide + 1 === 0 ? list.length - 1 : currentSlide - 2;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-4">
        {list.map((video: Video, index: number) => {
          if (index === currentSlide || index === currentSlide + 1) {
            return (
              <div
                key={video?.id}
                className="flex flex-col gap-2 w-[392px] h-[293px]"
              >
                <ReactPlayer
                  url={video.src}
                  width="100%"
                  height="100%"
                  controls
                />
                <p className="text-[18px] font-bold text-white">
                  {video.title}
                </p>
              </div>
            );
          }
        })}
      </div>
      <div className="flex flex-row items-center justify-center lg:justify-start gap-4">
        <button
          onClick={onPrevSlide}
          className="px-8 py-3 rounded-[14px] border border-gray-gradient-light bg-gray-gradient-medium"
        >
          <Image src={prevIcon} alt="arrow" />
        </button>
        <button
          onClick={onNextSlide}
          className="px-8 py-3 rounded-[14px] border border-gray-gradient-light bg-gray-gradient-medium"
        >
          <Image src={nextIcon} alt="arrow" />
        </button>
      </div>
    </div>
  );
}
