import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Rental from "./pages/Rental";
import Sale from "./pages/Sale";
import Service from "./pages/Service";
import Signup from "./pages/Signup";
import Notfound from "./pages/Notfound";
import BookingCar from "./pages/BookingCar";
import RequireAuth from "./components/RequireAuth";
import UserBookings from "./pages/UserBookings";
import SingleService from "./pages/SingleService";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />

          <Route element={<RequireAuth />}>
            <Route path="/rent" element={<Rental />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/service" element={<Service />} />
            <Route path="/service/:id" element={<SingleService />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking/:carid" element={<BookingCar />} />
            <Route path="/userbookings" element={<UserBookings />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

////userbookings
