import React from "react";
import rating from "../../Assets/2nd design assets/ratingsvg.svg";
import "./TestimonialComp.css";
import { motion } from "framer-motion";

const TestimonialComp = (props) => {
  const { userprofile, name, profession, location } = props;
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.1, transition: { duration: 0.4 } },
  };
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="testimoniacardbody overflow-hidden"
    >
      <div className="userimg">
        <img className="userimageset" src={userprofile} alt="" />
      </div>
      <div className="username">{name}</div>
      <div className="userprofession">{profession}</div>
      <div className="userlocation">{location}</div>
      <div className="userrating">
        <img className="ratingimgset" src={rating} alt="" />
      </div>
    </motion.div>
  );
};

export default TestimonialComp;
