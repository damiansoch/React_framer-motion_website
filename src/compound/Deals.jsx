import "./styles/deals.scss";

import dominican_republic from "../compound/deals_img/dominican_republic.jpg";
import bahamas from "../compound/deals_img/bahamas.jpg";
import dubai from "../compound/deals_img/dubai.jpg";
import las_vegas from "../compound/deals_img/las_vegas.jpg";

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
  const cardVariant = {
    start: {
      scale: 0,
    },
    end: {
      scale: 1,
      transition: {
        duration: 1,
        stiffness: "100",
        type: "spring",
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
        {/* card */}
        <motion.div className="deal_card" variants={cardVariant}>
          <p className="card_title">Haiti</p>
          <img src={dominican_republic} alt="dom_rep" />
          <p className="price">
            Price <br /> £<i>1230</i>.
          </p>
        </motion.div>
        {/* card */}
        <motion.div className="deal_card" variants={cardVariant}>
          <p className="card_title">
            Las Vegas <br />{" "}
          </p>
          <img src={las_vegas} alt="dom_rep" />
          <p className="price">
            Price <br /> £<i>1230</i>.
          </p>
        </motion.div>
        {/* card */}
        <motion.div className="deal_card" variants={cardVariant}>
          <p className="card_title">
            Bahamas <br />{" "}
          </p>
          <img src={bahamas} alt="dom_rep" />
          <p className="price">
            Price <br /> £<i>1230</i>.
          </p>
        </motion.div>
        {/* card */}
        <motion.div className="deal_card" variants={cardVariant}>
          <p className="card_title">
            Dubai <br />{" "}
          </p>
          <img src={dubai} alt="dom_rep" />
          <p className="price">
            Price <br /> £<i>1230</i>.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default Deals;
