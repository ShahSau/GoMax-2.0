const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
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
  capacity:{
    type:String,
    required:true,
  },
  fuel:{
    type:String,
    required:true,
  },
  bookedTimeSlots : [
    {
        from : {type : String , required : true},
        to : {type : String , required : true}
    }
] ,
booking: { type: mongoose.Schema.Types.ObjectID, ref: "bookings" },
});
carSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Car", carSchema);
