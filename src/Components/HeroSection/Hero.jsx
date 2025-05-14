import React from "react";
import "./Hero.css";
import appstore from "../../Assets/App Store.png";
import playstore from "../../Assets/Play Store.png";
import { motion } from "framer-motion";
import eclipseone from "../../Assets/eclipse/Ellipse-1.png";
import eclipsetwo from "../../Assets/eclipse/Ellipse-2.png";
import heroimg from "../../Assets/2nd design assets/Image@2x.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  const animationVariants = {
    up: { y: -20 },
    down: { y: 20 },
  };

  const animationOptions = {
    duration: 1,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse",
  };

  return (
    <>
      <div className="overflow-hidden  relative z-0">
        <div className="eclipse absolute w-full overflow-hidden">
          <motion.img
            className="eone"
            src={eclipseone}
            alt=""
            variants={animationVariants}
            animate="up"
            transition={animationOptions}
          />
          <motion.img
            className="etwo"
            src={eclipsetwo}
            alt=""
            variants={animationVariants}
            animate="down"
            transition={animationOptions}
          />
          <motion.img
            className="ethree"
            src={eclipsetwo}
            alt=""
            variants={animationVariants}
            animate="up"
            transition={animationOptions}
          />
        </div>
        <div className="heroseccontainer flex" id="homepage">
          <div className="heroleft">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="herotitle"
            >
              Stunning HDR Photos using cutting-edge AI Technology,delivered
              Instantly
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="herodescription "
            >
              Revolutionizing the real estate photography industry by combining
              innovative technology with exceptional service.
            </motion.div>
            <div className="downloadbutton flex overflow-x-hidden">
              <Link
                to="https://apps.apple.com/us/app/listingpix/id6475031160"
                target="_blank"
              >
                <motion.img
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="appstore "
                  src={appstore}
                  alt=""
                />
              </Link>
              <Link
                to="https://play.google.com/store/apps/details?id=com.listingpix.customer"
                target="_blank"
              >
                <motion.img
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="playstore "
                  src={playstore}
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="heroright">
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="heroimgwidth"
              src={heroimg}
              alt="heroimg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
