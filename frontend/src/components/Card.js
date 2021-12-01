import React from "react";
import styled from "styled-components";
import key from "../asset/images/wheel.svg";
import engine from "../asset/images/key.svg";
import caar from "../asset/images/caaar.svg";
const Card = () => {
  const Cardd = styled.div`
    position: relative;
    top: 20%;
    font-family: "Assistant", sans-serif;
    font-size: 14px;

    img {
      width: 30%;
      height: 30%;
    }
  `;
  return (
    <Cardd>
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-4 col-xs-6 col-sm-4 ">
            <img className="card-img-top" src={key} alt="key" />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xs-6 col-sm-4 ">
            <img className="card-img-top" src={engine} alt="car" />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xs-6 col-sm-4 ">
            <img className="card-img-top" src={caar} alt="wheel" />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Cardd>
  );
};

export default Card;
