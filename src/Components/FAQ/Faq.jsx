import React, { useState } from "react";
import "./Faq.css";
import { motion } from "framer-motion";

const Faq = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  const toggleFAQ1 = () => {
    setIsOpen1(!isOpen1);
    closeOthers([setIsOpen2, setIsOpen3, setIsOpen4, setIsOpen5]);
  };

  const toggleFAQ2 = () => {
    setIsOpen2(!isOpen2);
    closeOthers([setIsOpen1, setIsOpen3, setIsOpen4, setIsOpen5]);
  };

  const toggleFAQ3 = () => {
    setIsOpen3(!isOpen3);
    closeOthers([setIsOpen1, setIsOpen2, setIsOpen4, setIsOpen5]);
  };

  const toggleFAQ4 = () => {
    setIsOpen4(!isOpen4);
    closeOthers([setIsOpen1, setIsOpen2, setIsOpen3, setIsOpen5]);
  };

  const toggleFAQ5 = () => {
    setIsOpen5(!isOpen5);
    closeOthers([setIsOpen1, setIsOpen2, setIsOpen3, setIsOpen4]);
  };

  const closeOthers = (setters) => {
    setters.forEach((setter) => setter(false));
  };
  return (
    <>
      <div className="faqcontainer" id="faq">
        <div className="faqbg">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            viewport={{ once: true }}
            className="faqtitle"
          >
            Find the Answers On Frequently Asked Questions
          </motion.div>
          <div className="faqquestions">
            <div className="space-y-20">
              {/* 1st */}
              <details
                style={{
                  backgroundColor: isOpen1 ? "#298B00" : "black",

                  // add other styles as needed
                }}
                className={`group p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden faqquestioncontainer`}
                onClick={toggleFAQ1}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2
                    className={`text-lg font-medium text-gray-900 dark:text-white faqquestiontitle pb-4`}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing?
                  </h2>

                  <span
                    className={`shrink-0 rounded-full bg-white p-1.5 text-gray-900 dark:bg-gray-800 dark:text-white sm:p-3`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 shrink-0 transition duration-300 ${
                        isOpen1 ? "group-open:-rotate-45" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200 faqquestiondesc">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                  enim ad minim veniam quis nostrud exercitation ullamco laboris
                  nisi. consectetur adipiscing elit sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua ut enim ad minim
                  veniam quis nostrud exercitation ullamco laboris nisi.
                </p>
              </details>

              {/* 2nd */}
              <details
                className={`group  p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden faqquestioncontainer`}
                onClick={toggleFAQ2}
                style={{
                  backgroundColor: isOpen2 ? "#298B00" : "black",
                  // add other styles as needed
                }}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2
                    className={`text-lg font-medium text-gray-900 dark:text-white faqquestiontitle pb-4`}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing?
                  </h2>

                  <span
                    className={`shrink-0 rounded-full bg-white p-1.5 text-gray-900 dark:bg-gray-800 dark:text-white sm:p-3`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 shrink-0 transition duration-300 ${
                        isOpen2 ? "group-open:-rotate-45" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200 faqquestiondesc">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                  enim ad minim veniam quis nostrud exercitation ullamco laboris
                  nisi. consectetur adipiscing elit sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua ut enim ad minim
                  veniam quis nostrud exercitation ullamco laboris nisi.
                </p>
              </details>
              {/* 3rd */}
              <details
                className={`group  p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden faqquestioncontainer`}
                onClick={toggleFAQ3}
                style={{
                  backgroundColor: isOpen3 ? "#298B00" : "black",
                  // add other styles as needed
                }}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2
                    className={`text-lg font-medium text-gray-900 dark:text-white faqquestiontitle pb-4`}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing?
                  </h2>

                  <span
                    className={`shrink-0 rounded-full bg-white p-1.5 text-gray-900 dark:bg-gray-800 dark:text-white sm:p-3`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 shrink-0 transition duration-300 ${
                        isOpen3 ? "group-open:-rotate-45" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200 faqquestiondesc">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                  enim ad minim veniam quis nostrud exercitation ullamco laboris
                  nisi. consectetur adipiscing elit sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua ut enim ad minim
                  veniam quis nostrud exercitation ullamco laboris nisi.
                </p>
              </details>
              {/* 4th */}
              <details
                className={`group  p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden faqquestioncontainer`}
                onClick={toggleFAQ4}
                style={{
                  backgroundColor: isOpen4 ? "#298B00" : "black",
                  // add other styles as needed
                }}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2
                    className={`text-lg font-medium text-gray-900 dark:text-white faqquestiontitle pb-4`}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing?
                  </h2>

                  <span
                    className={`shrink-0 rounded-full bg-white p-1.5 text-gray-900 dark:bg-gray-800 dark:text-white sm:p-3`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 shrink-0 transition duration-300 ${
                        isOpen4 ? "group-open:-rotate-45" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200 faqquestiondesc ">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                  enim ad minim veniam quis nostrud exercitation ullamco laboris
                  nisi. consectetur adipiscing elit sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua ut enim ad minim
                  veniam quis nostrud exercitation ullamco laboris nisi.
                </p>
              </details>
              {/* 5th */}
              <details
                className={`group  p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden faqquestioncontainer`}
                onClick={toggleFAQ5}
                style={{
                  backgroundColor: isOpen5 ? "#298B00" : "black",
                  // add other styles as needed
                }}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2
                    className={`text-lg font-medium text-gray-900 dark:text-white faqquestiontitle pb-4`}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing?
                  </h2>

                  <span
                    className={`shrink-0 rounded-full bg-white p-1.5 text-gray-900 dark:bg-gray-800 dark:text-white sm:p-3`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 shrink-0 transition duration-300 ${
                        isOpen5 ? "group-open:-rotate-45" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200 faqquestiondesc">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                  enim ad minim veniam quis nostrud exercitation ullamco laboris
                  nisi. consectetur adipiscing elit sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua ut enim ad minim
                  veniam quis nostrud exercitation ullamco laboris nisi.
                </p>
              </details>
              {/* Add more FAQ details as needed */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
