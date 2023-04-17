import classes from "./TextDestination.module.css";
import { useSelector } from "react-redux";
import Cell from "./Cell";
import { motion } from "framer-motion";
import { animations } from "../animations/animations";

export default function TextDestination(props) {
  const currentPlanet = useSelector(
    (store) => store.planetNavigation.indexName
  );

  return (
    <motion.div
      className={classes.div}
      initial={animations.destinationText.initial}
      animate={animations.destinationText.animate}
      transition={animations.destinationText.transition}>
      <nav className={classes.nav}>
        <Cell text="MOON" type="planetNavigation" />
        <Cell text="MARS" type="planetNavigation" />
        <Cell text="EUROPA" type="planetNavigation" />
        <Cell text="TITAN" type="planetNavigation" />
      </nav>
      <h1 className={classes.planetName} style={{ margin: "25px 0" }}>
        {currentPlanet}
      </h1>
      <p className={classes.description}>{props.planetText.description}</p>
      <hr className={classes.hr} />
      <div className={classes.data}>
        <div className={classes.dataCell}>
          <p style={{ margin: "0 0 10px" }} className="subheading2">
            AVG. DISTANCE
          </p>
          <p className="subheading1">{props.planetText.data.distance}</p>
        </div>
        <div className={classes.dataCell}>
          <p style={{ margin: "0 0 10px" }} className="subheading2">
            EST. TRAVEL TIME
          </p>
          <p className="subheading1">{props.planetText.data.travelTime}</p>
        </div>
      </div>
    </motion.div>
  );
}
