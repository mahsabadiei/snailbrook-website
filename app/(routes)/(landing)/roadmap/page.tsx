import Image from "next/image";
import Card from "./card";
import cardBg from "@/public/card-bg.webp";
import cardMobileBg from "@/public/card-mobile-bg.webp";
import cloudsBg from "@/public/clouds-bg.webp";
import insideBg from "@/public/inside-bg.webp";
import snail from "@/public/snail.webp";

export default function Page() {
  return (
    <section className="flex flex-col min-h-screen items-center justify-center overflow-hidden relative">
      <article className="flex flex-col w-[260px] h-[390px] sm:w-[537px] sm:h-[320px] lg:w-[850px] lg:h-[480px] items-center gap-4 overflow-y-auto z-20">
        <h2 className="text-sm font-medium text-white text-center">
          OUR ROADMAP
        </h2>
        <h1 className="text-3xl lg:text-[54px] font-bold lg:leading-[68px] text-white text-center">
          The Road of the Snail
        </h1>
        <p className="text-sm lg:text-base font-medium text-white  text-center">
          Our roadmap will remain shrouded in mystery until we deem the right
          time. However, all development steps we will take care to build and
          expand SnailBrook, fostering innovation and collaboration among meme
          coin enthusiasts.
        </p>
        <button className="flex flex-row justify-center items-center mb-12 px-8 py-3 lg:px-12 lg:py-5 rounded-[14px] bg-gradient-to-r from-purple-light to-purple-medium">
          <span className="text-xl font-medium text-white">Stay updated</span>
        </button>

        <div className="flex flex-col flex-wrap w-full justify-center items-center relative">
          <div className="flex flex-col lg:flex-row w-[80%] items-center justify-between">
            <Card circlePosition="right" circleNumber="1" />
            <div className="lg:w-[130px] h-0.5 hidden lg:inline-block mb-20 bg-green-light" />
            <div className="h-10 w-0.5 inline-block lg:hidden m-0 bg-green-light" />
            <Card circlePosition="left" circleNumber="2" />
            <div className="h-10 w-0.5 inline-block lg:hidden m-0 bg-green-light" />
          </div>
          <div className="h-20 w-0.5 hidden lg:inline-block m-0 bg-green-light self-end absolute top-[184px] right-[220px]" />
          <Image
            src={snail}
            alt="snail"
            className="hidden lg:block absolute top-[320px] right-[380px] z-50"
          />
          <div className="flex flex-col-reverse lg:flex-row w-[80%] items-center justify-between">
            <Card circlePosition="right" circleNumber="4" />
            <div className="lg:w-[130px] h-0.5 hidden lg:inline-block mb-20 bg-green-light" />
            <div className="h-10 w-0.5 inline-block lg:hidden m-0 bg-green-light" />
            <Card circlePosition="top" circleNumber="3" />
          </div>
          <div className="h-20 w-0.5 hidden lg:inline-block m-0 bg-green-light self-start absolute bottom-[264px] left-[220px]" />
          <div className="flex flex-col lg:flex-row w-[80%] items-center justify-between">
            <div className="h-10 w-0.5 inline-block lg:hidden m-0 bg-green-light" />
            <Card circlePosition="top" circleNumber="5" />
            <div className="lg:w-[130px] h-0.5 hidden lg:inline-block mb-20 bg-green-light" />
            <div className="h-10 w-0.5 inline-block lg:hidden m-0 bg-green-light" />
            <Card circlePosition="left" circleNumber="6" />
          </div>
        </div>
      </article>

      <Image
        src={cardBg}
        alt="card"
        className="hidden sm:flex w-[1080px] h-auto absolute z-10"
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
