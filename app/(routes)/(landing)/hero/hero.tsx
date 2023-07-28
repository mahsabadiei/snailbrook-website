import Image from "next/image";
import islandBg from "@/public/island-bg.webp";
import cloudsBg from "@/public/clouds-bg.webp";
import sunsetBg from "@/public/sunset-bg.svg";
import enterTowerBt from "@/public/enter-tower-bt.svg";
import utilityTowerBt from "@/public/utility-tower-bt.svg";
import twitterIcon from "@/public/twitter-icon.svg";
import telegramIcon from "@/public/telegram-icon.svg";
import mediumIcon from "@/public/medium-icon.svg";
import tiktokIcon from "@/public/tiktok-icon.svg";
import redditIcon from "@/public/reddit-icon.svg";
import discordIcon from "@/public/discord-icon.svg";
import youtubeIcon from "@/public/youtube-icon.svg";
import gitbookIcon from "@/public/gitbook-icon.svg";
import downloadIcon from "@/public/download-icon.svg";
import purpleGradientBt from "@/public/purple-gradient-bt.svg";

export default function Hero() {
  return (
    <section className="w-full min-h-screen relative">
      <Image
        alt="sunsetBg"
        src={sunsetBg}
        className="object-cover -z-10"
        quality={100}
        fill
        sizes="100vw"
      />
      <Image
        alt="cloudsBg"
        src={cloudsBg}
        placeholder="blur"
        className="object-cover -z-10 "
        priority
        quality={100}
        fill
        sizes="100vw"
      />
      <div className="flex flex-col w-full max-h-[90%] items-center justify-between fixed bottom-0">
        <Image
          alt="islandBg"
          src={islandBg}
          placeholder="blur"
          className="object-cover"
          priority
          quality={100}
          fill
          sizes="100vw"
        />
        <div className="flex flex-col h-[25vh] justify-end pr-[100px] md:pr-[308px] z-10">
          <button className="hidden md:flex">
            <Image alt="enterTowerBt" src={enterTowerBt} quality={100} />
          </button>
        </div>
        <div className="flex flex-col h-[25vh] justify-center items-end md:pl-[480px] z-10">
          <button className="hidden md:flex">
            <Image alt="utilityTowerBt" src={utilityTowerBt} quality={100} />
          </button>
        </div>
        <div className="flex flex-col h-[20vh] justify-end z-10">
          <button>
            <Image
              alt="purpleGradientBt"
              src={purpleGradientBt}
              quality={100}
            />
          </button>
        </div>
        <div className="flex flex-row w-full h-[20vh] justify-center lg:justify-between px-5 sm:px-16 z-10">
          <div className="hidden lg:flex flex-col h-[110px] gap-2 bg-shadow-medium border-2 border-blue-medium rounded-3xl p-4 relative z-40">
            <div className="flex items-center justify-center rounded-[14px] bg-gradient-to-r from-blue-light to-pink-light p-0.5 absolute top-[-12px]">
              <div className="rounded-[14px] bg-gray-light px-2 py-1">
                <h1 className="text-white text-[8px]">NEW</h1>
              </div>
            </div>
            <p className="text-sm font-normal text-white">
              The Snailbrook Litepaper is out.
            </p>
            <button className="flex flex-row gap-3 justify-center items-center px-12 py-3 bg-gradient-to-r from-purple-light to-purple-medium rounded-[14px]">
              <Image alt="download" src={downloadIcon} />
              <p className="text-xs font-medium text-white">Download now</p>
            </button>
          </div>
          <div className="flex flex-row gap-x-4 sm:gap-x-6 items-center">
            <button className="flex items-center justify-center bg-shadow-medium w-8 h-8 sm:w-11 sm:h-11 rounded-[48px]">
              <Image src={twitterIcon} alt="twitterIcon" priority />
            </button>
            <button className="flex items-center justify-center bg-shadow-medium w-8 h-8 sm:w-11 sm:h-11 rounded-[48px]">
              <Image src={telegramIcon} alt="telegramIcon" priority />
            </button>
            <button className="flex items-center justify-center bg-shadow-medium w-8 h-8 sm:w-11 sm:h-11 rounded-[48px]">
              <Image src={mediumIcon} alt="mediumIcon" priority />
            </button>
            <button className="flex items-center justify-center bg-shadow-medium w-8 h-8 sm:w-11 sm:h-11 rounded-[48px]">
              <Image src={tiktokIcon} alt="tiktokIcon" priority />
            </button>
            <button className="flex items-center justify-center bg-shadow-medium w-8 h-8 sm:w-11 sm:h-11 rounded-[48px]">
              <Image src={redditIcon} alt="redditIcon" priority />
            </button>
            <button className="flex items-center justify-center bg-shadow-medium w-8 h-8 sm:w-11 sm:h-11 rounded-[48px]">
              <Image src={discordIcon} alt="discordIcon" priority />
            </button>
            <button className="flex items-center justify-center bg-shadow-medium w-8 h-8 sm:w-11 sm:h-11 rounded-[48px]">
              <Image src={youtubeIcon} alt="youtubeIcon" priority />
            </button>
            <button className="flex items-center justify-center bg-shadow-medium w-8 h-8 sm:w-11 sm:h-11 rounded-[48px]">
              <Image src={gitbookIcon} alt="gitbookIcon" priority />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
