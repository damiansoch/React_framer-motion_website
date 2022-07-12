import { motion } from "framer-motion";
import Deals from "../Deals";
import "../styles/home.scss";
import { useState } from "react";

import bahamas from "./assets/bahamas.jpg";
import haiti from "./assets/dominican_republic.jpg";
import dubai from "./assets/dubai.jpg";
import las_vegas from "./assets/las_vegas.jpg";
import React from "react";

const Home = () => {
  //
  const images = [
    { image: bahamas, title: "Bahamas" },
    { image: haiti, title: "Haiti" },
    { image: dubai, title: "Dubai" },
    { image: las_vegas, title: "Las Vegas" },
  ];
  const [picture, setPicture] = useState(bahamas);

  const coverVariants = {
    start: {
      opacity: "100%",
    },
    end: {
      opacity: "15%",
      transition: {
        duration: 2,
      },
    },
  };

  const h1Variant = {
    first: {
      x: -1000,
    },
    second: {
      x: 0,
      transition: {
        stiffness: 60,
        type: "spring",
        delay: 1,
      },
    },
  };

  const spanVariant = {
    one: {
      scale: 10,
      opacity: 0,
    },
    two: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 2,
        delay: 2,
      },
    },
  };
  return (
    <>
      <div id="home">
        <motion.h1
          className="home_h1"
          variants={h1Variant}
          initial="first"
          animate="second"
        >
          Travel <br />
        </motion.h1>
        <motion.span variants={spanVariant} initial="one" animate="two">
          HUB
        </motion.span>
        <Deals setPicture={setPicture} images={images} />
      </div>
      <motion.div
        id="homeCover"
        variants={coverVariants}
        initial="start"
        animate="end"
      ></motion.div>
    </>
  );
};
export default Home;
