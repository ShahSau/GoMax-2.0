import React from "react";
import { Row, Col, Form, Input, Carousel } from "antd";

import Spinner from "../components/Spinner";
import { useSelector } from "react-redux";
import contactImg from "../asset/images/car-contact.jpeg";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Footer from "../components/Footer";
import ConCard from "../components/ConCard";

const Contacts = () => {
  const LoginD = styled.div`
    height: 100vh;
    min-width: 100vw;
    overflow-x: hidden;
    position: relative;
    color: #f5f5f5 !important;
    p {
      color: #f5f5f5 !important;
    }
    h1 {
      color: #f5f5f5 !important;
    }
    label {
      color: #f5f5f5 !important;
    }
  `;
  const LocationD = styled.div`
    position: relative;
    top: 5%;
  `;
  const { loading } = useSelector((state) => state.alertsReducer);
  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <LoginD>
      {loading && <Spinner />}
      <Navbar />
      <img
        className="rent-img11"
        src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
        alt=""
      />

      <img className="rent-img22" src={contactImg} alt="" />
      <Row>
        <Col lg={8} md={10} xs={24}>
          {" "}
          <Form
            layout="vertical"
            className="login-form p-5"
            onSubmitCapture={sendEmail}
          >
            {" "}
            <h1>Contact</h1>
            <hr />
            <Form.Item name="name" label="Name" rules={[{ required: false }]}>
              <Input />
            </Form.Item>
            <Form.Item name="email" label="Email" rules={[{ required: false }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="subject"
              label="Subject"
              rules={[{ required: false }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: false }]}
            >
              <Input />
            </Form.Item>
            <button className="contact-more mt-2">Send</button>
          </Form>
        </Col>
        <Col lg={16} s={24} xs={24} m={24}>
          <img className="w-100 rent-img32" src={contactImg} alt="add" />
        </Col>
      </Row>
      <LocationD>
        <h1>Our Location </h1>
        <Row
          justify="center"
          gutter={16}
          style={{ position: "relative", top: "30%" }}
        >
          <Col
            lg={10}
            md={10}
            sm={22}
            xs={22}
            className=" d-flex-iinline align-items-center justify-content-between mb-5"
          >
            <ConCard name="GoMax Vantaa" phone ="+35844454554" email="vantaa@gomax.fi" address="loremispum 22, finland" hours1="0900-1800" hours2="1100-1500" />
          </Col>
          <Col
            lg={10}
            md={10}
            sm={22}
            xs={22}
            className=" d-flex-iinline align-items-center justify-content-between mb-5"
          >
             <ConCard name="GoMax Espoo" phone ="+35844454554" email="espoo@gomax.fi" address="loremispum 22, finland" hours1="0900-1800" hours2="1100-1500" />
          </Col>
          <Col
            lg={10}
            md={10}
            sm={22}
            xs={22}
            className=" d-flex-iinline align-items-center justify-content-between mb-5"
          >
             <ConCard name="GoMax Helsinki" phone ="+35844454554" email="helsinki@gomax.fi" address="loremispum 22, finland" hours1="0900-1800" hours2="1100-1500" />
          </Col>
          <Col
            lg={10}
            md={10}
            sm={22}
            xs={22}
            className=" d-flex-iinline align-items-center justify-content-between mb-5"
          >
             <ConCard name="GoMax Turku" phone ="+35844454554" email="turku@gomax.fi" address="loremispum 22, finland" hours1="0900-1800" hours2="1100-1500" />
          </Col>
        </Row>
      </LocationD>
      <Footer />
    </LoginD>
  );
};
export default Contacts;
