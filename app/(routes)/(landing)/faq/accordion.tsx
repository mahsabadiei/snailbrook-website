"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FramerMotionWrapper } from "@/app/shared/components/framer-motion-wrapper/framer-motion-wrapper";
import arrowRightIcon from "@/public/arrow-right-icon.svg";
import arrowDownIcon from "@/public/arrow-down-icon.svg";

type AccordionProps = {
  question: string;
  answer: string;
};

const Accordion = ({ question, answer }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FramerMotionWrapper>
      <motion.div
        key="question"
        className="flex flex-col w-[260px] lg:w-[691px] items-start justify-center p-6 rounded-[14px] border-2 border-blue-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div className="flex flex-row w-full justify-between">
          <motion.p className="text-xl font-bold text-white">
            {question}
          </motion.p>
          {!isOpen ? (
            <Image src={arrowRightIcon} alt="arrow" />
          ) : (
            <Image src={arrowDownIcon} alt="arrow" />
          )}
        </motion.div>
        {isOpen && (
          <motion.div
            className="flex flex-row"
            key="answer"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.p className="text-xl font-bold text-white mt-4">
              {answer}
            </motion.p>
          </motion.div>
        )}
      </motion.div>
    </FramerMotionWrapper>
  );
};

export default Accordion;
