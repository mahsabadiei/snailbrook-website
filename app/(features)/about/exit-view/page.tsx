import Image from "next/image";
import Content from "../content";
import cardBg from "@/public/card-bg.webp";
import cardMobileBg from "@/public/card-mobile-bg.webp";

export default function Page() {
  return (
    <section
      className="flex flex-col min-h-screen items-center justify-center overflow-hidden relative"
      style={{
        backgroundImage:
          "radial-gradient(70.71% 70.71% at 50% 50%, #4E65FD 0%, rgba(57, 72, 175, 0.00) 55.00%)",
      }}
    >
      <Content />
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
    </section>
  );
}
