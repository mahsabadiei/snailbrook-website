import Image from "next/image";
import Link from "next/link";
import cardBg from "@/public/card-bg.webp";
import cardMobileBg from "@/public/card-mobile-bg.webp";
import cloudsBg from "@/public/clouds-bg.webp";
import insideBg from "@/public/inside-bg.webp";
import openIcon from "@/public/open-icon.svg";
import copyIcon from "@/public/copy-icon.svg";
import rocket from "@/public/rocket.webp";
import balloon from "@/public/balloon.webp";

export default function Page() {
  return (
    <section className="flex flex-col min-h-screen items-center justify-center overflow-hidden relative">
      <article className="flex flex-col w-[260px] h-[441px] sm:w-[537px] sm:h-[320px] xl:w-[937px] xl:h-[510px] items-center gap-4 xl:gap-[56px] overflow-y-auto z-30">
        <h2 className="text-sm font-medium text-white text-center">
          OUR TOKEN
        </h2>
        <h1 className="text-3xl xl:text-[56px] font-bold text-white text-center">
          $SNAIL Tokenomics
        </h1>
        <p className="text-sm xl:text-base font-medium text-white  text-center">
          The SnailBrook tokenomics have been carefully designed to promote
          equitable distribution, long-term sustainability, and community
          growth.
        </p>
        <div className="flex flex-col xl:flex-row w-full gap-9">
          <div className="flex flex-col items-center xl:items-start gap-8">
            <div className="flex flex-col w-full items-start justify-center gap-4 px-6 py-10 rounded-[14px] border-2 border-blue-medium">
              <h4 className="text-sm font-semibold text-white">
                TOTAL SUPPLY ($SNAIL)
              </h4>
              <h3 className="text-2xl sm:text-5xl font-bold text-white">
                82,373,015,782
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href=""
                className="flex flex-row items-center justify-center gap-4 px-4 py-3 rounded-lg border border-blue-light"
              >
                <span className="text-sm font-medium text-white">DEXTOOLS</span>
                <Image src={openIcon} alt="open" />
              </Link>
              <Link
                href=""
                className="flex flex-row items-center justify-center gap-4 px-4 py-3 rounded-lg border border-blue-light"
              >
                <span className="text-sm font-medium text-white">
                  Etherscan
                </span>
                <Image src={openIcon} alt="open" />
              </Link>
              <Link
                href=""
                className="flex flex-row items-center justify-center gap-4 px-4 py-3 rounded-lg border border-blue-light"
              >
                <span className="text-sm font-medium text-white">
                  COINGECKO
                </span>
                <Image src={openIcon} alt="open" />
              </Link>
            </div>
            <div className="flex flex-col items-center xl:items-start justify-center gap-4 mt-4">
              <h5 className="text-sm font-medium text-white">
                TOKEN CONTRACT ADDRESS
              </h5>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Image src={copyIcon} alt="copy" />
                <h6 className="text-base font-normal text-white">
                  0x6bc40d4099f9057b23af309c08d935b890d7adc0
                </h6>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center xl:items-start gap-12">
            <div className="flex flex-row items-start gap-7">
              <Image
                src={rocket}
                alt="rocket"
                className="object-contain"
                width={64}
                height={64}
                sizes="100vw"
                quality={100}
              />
              <div className="flex flex-col w-[263px] gap-4">
                <h5 className="text-xl font-bold text-white">Fair Launch</h5>
                <p className="text-sm font-normal text-white">
                  The total supply was 100,000,000,000 $SNAIL, from which 80
                  billion was fairly launched on the open market, and the rest
                  was claimable through Airdrops.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start gap-7">
              <Image
                src={balloon}
                alt="balloon"
                className="object-contain"
                width={64}
                height={64}
                sizes="100vw"
                quality={100}
              />
              <div className="flex flex-col w-[263px] gap-4">
                <h5 className="text-xl font-bold text-white">Airdrop</h5>
                <p className="text-sm font-normal text-white">
                  The first claimable Airdrop for the top 420 wallets in SHIB,
                  Bone, FLOKI, DOGECHAIN, QOM, CAW, TSUKA, wDoge, and SOV
                  provided access to over 20,000,000,000 free $SNAIL tokens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

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
