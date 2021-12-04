const mongoose = require("mongoose");

const buySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    image1: { type: String, required: true },
    image2: { type: String, required: true },
    image3: { type: String, required: true },
    image4: { type: String, required: true },
  },

  engine: {
    type: String,
    required: true,
  },
  acceleration: {
    type: String,
    required: true,
  },
  maxSpeed: {
    type: String,
    required: true,
  },
  maxTorque: {
    type: String,
    required: true,
  },
  turbo: {
    type: String,
    required: true,
  },
  consumption: {
    type: String,
    required: true,
  },
  capacity: {
    type: String,
    required: true,
  },
  fuel: {
    type: String,
    required: true,
  },
  // user: { type: mongoose.Schema.Types.ObjectID, ref: "User" },
});
buySchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Buy", buySchema);
