import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
//use bootstrap navbar
const DefaultLayout = (props) => {
  return (
    <div>
      {/* non logged user nav bar is : Home Rent Service Sale Signin signup  */}
      <Navbar />
      <div className="content">{props.children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default DefaultLayout;
