import { motion } from "framer-motion";
import "./styles/nav.scss";

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
          whileHover={{ scale: 1.1, color: "red" }}
        >
          Home
        </motion.li>
        <motion.li
          variants={liVariant}
          whileHover={{ scale: 1.1, color: "red" }}
        >
          About
        </motion.li>
        <motion.li
          variants={liVariant}
          whileHover={{ scale: 1.1, color: "red" }}
        >
          Gallery
        </motion.li>
        <motion.li
          variants={liVariant}
          whileHover={{ scale: 1.1, color: "red" }}
        >
          Contact
        </motion.li>
      </ul>
    </motion.div>
  );
};
export default Nav;
