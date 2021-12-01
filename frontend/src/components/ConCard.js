import React from "react";
import { AiFillPhone } from "react-icons/ai";

import { AiTwotoneMail } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillClockCircle } from "react-icons/ai";
import { BsFillClockFill } from "react-icons/bs";
function ConCard({ name, phone, email, address, hours1, hours2 }) {
  return (
    <div class="card" style={{ backgroundColor: "#231F20" }}>
      <div class="card-body">
        <h5 className="card-title" style={{ color: "#f5f5f5" }}>
          {name}{" "}
        </h5>
        <div className="row">
          <div class="col">
            <p className="card-text" style={{ color: "#f5f5f5" }}>
              <AiFillPhone />&nbsp;
              {phone}
            </p>
          </div>
          <div class="col">
            <p className="card-text" style={{ color: "#f5f5f5" }}>
              <AiTwotoneMail />&nbsp;
              {email}
            </p>
          </div>
        </div>
        <div className="row">
          <div class="col">
            <p className="card-text" style={{ color: "#f5f5f5" }}>
              <HiLocationMarker /> &nbsp;{address}
            </p>
          </div>
        </div>
        <div className="row">
          <div class="col">
            <p>Weekdays</p>
          </div>
          <div class="col">
            <p className="card-text" style={{ color: "#f5f5f5" }}>
              <AiFillClockCircle />&nbsp;
              {hours1}
            </p>
          </div>
        </div>
        <div className="row">
          <div class="col">
            <p>Weekend</p>
          </div>
          <div class="col">
            <p className="card-text " style={{ color: "#f5f5f5" }}>
              <BsFillClockFill />&nbsp;
              {hours2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConCard;
