import { Variants, cubicBezier } from "framer-motion";

export const simpleVariants: Variants = (shouldStagger: boolean, delay: number = 0) => ({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: shouldStagger ? 0.15 : 0,
      delay: delay,
      delayChildren: delay,
    }
  }
});

export const paragraphVariants: Variants = (delay: number) => ({
  hidden: {
    y: -20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 9,
      stiffness: 100,
      delay: delay,
    }
  },
});

export const bounceLetterVariants: Variants = {
  hidden: {
    y: 0,
    opacity: 0
  },
  visible: {
    y: [60, 10, -100, 0],
    opacity: 1,
    transition: {
      type: "spring",
      damping: 5,
      stiffness: 100,
    },
  },
};

export const iconVariants: Variants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 9,
      stiffness: 100,
    }
  },
};

export const imageVariants: Variants = (delay: number) => ({
  hidden: {
    x: 100,
    scale: 0.9,
    opacity: 0,
  },
  visible: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 2,
      delay: delay
    }
  },
});

export const lineVariants: Variants = (delay: number) => ({
  hidden: {
    clipPath: `inset(100% 0 0 0)`,
    opacity: 0,
  },
  visible: {
    clipPath: `inset(0 0 0 0)`,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    }
  },
});

export const skillCardVariants: Variants = (delay: number) => ({
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeIn",
      delay: delay,
    }
  },
  hover: {
    scale: 1.2,
    rotate: Math.random() * (10 + 10) - 10,
    zIndex: 100,
  }
});