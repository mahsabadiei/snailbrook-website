"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import openIcon from "../../../public/open-icon.svg";
import copyIcon from "../../../public/copy-icon.svg";
import rocketIcon from "../../../public/rocket-icon.svg";
import balloonIcon from "../../../public/balloon-icon.svg";
import fireIcon from "../../../public/fire-icon.svg";
import keyIcon from "../../../public/key-icon.svg";
import megaphoneIcon from "../../../public/megaphone-icon.svg";
import coinIcon from "../../../public/coin-icon.svg";
import {
  BUYSNAIL,
  COINGECKO,
  DEXTOOLS,
  ETHERSCAN,
  TOKEN,
} from "@/lib/utils/constants";

export default function Content() {
  const [copySuccess, setCopySuccess] = useState(TOKEN);

  const onCopy = () => {
    navigator.clipboard.writeText(TOKEN);
    setCopySuccess("saved to the clipboard!");
    setTimeout(() => {
      setCopySuccess(TOKEN);
    }, 1000);
  };

  return (
    <article className="flex flex-col w-[260px] h-[390px] sm:w-[537px] sm:h-[320px] lg:w-[850px] lg:h-[480px] items-center gap-4 overflow-y-auto z-20">
      <h2 className="text-sm font-medium text-white text-center">OUR TOKEN</h2>
      <h1 className="text-3xl lg:text-[54px] font-bold lg:leading-[68px] text-white text-center">
        $SNAIL Tokenomics
      </h1>
      <p className="text-sm lg:text-base font-medium text-white  text-center">
        The SnailBrook tokenomics have been carefully designed to promote
        equitable distribution, long-term sustainability, and community growth.
      </p>
      <div className="flex flex-col lg:flex-row w-full gap-9 mt-4">
        <div className="flex flex-col items-center xl:items-start gap-8">
          <div className="flex flex-col w-full items-start justify-center gap-4 px-6 py-10 rounded-[14px] bg-gray-gradient-normal gradinetBorderWithTransparentBg gradinetBorderGreenToPink">
            <h4 className="text-sm font-semibold text-white">
              TOTAL SUPPLY ($SNAIL)
            </h4>
            <h3 className="text-2xl sm:text-5xl font-bold text-white">
              82,373,015,782
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={DEXTOOLS}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-center gap-4 px-4 py-3 rounded-lg bg-gray-gradient-normal"
            >
              <span className="text-sm font-medium text-white">DEXTOOLS</span>
              <Image src={openIcon} alt="open" />
            </Link>
            <Link
              href={ETHERSCAN}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-center gap-4 px-4 py-3 rounded-lg bg-gray-gradient-normal"
            >
              <span className="text-sm font-medium text-white">Etherscan</span>
              <Image src={openIcon} alt="open" />
            </Link>
            <Link
              href={COINGECKO}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-center gap-4 px-4 py-3 rounded-lg bg-gray-gradient-normal"
            >
              <span className="text-sm font-medium text-white">COINGECKO</span>
              <Image src={openIcon} alt="open" />
            </Link>
          </div>
          <div className="flex flex-col items-center xl:items-start justify-center gap-4 mt-4">
            <h5 className="text-sm font-medium text-white">
              TOKEN CONTRACT ADDRESS
            </h5>
            <div
              onClick={onCopy}
              className="flex flex-col sm:flex-row items-center gap-4 cursor-pointer"
            >
              <Image src={copyIcon} alt="copy" />
              <h6 className="text-base font-normal text-white">
                {copySuccess}
              </h6>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center xl:items-start gap-12">
          <div className="flex flex-col sm:flex-row items-start gap-7">
            <div className="p-2 rounded-2xl bg-gray-gradient-normal">
              <Image
                src={rocketIcon}
                alt="rocket"
                className="object-contain "
                sizes="100vw"
                quality={100}
              />
            </div>
            <div className="flex flex-col w-[263px] gap-4">
              <h5 className="text-xl font-bold text-white">Fair Launch</h5>
              <p className="text-sm font-normal text-white">
                The total supply was 100,000,000,000 $SNAIL, from which 80
                billion was fairly launched on the open market, and the rest was
                claimable through Airdrops.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-7">
            <div className="p-2 rounded-2xl bg-gray-gradient-normal">
              <Image
                src={balloonIcon}
                alt="balloon"
                className="object-contain"
                sizes="100vw"
                quality={100}
              />
            </div>
            <div className="flex flex-col w-[263px] gap-4">
              <h5 className="text-xl font-bold text-white">Airdrop</h5>
              <p className="text-sm font-normal text-white">
                The first claimable Airdrop for the top 420 wallets in SHIB,
                Bone, FLOKI, DOGECHAIN, QOM, CAW, TSUKA, wDoge, and SOV provided
                access to over 20,000,000,000 free $SNAIL tokens.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-7">
            <div className="p-2 rounded-2xl bg-gray-gradient-normal">
              <Image
                src={fireIcon}
                alt="fire"
                className="object-contain"
                sizes="100vw"
                quality={100}
              />
            </div>
            <div className="flex flex-col w-[263px] gap-4">
              <h5 className="text-xl font-bold text-white">
                The Great Snail Burn
              </h5>
              <p className="text-sm font-normal text-white">
                The Great Snail Burn was initiated after the Airdrop,
                permanently removing 17.6% of the $SNAIL supply, demonstrating a
                strong commitment to a deflationary path.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 mt-4">
        <h2 className="text-4xl text-white">
          Driving Utility, Delivering Value
        </h2>
        <div className="flex flex-col xl:flex-row gap-10">
          <div className="flex flex-col w-[245px] items-start justify-center gap-6 p-6 rounded-2xl bg-gray-gradient-normal">
            <Image
              src={keyIcon}
              alt="key"
              className="object-contain p-2 rounded-2xl bg-gray-gradient-normal"
              sizes="100vw"
              quality={100}
            />
            <h3 className="text-xl font-bold text-white">Tokenized Access</h3>
            <p className="text-sm font-normal text-white">
              Stake your SNAIL tokens and bam! You&apos;ve got a VIP pass to an
              array of premium features, advanced insights, and more.
            </p>
          </div>
          <div className="flex flex-col w-[245px] items-start justify-center gap-6 p-6 rounded-2xl bg-gray-gradient-normal">
            <Image
              src={megaphoneIcon}
              alt="megaphone"
              className="object-contain p-2 rounded-2xl bg-gray-gradient-normal"
              sizes="100vw"
              quality={100}
            />
            <h3 className="text-xl font-bold text-white">
              Elevate Your Project
            </h3>
            <p className="text-sm font-normal text-white">
              Verified project team? Time to shine! Manage your own page, post
              updates in real-time, enjoy fast listing and extra ad pots for
              that visibility boost.
            </p>
          </div>
          <div className="flex flex-col w-[245px] items-start justify-center gap-6 p-6 rounded-2xl bg-gray-gradient-normal">
            <Image
              src={coinIcon}
              alt="coin"
              className="object-contain p-2 rounded-2xl bg-gray-gradient-normal"
              sizes="100vw"
              quality={100}
            />
            <h3 className="text-xl font-bold text-white">Revenue Sharing</h3>
            <p className="text-sm font-normal text-white">
              Staking SNAIL tokens isn&apos;t just fun, it&apos;s rewarding too!
              Enjoy a portion of the revenue from ads and team-created pages.
            </p>
          </div>
        </div>
        <Link
          href={BUYSNAIL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row justify-center items-center px-8 py-3 lg:px-12 lg:py-5 rounded-[14px] bg-gradient-to-r from-purple-light to-purple-medium"
        >
          <span className="text-xl font-medium text-white">Buy $SNAIL</span>
        </Link>
      </div>
    </article>
  );
}
