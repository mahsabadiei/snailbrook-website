"use client";
import Image from "next/image";
import cardBg from "@/public/card-bg.webp";
import cardMobileBg from "@/public/card-mobile-bg.webp";
import cloudsBg from "@/public/clouds-bg.webp";
import insideBg from "@/public/inside-bg.webp";
import twitterIcon from "@/public/twitter-icon.svg";
import telegramIcon from "@/public/telegram-icon.svg";
import mediumIcon from "@/public/medium-icon.svg";
import tiktokIcon from "@/public/tiktok-icon.svg";
import redditIcon from "@/public/reddit-icon.svg";
import discordIcon from "@/public/discord-icon.svg";
import youtubeIcon from "@/public/youtube-icon.svg";
import gitbookIcon from "@/public/gitbook-icon.svg";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Page({ searchParams }: Props) {
  const showModal = searchParams?.modal;

  return (
    <section className="flex flex-col min-h-screen items-center justify-center overflow-hidden relative">
      <article className="flex flex-col w-[260px] h-[419px] sm:w-[491px] sm:h-[291px] xl:w-[891px] xl:h-[391px] items-center gap-4 xl:gap-8 z-30">
        <h1 className="text-3xl xl:text-[54px] font-bold xl:font-medium text-white text-center">
          Official Social Media
        </h1>
        <p className="text-sm xl:text-xl text-white text-center mb-4 xl:mb-7">
          Our Telegram group and Twitter account are the best places to stay
          updated on the latest SnailBrook City news and connect with fellow
          community members.
        </p>
        <div className="flex flex-row flex-wrap items-center justify-center gap-8 xl:gap-11">
          <button className="flex items-center justify-center w-[49px] h-[50px] xl:w-[90px] xl:h-[92px] relative rounded-xl xl:rounded-3xl border-2 border-blue-light">
            <Image
              src={twitterIcon}
              alt="twitterIcon"
              className="xl:w-12 xl:h-12"
              priority
            />
          </button>
          <button className="flex items-center justify-center w-[49px] h-[50px] xl:w-[90px] xl:h-[92px] relative rounded-xl xl:rounded-3xl border-2 border-blue-light">
            <Image
              src={telegramIcon}
              alt="telegramIcon"
              className="xl:w-12 xl:h-12"
              priority
            />
          </button>
          <button className="flex items-center justify-center w-[49px] h-[50px] xl:w-[90px] xl:h-[92px] relative rounded-xl xl:rounded-3xl border-2 border-blue-light">
            <Image
              src={mediumIcon}
              alt="mediumIcon"
              className="xl:w-12 xl:h-12"
              priority
            />
          </button>
          <button className="flex items-center justify-center w-[49px] h-[50px] xl:w-[90px] xl:h-[92px] relative rounded-xl xl:rounded-3xl border-2 border-blue-light">
            <Image
              src={tiktokIcon}
              alt="tiktokIcon"
              className="xl:w-12 xl:h-12"
              priority
            />
          </button>
          <button className="flex items-center justify-center w-[49px] h-[50px] xl:w-[90px] xl:h-[92px] relative rounded-xl xl:rounded-3xl border-2 border-blue-light">
            <Image
              src={redditIcon}
              alt="redditIcon"
              className="xl:w-12 xl:h-12"
              priority
            />
          </button>
          <button className="flex items-center justify-center w-[49px] h-[50px] xl:w-[90px] xl:h-[92px] relative rounded-xl xl:rounded-3xl border-2 border-blue-light">
            <Image
              src={discordIcon}
              alt="discordIcon"
              className="xl:w-12 xl:h-12"
              priority
            />
          </button>
          <button className="flex items-center justify-center  w-[49px] h-[50px] xl:w-[90px] xl:h-[92px] relative rounded-xl xl:rounded-3xl border-2 border-blue-light">
            <Image
              src={youtubeIcon}
              alt="youtubeIcon"
              className="xl:w-12 xl:h-12"
              priority
            />
          </button>
          <button className="flex items-center justify-center  w-[49px] h-[50px] xl:w-[90px] xl:h-[92px] relative rounded-xl xl:rounded-3xl border-2 border-blue-light">
            <Image
              src={gitbookIcon}
              alt="gitbookIcon"
              className="xl:w-12 xl:h-12"
              priority
            />
          </button>
        </div>
      </article>

      <Image
        src={cardBg}
        alt="card"
        className="hidden sm:flex w-[1170px] h-auto absolute z-20"
        placeholder="blur"
        priority
        quality={100}
        sizes="100vw"
      />
      <Image
        src={cardMobileBg}
        alt="card"
        className="flex sm:hidden w-[582px] h-[536px] absolute z-20"
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
