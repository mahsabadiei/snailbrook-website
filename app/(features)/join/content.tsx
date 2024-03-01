import Image from "next/image";
import Link from "next/link";
import {
  DISCORD,
  GITBOOK,
  MEDIUM,
  REDDIT,
  TELEGRAM,
  TIKTOK,
  TWITTER,
  YOUTUBE,
} from "@/app/utils/constants";
import twitterIcon from "@/public/twitter-icon.svg";
import telegramIcon from "@/public/telegram-icon.svg";
import mediumIcon from "@/public/medium-icon.svg";
import tiktokIcon from "@/public/tiktok-icon.svg";
import redditIcon from "@/public/reddit-icon.svg";
import discordIcon from "@/public/discord-icon.svg";
import youtubeIcon from "@/public/youtube-icon.svg";
import gitbookIcon from "@/public/gitbook-icon.svg";

export default function Content() {
  return (
    <article className="flex flex-col w-[260px] h-[390px] sm:w-[537px] sm:h-[320px] lg:w-[850px] lg:h-[480px] items-center justify-center gap-4 lg:gap-8 z-20">
      <h1 className="text-3xl lg:text-[54px] font-bold xl:font-medium lg:leading-[68px] text-white text-center">
        Official Social Media
      </h1>
      <p className="text-sm lg:text-xl text-white text-center">
        Our Telegram group and Twitter account are the best places to stay
        updated on the latest SnailBrook City news and connect with fellow
        community members.
      </p>
      <div className="flex flex-row flex-wrap items-center justify-center gap-4 lg:gap-8">
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-4">
          <Link
            href={TWITTER}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-[49px] h-[50px] xl:w-[90px] xl:h-[92px] relative rounded-xl xl:rounded-3xl bg-gray-gradient-normal gradinetBorderWithTransparentBg gradinetBorderYellowToGreen"
          >
            <Image
              src={twitterIcon}
              alt="twitterIcon"
              className="xl:w-12 xl:h-12"
            />
          </Link>
          <h2 className="text-[8px] sm:text-base font-bold text-white">
            Twitter
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-4">
          <Link
            href={TELEGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-[49px] h-[50px] xl:w-[90px] xl:h-[92px] relative rounded-xl xl:rounded-3xl bg-gray-gradient-normal gradinetBorderWithTransparentBg gradinetBorderYellowToGreen"
          >
            <Image
              src={telegramIcon}
              alt="telegramIcon"
              className="xl:w-12 xl:h-12"
            />
          </Link>
          <h2 className="text-[8px] sm:text-base font-bold text-white">
            Telegram
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-4">
          <Link
            href={MEDIUM}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-[49px] h-[50px] xl:w-[90px] xl:h-[92px] relative rounded-xl xl:rounded-3xl bg-gray-gradient-normal gradinetBorderWithTransparentBg gradinetBorderYellowToGreen"
          >
            <Image
              src={mediumIcon}
              alt="mediumIcon"
              className="xl:w-12 xl:h-12"
            />
          </Link>
          <h2 className="text-[8px] sm:text-base font-bold text-white">
            Medium
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-4">
          <Link
            href={TIKTOK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-[49px] h-[50px] xl:w-[90px] xl:h-[92px] relative rounded-xl xl:rounded-3xl bg-gray-gradient-normal gradinetBorderWithTransparentBg gradinetBorderYellowToGreen"
          >
            <Image
              src={tiktokIcon}
              alt="tiktokIcon"
              className="xl:w-12 xl:h-12"
            />
          </Link>
          <h2 className="text-[8px] sm:text-base font-bold text-white">
            TikTok
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-4">
          <Link
            href={REDDIT}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-[49px] h-[50px] xl:w-[90px] xl:h-[92px] relative rounded-xl xl:rounded-3xl bg-gray-gradient-normal gradinetBorderWithTransparentBg gradinetBorderYellowToGreen"
          >
            <Image
              src={redditIcon}
              alt="redditIcon"
              className="xl:w-12 xl:h-12"
            />
          </Link>
          <h2 className="text-[8px] sm:text-base font-bold text-white">
            Reddit
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-4">
          <Link
            href={DISCORD}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-[49px] h-[50px] xl:w-[90px] xl:h-[92px] relative rounded-xl xl:rounded-3xl bg-gray-gradient-normal gradinetBorderWithTransparentBg gradinetBorderYellowToGreen"
          >
            <Image
              src={discordIcon}
              alt="discordIcon"
              className="xl:w-12 xl:h-12"
            />
          </Link>
          <h2 className="text-[8px] sm:text-base font-bold text-white">
            Discord
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-4">
          <Link
            href={YOUTUBE}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center  w-[49px] h-[50px] xl:w-[90px] xl:h-[92px] relative rounded-xl xl:rounded-3xl bg-gray-gradient-normal gradinetBorderWithTransparentBg gradinetBorderYellowToGreen"
          >
            <Image
              src={youtubeIcon}
              alt="youtubeIcon"
              className="xl:w-12 xl:h-12"
            />
          </Link>
          <h2 className="text-[8px] sm:text-base font-bold text-white">
            YouTube
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-4">
          <Link
            href={GITBOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center  w-[49px] h-[50px] xl:w-[90px] xl:h-[92px] relative rounded-xl xl:rounded-3xl bg-gray-gradient-normal gradinetBorderWithTransparentBg gradinetBorderYellowToGreen"
          >
            <Image
              src={gitbookIcon}
              alt="gitbookIcon"
              className="xl:w-12 xl:h-12"
            />
          </Link>
          <h2 className="text-[8px] sm:text-base font-bold text-white">
            Gitbook
          </h2>
        </div>
      </div>
    </article>
  );
}
