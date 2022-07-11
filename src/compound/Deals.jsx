import "./styles/deals.scss";

import DealCard from "./DealCard";

import { motion } from "framer-motion";

const Deals = () => {
  const containerVariant = {
    start: {
      scale: 0,
    },
    end: {
      scale: 1,
      transition: {
        duration: 2,
        delay: 3,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="deals_container"
      variants={containerVariant}
      initial="start"
      animate="end"
    >
      <h1 className="card_h1">This Weeks Best deals</h1>
      <div className="deals">
        <DealCard />
      </div>
    </motion.div>
  );
};
export default Deals;
