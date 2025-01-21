"use client";

import { motion, AnimatePresence } from "motion/react";

export const FramerMotionWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <>
    <AnimatePresence>
      <motion.div>{children}</motion.div>
    </AnimatePresence>
  </>
);
