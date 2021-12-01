import React from "react";
import styled from "styled-components";
import logo from "../asset/images/logo.png";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Menu, Dropdown, Button, Space, Row, Col } from "antd";



// fixed with white background
const Navbar = () => {
  let navigate = useNavigate();
  const Dnav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem 2rem;
    z-index: 1000000;
    width: 100%;
    top: 0%;
    opacity: 1;
    

    img {
      width: 50%;
    }
    ul {
      display: flex;
      list-style: none;
    }
    a {
      color: #000;
      padding: 0 0.5rem;

      margin-right: 0.6rem;
    }
    a:hover {
      color: #da0314;
      border-bottom: 1px solid #da0314;
    }

    @media (max-width: 990px) {
      display: block;
      text-align: center;
      nav {
        text-align: center;
        justify-content: center;
        ul {
          text-align: center;
          justify-content: center;
          list-style: none;
        }
        a {
          color: #da0314;
        }
      }
    }
  `;
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/contact" />
        Contact
      </Menu.Item>
      <Menu.Item>
        <Link to="/userbookings" />
        My Bookings
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          localStorage.removeItem("gomax-user");
          navigate("/");
        }}
      >
        <li style={{ color: "red" }}>Logout</li>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dnav>
      <h1>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </h1>
      <nav>
        <>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {localStorage.getItem("gomax-user") && (
              <li>
                <NavLink to="/service">Service</NavLink>
              </li>
            )}
            {localStorage.getItem("gomax-user") && (
              <li>
                <NavLink to="/sale">Buy</NavLink>
              </li>
            )}
            {localStorage.getItem("gomax-user") && (
              <li>
                <NavLink to="/rent">Rent</NavLink>
              </li>
            )}
            {!localStorage.getItem("gomax-user") && (
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            )}
            {!localStorage.getItem("gomax-user") && (
              <li>
                <NavLink to="/register">SignUp</NavLink>
              </li>
            )}

            {localStorage.getItem("gomax-user") && (
              <Dropdown overlay={menu} placement="bottomCenter">
                <Button className="buttonS">me</Button>
              </Dropdown>
            )}
          </ul>
        </>
      </nav>
    </Dnav>
  );
};

export default Navbar;
