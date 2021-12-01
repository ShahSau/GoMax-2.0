import React from "react";
import { Spin } from "antd";
import styled from "styled-components";
const Spinner = () => {
  const SpinerD = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
  `;
  return (
    <div>
      <Spin size="large" />
    </div>
  );
};
export default Spinner;
