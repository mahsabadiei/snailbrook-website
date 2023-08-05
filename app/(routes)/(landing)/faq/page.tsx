import Link from "next/link";
import Image from "next/image";
import cardBg from "@/public/card-bg.webp";
import cardMobileBg from "@/public/card-mobile-bg.webp";
import cloudsBg from "@/public/clouds-bg.webp";
import nightBg from "@/public/night-bg.webp";
import insideBg from "@/public/inside-bg.webp";
import Accordion from "./accordion";

const faqList = [
  {
    key: 1,
    question: "Who is the team behind Snailbrook?",
    answer: "Who is the team behind Snailbrook?",
    isOpen: false,
  },
  {
    key: 2,
    question: "What is the team currently working on?",
    answer: "What is the team currently working on?",
    isOpen: false,
  },
  {
    key: 3,
    question: "What is the utility of the SNAIL token?",
    answer: "What is the utility of the SNAIL token?",
    isOpen: false,
  },
  {
    key: 4,
    question: "How was the $SNAIL distribution model?",
    answer: "How was the $SNAIL distribution model?",
    isOpen: false,
  },
  {
    key: 5,
    question: "How do I buy $SNAIL?",
    answer: "How do I buy $SNAIL?",
    isOpen: false,
  },
];

export default function Page() {
  return (
    <section className="flex flex-col min-h-screen items-center justify-center overflow-hidden relative">
      <article className="flex flex-col w-[260px] h-[390px] sm:w-[537px] sm:h-[320px] lg:w-[891px] lg:h-[391px] items-center gap-10 overflow-y-auto z-20">
        <h1 className="text-3xl lg:text-5xl font-bold xl:font-medium lg:leading-[68px] text-white text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-white text-center">
          For any other question, feel free to join our
          <Link href={"./"}>
            <span className="underline">Telegram community. </span>
          </Link>
        </p>

        {faqList?.map((temp) => (
          <Accordion
            question={temp.question}
            answer={temp.answer}
            key={temp.key}
          />
        ))}
      </article>

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
