import Cell from "./Cell";
import classes from "./CellsBar.module.css";

export default function CellsBar() {
  return (
    <div className={classes.div}>
      <nav className={classes.items}>
        <Cell number="00" text="HOME" to={"/"} type="mainNavigation" />
        <Cell
          number="01"
          text="DESTINATION"
          to={"/destination"}
          type="mainNavigation"
        />
        <Cell number="02" text="CREW" to={"/crew"} type="mainNavigation" />
        <Cell
          number="03"
          text="TECHNOLOGY"
          to={"/technology"}
          type="mainNavigation"
        />
      </nav>
      <div className={classes.blur} />
    </div>
  );
}
