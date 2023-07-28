import Image from "next/image";
import card from "@/public/card.webp";
import cardMobile from "@/public/card-mobile.webp";
import cloudsBg from "@/public/clouds-bg.webp";
import insideBg from "@/public/inside-bg.webp";

export default function Page() {
  return (
    <section className="flex flex-col min-h-screen items-center justify-center overflow-hidden">
      <article className="flex flex-col md:w-[780px] lg:w-[840px] xl:w-[990px] gap-8 lg:gap-[44px] xl:gap-[56px] p-28 text-white z-40"></article>
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
