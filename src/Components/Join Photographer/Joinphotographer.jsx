import React from "react";
import "./Joinphotographer.css";
import { motion } from "framer-motion";
import appstore from "../../Assets/App Store.png";
import playstore from "../../Assets/Play Store.png";
// import twomobile from "../../Assets/2nd design assets/twoblankmobileimages.svg";
import twomobile from "../../Assets/2nd design assets/blsection.png";

import { Link } from "react-router-dom";

const Joinphotographer = () => {
  return (
    <div className="explorecontainer" id="explorefinance">
      <div className="explorebgblue flex position-relative ">
        <div className="ebgleft">
          <div className="ebgtitle">
            Join our network of qualified real <br /> estate photographers
          </div>
          {/* <div className="ebgdesc">
            Review photographer portfolios and availability. Book a shoot today!
          </div> */}
          {/* <div className="ebgbutton text-capitalize ">Download App</div> */}
          <div className="downloadbutton flex overflow-x-hidden">
            <Link
              to="https://apps.apple.com/us/app/listingpix-photographer/id6475029859"
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
              to="https://play.google.com/store/apps/details?id=com.listingpix.photographer"
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
              />{" "}
            </Link>
          </div>
        </div>

        <div className="joinphoto position-relative">
          <img className="photobluesectino" src={twomobile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Joinphotographer;
