import React from "react";
import "./Diyhero.css";
import diyheroimg from "../../Assets/eclipse/Photographer in Living Room.webp";
import appstore from "../../Assets/App Store.png";
// import playstore from "../../Assets/Play Store.png";
import oneclick from "../../Assets/2nd design assets/oneclick.svg";
import aiediting from "../../Assets/2nd design assets/aiediting.svg";
import instant from "../../Assets/2nd design assets/instant1.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Diyhero = () => {
  return (
    <>
      <div className="diyherocontainer text-white" id="diycamera">
        <div className="diycontent flex justify-center">
          <div className="diyleft">
            <div className="diytitle">DIY Camera</div>
            <div className="diydesc">Transform your mobile phone into a powerful real estate photography tool with ListingPix Camera. Whether you're a realtor, Airbnb owner, or selling your property independently, our app revolutionizes the way you capture and edit stunning property images.</div>
            <Link to="/diycamera">
              <button className="flex items-center  text-white border-0 w-auto focus:outline-none hover:bg-gray-700 rounded buttonbg uppercase ">
                Learn More
              </button>
            </Link>
            <div className="downloadbutton flex overflow-x-hidden">
              <Link
                to="https://apps.apple.com/us/app/listingpix-real-estate-camera/id6475031981
"
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

            </div>
            <div className=" flex overflow-x-hidden w-auto gap-5">
              <h1 className="appscommingsson">Our Apps Are Commingsoon</h1>
              {/* <motion.img
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="appstore "
                src={appstore}
                alt=""
              />
              <motion.img
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="playstore "
                src={playstore}
                alt=""
              /> */}
            </div>
            <div className="diyfeaturecontainer">
              <div className="oneclick flex gap-5 items-center">
                <img src={oneclick} alt="" />
                <p>One click AI HDR Photos</p>
              </div>

              <div className="twoclick flex gap-5 items-center ">
                <img src={aiediting} alt="" />
                <p>AI Editing Technologies </p>
              </div>
              <div className="threeclick flex gap-5 items-center ">
                <img src={instant} alt="" />
                <p>Instant Virtual Staging</p>
              </div>
            </div>
          </div>

          <img className="diyright" src={diyheroimg} alt="diyhero" />

        </div>
      </div>
    </>
  );
};

export default Diyhero;
