const favRouter = require("express").Router();
const Fav = require("../models/fav");
const express = require("express");
const Car = require("../models/car");
const { v4: uuidv4 } = require("uuid");

favRouter.post("/addfavourite", async (req, res, next) => {
  const body = req.body;
try{
  const newCar = new Fav({
    car: body.car,
    user: body.user,
    name: body.name,
    price: body.price,
    description: body.description,
    engine: body.engine,
    acceleration: body.acceleration,
    maxSpeed: body.maxSpeed,
    turbo: body.turbo,
    consumption: body.consumption,
    capacity: body.capacity,
    image: body.image,
    fuel: body.fuel,
    loved: true,
    maxTorque:body.maxTorque,
  });
  newCar.save().then((saved)=>{
    res.send("Added to favourite")
  })
}catch(error){
  next(error)
}
});

favRouter.get("/getallfavourite", async (req,res)=>{
  try{
    const favourites = await Fav.find().populate('car')
    res.send(favourites)
  }catch(error){
    return res.status(400).json(error)
  }
})

module.exports = favRouter;
