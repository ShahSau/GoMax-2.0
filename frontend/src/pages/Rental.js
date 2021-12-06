import React, { useEffect, useState } from "react";
// import DefaultLayout from "../components/DefaultLayout";
import { useSelector, useDispatch } from "react-redux";
import { getAllCars } from "../redux/actions/carsAction";
import rentimg from "../asset/images/rent-img.jpeg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Segment from "../components/Segment";
import { Link } from "react-router-dom";
import { Row, Col, DatePicker, Card } from "antd";
import moment from "moment";
import Spinner from "../components/Spinner";
const Rental = () => {
  const RentalD = styled.div`
    height: 100vh;
    min-width: 100vw;
    overflow-x: hidden;
    position: relative;
  `;
  const RentwordD = styled.div`
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
    position: relative;
    top: 100%;
    width: 100vw;
  `;

  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  console.log(`befor dispatch: ${cars}`)
  const dispatch = useDispatch();
  const [totalCars, setTotalcars] = useState([]);
  const { RangePicker } = DatePicker;
  // const { Meta } = Card;
  useEffect(() => {
    dispatch(getAllCars());
  }, []);
  console.log(`befor dispatch: ${cars}`)
  useEffect(() => {
    setTotalcars(cars);
    console.log(totalCars);
  }, [cars]);

  function setFilter(values) {
    let selectedFrom = moment(values[0], "MMM DD yyyy HH:mm");
    let selectedTo = moment(values[1], "MMM DD yyyy HH:mm");
    let temp = [];
    for (let car of totalCars) {
      if (car.bookedTimeSlots.length === 0) {
        temp.push(car);
      } else {
        for (let booking of car.bookedTimeSlots) {
          if (
            selectedFrom.isBetween(booking.from, booking.to) ||
            selectedTo.isBetween(booking.from, booking.to) ||
            moment(booking.from).isBetween(selectedFrom, selectedTo) ||
            moment(booking.to).isBetween(selectedFrom, selectedTo)
          ) {
          } else {
            temp.push(car);
          }
        }
      }
    }
    setTotalcars(temp);
  }
  return (
    <>
      <Navbar />
      {loading === true && <Spinner />}
      <RentalD>
        <img
          className="rent-img1"
          src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
          alt=""
        />

        <img className="rent-img2" src={rentimg} alt="" />
        <RentwordD>
          <h1>Car Rental</h1>
          <ChecklistD>
            <span>&#10003;</span> Car with automatic transmission and safety
            system.
            <br />
            <span>&#10003;</span> Meeting at the airport or station and return.
            <br />
            <span>&#10003;</span> MTLP and CASCO insurance.
            <br />
            <span>&#10003;</span> Navigation and kid's chair.
            <br />
            <span>&#10003;</span> Car wash.
            <br />
            <span>&#10003;</span> Lorem ipsum dolor, sit amet consectetur
            adipisicing elit.
            <br />
          </ChecklistD>
        </RentwordD>

        {/* h4 and range picker er left postion fix koro for smaller screen */}
        <h4 style={{ color: "#f5f5f5",position: "relative", top: "37%",left: "30%" }}> Search time slots </h4>
        <Row
          justify="center"
          className="d-flex align-items-center"
          style={{ position: "relative", top: "35%" }}
        >
          
          <Col lg={22} sm={22} md={24} className="text-center mt-5">
            <RangePicker
              showTime={{ format: "HH:mm" }}
              format="MMM DD yyyy HH:mm"
              onChange={setFilter}
            />
          </Col>
        </Row>

        <Segment
          bigger="Car Catalogue"
          style={{ position: "relative", top: "50%" }}
        />
        <Row
          justify="center"
          gutter={16}
          style={{ position: "relative", top: "40%" }}
        >
          {totalCars.map((car) => {
            return (
              <Col
                lg={5}
                md={7}
                sm={11}
                xs={22}
                className=" d-flex-iinline align-items-center justify-content-between mb-5"
              >
                <div class="card" style={{ backgroundColor: "#000",border: "2px solid #231F20" }}>
                  <img className="card-img-top" src={car.image} alt="Cardcap" />
                  <div class="card-body">
                    <h5 className="card-title" style={{ color: "#f5f5f5" }}>
                      {car.name}{" "}
                    </h5>
                    <h6 className="card-text" style={{ color: "#f5f5f5" }}>
                      ${car.price}/hour
                    </h6>
                    <button className="contact-more">
                      <Link to={`/booking/${car.id}`}>Book Now</Link>{" "}
                    </button>{" "}
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </RentalD>
      {/* <FooterD>
      <Footer />
      </FooterD> */}
    </>
  );
};

export default Rental;
