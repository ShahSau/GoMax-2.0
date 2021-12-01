import React from "react";
import { FcBusinessman, FcServices, FcMoneyTransfer } from "react-icons/fc";
import styled from "styled-components";
const Why = () => {
  const Dwhy = styled.div`
    color: #fff !important;
    position: relative;
    top: 20%;

    h4 {
      text-align: center;
      color: #fff !important;
    }
  `;
  return (
    <Dwhy>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-xs-6 col-sm-4">
            <div className="circle">
              <h4>
                <FcBusinessman />
                <br />
                Satisfied Customer{" "}
              </h4>
            </div>
          </div>
          <div className="col-12 col-md-4 col-xs-6 col-sm-4">
            <div className="circle">
              <h4>
                <FcServices />
                <br />
                The Best Service{" "}
              </h4>
            </div>
          </div>
          <div className="col-12 col-md-4 col-xs-6 col-sm-4">
            <div className="circle">
              <h4>
                <FcMoneyTransfer />
                <br />
                Save Customer Money{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </Dwhy>
  );
};

export default Why;

//customer => import { FcBusinessman } from "react-icons/fc";
//time=> FcClock
//money=>FcMoneyTransfer

//service=>FcServices
