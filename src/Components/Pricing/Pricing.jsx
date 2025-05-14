// import React from "react";
// import "./Pricing.css";
// import { motion } from "framer-motion";

// const Pricing = () => {
//   return (

//   );
// };

// export default Pricing;
import React from "react";
import "./Pricing.css";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <>
      <div className="pricingcontainer" id="pricing">
        <section className="text-white body-font overflow-hidden">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="flex flex-col text-center w-full mb-20"
            >
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white pricingtitle">
                Pricing
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base pricedesc">
                Realtors save 30%+ on photography costs with ListingPix:
                affordable, high-quality images delivered instantly
              </p>
            </motion.div>
            <div className="flex flex-wrap -m-4 ">
              <div className="pricingmaincontainer p-4 w-full">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className=" p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden pricingcardbody"
                >
                  <h2 className="text-sm w-fit px-4 py-3 rounded-full tracking-widest text-white bg-[#0328EE] title-font mb-1 font-medium uppercase w-full text-center">
                    10 Images
                  </h2>

                  <div className="flex flex-col gap-1">
                    <div className="feature">Starting At :</div>
                  </div>
                  <h1 className="text-5xl text-white leading-none dollortitle">
                    $ 89 USD
                  </h1>
                  <div className="flex flex-col gap-1">
                    <div className="feature mb-4">Features</div>
                    <p className="flex items-center text-white mb-2 featuredesc">
                      <span className="bg-[#0328EE] w-4 h-4 mr-2 inline-flex items-center justify-center text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="text-white"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      Stunning HDR Images
                    </p>
                    <p className="flex items-center text-white mb-2 featuredesc">
                      <span className="bg-[#0328EE] w-4 h-4 mr-2 inline-flex items-center justify-center text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="text-white"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      Delivered Instantly On-Site
                    </p>
                    <p className="flex items-center text-white mb-2 featuredesc">
                      <span className="bg-[#0328EE] w-4 h-4 mr-2 inline-flex items-center justify-center text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="text-white"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      AI Editing Features
                    </p>
                    <p className="flex items-center text-white mb-2 featuredesc">
                      <span className="bg-[#0328EE] w-4 h-4 mr-2 inline-flex items-center justify-center text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="text-white"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      Virtual Staging
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className=" p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden pricingcardbody"
                >
                  <h2 className="text-sm w-fit px-4 py-3 rounded-full tracking-widest text-white bg-[#0328EE] title-font mb-1 font-medium uppercase w-full text-center">
                    20 Images
                  </h2>
                  <div className="flex flex-col gap-1">
                    <div className="feature">Starting At :</div>
                  </div>
                  <h1 className="text-5xl text-white leading-none dollortitle">
                    $ 99 USD
                  </h1>
                  <div className="flex flex-col gap-1">
                    <div className="feature mb-4">Features</div>
                    <p className="flex items-center text-white mb-2 featuredesc">
                      <span className="bg-[#0328EE] w-4 h-4 mr-2 inline-flex items-center justify-center text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="text-white"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      Stunning HDR Images
                    </p>
                    <p className="flex items-center text-white mb-2 featuredesc">
                      <span className="bg-[#0328EE] w-4 h-4 mr-2 inline-flex items-center justify-center text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="text-white"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      Delivered Instantly On-Site
                    </p>
                    <p className="flex items-center text-white mb-2 featuredesc">
                      <span className="bg-[#0328EE] w-4 h-4 mr-2 inline-flex items-center justify-center text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="text-white"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      AI Editing Features
                    </p>
                    <p className="flex items-center text-white mb-2 featuredesc">
                      <span className="bg-[#0328EE] w-4 h-4 mr-2 inline-flex items-center justify-center text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="text-white"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      Virtual Staging
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className=" p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden pricingcardbody"
                >
                  <h2 className="text-sm w-fit px-4 py-3 rounded-full tracking-widest text-white bg-[#0328EE] title-font mb-1 font-medium uppercase w-full text-center">
                    30 Images
                  </h2>

                  <div className="flex flex-col gap-1">
                    <div className="feature">Starting At :</div>
                  </div>
                  <h1 className="text-5xl text-white leading-none dollortitle">
                    $ 109 USD
                  </h1>
                  <div className="flex flex-col gap-1">
                    <div className="feature mb-4">Features</div>
                    <p className="flex items-center text-white mb-2 featuredesc">
                      <span className="bg-[#0328EE] w-4 h-4 mr-2 inline-flex items-center justify-center text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="text-white"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      Stunning HDR Images
                    </p>
                    <p className="flex items-center text-white mb-2 featuredesc">
                      <span className="bg-[#0328EE] w-4 h-4 mr-2 inline-flex items-center justify-center text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="text-white"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      Delivered Instantly On-Site
                    </p>
                    <p className="flex items-center text-white mb-2 featuredesc">
                      <span className="bg-[#0328EE] w-4 h-4 mr-2 inline-flex items-center justify-center text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="text-white"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      AI Editing Features
                    </p>
                    <p className="flex items-center text-white mb-2 featuredesc">
                      <span className="bg-[#0328EE] w-4 h-4 mr-2 inline-flex items-center justify-center text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="text-white"
                            d="M20 6L9 17l-5-5"
                          ></path>
                        </svg>
                      </span>
                      Virtual Staging
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pricing;