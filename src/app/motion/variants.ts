import type { Variants, Transition } from "motion/react";

export const snappySpring: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};

export const bouncySpring: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};

export const gentleEase: Transition = {
  duration: 0.65,
  ease: [0.16, 1, 0.3, 1],
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0.05): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const buttonPressVariants = {
  hover: { scale: 1.03, y: -2 },
  tap: { scale: 0.97, y: 0 },
};

