import React from "react";
import "./HIT.css";
import hitmockup from "../../Assets/mokupHowItWork.png";
import find from "../../Assets/findphotographer.png";
import book from "../../Assets/bookphotographer.png";
import hdr from "../../Assets/receivehdrphoto.png";
import arrow from "../../Assets/arrow.png";
import { motion } from "framer-motion";

const HIT = () => {
  return (
    <>
      <div className="hitcontainer" id="ourworks">
        <div className="overflow-x-hidden">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="hittop"
          >
            How It Works
          </motion.div>
        </div>
        <div className="hitbottom flex flex-col  ">
          <div className="flex contentcontainer">
            <div className="leftmockup overflow-x-hidden">
              <motion.img
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="leftmockupimg"
                src={hitmockup}
                alt=""
              />
            </div>

            <div className="righthit overflow-x-hidden">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="righthitone"
              >
                <div className="imgiconone">
                  <img className="imgiconset" src={find} alt="" />
                </div>
                <div className="hittitle ani">Find Photographers</div>
                <div className="hitdesc">
                  Search our nation wide marketplace of qualified real estate
                  photographerscusing our ai powered capture and editing
                  solution.
                </div>
                <div className="hitcta flex mt-8 ">
                  <div className="ctatext">Get Started</div>
                  <img className="ml-4" src={arrow} alt="" />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="righthitsecond overflow-x-hidden">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="righthitone"
            >
              <div className="imgicontwo">
                <img className="imgiconset" src={book} alt="" />
              </div>
              <div className="hittitle">Book Photographers</div>
              <div className="hitdesc">
                Instantly bok an Appoinment with your desired photographer
              </div>
              <div className="hitcta flex mt-8 ">
                <div className="ctatext">Get Started</div>
                <img className="ml-4 object-contain" src={arrow} alt="" />
              </div>
            </motion.div>
          </div>
          <div className="righthitthird overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="righthitone"
            >
              <div className="imgiconthree">
                <img className="imgiconset" src={hdr} alt="" />
              </div>
              <div className="hittitle">Received HDR photos</div>
              <div className="hitdesc">
                With our fast, efficient, service, photo are delivered on site,
                saving time and money while showcasing the property in the best
                possible light
              </div>
              <div className="hitcta flex mt-8 ">
                <div className="ctatext">Get Started</div>
                <img className="ml-4 object-contain" src={arrow} alt="" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HIT;
