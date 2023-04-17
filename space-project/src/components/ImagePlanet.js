import classes from "./ImagePlanet.module.css";
import IntroHeader from "./IntroHeader";
import { motion } from "framer-motion";
import { animations } from "../animations/animations";

export default function ImagePlanet(props) {
  return (
    <div className={classes.div}>
      <IntroHeader number="01" text="PICK YOUR DESTINATION" />
      <motion.picture
        initial={animations.planetAnimation.initial}
        animate={animations.planetAnimation.animate}
        transition={animations.planetAnimation.transition}>
        <source srcSet={props.planetImg.webp} className={classes.picture} />
        <img
          src={props.planetImg.png}
          className={classes.picture}
          alt="planet image"
        />
      </motion.picture>
    </div>
  );
}
