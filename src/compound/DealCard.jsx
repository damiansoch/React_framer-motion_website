import { motion } from "framer-motion";
import "./styles/dealCard.scss";

import bahamas from "../assets/bahamas.jpg";
import haiti from "../assets/dominican_republic.jpg";
import dubai from "../assets/dubai.jpg";
import las_vegas from "../assets/las_vegas.jpg";

const DealCard = () => {
  const images = [
    { image: bahamas, title: "Bahamas" },
    { image: haiti, title: "Haiti" },
    { image: dubai, title: "Dubai" },
    { image: las_vegas, title: "Las Vegas" },
  ];

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
    <>
      {images.map(({ title, image }) => {
        console.log(image);
        return (
          <motion.div className="deal_card" variants={cardVariant} key={title}>
            <p className="card_title">{title}</p>
            <img src={image} alt="dom_rep" />
            <p className="price">
              Price <br /> £<i>1230</i>.
            </p>
          </motion.div>
        );
      })}
    </>
  );
};
export default DealCard;
