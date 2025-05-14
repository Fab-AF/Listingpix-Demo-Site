import React, { useState } from "react";
import logo from "../../Assets/Navbar logo.png";
import "./Header.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import appstore from "../../Assets/App Store.png";
import playstore from "../../Assets/Play Store.png";

const Header = ({ page }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isFeatureDropdownOpen, setFeatureDropdownOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const toggleFeatureDropdown = () => {
    setFeatureDropdownOpen(!isFeatureDropdownOpen);
  };
  const getNavLinks = () => {
    switch (page) {
      case "home":
        return (
          <>
            <a href="#homepage">
              <li className="navli hover:text-green-500 hover:duration-300 hover:ease-in-out">
                Home
              </li>
            </a>
            <div className="relative ">
              <div
                className="flex items-center justify-center"
                onClick={toggleFeatureDropdown}
              >
                <li className="navli hover:text-green-500 hover:duration-300 hover:ease-in-out">
                  Features
                </li>
                <span className="ml-2">
                  {isFeatureDropdownOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500 transform rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </span>
              </div>
              {isFeatureDropdownOpen && (
                <div className="dropdown absolute bg-white mt-2 py-2 px-4 rounded shadow-md dropdowncustom">
                  {/* Add your dropdown content here */}
                  <a
                    href="#features"
                    className="block text-white hover:text-green-500  customlink"
                  >
                    Key Features
                  </a>
                  <a
                    href="#photographers"
                    className="block text-white hover:text-green-500  customlink"
                  >
                    Photographer Network
                  </a>
                  <a
                    href="#bookashoot"
                    className="block text-white hover:text-green-500  customlink"
                  >
                    Book a Shoot
                  </a>
                  <a
                    href="#aiediting"
                    className="block text-white hover:text-green-500  customlink"
                  >
                    AI Editing
                  </a>
                  <a
                    href="#pricing"
                    className="block text-white hover:text-green-500  customlink"
                  >
                    Pricing
                  </a>

                  <a
                    href="#joinourteam"
                    className="block text-white hover:text-green-500  customlink"
                  >
                    Join Our Team
                  </a>
                  <a
                    href="#diycamera"
                    className="block text-white hover:text-green-500  customlink"
                  >
                    Diy Camera
                  </a>


                  {/* Add more dropdown items as needed */}
                </div>
              )}
            </div>
            <Link to="/photographer">
              <li className="navli hover:text-green-500 hover:duration-300 hover:ease-in-out">
                Photographer Sign-Up
              </li>
            </Link>
            <a href="#diycamera">
              <li className="navli hover:text-green-500 hover:duration-300 hover:ease-in-out">
                DIY Camera
              </li>
            </a>
            <Link to="/download">
              <li className="navli hover:text-green-500 hover:duration-300 hover:ease-in-out">
                Download
              </li>
            </Link>
            <Link
              to="#"
              target="_blank"
            >
              <img className="store-icon" src={appstore} alt="App Store" />
            </Link>
            <Link
              to="#"
              target="_blank"
            >
              <img
                className="store-icon"
                src={playstore}
                alt="Play Store"
              />
            </Link>
          </>
        );
      case "diy":
        return (
          <>
            <a href="#home">
              <li className="navli hover:text-green-500 hover:duration-300 hover:ease-in-out">
                Home
              </li>
            </a>
            <a href="#aiediting">
              <li className="navli hover:text-green-500 hover:duration-300 hover:ease-in-out">
                AI Editing
              </li>
            </a>
            <a href="#pricing">
              <li className="navli hover:text-green-500 hover:duration-300 hover:ease-in-out">
                Pricing
              </li>
            </a>
            {/* <a href="#explorefinance">
              <li className="navli hover:text-green-500 hover:duration-300 hover:ease-in-out">
                Explore Finance Flow
              </li>
            </a> */}
            <a href="#explorephotographers">
              <li className="navli hover:text-green-500 hover:duration-300 hover:ease-in-out">
                Explore Photographers
              </li>
            </a>
            <Link to="/download">
              <li className="navli hover:text-green-500 hover:duration-300 hover:ease-in-out">
                Download
              </li>
            </Link>
            <a href="#ourgallery">
              <li className="navli hover:text-green-500 hover:duration-300 hover:ease-in-out">
                Our Gallery
              </li>
            </a>
            <Link
              to="#"
              target="_blank"
            >
              <img className="store-icon" src={appstore} alt="App Store" />
            </Link>

          </>
        );
      case "photographer":
        return (
          <>
            <a href="#photographerhome">
              <li className="navli hover:text-green-500 hover:duration-300 hover:ease-in-out">
                Home
              </li>
            </a>
            <a href="#howitwork">
              <li className="navli hover:text-green-500 hover:duration-300 hover:ease-in-out">
                How It Works
              </li>
            </a>
            <a href="#featuresphotographer">
              <li className="navli hover:text-green-500 hover:duration-300 hover:ease-in-out">
                Features
              </li>
            </a>
            {/* <a href="#joinphotographer">
              <li className="navli hover:text-green-500 hover:duration-300 hover:ease-in-out">
                Explore Photographers
              </li>
            </a> */}
            {/* <a href="#payment">
              <li className="navli hover:text-green-500 hover:duration-300 hover:ease-in-out">
                Payment
              </li>
            </a> */}
            <a href="#aiediting">
              <li className="navli hover:text-green-500 hover:duration-300 hover:ease-in-out">
                AI Editing
              </li>
            </a>
            <a href="#diycamera">
              <li className="navli hover:text-green-500 hover:duration-300 hover:ease-in-out">
                DIY Camera
              </li>

            </a>
            <Link to="/download">
              <li className="navli hover:text-green-500 hover:duration-300 hover:ease-in-out">
                Download
              </li>
            </Link>
            <Link
              to="#"
              target="_blank"
            >
              <img className="store-icon" src={appstore} alt="App Store" />
            </Link>
            <Link
              to="#"
              target="_blank"
            >
              <img
                className="store-icon"
                src={playstore}
                alt="Play Store"
              />
            </Link>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <header
        className="bg-white hederhight dark:bg-gray-900 borderbottom"
        id="home"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"
        >
          <div className="flex h-16 items-center justify-between hcontentheight">
            <div className="md:flex md:items-center md:gap-12">
              <Link to="/">
                <img className="logo" src={logo} alt="" />
              </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex text-white items-center justify-center gap-14 text-sm">
                  {getNavLinks()}
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4 contactbg">

                <a
                  className="rounded-md contactbtn bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500 w-max"
                  href="#footer"
                >
                  CONTACT US
                </a>

                {/* <div className="hidden sm:flex">
                  <a
                    className="rounded-md contactbtn bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500 w-max"
                    href="/"
                  >
                    Register
                  </a>
                </div> */}
              </div>

              <div className="block md:hidden">
                <button
                  onClick={toggleMenu}
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {isMenuOpen && (
          <div className="md:hidden mobilemenu">
            <ul>{getNavLinks()}</ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
