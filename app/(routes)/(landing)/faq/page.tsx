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
    id: 1,
    question: `Who is the team behind Snailbrook?`,
    answer: `The SnailBrook team is a decentralized group of individuals who share a passion for memes and cryptocurrencies. Our founder, Finn, is a visionary entrepreneur who was once behind the veil and believes in change, believes in the power of unity and believes in open collaboration. Together, we are committed to building the ultimate meme coin utopia and fostering a perpetual, autonomous community.`,
    isOpen: false,
  },
  {
    id: 2,
    question: `What is the team currently working on?`,
    answer: `Our dedicated team is hard at work building the SnailBrook platform. We're focused on creating an enhanced, interactive, and decentralized cryptocurrency data platform. For more details about the platform and its features, we invite you to explore the Platform section of our webpage, or download our litepaper. Get ready for a game-changing experience in the world of crypto!`,
    isOpen: false,
  },
  {
    id: 3,
    question: `What is the utility of the SNAIL token?`,
    answer: `The SNAIL token holds tremendous utility within the SnailBrook platform. By staking SNAIL tokens, users can access different tiers of benefits, including premium features and insights. Additionally, SNAIL token stakers receive a portion of the platform's revenue, generated through advertisements and team-created pages. You can get more information in the Tokenomics section.`,
    isOpen: false,
  },
  {
    id: 4,
    question: `How was the $SNAIL distribution model?`,
    answer: `The total supply was 100,000,000,000 $SNAIL, and the distribution model consisted of a huge Airdrop to unite numerous meme coin communities. The first Airdrop initiated a claimable airdrop for the top 420 wallets in SHIB, Bone, FLOKI, DOGECHAIN, QOM, CAW, TSUKA, wDoge, and SOV, giving 3780 wallets access to over 10,000,000,000 free $SNAIL. A Burn event was initiated after the Airdrop, permanently removing 17.6% of the $SNAIL supply.The other 80 billion was Fairly Launched on the open market.`,
    isOpen: false,
  },
  {
    id: 5,
    question: `How do I buy $SNAIL?`,
    answer: `Buying $SNAIL is a breeze! You can acquire $SNAIL tokens through Uniswap. Simply visit the Uniswap platform, connect your wallet, and search for $SNAIL in the token list; or simply click here! From there, you can complete your purchase and become a proud holder.`,
    isOpen: false,
  },
  {
    id: 6,
    question: `What is the official token contract address of $SNAIL?`,
    answer: `You can findsee our official contract in Etherscan: 0x6bc4...adc0. Always copy paste it, but you know the drill already.`,
    isOpen: false,
  },
  {
    key: 7,
    question: `What is $SNAIL's total supply?`,
    answer: `82,373,015,782 (82.4 billion) $SNAIL tokens.`,
    isOpen: false,
  },
  {
    key: 8,
    question: `How can I join the SnailBrook community and stay updated?`,
    answer: `Joining the SnailBrook community is as easy as joining our Telegram group! Feel free to ask questions, engage in discussions, and connect with like-minded individuals. Our Telegram community is the perfect place to stay updated on platform updates, new features, and exciting opportunities in the crypto world. Alternatively, you can also stay updated through any of our official social media channels.`,
    isOpen: false,
  },
  {
    key: 9,
    question: `Who is Governor Finn?`,
    answer: `Behold, the tale of Governor Finn,
    A visionary entrepreneur who resides within.
    In the realm of decentralized meme Utopia,
    He orchestrates change with utmost euphoria.
    
    Once shrouded behind the veil so deep,
    Now emerged, his presence to keep.
    Believer in unity, collaboration, and jest,
    He leads us on a memetic conquest.
    
    With wit and charm, his words take flight,
    Guiding us towards a future so bright.
    In the land of laughter, he claims his throne,
    A maestro of memes, he never walks alone.
    
    To experience the epic and funny stride,
    Follow him on Twitter, don't let it slide.
    In this decentralized Utopia, we thrive,
    Led by a leader who makes memes unite.`,
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
          {`For any other question, feel free to join our `}
          <Link
            href="https://t.me/Snailbrook_Entry"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="underline">Telegram community.</span>
          </Link>
        </p>

        {faqList?.map((temp) => (
          <Accordion
            question={temp.question}
            answer={temp.answer}
            key={temp.id}
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
