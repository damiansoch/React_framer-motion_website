import { motion } from "framer-motion";

const Home = () => {
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
      scale: 20,
      opacity: 0,
    },
    two: {
      scale: 1,
      opacity: 1,
      transition: {
        stiffness: 40,
        type: "ineria",
        delay: 2,
      },
    },
  };
  return (
    <>
      <div id="home">
        <motion.h1 variants={h1Variant} initial="first" animate="second">
          Travel <br />
        </motion.h1>
        <motion.span variants={spanVariant} initial="one" animate="two">
          HUB
        </motion.span>
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
