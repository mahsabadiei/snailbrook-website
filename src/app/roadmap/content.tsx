import Image from "next/image";
import Link from "next/link";
import Card from "./card";
import { SNAILTEAM } from "@/lib/utils/constants";
import snail from "../../../public/snail-to-left-icon.svg";

export default function Content() {
  return (
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
      <Link
        href={SNAILTEAM}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row justify-center items-center mb-12 px-8 py-3 lg:px-12 lg:py-5 rounded-[14px] bg-gradient-to-r from-purple-light to-purple-medium"
      >
        <span className="text-xl font-medium text-white">Stay updated</span>
      </Link>

      <div className="flex flex-col flex-wrap w-full justify-center items-center relative">
        <div className="flex flex-col lg:flex-row w-[80%] items-center justify-between">
          <Card
            circlePosition="right"
            circleNumber="1"
            title={`Fair Launch`}
            desc={`80% of $SNAIL in Uniswap, 20% in Airdrops. A truly fair launch for the community's benefit.`}
          />
          <div className="lg:w-[130px] h-0.5 hidden lg:inline-block mb-20 bg-green-light" />
          <div className="h-10 w-0.5 inline-block lg:hidden m-0 bg-green-light" />
          <Card
            circlePosition="left"
            circleNumber="2"
            title={"Airdrop"}
            desc={
              "Top 420 holders in 9 meme projects claim 10B $SNAIL. United meme coin communities prosper."
            }
          />
          <div className="h-10 w-0.5 inline-block lg:hidden m-0 bg-green-light" />
        </div>
        <div className="h-20 w-0.5 hidden lg:inline-block m-0 bg-green-light self-end absolute top-[184px] right-[220px]" />
        <Image
          src={snail}
          alt="snail"
          className="hidden lg:block absolute top-[320px] right-[380px] z-50"
          sizes="100vw"
          quality={100}
        />
        <div className="flex flex-col-reverse lg:flex-row w-[80%] items-center justify-between">
          <Card
            circlePosition="right"
            circleNumber="4"
            title={"The SnailBrook Platform"}
            desc={
              "An all-in-one crypto hub where meme coin communities unite & thrive. The ultimate meme metropolis."
            }
          />
          <div className="lg:w-[130px] h-0.5 hidden lg:inline-block mb-20 bg-green-light" />
          <div className="h-10 w-0.5 inline-block lg:hidden m-0 bg-green-light" />
          <Card
            circlePosition="top"
            circleNumber="3"
            title={"The Great Snail Burn"}
            desc={
              "Unprecedented deflationary event with 17.6B $SNAIL tokens burned, for stability and long-term value."
            }
          />
        </div>
        <div className="h-20 w-0.5 hidden lg:inline-block m-0 bg-green-light self-start absolute bottom-[264px] left-[220px]" />
        <div className="flex flex-col lg:flex-row w-[80%] items-center justify-between">
          <div className="h-10 w-0.5 inline-block lg:hidden m-0 bg-green-light" />
          <Card
            circlePosition="top"
            circleNumber="5"
            title={"Snail Native Ecosystem"}
            desc={
              "Meme Discovery Engine, Native Meme DEX, Snailbox Mobile, Apple Vision Dex Tools, and more!"
            }
          />
          {/* <div className="lg:w-[130px] h-0.5 hidden lg:inline-block mb-20 bg-green-light" /> */}
          {/* <div className="h-10 w-0.5 inline-block lg:hidden m-0 bg-green-light" /> */}
          {/* <Card circlePosition="left" circleNumber="6" title={``} desc={``} /> */}
        </div>
      </div>
    </article>
  );
}
