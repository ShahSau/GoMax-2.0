import React from "react";
import styled from "styled-components";

const Line = styled.div`
  position: relative;
  top: 15%;
  left: -35%;
  color: #fff !important;
  h4 {
    margin-left: 5px;
    position: relative;
    width: 100%;
    color: #fff !important;
    // overflow: hidden;
  }

  h4:after {
    position: absolute;
    content: "";
    height: 2px;
    background-color: #da0314;
    width: 70%;
    margin-left: 20px;
    top: 55%;
  }
`;
const Segment = ({ bigger }) => {
  return (
    <Line>
      <h4>{bigger} </h4>
    </Line>
  );
};

export default Segment;
