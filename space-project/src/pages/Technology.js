import pageClasses from "./pages.module.css";
import classes from "./Technology.module.css";
import { useState } from "react";
import { createPortal } from "react-dom";
import IntroHeader from "../components/IntroHeader";
import TextTechnology from "../components/TextTechnology";

//IMAGES
import launchVehicleLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import launchVehiclePortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceportLandscape from "../assets/technology/image-spaceport-landscape.jpg";
import spaceportPortrait from "../assets/technology/image-spaceport-portrait.jpg";
import spaceCapsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg";
import spaceCapsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg";
import DotsButtons from "../components/DotsButtons";

export default function Technology() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1280);
  const [currentIndex, setCurrentIndex] = useState("1");
  const bgStyles = `${pageClasses.bg} ${pageClasses.technology}`;
  const bg = <div className={bgStyles} />;

  function clickHandler(event) {
    setCurrentIndex(event.target.name);
  }

  function data(currentIndex) {
    switch (currentIndex) {
      case "1":
        return {
          title: "LAUNCH VEHICLE",
          description:
            "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
          img: {
            landscape: launchVehicleLandscape,
            portrait: launchVehiclePortrait,
          },
        };
      case "2":
        return {
          title: "SPACEPORT",
          description:
            "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
          img: {
            landscape: spaceportLandscape,
            portrait: spaceportPortrait,
          },
        };
      case "3":
        return {
          title: "SPACE CAPSULE",
          description:
            "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
          img: {
            landscape: spaceCapsuleLandscape,
            portrait: spaceCapsulePortrait,
          },
        };
    }
  }

  const desktopImg = (
    <img
      src={data(currentIndex).img.portrait}
      className={classes.techImg}
      alt="crew member image"
    />
  );

  const tabletNMobileImg = (
    <img
      src={data(currentIndex).img.landscape}
      className={classes.techImg}
      alt="crew member image"
    />
  );

  return (
    <>
      {createPortal(bg, document.getElementById("background"))}
      <main className={classes.main}>
        <section className={classes.container01}>
          <div className={classes.headerDiv}>
            <IntroHeader number="03" text="SPACE LAUNCH 101" />
          </div>
          {!isDesktop && tabletNMobileImg}
          <div className={classes.container02}>
            <DotsButtons
              clickHandler={clickHandler}
              currentIndex={currentIndex}
            />
            <TextTechnology
              title={data(currentIndex).title}
              description={data(currentIndex).description}
            />
          </div>
        </section>
        {isDesktop && desktopImg}
      </main>
    </>
  );
}
