import React from "react";
import "./Explorephotographers.css";
import exploreright from "../../Assets/2nd design assets/explorerighhero.svg";

const Explorephotographers = () => {
  return (
    <div className="expphotographercontainer">
      <div className="expphotographercontent flex justify-content-center  items-center gap-5">
        <div className="explorepleft flex flex-col  gap-8">
          <div className="eptitle">
            Explore endless possibilities with Photographers
          </div>
          <div className="epdesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </div>
          <button className="flex items-center mt-auto text-white border-0 w-2/6 focus:outline-none hover:bg-gray-700 rounded buttonbg uppercase">
            Learn More
          </button>
        </div>
        <div className="explorepright">
          <img src={exploreright} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Explorephotographers;
