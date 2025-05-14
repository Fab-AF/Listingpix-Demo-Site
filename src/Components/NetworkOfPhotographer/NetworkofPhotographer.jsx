import React from "react";
import "./NetworkofPhotographer.css";
import TestimonialComp from "../Testimonial/TestimonialComp";
import user1 from "../../Assets/2nd design assets/Eric G. - York, PA.jpeg";
import user2 from "../../Assets/2nd design assets/Jess G. - Alpharetta, GA.jpg";
import user3 from "../../Assets/2nd design assets/Kara W. - St. Petersburg, FL.jpeg";
import user4 from "../../Assets/2nd design assets/Randy G. - Baltimore, MD.jpeg";

import phone from "../../Assets/2nd design assets/phonemockup.svg";
import { motion } from "framer-motion";

const NetworkofPhotographer = () => {
  return (
    <>
      <div
        className="NetworkofPhotographer overflow-x-hidden"
        id="photographers"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="nwtop"
        >
          <div className="nwtoptilte">
            Nationwide Network of Qualified Photographers
          </div>
          <div className="nwttopdesc">
            Revolutionizing the real estate photography industry by combining
            innovative technology with exceptional service
          </div>
        </motion.div>
        <div className="nwbottom flex justify-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="nwleft flex flex-col gap-12"
          >
            <TestimonialComp
              userprofile={user1}
              name="Eric G."
              profession="Photographer"
              location="York, PA"
            />
            <TestimonialComp
              userprofile={user2}
              name="Jess G."
              profession="Photographer"
              location="Alpharetta, GA"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="nwmiddle bg-[#015BE4] overflow-hidden"
          >
            <div className="findtitle uppercase">
              Find a network photographer
            </div>
            <div className="finddesc">
              Enter an address in our mobile app and instantly find
              photographers. Review their profile and book instantly
            </div>
            <div className="findphoneimage">
              <img className="phoneimageset" src={phone} alt="" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="nwright flex flex-col gap-12"
          >
            <TestimonialComp
              userprofile={user3}
              name="Kara W."
              profession="Photographer"
              location="St. Petersburg, FL"
            />
            <TestimonialComp
              userprofile={user4}
              name="Randy G."
              profession="Photographer"
              location="Baltimore, MD"
            />
          </motion.div>
          <div className="nwright"></div>
        </div>
      </div>
    </>
  );
};

export default NetworkofPhotographer;
