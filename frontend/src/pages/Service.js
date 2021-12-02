import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllService } from "../redux/actions/serviceAction";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import serviceimg from "../asset/images/service.jpeg";
import Segment from "../components/Segment";
import { Link } from "react-router-dom";
import { Button, Row, Col, DatePicker, Card } from "antd";

import Spinner from "../components/Spinner";
const Service = () => {
  const ServiceD = styled.div`
    height: 100vh;
    min-width: 100vw;
    overflow-x: hidden;
    position: relative;
  `;
  const ServicewordD = styled.div`
    position: relative;
    left: 0%;
    top: 2%;
    width: 40%;
    height: 45%;
    h1 {
      font-family: "Pontano Sans", sans-serif;
      left: 0%;
      position: relative;
      text-align: left;
      margin-left: 15%;
      color: #f5f5f5;
    }
  `;
  const ChecklistD = styled.div`
    position: relative;
    top: 2%;
    line-height: 2;
    text-align: left;
    margin-left: 15%;
    span {
      color: red;
    }
  `;
  const FooterD = styled.div`
    position: absolute;
    top: 80%;
  `;
  const { services } = useSelector((state) => state.serviceReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const dispatch = useDispatch();
  const [totalService, setTotalservice] = useState([]);
  useEffect(() => {
    dispatch(getAllService());
  }, []);
  useEffect(() => {
    setTotalservice(services);
    console.log(totalService);
  }, [services]);
  return (
    <>
      <Navbar />
      {loading === true && <Spinner />}
      <ServiceD>
        <img
          className="rent-img1"
          src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
          alt=""
        />

        <img className="rent-img2" src={serviceimg} alt="" />
        <ServicewordD>
          <h1>Car Service</h1>
          <ChecklistD>
            <span>&#10003;</span> Lorem ipsum , sit amet consectetur adipisicing
            elit.
            <br />
            <span>&#10003;</span> Lorem ipsum dolor, sit amet consectetur
            adipisicing elit.
            <br />
            <span>&#10003;</span> Lorem , amet consectetur adipisicing elit.
            <br />
            <span>&#10003;</span> Lorem ipsum dolor, sit amet consectetur
            adipisicing elit.
            <br />
            <span>&#10003;</span> Lorem ipsum dolor, sit elit.
            <br />
            <span>&#10003;</span> tconsectetur adipisicing elit.
            <br />
          </ChecklistD>
        </ServicewordD>
        <Row
          justify="center"
          
          style={{ position: "absolute", top: "70%",width:"100vw" }}
        >
          <Col lg={22} sm={24} className="text-center mt-5">
          <Segment bigger="Our Services" style={{top:"50%", position:"relative"}} />
          </Col>
       
        </Row>
        <Row
          justify="center"
          gutter={5}
          style={{ position: "relative", top: "30%", width:"100vw" }}
          className="pl-5"
        >
          
          {totalService.map((service) => {
            return (
              <Col
                lg={5}
                md={11}
                sm={22}
                xs={22}
                className=" d-flex-iinline align-items-center justify-content-between mb-5"
              >
                 <div class="card" style={{ backgroundColor: "#000" }}>
                  <img
                    className="card-img-top"
                    src={service.image}
                    alt="Cardcap"
                  />
                  <div class="card-body">
                    <h6 className="card-title" style={{ color: "#f5f5f5" }}>
                      {service.name}{" "}
                    </h6>
                    <h6 className="card-text" style={{ color: "#f5f5f5" }}>
                      ${service.price}/hour
                    </h6>
                    <button className="contact-more">
                      <Link to={`/service/${service.id}`}>see details</Link>{" "}
                    </button>{" "}
                  </div>
                </div> 

               
              </Col>
            );
          })}
        </Row>
      </ServiceD>
      {/* <FooterD>
        <Footer />
      </FooterD> */}
    </>
  );
};

export default Service;
