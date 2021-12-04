import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAll } from "../redux/actions/buyActions";
import rentimg from "../asset/images/car-sale.jpeg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Segment from "../components/Segment";
import Spinner from "../components/Spinner";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
const Buy = () => {
  const SaleD = styled.div`
    height: 100vh;
    min-width: 100vw;
    overflow-x: hidden;
    position: absolute;
  `;
  const SalewordD = styled.div`
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
  const { buyCar } = useSelector((state) => state.buyReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
 console.log(`befor dispatch: ${buyCar}`)

  const dispatch = useDispatch();
  const [allCars, setAllcars] = useState([]);

  useEffect(() => {
    dispatch(getAll());
  }, []);
  console.log(`after dispatch: ${buyCar}`)
  useEffect(() => {
    setAllcars(buyCar);
  }, [buyCar]);

  ////////////////allCars
  console.log({ allCars });
  return (
    <>
      <Navbar />
      {loading === true && <Spinner />}
      <SaleD>
        <img
          className="rent-img1"
          src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
          alt=""
        />

        <img className="rent-img2" src={rentimg} alt="" />
        <SalewordD>
          <h1>Car Sale</h1>
          <ChecklistD>
            <span>&#10003;</span> Individual car ordering.
            <br />
            <span>&#10003;</span> Carrying out chekcs before ordering the car.
            <br />
            <span>&#10003;</span> Transparent search and purchase process.
            <br />
            <span>&#10003;</span> Car leasing option.
            <br />
            <span>&#10003;</span> We accept old car as part of payment.
            <br />
            <span>&#10003;</span> Lorem ipsum dolor, sit amet consectetur
            adipisicing elit.
            <br />
          </ChecklistD>
        </SalewordD>
        <Segment bigger="Cars for Sale"  />

        <Row
          justify="center"
          gutter={16}
          style={{ position: "relative", top: "40%" }}
        >
          {allCars.map((car) => {
            return (
              <Col
                lg={11}
                md={11}
                sm={22}
                xs={22}
                className="d-flex-inline align-items-center justify-content-between mb-5"
              >
                <div class="card" style={{  }}>
                  <img
                    className="card-img-top"
                    src={car.image.image1}
                    alt="Cardcap"
                  />
                  <div class="card-body">
                    <a onClick={()=>console.log("hi")}>
                      <AiFillHeart
                        style={{
                         color:"red",fontSize:"40px",borderRadius:"100%",marginTop: "-35px",   float: "right",
                         marginLeft: "90px"
                        }}
                      />{" "}
                    </a>
                    <h5 className="card-title" style={{ color: "#000",float: "left", marginTop: "-10px",marginLeft: "-10px"}}>
                      {car.name}{" "}
                    </h5>
                    <p className="card-text" style={{ color: "#000",float: "left",marginLeft: "-15px" }}>
                      {car.description}
                    </p>
                    <button className="contact-buy">
                      <Link to={`/buy/${car.id}`}>Purchase</Link>{" "}
                    </button>{" "}
                    
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </SaleD>
      {/* <Footer /> */}
    </>
  );
};

export default Buy;
