import React from "react";
import "./Explore.css";
import twomobile from "../../Assets/twomobile.svg";
import { motion } from "framer-motion";
import appstore from "../../Assets/App Store.png";
import playstore from "../../Assets/Play Store.png";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <>
      <div className="explorecontainer" id="bookashoot">
        <div className="explorebgblue flex position-relative ">
          <div className="ebgleft">
            <div className="ebgtitle">
              Booking a qualified photographer is quick and easy!
            </div>
            <div className="ebgdesc">
              Review photographer portfolios and availability. Book a shoot
              today!
            </div>
            {/* <div className="ebgbutton text-capitalize ">Download App</div> */}
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

          <div className="ebgright position-relative">
            <img src={twomobile} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
