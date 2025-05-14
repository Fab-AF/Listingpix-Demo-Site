import React, { useState } from "react";
import "./Footer.css";
import insta from "../../Assets/Instagram.png";
import facebook from "../../Assets/Facebook.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullname, email, message } = formData;

    const emailBody = `
      Name: ${fullname}
      Email: ${email}
      Message: ${message}
    `;

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=demo@example.com&su=Contact Form Submission&body=${encodeURIComponent(emailBody)}`);
  };

  return (
    <>
      <div className="footercontainer" id="footer">
        <div className="footerrowone flex">
          <div className="frcoloumnone ">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="ltalkparent "
            >
              <div className="ltalktitle">Let’s Talk</div>
              <div className="ltalkdesc">
                Send us an email or start a conversation by filling the form
                below.
              </div>
            </motion.div>

            <div className="my-16">
              <hr />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="socialparent "
            >
              <div className="followtitle">Follow Us :</div>
              <div className="followicon gap-12 flex">
                <div className="insta">
                  <Link to="https://instagram.com/example" target="_blank">
                    <img src={insta} alt="instagran" />
                  </Link>
                </div>
                <div className="facebook">
                  <Link to="https://www.facebook.com/example" target="_blank">
                    <img src={facebook} alt="facebook" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="overflow-x-hidden">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="frcoloumntwo p-8 "
            >
              <form onSubmit={handleSubmit}>
                <div className="nameemail flex">
                  <div className="name flex flex-col">
                    <label htmlFor="fullname ">
                      Full Name<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      placeholder="John David"
                      autoComplete="off"
                      value={formData.fullname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="email flex flex-col">
                    <label htmlFor="fullemail">
                      Your Email<sup>*</sup>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="example@yourmail.com"
                      autoComplete="off"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="leaveusmessage flex flex-col">
                  <label htmlFor="leaveus">
                    Leave Us A Message <sup>*</sup>
                  </label>
                  <input
                    type="text"
                    name="message"
                    className="message"
                    placeholder="Hello there, I would like to talk about how to..."
                    autoComplete="off"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="sendbtn">
                  <button type="submit" className="sendtext">Send Message</button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
        <div className="hr m-auto my-16">
          <hr />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="footerrowtwo flex justify-between m-auto "
        >
          <div className="copy">
            ListingPix © {currentYear}. All rights reserved
          </div>
          <div className="cookie">
            <Link
              to="#"
              target="_blank">
              Terms of Service
            </Link>
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <Link
              to="#"
              target="_blank">
              Privacy Statement
            </Link>
            &nbsp;&nbsp;
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Footer;
