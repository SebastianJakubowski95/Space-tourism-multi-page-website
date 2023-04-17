import { cubicBezier } from "framer-motion";

export const animations = {
  bg: {
    initial: {
      y: "-8vh",
      x: "2vw",
      opacity: 0.2,
      filter: "blur(15px)",
      scale: 1.2,
    },
    animate: {
      y: 0,
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      scale: 1.0,
    },
    transition: {
      x: { duration: 3, type: "tween" },
      y: { duration: 3, type: "tween" },
      opacity: {
        ease: "linear",
        duration: 2,
        stifness: 100,
        type: "spring",
      },
      filter: {
        delay: 1,
        ease: cubicBezier(0.29, 0.45, 0.55, 0.98),
        duration: 5,
        type: "tween",
      },
      scale: { duration: 4, type: "tween" },
    },
  },
  bg2: {
    initial: {
      y: "-2.5vh",
      scale: 1.1,
    },
    animate: {
      y: 0,
      scale: 1,
    },
    transition: {
      y: {
        ease: cubicBezier(0.29, 0.45, 0.55, 0.98),
        duration: 8,
        type: "tween",
      },
      scale: {
        ease: cubicBezier(0.29, 0.45, 0.55, 0.98),
        duration: 8,
        type: "tween",
      },
    },
  },
  exploreBtn: {
    initial: {
      opacity: 0,
      scale: 0.9,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    hover: {
      boxShadow: "0 0 0 80px rgba(255, 255, 255, 0.1)",
      scale: 1.15,
      transition: {
        scale: {
          duration: 1,
          type: "tween",
          ease: cubicBezier(0.23, 0.75, 0.58, 0.89),
        },
        boxShadow: {
          duration: 1,
          type: "tween",
          ease: cubicBezier(0.23, 0.75, 0.58, 0.89),
        },
      },
    },
    transition: {
      opacity: {
        delay: 2.5,
        duration: 2,
        type: "tween",
        ease: cubicBezier(0.84, 0.28, 0.54, 0.48),
      },
      scale: {
        delay: 2.5,
        duration: 3,
        type: "tween",
        ease: cubicBezier(0.23, 0.75, 0.58, 0.89),
      },
    },
  },
  homeText: {
    initial: {
      x: "-10vw",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    transition: {
      x: {
        delay: 1,
        duration: 6,
        type: "tween",
        ease: cubicBezier(0.33, 1, 0.68, 1),
      },
      opacity: {
        delay: 1,
        duration: 4,
        type: "tween",
        ease: cubicBezier(0.42, 0.21, 0.47, 0.97),
      },
    },
  },
  mainNavigation: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      opacity: {
        delay: 1,
        duration: 3,
        type: "tween",
        ease: cubicBezier(0.42, 0.21, 0.47, 0.97),
      },
    },
  },
  destinationText: {
    initial: {
      x: "10vw",
      opacity: 0,
    },
    animate: {
      x: 0,

      opacity: 1,
    },
    transition: {
      x: {
        duration: 3,
        type: "tween",
        ease: cubicBezier(0.33, 1, 0.68, 1),
      },

      opacity: {
        delay: 1,
        duration: 3,
        type: "tween",
        ease: cubicBezier(0.42, 0.21, 0.47, 0.97),
      },
    },
  },
  crewText: {
    initial: {
      y: "10vh",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    transition: {
      y: {
        duration: 3,
        type: "tween",
        ease: cubicBezier(0.33, 1, 0.68, 1),
      },

      opacity: {
        delay: 1,
        duration: 3,
        type: "tween",
        ease: cubicBezier(0.42, 0.21, 0.47, 0.97),
      },
    },
  },
  technologyText: {
    initial: {
      opacity: 0,
      y: "1vh",
    },
    animate: { opacity: 1, y: 0 },
    transition: {
      opacity: {
        delay: 0,
        duration: 3,
        type: "tween",
        ease: cubicBezier(0.42, 0.21, 0.47, 0.97),
      },
      y: {
        delay: 0,
        duration: 3,
        type: "tween",
        ease: cubicBezier(0.33, 1, 0.68, 1),
      },
    },
  },
  crewImage: {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transform: "none",
    },
    transition: {
      y: {
        duration: 3,
        type: "tween",
        ease: cubicBezier(0.33, 1, 0.68, 1),
      },

      opacity: {
        delay: 1,
        duration: 3,
        type: "tween",
        ease: cubicBezier(0.42, 0.21, 0.47, 0.97),
      },
    },
  },
  headingAnimation: {
    initial: {
      opacity: 0,
      x: "-1vw",
    },
    animate: { opacity: 1, x: 0 },
    transition: {
      opacity: {
        delay: 0,
        duration: 3,
        type: "tween",
        ease: cubicBezier(0.42, 0.21, 0.47, 0.97),
      },
      x: {
        delay: 0,
        duration: 3,
        type: "tween",
        ease: cubicBezier(0.33, 1, 0.68, 1),
      },
    },
  },
  planetAnimation: {
    initial: { scale: 0.85, x: "-3vw", y: "3vh", opacity: 0, rotate: 5 },
    animate: { scale: 1, x: 0, y: 0, opacity: 1, rotate: 0 },
    transition: {
      rotate: {
        duration: 5,
        type: "tween",
        ease: cubicBezier(0.26, 0.49, 0.52, 0.93),
      },
      scale: {
        duration: 2,
        type: "tween",
        ease: cubicBezier(0.42, 0.21, 0.47, 0.97),
      },
      x: {
        duration: 5,
        type: "tween",
        ease: cubicBezier(0.26, 0.49, 0.52, 0.93),
      },
      y: {
        duration: 5,
        type: "tween",
        ease: cubicBezier(0.26, 0.49, 0.52, 0.93),
      },

      opacity: {
        delay: 1,
        duration: 2,
        type: "tween",
        ease: cubicBezier(0.18, 0.48, 0.66, 0.93),
      },
    },
  },
};
