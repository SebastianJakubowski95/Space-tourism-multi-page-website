import classes from "./TextTechnology.module.css";
import { motion } from "framer-motion";
import { animations } from "../animations/animations";

export default function TextCrew(props) {
  return (
    <motion.div
      className={classes.div}
      initial={animations.technologyText.initial}
      animate={animations.technologyText.animate}
      transition={animations.technologyText.transition}>
      <h4 className={classes.h4}>THE TERMINOLOGY...</h4>
      <h3 className={classes.h3}>{props.title}</h3>
      <p className={classes.p}>{props.description}</p>
    </motion.div>
  );
}
