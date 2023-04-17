import classes from "./ButtonHome.module.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { animations } from "../../animations/animations";

export default function ButtonHome() {
  return (
    <motion.div
      whileHover={animations.exploreBtn.hover}
      initial={animations.exploreBtn.initial}
      animate={animations.exploreBtn.animate}
      transition={animations.exploreBtn.transition}
      className={classes.btn}>
      <NavLink to={"/destination"} end className={classes.link}>
        <h4 style={{ height: "fit-content" }}>EXPLORE</h4>
      </NavLink>
    </motion.div>
  );
}
