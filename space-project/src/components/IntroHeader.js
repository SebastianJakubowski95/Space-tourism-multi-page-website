import classes from "./IntroHeader.module.css";
import { motion } from "framer-motion";
import { animations } from "../animations/animations";

export default function IntroHeader(props) {
  return (
    <motion.div
      className={`${classes.header} row`}
      initial={animations.headingAnimation.initial}
      animate={animations.headingAnimation.animate}
      transition={animations.headingAnimation.transition}>
      <span className={classes.number}>{props.number}</span>
      <span style={{ marginLeft: "2rem" }}>
        <h5 className={classes.text}>{props.text}</h5>
      </span>
    </motion.div>
  );
}
