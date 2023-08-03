import Image from "next/image";
import cardBg from "@/public/card-bg.webp";
import cardMobileBg from "@/public/card-mobile-bg.webp";
import cloudsBg from "@/public/clouds-bg.webp";
import insideBg from "@/public/inside-bg.webp";
import playIcon from "@/public/play-icon.svg";
import Carousel from "./carousel";

export default function Page() {
  return (
    <section className="flex flex-col min-h-screen items-center justify-center overflow-hidden relative">
      <article className="flex flex-col w-[260px] h-[419px] sm:w-[491px] sm:h-[291px] xl:w-[891px] xl:h-[391px] gap-8 text-white z-20">
        <h1 className="text-3xl xl:text-[54px] font-medium text-white text-center sm:text-start">
          Latest from YouTube
        </h1>
        <div className="flex flex-row w-full items-center justify-center sm:justify-between">
          <p className="hidden sm:block text-base xl:text-xl font-normal text-white">
            Grab a front row seat to witness the epicness unfold, and
            <br /> join Finn on thrilling adventures by subscribing to our
            <br /> YouTube channel.
          </p>
          <button className="flex flex-row gap-3 justify-center items-center px-10 py-5 xl:px-11 xl:py-4 rounded-[14px] bg-gradient-to-r from-purple-light to-purple-medium">
            <Image src={playIcon} alt="play" />
            <span className="text-sm font-medium text-white">Subscribe</span>
          </button>
        </div>
        <Carousel />
      </article>

      <Image
        src={cardBg}
        alt="card"
        className="hidden sm:flex w-[1170px] h-auto absolute z-10"
        placeholder="blur"
        priority
        quality={100}
        sizes="100vw"
      />
      <Image
        src={cardMobileBg}
        alt="card"
        className="flex sm:hidden w-[582px] h-[536px] absolute z-10"
        placeholder="blur"
        priority
        quality={100}
        sizes="100vw"
      />
      <Image
        src={insideBg}
        alt="insideBg"
        className="object-cover"
        placeholder="blur"
        priority
        quality={100}
        fill
        sizes="100vw"
      />
      <Image
        src={cloudsBg}
        alt="cloudsBg"
        className="object-cover -z-10"
        placeholder="blur"
        priority
        quality={100}
        fill
        sizes="100vw"
      />
    </section>
  );
}
