import classes from "./TextCrew.module.css";
import { motion } from "framer-motion";
import { animations } from "../animations/animations";

export default function TextCrew(props) {
  return (
    <motion.div
      className={classes.div}
      initial={animations.crewText.initial}
      animate={animations.crewText.animate}
      transition={animations.crewText.transition}>
      <h4 className={classes.h4}>{props.role}</h4>
      <h3 className={classes.h3}>{props.fullName}</h3>
      <p className={classes.p}>{props.description}</p>
    </motion.div>
  );
}
