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
    <section className="w-full min-h-screen overflow-hidden relative">
      <div className="flex flex-col w-full max-h-[90%] items-center justify-between fixed bottom-0 overflow-hidden">
        <div className="flex flex-col h-[25vh] justify-end pr-[100px] md:pr-[308px] z-10">
          <button className="hidden md:flex">
            <Image src={enterTowerBt} alt="enterTowerBt" quality={100} />
          </button>
        </div>
        <div className="flex flex-col h-[25vh] justify-center items-end md:pl-[480px] z-10">
          <button className="hidden md:flex">
            <Image src={utilityTowerBt} alt="utilityTowerBt" quality={100} />
          </button>
        </div>
        <div className="flex flex-col h-[20vh] justify-end z-10">
          <button>
            <Image
              src={purpleGradientBt}
              alt="purpleGradientBt"
              quality={100}
            />
          </button>
        </div>
        <div className="flex flex-row w-full h-[20vh] justify-center lg:justify-between px-5 sm:px-16 z-10">
          <div className="hidden lg:flex flex-col h-[110px] gap-2 p-4 relative z-40 rounded-3xl bg-gray-gradient-dark border-2 border-blue-medium">
            <div className="flex items-center justify-center p-0.5 absolute top-[-12px] rounded-[14px] bg-gradient-to-r from-blue-light to-pink-light">
              <div className="rounded-[14px] bg-gray-light px-2 py-1">
                <h1 className="text-white text-[8px]">NEW</h1>
              </div>
            </div>
            <h1 className="text-sm font-normal text-white">
              The Snailbrook Litepaper is out.
            </h1>
            <button className="flex flex-row gap-3 justify-center items-center px-12 py-3 rounded-[14px] bg-gradient-to-r from-purple-light to-purple-medium">
              <Image src={downloadIcon} alt="download" />
              <span className="text-xs font-medium text-white">
                Download now
              </span>
            </button>
          </div>
          <div className="flex flex-row gap-x-4 sm:gap-x-6 items-center">
            <button className="flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 rounded-[48px] backdrop-blur bg-gray-gradient-dark">
              <Image src={twitterIcon} alt="twitterIcon" priority />
            </button>
            <button className="flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 rounded-[48px] backdrop-blur bg-gray-gradient-dark">
              <Image src={telegramIcon} alt="telegramIcon" priority />
            </button>
            <button className="flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 rounded-[48px] backdrop-blur bg-gray-gradient-dark">
              <Image src={mediumIcon} alt="mediumIcon" priority />
            </button>
            <button className="flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 rounded-[48px] backdrop-blur bg-gray-gradient-dark">
              <Image src={tiktokIcon} alt="tiktokIcon" priority />
            </button>
            <button className="flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 rounded-[48px] backdrop-blur bg-gray-gradient-dark">
              <Image src={redditIcon} alt="redditIcon" priority />
            </button>
            <button className="flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 rounded-[48px] backdrop-blur bg-gray-gradient-dark">
              <Image src={discordIcon} alt="discordIcon" priority />
            </button>
            <button className="flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 rounded-[48px] backdrop-blur bg-gray-gradient-dark">
              <Image src={youtubeIcon} alt="youtubeIcon" priority />
            </button>
            <button className="flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 rounded-[48px] backdrop-blur bg-gray-gradient-dark">
              <Image src={gitbookIcon} alt="gitbookIcon" priority />
            </button>
          </div>
        </div>
        <Image
          src={islandBg}
          alt="islandBg"
          className="object-cover"
          placeholder="blur"
          priority
          quality={100}
          fill
          sizes="100vw"
        />
      </div>
      <Image
        src={sunsetBg}
        alt="sunsetBg"
        className="object-cover -z-10"
        quality={100}
        fill
        sizes="100vw"
      />
      <Image
        src={cloudsBg}
        alt="cloudsBg"
        className="object-cover -z-10 "
        placeholder="blur"
        priority
        quality={100}
        fill
        sizes="100vw"
      />
    </section>
  );
}
