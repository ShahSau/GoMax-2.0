import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllCars } from "../redux/actions/carsAction";
import Spinner from "../components/Spinner";
import { Col, Row, Divider, DatePicker, Modal } from "antd";
import moment from "moment";
import { bookCar } from "../redux/actions/bookingActions";
import StripeCheckout from "react-stripe-checkout";
import Navbar from "../components/Navbar";
import { FcEngineering } from "react-icons/fc";
import { GiFuelTank } from "react-icons/gi";
import { SiTurbosquid } from "react-icons/si";
import { BsSpeedometer2 } from "react-icons/bs";
import { GiScrew } from "react-icons/gi";
import { GiCarSeat } from "react-icons/gi";
import { MdOutlineSpeed } from "react-icons/md";
import Footer from "../components/Footer";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { GiGasPump } from "react-icons/gi";


function BookingCar({ match }) {
  const { cars } = useSelector((state) => state.carsReducer);
  const { carid } = useParams();
  const { loading } = useSelector((state) => state.alertsReducer);
  const [car, setCar] = useState({});
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [totalHours, setTotalHours] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const { RangePicker } = DatePicker;

  const dispatch = useDispatch();
  console.log(totalAmount);
  useEffect(() => {
    if (cars.length === 0) {
      dispatch(getAllCars());
    } else {
      setCar(cars.find((o) => o.id === carid));
      console.log(car);
    }
  }, [cars]);
  function selectTimeSlots(values) {
    setFrom(moment(values[0]).format("MMM DD yyyy HH:mm"));
    setTo(moment(values[1]).format("MMM DD yyyy HH:mm"));

    setTotalHours(values[1].diff(values[0], "hours"));
  }
  //   console.log(totalHours);
  useEffect(() => {
    setTotalAmount(totalHours * Number(car.price));
  }, [totalHours, car.price]);

  const onToken = (token) => {
    const reqObj = {
      token,
      user: JSON.parse(localStorage.getItem("gomax-user")).id,
      car: carid,
      totalHours,
      totalAmount,
      bookedTimeSlots: {
        from,
        to,
      },
    };

    dispatch(bookCar(reqObj));
  };
  return (
    <div>
      {loading && <Spinner />}
      <Navbar />
      <Row
        justify="center"
        className="d-flex align-items-center"
        style={{ minHeight: "90vh" }}
      >
        <Col lg={16} sm={16} xs={24} className="p-3">
          {/* <img src={car.image} className="carimg2 bs1 w-100" alt="book car" /> */}
          <button className="contact-more">
            <Link to={`/rent`}><BsFillArrowLeftSquareFill color="#fff" fontSize="2.5em"/></Link>{" "}
          </button>
          <div class="card" style={{backgroundColor:"#000"}}>
            <img src={car.image} className="card-img-top" alt="car" />
            <div class="card-body">
              <h5 class="card-title" style={{color:"#f5f5f5"}}>{car.name}</h5>
              <h6 class="card-text" style={{color:"#f5f5f5"}}>${car.price}/hour</h6>
            </div>
            {/* <ul class="list-group list-group-flush"> */}
            <div className="row">
            <div class="col">
              <h6 style={{color:"#f5f5f5"}}>
                {" "}
                <FcEngineering />
                &nbsp; {car.engine}{" "}
              </h6>
              
              <h6 style={{color:"#f5f5f5"}}>
                <GiFuelTank /> &nbsp; {car.consumption}
              </h6>
              <h6 style={{color:"#f5f5f5"}}>
                <SiTurbosquid /> &nbsp; {car.turbo}
              </h6>
              <h6 style={{color:"#f5f5f5"}}>
                <GiGasPump /> &nbsp; {car.fuel}
              </h6>
              </div>
              <div class="col">
              <h6 style={{color:"#f5f5f5"}}>
                <BsSpeedometer2 /> &nbsp; {car.maxSpeed}
              </h6>
              <h6 style={{color:"#f5f5f5"}}>
                <MdOutlineSpeed /> &nbsp; {car.acceleration}
              </h6>
              <h6 style={{color:"#f5f5f5"}}>
                <GiScrew /> &nbsp; {car.maxTorque}
              </h6>
              <h6 style={{color:"#f5f5f5"}}>
                <GiCarSeat /> &nbsp; {car.capacity}
              </h6>
              </div>
              </div>
            {/* </ul> */}
          </div>
        </Col>
        <Col lg={24} sm={24} xs={24} className="text-center mb-5">
          <Divider type="horizontal">
            <h6 style={{color:"#f5f5f5"}}> Select Time Slots </h6>
          </Divider>
          <RangePicker
            showTime={{ format: "HH:mm" }}
            format="MMM DD yyyy HH:mm"
            onChange={selectTimeSlots}
          />
          <br />
          <button className="contact-more" onClick={() => setShowModal(true)}>
            See boooked slots{" "}
          </button>
          <div>
            {totalHours !== 0 && (
              <p>Total Booked time(in Hours) {totalHours}</p>
            )}
            {totalAmount !== 0 && <p>Total amount is: €{totalAmount} </p>}
            <StripeCheckout
              shippingAddress
              token={onToken}
              currency="EUR"
              amount={totalAmount * 100} //it takes ammount in cents
              stripeKey="pk_test_51JwUEwJfaoIGDApqWTIsMFqcieygsKsANOwJLQQrV5cktov7by0RM5steVlCZQeOfeuNIbnBWjyv4WPTW9zAj1os00DmGhKlek"
            >
              <button className="contact-more">Book Now</button>{" "}
            </StripeCheckout>
          </div>
        </Col>
      </Row>
      {typeof car.bookedTimeSlots !== "undefined" && (
        <Modal
          visible={showModal}
          closable={false}
          footer={false}
          title="Booked time slots"
        >
          <div className="p-2">
            {car.bookedTimeSlots.map((slot) => {
              return (
                <button className="contact-more" style={{ color: "#000" }}>
                  {slot.from} - {slot.to}
                </button>
              );
            })}

            <div className="text-right mt-5">
              <button
                className="contact-more"
                style={{ color: "#000" }}
                onClick={() => {
                  setShowModal(false);
                }}
              >
                CLOSE
              </button>
            </div>
          </div>
        </Modal>
      )}
      <Footer />
    </div>
  );
}

export default BookingCar;
