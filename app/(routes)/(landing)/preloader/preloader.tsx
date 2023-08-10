"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useIsPresent } from "framer-motion";
import { FramerMotionWrapper } from "@/app/shared/components/framer-motion-wrapper/framer-motion-wrapper";
import snail from "@/public/snail-to-right-icon.svg";
import wave from "@/public/wave.svg";
import skyBg from "@/public/sky-bg.webp";
import spaceship from "@/public/spaceship.webp";

export default function Preloader() {
  const [showSky, setShowSky] = useState(false);
  const [showWave, setShowWave] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const isPresent = useIsPresent();

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((v) => {
        const newValue = v + 10;
        if (newValue === 100) {
          clearInterval(interval);
          setShowWave(true);
        }
        return newValue;
      });
    }, 1000);
  }, []);

  return (
    <FramerMotionWrapper>
      <section className="flex flex-col min-h-screen w-full items-center justify-center overflow-hidden relative z-40 bg-white">
        <div className="relative">
          <motion.div
            key="snail"
            initial="start"
            animate="finish"
            exit="finish"
            variants={{
              start: { x: -1200 },
              finish: { x: 0 },
            }}
            transition={{
              duration: 10,
              ease: [0.2, 0.62, 0.23, 0.2],
            }}
            className="absolute top-[-38px] right-4"
          >
            <Image src={snail} alt="snail" sizes="100vw" quality={100} />
          </motion.div>
          <h1 className="hidden sm:block text-[68px] font-bold text-center m-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-light to-purple-medium">
            Start your journey in to the snailbrook
          </h1>
          <h1 className="block sm:hidden text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-light to-purple-medium">
            Start your journey in to the snailbrook
          </h1>
          <h3 className="text-xl font-semibold text-center text-purple-gradiant-light">{`${percentage}%`}</h3>
        </div>
        {showWave ? (
          <div
            onClick={() => setShowSky(true)}
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            <div className="h-4 w-0.5 absolute bottom-4 lg:bottom-14 bg-white" />
            <div className="down absolute bottom-4 lg:bottom-14" />
            <h2 className="hidden lg:block lg:text-lg xl:text-3xl font-bold text-white absolute bottom-4">
              Enter the world
            </h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5, ease: "circOut" },
              }}
              exit={{
                opacity: 1,
                transition: { duration: 0.5, ease: "circIn" },
              }}
              style={{ originY: isPresent ? 1 : 0 }}
            >
              <Image
                src={wave}
                alt="wave"
                className="w-full object-cover absolute left-0 right-0 bottom-0 -z-10"
                priority
                quality={100}
                sizes="100vw"
              />
            </motion.div>
          </div>
        ) : null}

        {showSky ? (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{
              scaleY: 1,
              transition: { duration: 0.5, ease: "circOut" },
            }}
            exit={{ scaleY: 1, transition: { duration: 0.5, ease: "circIn" } }}
            style={{ originY: isPresent ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-r from-purple-light to-purple-medium"
          />
        ) : null}

        {showSky ? (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{
              scaleY: 1,
              transition: { duration: 1, ease: "circOut", delay: 2 },
            }}
            exit={{ scaleY: 1, transition: { duration: 0.5, ease: "circIn" } }}
            style={{ originY: isPresent ? 1 : 0 }}
            className="absolute inset-0"
          >
            <Image
              src={skyBg}
              alt="skyBg"
              className="object-cover"
              placeholder="blur"
              priority
              quality={100}
              fill
              sizes="100vw"
            />
          </motion.div>
        ) : null}

        {showSky ? (
          <>
            <h1 className="text-[44px] font-bold text-white text-center z-50">
              The utopia of the{" "}
            </h1>
            <h2 className="text-[68px] font-bold text-white text-center z-50">
              FUTURE
            </h2>
          </>
        ) : null}

        {showSky ? (
          <motion.div
            key="spaceship"
            initial="start"
            animate="finish"
            exit="finish"
            variants={{
              start: { x: -1200, y: 0, rotate: 38 },
              finish: { x: 0, y: -400, rotate: 0 },
            }}
            transition={{
              duration: 5,
              ease: [0.2, 0.62, 0.23, 0.2],
            }}
          >
            <Link href="./home">
              <Image
                src={spaceship}
                alt="spaceship"
                className="w-[178px] h-[184px] object-contain z-50"
                placeholder="blur"
                priority
                quality={100}
                sizes="100vw"
              />
            </Link>
          </motion.div>
        ) : null}
      </section>
    </FramerMotionWrapper>
  );
}
