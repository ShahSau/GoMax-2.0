const bookingRouter = require("express").Router();
const Booking = require("../models/booking");
const express = require("express");
const Car = require("../models/car");
const { v4: uuidv4 } = require('uuid');
const stripe = require("stripe")(
  "sk_test_51JwUEwJfaoIGDApqlU9OXYGiHMIC34ijiI8N2y3gvP5ZFCdZqQIIfrgHU0ObOsA1kdsLOI7vHUlvCNfv78p8Nrfy00sbOM2VxE"
);
bookingRouter.post("/bookcar", async (req, res, next) => {
  req.body.transactionId = "1234";
  const body = req.body;
  try {
    const customer = await stripe.customers.create({
      email: body.token.email,
      source: body.token.id,
    });
    const payment = await stripe.charges.create(
      {
        amount: body.totalAmount * 100,
        currency: "EUR",
        customer: customer.id,
        receipt_email: body.token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    if (payment) {
      const newbooking = new Booking({
        car: body.car,
        user: body.user,
        bookedTimeSlots: {
          from: body.bookedTimeSlots.from,
          to: body.bookedTimeSlots.to,
        },
        totalHours: body.totalHours,
        totalAmount: body.totalAmount,
        transactionId: payment.source.id, ///////////////////////////////////////////////
      });
      const car = await Car.findOne({ _id: body.car });
      car.bookedTimeSlots.push(body.bookedTimeSlots);
      car.save();
      newbooking.save().then((savedBooking) => {
        res.send("Your booking is successful");
      });
    } else {
      return res.status(400).json(error);
      next(error);
    }
  } catch (error) {
    next(error);
  }
});


bookingRouter.get("/getallbookings", async(req, res) => {

  try {

      const bookings = await Booking.find().populate('car')
      res.send(bookings)
      
  } catch (error) {
      return res.status(400).json(error);
  }

});


module.exports = bookingRouter;
