import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllService } from "../redux/actions/serviceAction";
import Spinner from "../components/Spinner";
import { Col, Row, Button } from "antd";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
function SingleService({ match }) {
  const dispatch = useDispatch();
  const { services } = useSelector((state) => state.serviceReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const { id } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    if (services.length === 0) {
      dispatch(getAllService());
    } else {
      setService(services.find((o) => o.id === id));
      console.log(service);
    }
  }, [services]);

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
          <button className="contact-more">
            <Link to={`/service`}>Back to Services</Link>{" "}
          </button>
          <div class="card" style={{ backgroundColor: "#000" }}>
            <img src={service.image} className="card-img-top" alt="car" />
            <div class="card-body">
              <h5 class="card-title" style={{ color: "#f5f5f5" }}>
                {service.name}
              </h5>
              <h6 class="card-text" style={{ color: "#f5f5f5" }}>
                ${service.price}/hour
              </h6>
              <p class="card-text" style={{ color: "#f5f5f5" }}>
                {service.description}
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SingleService;
