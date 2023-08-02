"use client";
import Image from "next/image";
import cardBg from "@/public/card-bg.webp";
import cardMobileBg from "@/public/card-mobile-bg.webp";
import cloudsBg from "@/public/clouds-bg.webp";
import insideBg from "@/public/inside-bg.webp";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Page({ searchParams }: Props) {
  const showModal = searchParams?.modal;

  return (
    <section className="flex flex-col min-h-screen items-center justify-center overflow-hidden">
      <article className="flex flex-col w-[260px] h-[461px] sm:w-[537px] sm:h-[410px] xl:w-[937px] xl:h-[510px] items-center gap-4 xl:gap-[56px] overflow-y-auto z-30"></article>

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
