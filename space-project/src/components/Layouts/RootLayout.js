import { useRef, useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { burgerActions } from "../../store/burger";
import MainNavigation from "../UI/MainNavigation";
import classes from "./RootLayout.module.css";
import { motion } from "framer-motion";
import { animations } from "../../animations/animations";

export default function RootLayout() {
  const dispatch = useDispatch();
  const isBurgerOpen = useSelector((state) => state.menu.isOpen);
  const content = useRef();
  const location = useLocation();
  const clickHandler = () => {
    if (isBurgerOpen) {
      dispatch(burgerActions.close());
    }
  };

  useEffect(() => {
    content.current.scrollTo({ top: 0 });
  }, [location]);

  return (
    <>
      <motion.div
        initial={animations.mainNavigation.initial}
        animate={animations.mainNavigation.animate}
        transition={animations.mainNavigation.transition}>
        <MainNavigation />
      </motion.div>

      <div
        id="pageContent"
        ref={content}
        className={classes.content}
        onClick={clickHandler}>
        <Outlet />
      </div>
    </>
  );
}
