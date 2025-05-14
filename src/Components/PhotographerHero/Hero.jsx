import React from "react";
import "./Hero.css";
import appstore from "../../Assets/App Store.png";
import playstore from "../../Assets/Play Store.png";
// import firstiphone1 from "../../Assets/firstiphone.svg";
// import firstiphone2 from "../../Assets/firstiphone2.svg";
// import firstiphone3 from "../../Assets/firstiphone3.svg";
// import firstiphone4 from "../../Assets/firstiphone4.svg";
// import firstiphone5 from "../../Assets/firstiphone5.svg";
import firstiphone1 from "../../Assets/eclipse/mm1.png"
import firstiphone2 from "../../Assets/eclipse/mm2.png"
import firstiphone3 from "../../Assets/eclipse/mm3.png"
import firstiphone4 from "../../Assets/eclipse/mm4.png"
import firstiphone5 from "../../Assets/eclipse/mm5.png"
import firstiphone6 from "../../Assets/eclipse/mm6.png"
import firstiphone7 from "../../Assets/eclipse/mm7.png"
import firstiphone8 from "../../Assets/eclipse/mm8.png"

import { motion } from "framer-motion";
import eclipseone from "../../Assets/eclipse/Ellipse-1.png";
import eclipsetwo from "../../Assets/eclipse/Ellipse-2.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectCoverflow, Pagination } from 'swiper/modules'

const Hero = () => {
  const animationVariants = {
    up: { y: -20 },
    down: { y: 20 },
  };

  const animationOptions = {
    duration: 1,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse",
  };

  return (
    <>
      <div className="eclipse absolute w-full overflow-hidden">
        <motion.img
          className="eone"
          src={eclipseone}
          alt=""
          variants={animationVariants}
          animate="up"
          transition={animationOptions}
        />
        <motion.img
          className="etwo"
          src={eclipsetwo}
          alt=""
          variants={animationVariants}
          animate="down"
          transition={animationOptions}
        />
        <motion.img
          className="ethree"
          src={eclipsetwo}
          alt=""
          variants={animationVariants}
          animate="up"
          transition={animationOptions}
        />
      </div>
      <div className="heroseccontainerphotographer" id="photographerhome">
        <div className="herotop">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="herotitlephotographer"
          >
            Stunning HDR Photos <br /> using cutting-edge AI Technology, <br />
            delivered Instantly
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="herodescriptionphotographer"
          >
            Join our platform and become part of a revolutionary movement in the real estate photography industry. With ListingPix Photographer, you can effortlessly monetize your skills by conducting fast and efficient real estate shoots.
          </motion.div>
          <div className="downloadbuttonphotographer flex overflow-x-hidden">
            <Link
              to="https://apps.apple.com/us/app/listingpix-photographer/id6475029859"
              target="_blank"
            >
              <motion.img
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="appstorephotographer "
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
                className="playstorephotographer "
                src={playstore}
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="herobottom">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'4'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}

            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"

          >
            <SwiperSlide>
              <img src={firstiphone1} alt="mockup" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={firstiphone2} alt="mockup" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={firstiphone3} alt="mockup" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={firstiphone4} alt="mockup" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={firstiphone5} alt="mockup" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={firstiphone6} alt="mockup" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={firstiphone7} alt="mockup" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={firstiphone8} alt="mockup" />
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Hero;
