import React from "react";
import car from "../asset/images/about-car.jpeg";
import styled from "styled-components";
const Us = () => {
  const UsD = styled.div`
    margin-top: 5%;
    img {
      width: 80%;
      height: 80%;
    }
    p {
      text-align: left;
      width: 100%;
      height: 80%;
      font-family: "Assistant", sans-serif;
      font-size: 14px;
    }
    span {
      color: #dc0314;
    }
  `;
  return (
    <UsD>
      <div className="container">
        <div className="row">
          <div className="col-9 col-md-6 col-xs-6 col-sm-18 ">
            <img className="" src={car} alt="" />
          </div>
          <div className="col-9 col-md-6 col-xs-6 col-sm-18 ">
            <p>
              s simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown <span>GoMAX</span> took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic. <br />
              Typesetting, remaining essentially unchanged. It was popularised
              in the 1960s <span>GoMAX</span> the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsums simply dummy text of the printing and typesetting
              industry. <span>GoMAX</span> Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book. <br />
              It has survived not only five. Centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It{" "}
              <span>GoMAX</span> popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum
            </p>
          </div>
        </div>
      </div>
    </UsD>
  );
};

export default Us;
