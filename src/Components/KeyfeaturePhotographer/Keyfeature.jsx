import React from "react";
import "./Keyfeature.css";
import kfleftmobilep from "../../Assets/kfleftmobilep.svg";
import kfrightmobilep from "../../Assets/kfrightmobilep.svg";
import kfmiddlemobilep from "../../Assets/kfmiddlemobilep.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Keyfeature = () => {
  const [selectedOption, setSelectedOption] = useState("bookedPhotographer");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderComponent = () => {
    switch (selectedOption) {
      case "bookedPhotographer":
        return (
          <AnimatePresence mode="wait">
            <motion.div key={selectedOption} exit={{ opacity: 0, scale: 0 }}>
              <div className="twomobileimages flex justify-center">
                <motion.img
                  key={selectedOption + "_left"}
                  initial={{ opacity: 0, x: -100, y: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="transformimg"
                  src={kfleftmobilep}
                  alt=""
                />
                <motion.img
                  key={selectedOption + "_right"}
                  initial={{ opacity: 0, x: 100, y: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="transformimg"
                  src={kfrightmobilep}
                  alt=""
                />
                <motion.img
                  key={selectedOption + "_middle"}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="absolute "
                  src={kfmiddlemobilep}
                  alt=""
                />
              </div>
            </motion.div>
          </AnimatePresence>
        );
      case "searchedPhotographer":
        return (
          <AnimatePresence mode="wait">
            <motion.div key={selectedOption} exit={{ opacity: 0, scale: 0 }}>
              <div className="twomobileimages flex justify-center">
                <motion.img
                  key={selectedOption + "_left"}
                  initial={{ opacity: 0, x: -100, y: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="transformimg"
                  src={kfleftmobilep}
                  alt=""
                />
                <motion.img
                  key={selectedOption + "_right"}
                  initial={{ opacity: 0, x: 100, y: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="transformimg"
                  src={kfrightmobilep}
                  alt=""
                />
                <motion.img
                  key={selectedOption + "_middle"}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="absolute "
                  src={kfmiddlemobilep}
                  alt=""
                />
              </div>
            </motion.div>
          </AnimatePresence>
        );
      default:
        return null;
    }
  };

  return (
    <div className="keyfeaturecontainerphotographer" id="featuresphotographer">
      <div className="top">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="keyfeaturetop"
        >
          Features of ListingPix Photographer
        </motion.div>
        <div className="keyfeaturebottom flex overflow-x-hidden">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{
              backgroundColor:
                selectedOption === "bookedPhotographer"
                  ? "#4AB11F"
                  : "transparent",
            }}
            className="keyfeatureleft "
            onClick={() => handleOptionClick("bookedPhotographer")}
          >
            <div className="kfbltitle">
              <span
                style={{
                  color:
                    selectedOption === "bookedPhotographer"
                      ? "white"
                      : "#29A0F5",
                }}
              >
                Profile
              </span>{" "}
              Creation
            </div>
            <div className="kfbldesc">
              Quickly and easily create your profile, add portfolio and manage your appointment availability.
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="keyfeatureright "
            onClick={() => handleOptionClick("searchedPhotographer")}
            style={{
              backgroundColor:
                selectedOption === "searchedPhotographer"
                  ? "#4AB11F"
                  : "transparent",
            }}
          >
            <div className="kfbltitle">
              <span
                style={{
                  color:
                    selectedOption === "bookedPhotographer"
                      ? "#29A0F5"
                      : "white",
                }}
              >
                Complete
              </span>{" "}
              Assignments
            </div>
            <div className="kfbldesc">
              Manage and complete assignments seamlessly within the ListingPix Photographer app.  Get paid instantly after completing the assignment.
            </div>
          </motion.div>
        </div>
      </div>
      <div className="bottom kfmockup">{renderComponent()}</div>
    </div>
  );
};

export default Keyfeature;
