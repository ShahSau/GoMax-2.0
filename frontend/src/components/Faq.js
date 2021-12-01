import React from "react";
import Rightsegment from "./Rightsegment";
import styled from "styled-components";
import imgfaq from "../asset/images/faq.jpeg";

import Accordion from "./Accordion";

const Faq = () => {
  const FaqD = styled.div`
    color: #f5f5f5 !important;
    position: relative;
    top: 45%;
    img {
      width: 90%;
      height: auto%;
    }
    button {
      background-color: transparent;
      border-radius: 4px;
      border: 1px solid #da0314;
      display: inline-block;
      cursor: pointer;
      color: #ffffff;
      padding: 5px 15px;
      text-decoration: none;
      transition: 0.6s;
    }
    button:hover {
      background-color: #da0314;
      color: black;
      border: 1px solid #000;
    }
  `;
  return (
    <FaqD>
      <Rightsegment bigger="Ask Anything" />
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-6 col-xs-6 col-sm-6">
            <Accordion />
            <p> Do you have other question? </p>
            <button className="">Ask us</button>
          </div>
          <div className="col-6 col-md-6 col-xs-6 col-sm-6">
            <img className="" src={imgfaq} alt="faq " />
          </div>
        </div>
      </div>
    </FaqD>
  );
};

export default Faq;
