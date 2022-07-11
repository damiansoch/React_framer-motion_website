import { motion } from "framer-motion";
import "./styles/nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  const navVariant = {
    hidden: {
      x: "+100vw",
    },
    visible: {
      x: 0,
      transition: {
        duration: 2,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };
  const liVariant = {
    hidden: {
      display: "none",
      y: 40,
    },
    visible: {
      display: "block",
      y: 0,
    },
  };
  return (
    <motion.div
      className="nav"
      variants={navVariant}
      initial="hidden"
      animate="visible"
    >
      <ul>
        <motion.li
          variants={liVariant}
          whileHover={{ scale: 1.1, color: "#ff0000" }}
        >
          <Link to="/">Home</Link>
        </motion.li>
        <motion.li
          variants={liVariant}
          whileHover={{ scale: 1.1, color: "#ff0000" }}
        >
          <Link to="/about">About</Link>
        </motion.li>
        <motion.li
          variants={liVariant}
          whileHover={{ scale: 1.1, color: "#ff0000" }}
        >
          <Link to="/gallery">Gallery</Link>
        </motion.li>
        <motion.li
          variants={liVariant}
          whileHover={{ scale: 1.1, color: "#ff0000" }}
        >
          <Link to="/contact">Contact</Link>
        </motion.li>
      </ul>
    </motion.div>
  );
};
export default Nav;
