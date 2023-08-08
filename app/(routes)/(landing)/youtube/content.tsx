import Image from "next/image";
import Link from "next/link";
import Carousel from "./carousel";
import { SUBSCRIBE } from "@/app/shared/constants";
import playIcon from "@/public/play-icon.svg";


export type Video = {
  id: string;
  src: string;
  title?: string;
};

const videoList: Video[] = [
  {
    id: "1",
    src: "https://www.youtube.com/watch?v=DRZPX8EyQl0",
    title: "🌕 SnailBrook Episode 5: Moonbound with Legends! 🚀",
  },
  {
    id: "2",
    src: "https://www.youtube.com/watch?v=GczvaZVQKhU",
    title: "SNAILBROOK DEFEATS SLIMY SAM - 🐌🚀CRYPTO BULL MARKET🐌🚀",
  },
  {
    id: "3",
    src: "https://www.youtube.com/watch?v=nnJU3rPdMKQ&t=2s",
    title: "SNAILBROOK - 🐌STAYINBROKE TO THE UTOPIA SNAILBROOK🐌🚀",
  },
  {
    id: "4",
    src: "https://www.youtube.com/watch?v=PoQDo_OXjV0",
    title: "SNAILBROOK IS COMING ASIA🐌💫",
  },
  {
    id: "5",
    src: "https://www.youtube.com/watch?v=dBCQRBnUk9o",
    title: "Snailbrook - $6 MILLION BURN IS LIVE🔥",
  },
  {
    id: "6",
    src: "https://www.youtube.com/watch?v=7G17fyR6dek",
    title: "SnailBrook - Finn's Salvation",
  },
  {
    id: "7",
    src: "https://www.youtube.com/watch?v=-RtVvUNFH40",
    title: "Snailbrook - United Meme Dance Party",
  },
  {
    id: "8",
    src: "https://www.youtube.com/watch?v=EuNhGEOjJME",
    title: "Snailbrook - Fly Me to The Moon; Let me Play Among The Stars",
  },
];

export default function Content() {
  return (
    <article className="flex flex-col w-[260px] h-[390px] sm:w-[537px] sm:h-[320px] lg:w-[850px] lg:h-[480px] gap-8 overflow-y-auto z-20">
      <h1 className="text-3xl lg:text-[54px] font-medium lg:leading-[68px] text-white text-center lg:text-start">
        Latest from YouTube
      </h1>
      <div className="flex flex-col lg:flex-row w-full items-center justify-center lg:justify-between">
        <p className="hidden lg:flex text-base lg:text-xl font-normal text-white">
          Grab a front row seat to witness the epicness unfold, and
          <br /> join Finn on thrilling adventures by subscribing to our
          <br /> YouTube channel.
        </p>
        <Link
          href={SUBSCRIBE}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row justify-center items-center gap-3 px-10 py-4 rounded-[14px] bg-gradient-to-r from-purple-light to-purple-medium"
        >
          <Image src={playIcon} alt="play" />
          <span className="text-sm font-medium text-white">Subscribe</span>
        </Link>
      </div>
      <Carousel list={videoList} />
    </article>
  );
}
