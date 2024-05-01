import Image from "next/image";
import Link from "next/link";
import Content from "./content";
import cardBg from "../../../public/card-bg.webp";
import cardMobileBg from "../../../public/card-mobile-bg.webp";
import cloudsBg from "../../../public/clouds-bg.webp";
import nightBg from "../../../public/night-bg.webp";
import insideBg from "../../../public/inside-bg.webp";

export default function Page() {
  return (
    <section className="flex flex-col min-h-screen items-center justify-center overflow-hidden relative">
      <Content />
      <Link
        href="tokenomics/exit-view"
        className="m-auto absolute bottom-10 z-20"
      >
        <span className="text-xl font-bold text-white">
          Go to to exit room view
        </span>
      </Link>
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
      <picture>
        <source srcSet={nightBg.src} media="(prefers-color-scheme: dark)" />
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
      </picture>
    </section>
  );
}
