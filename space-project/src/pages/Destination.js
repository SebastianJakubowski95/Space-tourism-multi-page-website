import React from "react";
import classes from "./pages.module.css";
import styles from "./Destination.module.css";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import ImagePlanet from "../components/ImagePlanet";
import TextDestination from "../components/TextDestination";
import { motion } from "framer-motion";
import { animations } from "../animations/animations";

// IMAGES OF PLANETS
import moonWebp from "../assets/destination/image-moon.webp";
import moonPng from "../assets/destination/image-moon.png";
import marsWebp from "../assets/destination/image-mars.webp";
import marsPng from "../assets/destination/image-mars.png";
import europaWebp from "../assets/destination/image-europa.webp";
import europaPng from "../assets/destination/image-europa.webp";
import titanWebp from "../assets/destination/image-titan.webp";
import titanPng from "../assets/destination/image-titan.png";

export default function Destination() {
  const bgStyles = `${classes.bg} ${classes.destination}`;
  const bg = (
    <motion.div
      className={bgStyles}
      initial={animations.bg2.initial}
      animate={animations.bg2.animate}
      transition={animations.bg2.transition}></motion.div>
  );
  const planetName = useSelector((store) => store.planetNavigation.indexName);
  const planet = (planetName) => {
    switch (planetName) {
      case "MOON":
        return {
          images: {
            webp: moonWebp,
            png: moonPng,
          },
          description:
            "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
          data: {
            distance: "384,400 KM",
            travelTime: "3 DAYS",
          },
        };
      // break;
      case "MARS":
        return {
          images: {
            webp: marsWebp,
            png: marsPng,
          },
          description:
            "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
          data: {
            distance: "225 MIL. KM",
            travelTime: "9 MONTHS",
          },
        };
      // break;
      case "EUROPA":
        return {
          images: {
            webp: europaWebp,
            png: europaPng,
          },
          description:
            "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
          data: {
            distance: "628 MIL. KM",
            travelTime: "3 YEARS",
          },
        };
      // break;
      case "TITAN":
        return {
          images: {
            webp: titanWebp,
            png: titanPng,
          },
          description:
            "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
          data: {
            distance: "1.6 BIL. KM",
            travelTime: "7 YEARS",
          },
        };
      // break;
    }
  };

  const sectionClasses = `relative row ${styles.destinationSection}`;

  return (
    <>
      {createPortal(bg, document.getElementById("background"))}
      <section className={sectionClasses}>
        <ImagePlanet planetImg={planet(planetName).images} />
        <TextDestination planetText={planet(planetName)} />
      </section>
    </>
  );
}
