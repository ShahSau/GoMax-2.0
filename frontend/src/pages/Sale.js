import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCars } from "../redux/actions/carsAction";
import rentimg from "../asset/images/car-sale.jpeg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Segment from "../components/Segment";

const Sale = () => {
  const SaleD = styled.div`
    height: 100vh;
    min-width: 100vw;
    overflow-x: hidden;
    position:absolute;
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
  return (
    <>
      <Navbar />
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
        <Segment bigger="Cars for Sale" />
      </SaleD>
      <Footer />
    </>
  );
};

export default Sale;
