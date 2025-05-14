import React from "react";
import "./Photographerhero.css";
import appstore from "../../Assets/App Store.png";
import playstore from "../../Assets/Play Store.png";
import flexibleschedule from "../../Assets/2nd design assets/flexibleimage.svg";
import easycapture from "../../Assets/2nd design assets/easycaptureimg.svg";
import getpaid from "../../Assets/2nd design assets/getpaidimg.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Photographerhero = () => {
  return (
    <>
      <div className="photoherocontainer text-white" id="joinourteam">
        <div className="photocontent flex justify-center">
          <div className="photoleft">
            <div className="phototitle">Join our photographers network</div>
            <div className="photodesc">
              Signup to be a photographer in your city
            </div>
            <Link to="/photographer">
              <button className="flex items-center  text-white border-0 w-auto focus:outline-none hover:bg-gray-700 rounded buttonbg uppercase ">
                Learn More
              </button>
            </Link>
            <div className=" flex overflow-x-hidden w-auto gap-5">
              <Link
                to="https://apps.apple.com/us/app/listingpix-photographer/id6475029859"
                target="_blank"
              >
                {" "}
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
                />
              </Link>
            </div>
          </div>
          <div className="photoright">
            <img src={flexibleschedule} alt="" />
            <img src={easycapture} alt="" />
            <img src={getpaid} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Photographerhero;
