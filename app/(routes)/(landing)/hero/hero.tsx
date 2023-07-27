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

export default function Hero() {
  return (
    <section className="flex flex-col min-h-screen items-center justify-between relative">
      <Image
        alt="islandBg"
        src={islandBg}
        // placeholder="blur"
        className="absolute bottom-0 object-cover sm:object-fill h-[80vh] sm:w-[91vw]"
        priority
        quality={100}
        sizes="100vw"
      />
      <Image
        alt="cloudsBg"
        src={cloudsBg}
        placeholder="blur"
        className="-z-10 object-cover"
        priority
        quality={100}
        fill
        sizes="100vw"
      />
      <Image
        alt="sunsetBg"
        src={sunsetBg}
        className="-z-10 object-cover"
        quality={100}
        fill
        sizes="100vw"
      />
      <div className="flex flex-col h-[40vh] w-[46vw] justify-end  z-10">
        <button className="w-[157px] sm:w-[264px]">
          <Image alt="enterTowerBt" src={enterTowerBt} quality={100} />
        </button>
      </div>
      <div className="flex flex-col h-[10vh] w-[61vw] justify-start items-end z-10">
        <button className="w-[157px] sm:w-[264px]">
          <Image alt="utilityTowerBt" src={utilityTowerBt} quality={100} />
        </button>
      </div>
      <div className="flex flex-col h-[20vh] justify-end z-10">
        <button className="bg-gradient-to-r from-pink-gradiant-light to-pink-gradiant-medium p-0.5 rounded-3xl">
          <span className="flex w-full bg-gradient-to-r from-purple-gradiant-light to-purple-gradiant-medium px-8 py-4 rounded-3xl">
            <p className="text-[27px] font-bold text-white">Buy $SNAIL</p>
          </span>
        </button>
      </div>
      <div className="flex flex-row h-[20vh] w-full justify-center lg:justify-between px-5 sm:px-16 z-10">
        <div className="hidden lg:flex flex-col h-[110px] gap-2 border-2 border-blue rounded-3xl p-4">
          <p className="text-sm font-normal text-white">
            The Snailbrook Litepaper is out.
          </p>
          <button className="flex flex-row gap-3 justify-center items-center px-12 py-3 bg-gradient-to-r from-purple-light to-purple-medium rounded-[14px]">
            <Image alt="download" src={downloadIcon} />
            <p className="text-xs font-medium text-white">Download now</p>
          </button>
        </div>
        <div className="flex flex-row gap-x-4 sm:gap-x-6 items-center">
          <button className="flex items-center justify-center bg-shadow w-8 h-8 sm:w-11 sm:h-11 rounded-[48px]">
            <Image src={twitterIcon} alt="twitterIcon" priority />
          </button>
          <button className="flex items-center justify-center bg-shadow w-8 h-8 sm:w-11 sm:h-11 rounded-[48px]">
            <Image src={telegramIcon} alt="telegramIcon" priority />
          </button>
          <button className="flex items-center justify-center bg-shadow w-8 h-8 sm:w-11 sm:h-11 rounded-[48px]">
            <Image src={mediumIcon} alt="mediumIcon" priority />
          </button>
          <button className="flex items-center justify-center bg-shadow w-8 h-8 sm:w-11 sm:h-11 rounded-[48px]">
            <Image src={tiktokIcon} alt="tiktokIcon" priority />
          </button>
          <button className="flex items-center justify-center bg-shadow w-8 h-8 sm:w-11 sm:h-11 rounded-[48px]">
            <Image src={redditIcon} alt="redditIcon" priority />
          </button>
          <button className="flex items-center justify-center bg-shadow w-8 h-8 sm:w-11 sm:h-11 rounded-[48px]">
            <Image src={discordIcon} alt="discordIcon" priority />
          </button>
          <button className="flex items-center justify-center bg-shadow w-8 h-8 sm:w-11 sm:h-11 rounded-[48px]">
            <Image src={youtubeIcon} alt="youtubeIcon" priority />
          </button>
          <button className="flex items-center justify-center bg-shadow w-8 h-8 sm:w-11 sm:h-11 rounded-[48px]">
            <Image src={gitbookIcon} alt="gitbookIcon" priority />
          </button>
        </div>
      </div>
    </section>
  );
}
