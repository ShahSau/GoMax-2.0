import React from "react";
import logo from "../asset/images/logo.png";
import { IconContext } from "react-icons";
import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  const FooterD = styled.div`
    position: relative;
    top: 50%;

    img {
      width: 50%;
      height: 50%;
    }
    span {
      width: 83%;
      display: block;
      height: 2px;
      background-color: #da0314;
      margin: 60px auto 0;
    }
  `;
  return (
    <FooterD>
      <span> </span>
      <div class="container">
        <div class="footer-cta pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <img src={logo} alt="logo" />
              </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <p>Home</p>
                <p>Rent</p>
                <p>Service</p>
                <p>Buy</p>
                <p>Contact</p>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <p>Call: 123456789</p>
                <p>Email: gomax@gomax.com</p>
                <div class="footer-social-icon">
                  <p>Follow us</p>
                  <IconContext.Provider value={{ color: "#fff", size: "20px" }}>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaInstagram />
                  </IconContext.Provider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterD>
  );
};

export default Footer;
