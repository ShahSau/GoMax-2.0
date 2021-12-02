import React, { useState, useEffect } from "react";
import { Row, Col, Form, Input } from "antd";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useSelector, useDispatch } from "react-redux";
import loginImg from "../asset/images/loginImg.jpeg";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Footer from "../components/Footer";
import { userLogin } from "../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
function Login() {
  const [value, setValue] = useState("");
  let navigate = useNavigate();
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
  const { loading } = useSelector((state) => state.alertsReducer);
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(userLogin(values));
    setValue(values);
  };
  useEffect(() => {
    if (value) {
      navigate("/");
    }
  }, [value]);
  //google login
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: "AUTH", data: { result, token } });
      console.log(token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = (error) => {
    console.log(error);
    console.error("Google singin was not successfull. Try again!");
  };

  ///facebook login

  const responseFacebook = async (response) => {
    const name = response?.name;
    const token = response?.accessToken;
    try {
      dispatch({ type: "FAUTH", data: { name, token } });
      console.log(token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    console.log(response);
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

      <img className="rent-img22" src={loginImg} alt="" />
      <Row>
        <Col lg={8} md={10} xs={24}>
          {" "}
          <Form
            layout="vertical"
            className="login-form p-5"
            onFinish={onFinish}
          >
            {" "}
            <h1>Login</h1>
            <hr />
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
            <button className="contact-more mt-2">Login</button>
          </Form>
          <p>Or Sign in using</p>
          <FacebookLogin
            appId={process.env.REACT_APP_FACRBOOK_ID}
            // autoLoad
            callback={responseFacebook}
            render={(renderProps) => (
              <button
                className="login-more mt-2 mr-2"
                onClick={renderProps.onClick}
              >
                <FaFacebookF />
              </button>
            )}
          />
          
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_ID}
            render={(renderProps) => (
              <button
                className="login-more mt-2 ml-2"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                variant="contained"
              >
                <BsGoogle />
              </button>
            )}
            buttonText="Login"
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy={"single_host_origin"}
          />
          <hr />
          <p>Dont have an account? </p>
          <Link to="/register">
            <button className="login-more mt-2 mb-5">SignUp</button>
          </Link>
        </Col>

        <Col lg={16} s={24} xs={24} m={24}>
          <img
            data-aos-duration="1500"
            src={loginImg}
            alt="add"
            className="rent-img32"
          />
        </Col>
      </Row>
      <Footer />
    </LoginD>
  );
}

export default Login;
