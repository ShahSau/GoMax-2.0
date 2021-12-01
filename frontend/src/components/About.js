import React from "react";
import styled from "styled-components";
import Rightsegment from "./Rightsegment";
import Us from "./Us";

const AboutD = styled.div`
  top: 19%;
  position: relative;
`;
const About = () => {
  return (
    <AboutD>
      <Rightsegment bigger="About us" />
      <Us />
    </AboutD>
  );
};

export default About;
