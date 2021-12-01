import React, { useEffect, useState } from "react";
import styled from "styled-components";
import car from "../asset/images/red-car.png";
import Segment from "../components/Segment";
import Card from "../components/Card";
import About from "../components/About";
import Why from "../components/Why";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import DefaultLayout from "../components/DefaultLayout";
// import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import { useSelector, useDispatch } from "react-redux";
//styling

// const Container = styled.div`
//   position: relative;
//   left: 0%;
//   top: 8%;
//   width: 40%;
//   height: 45%;
//   color: #fff !important;

//   h1 {
//     font-family: "Pontano Sans", sans-serif;
//   }
//   p {
//     margin: 5% 10%;
//   }
 
//   }
// `;

const Home = () => {
  const { loading } = useSelector((state) => state.alertsReducer);
  const Container = styled.div`
  position: relative;
  left: 0%;
  top: 8%;
  width: 40%;
  height: 45%;
  color: #fff !important;

  h1 {
    font-family: "Pontano Sans", sans-serif;
  }
  p {
    margin: 5% 10%;
  }
 
  }
`;
  return (
    <>
      <DefaultLayout>
        {loading && <Spinner />}
        <img
          className="rent-img1"
          src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
          alt=""
        />
        <img className="home-img2" src={car} alt="" />

        <Container>
          <h1>Full Service Car Center</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <button className="contact-more">Let's get in touch</button>
        </Container>
        <Segment bigger="Our Services" />
        <Card />
        <About />
        <Segment bigger="Why us?" />
        <Why />
        <Faq />
        <Footer />
      </DefaultLayout>
    </>
  );
};

export default Home;
