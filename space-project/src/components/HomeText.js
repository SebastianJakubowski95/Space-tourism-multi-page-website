import { useState } from "react";
import classes from "./HomeText.module.css";
import { motion } from "framer-motion";
import { animations } from "../animations/animations";

export default function HomeText() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  return (
    <motion.div
      className={classes.content}
      initial={animations.homeText.initial}
      animate={animations.homeText.animate}
      transition={animations.homeText.transition}>
      <h5>SO, YOU WANT TO TRAVEL TO</h5>
      {isMobile ? <h2>SPACE</h2> : <h1>SPACE</h1>}
      <p className={classes.paragraph}>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </motion.div>
  );
}
