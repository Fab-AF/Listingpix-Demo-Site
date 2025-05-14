import React from "react";
import "./Explorefinance.css";
import twomobile from "../../Assets/2nd design assets/twoblankmobileimages.svg";
import { motion } from "framer-motion";
import appstore from "../../Assets/App Store.png";
import { Link } from "react-router-dom";

const Explorefinance = () => {
  return (
    <div className="explorecontainer" id="explorefinance">
      <div className="explorebgblue flex position-relative ">
        <div className="ebgleft">
          <div className="ebgtitle">
            Explore endless possibilities with FinanceFlow
          </div>
          <div className="ebgdesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </div>
          {/* <div className="ebgbutton text-capitalize ">Download App</div> */}
          <div className="downloadbutton flex overflow-x-hidden">
            <Link
              to="https://apps.apple.com/app/listingpix-camera/id6475031981"
              target="_blank"
            >
              {" "}
              <motion.img
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="appstore w-1/2"
                src={appstore}
                alt=""
              />
            </Link>
            {/* <motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="playstore "
              src={playstore}
              alt=""
            /> */}
          </div>
        </div>

        <div className="explorefinance position-relative">
          <img src={twomobile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Explorefinance;
