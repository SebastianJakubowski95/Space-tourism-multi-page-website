import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import classes from "./pages.module.css";
import { motion } from "framer-motion";
import { animations } from "../animations/animations";
import HomeText from "../components/HomeText";
import ButtonHome from "../components/UI/ButtonHome";

export default function Home() {
  const bgStyles = `${classes.bg} ${classes.home}`;
  const bg = (
    <motion.div
      className={bgStyles}
      initial={animations.bg.initial}
      animate={animations.bg.animate}
      transition={animations.bg.transition}
    />
  );
  return (
    <>
      {createPortal(bg, document.getElementById("background"))}
      <section style={{ marginBottom: "250px" }} className={"relative"}>
        <HomeText />
        <ButtonHome />
      </section>
    </>
  );
}
