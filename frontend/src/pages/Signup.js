import React, { useState, useEffect } from "react";
import { Row, Col, Form, Input } from "antd";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import loginImg from "../asset/images/loginImg.jpeg";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import signupI from "../asset/images/signup.jpeg";
import Footer from "../components/Footer";
import { userRegister } from "../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [value, setvalue] = useState("");
  let navigate = useNavigate();
  const SignD = styled.div`
    height: 100vh;
    min-width: 100vw;
    overflow-x: hidden;
    color: #da0314;
    position:relative;
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
  const { loading } = useSelector((state) => state.alertsReducer);
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(userRegister(values));
    setvalue(values);
  };
  useEffect(() => {
    if (value) {
      navigate("/");
    }
  }, [value]);
  return (
    <SignD>
      {loading && <Spinner />}
      <Navbar />
      <img
        className="rent-img11"
        src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
        alt=""
      />

      <img className="rent-img22" src={signupI} alt="signup car" />
      <Row>
        <Col lg={8} md={10} xs={24}>
          {" "}
          <Form
            layout="vertical"
            className="login-form p-5"
            onFinish={onFinish}
          >
            {" "}
            <h1>Sign Up</h1>
            <hr />
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true }]}
            >
              <Input type="password" />
            </Form.Item>
            <Form.Item
              name="cpassword"
              label="Confirm Password"
              rules={[{ required: true }]}
            >
              <Input type="password" />
            </Form.Item>
            <button className="contact-more mt-2">Sign Up</button>
            <hr />
            <p>Already have an account? </p>
            <Link to="/login">
              <button className="login-more mt-2">Login</button>
            </Link>
          </Form>
        </Col>
        <Col lg={16} s={24} xs={24} m={24}>
          <img
            className="w-100 rent-img32"

            src={signupI}
            alt="ddd"
          />
        </Col>
      </Row>
      <Footer />
    </SignD>
  );
};

export default Signup;
