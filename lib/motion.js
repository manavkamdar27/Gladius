export const EASE = [0.22, 0.9, 0.3, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

export const fadeUpSlow = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: EASE },
  },
};

// Asymmetrical slide from the left, used for editorial columns
export const slideLeft = {
  hidden: { opacity: 0, x: -36 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

export const slideRight = {
  hidden: { opacity: 0, x: 36 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

export const stagger = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

// Masked line reveal for hero typography
export const maskRise = {
  hidden: { y: "110%" },
  show: {
    y: 0,
    transition: { duration: 1, ease: EASE },
  },
};

export const viewportOnce = { once: true, amount: 0.25 };
