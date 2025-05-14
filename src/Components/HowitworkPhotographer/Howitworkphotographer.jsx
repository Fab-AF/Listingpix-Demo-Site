import React from "react";
import "./Howitworkphotographer.css";
import arrow1 from "../../Assets/2nd design assets/arrow.svg";
import arrow2 from "../../Assets/2nd design assets/arrow2.svg";

import hitprofile from "../../Assets/2nd design assets/hitpprofile.png";
import hitpcam from "../../Assets/2nd design assets/hitpcam.svg";
import hitpmoney from "../../Assets/2nd design assets/hitpmoney.svg";

const Howitworkphotographer = () => {
  return (
    <>
      <div className="hitphotographercontainer" id="howitwork">
        <div className="hitpuppercontainer">How It Works ?</div>
        <div className="hitpbelowcontainer">
          <img src={arrow1} alt="" className="arrow" />
          <img src={arrow2} alt="" className="arrow" />

          <div className="hitpcard1">
            <img src={hitprofile} alt="" />
            <div className="hitpcardtitle">Join ListingPix</div>
            <div className="hitpcarddesc">
              Photographers sign up for the ListingPix Photographer app, creating a profile and setting up their pricing structure to receive quick and easy real estate shoots through our platform.
            </div>
          </div>
          <div className="hitpcard1">
            <img src={hitpcam} alt="" />
            <div className="hitpcardtitle">Complete Assignments</div>
            <div className="hitpcarddesc">
              Capture images at scheduled photo shoots using the ListingPix Photographer app.  Fine tune images using ListingPix AI editing technology.  Deliver images instantly!
            </div>
          </div>
          <div className="hitpcard1">
            <img src={hitpmoney} alt="" />
            <div className="hitpcardtitle">Earn Money Fast</div>
            <div className="hitpcarddesc">
              With a steady stream of job opportunities, photographers can start earning money instantly after completing each shoot. ListingPix provides a seamless and efficient way for photographers to monetize their skills while helping real estate professionals meet their needs faster and more affordably.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Howitworkphotographer;
