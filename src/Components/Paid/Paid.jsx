import React from "react";
import "./Paid.css";
import getpaid from "../../Assets/getpaidmockup.png";
import appstore from "../../Assets/App Store.png";
import playstore from "../../Assets/Play Store.png";
import { motion } from "framer-motion";

const Paid = () => {
  return (
    <>
      <div className="paidcontainer">
        <div className="getpaidvector">
          <div className="greenbgimage ">
            <div className="flex waterimage overflow-x-hidden">
              <div className="paidleft ">
                <motion.img
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="br"
                  src={getpaid}
                  alt=""
                />
              </div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="paidright"
              >
                <div className="paidrighttitle">
                  Getting Paid is now easier!
                </div>
                <div className="paidrightdesc">
                  PayPulse is fully reserved. Unlike banks, we don’t loan out
                  your money. We publish our holdings and obligations in real
                  time.
                </div>
                <div className="downloadbuttong flex">
                  <img className="appstore" src={appstore} alt="" />
                  <img className="playstore" src={playstore} alt="" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Paid;
