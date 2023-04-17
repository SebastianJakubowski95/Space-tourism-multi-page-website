import classes from "./Crew.module.css";
import pageClasses from "./pages.module.css";
import { useState } from "react";
import { createPortal } from "react-dom";
import IntroHeader from "../components/IntroHeader";
import TextCrew from "../components/TextCrew";
import { motion } from "framer-motion";
import { animations } from "../animations/animations";
// IMAGES
import crewMemberNo1Webp from "../assets/crew/image-douglas-hurley.webp";
import crewMemberNo1Png from "../assets/crew/image-douglas-hurley.png";
import crewMemberNo2Webp from "../assets/crew/image-mark-shuttleworth.webp";
import crewMemberNo2Png from "../assets/crew/image-mark-shuttleworth.png";
import crewMemberNo3Webp from "../assets/crew/image-victor-glover.webp";
import crewMemberNo3Png from "../assets/crew/image-victor-glover.png";
import crewMemberNo4Webp from "../assets/crew/image-anousheh-ansari.webp";
import crewMemberNo4Png from "../assets/crew/image-anousheh-ansari.png";

export default function Crew() {
  const [activeIndex, setActiveIndex] = useState("1");
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth > 768 && window.innerWidth <= 1280
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const bgStyles = `${pageClasses.bg} ${pageClasses.crew}`;
  const bg = (
    <motion.div
      className={bgStyles}
      initial={animations.bg2.initial}
      animate={animations.bg2.animate}
      transition={animations.bg2.transition}></motion.div>
  );

  function data(activeIndex) {
    switch (activeIndex) {
      case "1":
        return {
          role: "COMMANDER",
          fullName: "DOUGLAS HURLEY",
          description:
            "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
          img: { webp: crewMemberNo1Webp, png: crewMemberNo1Png },
        };
      case "2":
        return {
          role: "MISSION SPECIALIST",
          fullName: "MARK SHUTTLEWORTH",
          description:
            "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
          img: { webp: crewMemberNo2Webp, png: crewMemberNo2Png },
        };
      case "3":
        return {
          role: "PILOT",
          fullName: "VICTOR GLOVER",
          description:
            "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
          img: { webp: crewMemberNo3Webp, png: crewMemberNo3Png },
        };
      case "4":
        return {
          role: "FLIGHT ENGINEER",
          fullName: "ANOUSHEH ANSARI",
          description:
            "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
          img: { webp: crewMemberNo4Webp, png: crewMemberNo4Png },
        };
    }
  }

  function clickHandler(event) {
    setActiveIndex(event.target.name);
    setIsFirstRender(false);
    document.getElementById("pageContent").scrollTo({ top: 0 });
  }

  function CirclesNav() {
    const active = `${classes.circle} ${classes.active}`;
    const notActive = `${classes.circle}`;
    const circleArr = [
      { name: "1" },
      { name: "2" },
      { name: "3" },
      { name: "4" },
    ];
    return (
      <motion.div
        className={classes.navigation}
        initial={isFirstRender ? animations.crewText.initial : null}
        animate={animations.crewText.animate}
        transition={animations.crewText.transition}>
        {circleArr.map((circle, index) => (
          <button
            key={index}
            name={circle.name}
            className={circle.name === activeIndex ? active : notActive}
            onClick={clickHandler}
          />
        ))}
      </motion.div>
    );
  }

  const crewImagePicture = (
    <motion.div
      className={classes.pictureDiv}
      initial={animations.crewImage.initial}
      animate={animations.crewImage.animate}
      transition={animations.crewImage.transition}>
      <picture className={classes.pictureElement}>
        <source
          srcSet={data(activeIndex).img.webp}
          className={classes.crewImg}
        />
        <img
          src={data(activeIndex).img.png}
          className={classes.crewImg}
          alt="crew member image"
        />
      </picture>
      <hr className={classes.hr} />
    </motion.div>
  );

  return (
    <>
      {createPortal(bg, document.getElementById("background"))}
      <section className={`${classes["crew-section"]} relative`}>
        {isTablet && <IntroHeader number="02" text="MEET YOUR CREW" />}
        {isMobile && <IntroHeader number="02" text="MEET YOUR CREW" />}
        {isMobile && crewImagePicture}
        <div className={classes.info}>
          {!isMobile && !isTablet && (
            <IntroHeader number="02" text="MEET YOUR CREW" />
          )}
          <TextCrew
            description={data(activeIndex).description}
            role={data(activeIndex).role}
            fullName={data(activeIndex).fullName}
          />
          <CirclesNav />
        </div>
        {!isMobile && crewImagePicture}
      </section>
    </>
  );
}
