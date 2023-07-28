import Image from "next/image";
import card from "@/public/card.webp";
import cardMobile from "@/public/card-mobile.webp";
import cloudsBg from "@/public/clouds-bg.webp";
import insideBg from "@/public/inside-bg.webp";
import telegramIcon from "@/public/telegram-icon.svg";


export default function Page() {
  return (
    <section className="flex flex-col min-h-screen items-center justify-center overflow-hidden">
      <article className="flex flex-col md:w-[780px] lg:w-[840px] xl:w-[990px] gap-8 lg:gap-[44px] xl:gap-[56px] p-28 text-white z-40">
        <h1 className="text-3xl lg:text-4xl xl:text-[54px] font-bold">Utopia For All</h1>
        <span>
          <p className="text-base xl:text-xl mb-4 xl:mb-5">
            SnailBrook marks the beginning of a new age of community-owned,
            community-driven, and community-ocused crypto.
          </p>
          <p className="text-base xl:text-xl">
            Join the decentralized meme coin project that aims to create the
            ultimate cult community by uniting all meme coins for a common
            cause.
          </p>
        </span>
        <button className="flex flex-row w-[258px] h-[54px] xl:w-[270px] xl:h-[72px] gap-2 justify-center items-center px-9 py-2 xl:px-10 xl:py-3 bg-gradient-to-r from-purple-light to-purple-medium rounded-[48px]">
          <Image alt="download" src={telegramIcon} />
          <p className="text-xl font-medium text-white">Join the memes</p>
        </button>
      </article>
      <Image
        alt="card"
        src={card}
        placeholder="blur"
        className="hidden sm:flex object-contain z-20"
        priority
        quality={100}
        fill
        sizes="100vw"
      />
      <Image
        alt="card"
        src={cardMobile}
        placeholder="blur"
        className="flex sm:hidden object-contain z-20"
        priority
        quality={100}
        fill
        sizes="100vw"
      />
      <Image
        alt="insideBg"
        src={insideBg}
        placeholder="blur"
        className="object-cover"
        priority
        quality={100}
        fill
        sizes="100vw"
      />
      <Image
        alt="cloudsBg"
        src={cloudsBg}
        placeholder="blur"
        className="object-cover -z-10"
        priority
        quality={100}
        fill
        sizes="100vw"
      />
    </section>
  );
}
