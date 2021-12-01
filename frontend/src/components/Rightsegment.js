import React from "react";
import styled from "styled-components";

const LineR = styled.div`
  position: relative;
  top: 75%;
  right: -38%;
  color: #fff !important;
  h4 {
    margin-left: 15px;
    position: relative;
    width: 100%;
    color: #fff !important;
  }

  h4:before {
    position: absolute;
    content: "";
    height: 2px;
    background-color: #da0314;
    width: 73%;

    top: 55%;
    margin-left: -75%;
  }
`;

const Rightsegment = ({ bigger }) => {
  return (
    <LineR>
      <h4>{bigger} </h4>
    </LineR>
  );
};

export default Rightsegment;
