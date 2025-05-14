import React from "react";
import "./Imagegallery.css";
import imggallery from "../../Assets/2nd design assets/imagegallery.svg";

const Imagegallery = () => {
  return (
    <>
      <div className="imagegallerycontainer">
        <div className="gallerytitle">Our Gallery</div>
        <img src={imggallery} alt="" />
      </div>
    </>
  );
};

export default Imagegallery;
