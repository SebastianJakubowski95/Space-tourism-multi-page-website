import { useState } from "react";
import { createPortal } from "react-dom";
import classes from "./MainNavigation.module.css";
import CellsBar from "../CellsBar";
import Logo from "../Logo";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { burgerActions } from "../../store/burger";

export default function MainNavigation() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const burgerIsOpen = useSelector((state) => state.menu.isOpen);
  const dispatch = useDispatch();

  const burgerClickHandler = () => {
    dispatch(burgerActions.toggle());
  };

  const notMobileNavBar = (
    <div className={classes.div}>
      <Logo />
      {isDesktop && <hr className={classes.hr} />}
      <CellsBar />
    </div>
  );

  const MobileNavBar = (
    <div className={classes.div}>
      <Logo />
      {burgerIsOpen ? (
        <AiOutlineClose
          className={classes.burgerIcon}
          onClick={burgerClickHandler}
        />
      ) : (
        <CiMenuBurger
          className={classes.burgerIcon}
          onClick={burgerClickHandler}
        />
      )}
    </div>
  );

  const modalOverlay = (
    <div className={classes.modal}>
      <CellsBar />
    </div>
  );

  return (
    <>
      {burgerIsOpen &&
        createPortal(modalOverlay, document.getElementById("modal-menu"))}
      {isMobile ? MobileNavBar : notMobileNavBar}
    </>
  );
}
