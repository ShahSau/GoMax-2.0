import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookings } from "../redux/actions/bookingActions";
import { Col, Row } from "antd";
import Spinner from "../components/Spinner";
import moment from "moment";
import Navbar from "../components/Navbar";
function UserBookings() {
  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.bookingsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const user = JSON.parse(localStorage.getItem("gomax-user"));
  useEffect(() => {
    dispatch(getAllBookings());
  }, []);

  return (
    <>
      {loading && <Spinner />}
      <Navbar />
      <h3 className="text-center mt-2" style={{ color: "#f5f5f5" }}>
        My Bookings
      </h3>
      <Row justify="center" gutter={16}>
        <Col lg={16} sm={24}>
          {bookings
            .filter((o) => o.user === user.id)
            .map((booking) => {
              return (
                <Row gutter={16} className="d-flex-inline align-items-center">
                  <Col lg={16} sm={16} xs={24} className="text-center p-3">
                    <div class="card" style={{ backgroundColor: "#231F20" }}>
                      <img
                        src={booking.car.image}
                        className="card-img-top"
                        alt="car"
                      />
                      <div class="card-body">
                        <h5 class="card-title" style={{ color: "#f5f5f5" }}>
                          {booking.car.name}
                        </h5>
                        <p class="card-text" style={{ color: "#f5f5f5" }}>
                          ${booking.car.price}/hour
                        </p>
                        <div className="row">
                          <div class="col">
                            <p class="card-text" style={{ color: "#f5f5f5" }}>
                              Total Amount: ${booking.totalAmount}
                            </p>
                          </div>
                          <div class="col">
                            <p class="card-text" style={{ color: "#f5f5f5" }}>
                              Total Hours: {booking.totalHours}
                            </p>
                          </div>
                        </div>
                        {/* <p class="card-text" style={{color:"#f5f5f5"}}>Total: ${booking.totalAmount}</p>
                      <p class="card-text" style={{color:"#f5f5f5"}}>Total Hours: {booking.totalHours}</p> */}
                        <p class="card-text" style={{ color: "#f5f5f5" }}>
                          Transaction Id : {booking.transactionId}
                        </p>
                        {booking.bookedTimeSlots && (
                          <div className="row">
                            <div class="col">
                              <p class="card-text" style={{ color: "#f5f5f5" }}>
                                From :{" "}
                                {Object.values(booking.bookedTimeSlots)[0]}
                              </p>
                            </div>
                            <div class="col">
                              <p class="card-text" style={{ color: "#f5f5f5" }}>
                                To : {Object.values(booking.bookedTimeSlots)[1]}
                              </p>
                            </div>
                          </div>
                        )}
                        <p class="card-text" style={{ color: "#f5f5f5" }}>
                          Date of booking :{" "}
                          {moment(booking.createdAt).format("MMM DD yyyy")}
                        </p>
                      </div>
                    </div>
                  </Col>

                  {/* <Col lg={6} sm={24} className="text-right">
                    <img
                      style={{ borderRadius: 5 }}
                      src={booking.car.image}
                      height="140"
                      className="p-2"
                      alt="car "
                    />
                  </Col> */}
                </Row>
              );
            })}
        </Col>
      </Row>
    </>
  );
}

export default UserBookings;
