import classes from "./Cell.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { burgerActions } from "../store/burger";
import { planetNavigationActions } from "../store/planetNavigation";

export default function Cell(props) {
  const [isTablet, setIsTablet] = useState(
    window.innerWidth > 768 && window.innerWidth <= 1280
  );
  const cell = `${classes.cell} nav-text`;
  const dispatch = useDispatch();
  const planetSelected = useSelector(
    (store) => store.planetNavigation.indexName
  );
  const clickHandler = () => {
    // dispatch(planetNavigationActions.switch("MOON")); //back to default
    dispatch(burgerActions.close());
  };
  const clickHandlerPlanet = () => {
    dispatch(planetNavigationActions.switch(props.text));
    // document.getElementById("pageContent").scrollTo({ top: 0 });
  };

  if (props.type === "mainNavigation") {
    return (
      <NavLink
        to={props.to}
        end
        style={{ textDecoration: "none" }}
        onClick={clickHandler}>
        {({ isActive, isPending }) => (
          <div className={isActive ? `${classes.active} ${cell}` : cell}>
            {!isTablet && (
              <span style={{ fontWeight: 600 }}>{props.number}</span>
            )}
            <span>{props.text}</span>
          </div>
        )}
      </NavLink>
    );
  } else if (props.type === "planetNavigation") {
    const cellPlanetNotActive = `${classes["cell-planet"]} nav-text`;
    const cellPlanetActive = `${classes["cell-planet"]} ${classes.active} nav-text`;
    return (
      <button
        type="button"
        name={props.text}
        onClick={clickHandlerPlanet}
        className={
          props.text === planetSelected ? cellPlanetActive : cellPlanetNotActive
        }>
        <span>{props.text}</span>
      </button>
    );
  }
}
