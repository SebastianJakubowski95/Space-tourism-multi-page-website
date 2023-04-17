import classes from "./DotsButtons.module.css";
import { motion } from "framer-motion";
import { animations } from "../animations/animations";

export default function DotsButtons(props) {
  const dotsButtonsArr = [{ nr: "1" }, { nr: "2" }, { nr: "3" }];
  const dotActive = `${classes.dot} ${classes.active}`;
  const dotNotActive = `${classes.dot}`;
  return (
    <motion.div
      className={classes.dotsDiv}
      initial={animations.technologyText.initial}
      animate={animations.technologyText.animate}
      transition={animations.technologyText.transition}>
      {dotsButtonsArr.map((dot, index) => (
        <button
          type="button"
          name={dot.nr}
          key={index}
          className={dot.nr === props.currentIndex ? dotActive : dotNotActive}
          onClick={props.clickHandler}>
          {dot.nr}
        </button>
      ))}
    </motion.div>
  );
}
