const buyRouter = require("express").Router();

const Buy = require("../models/buy");

//getting all the cars
buyRouter.get("/", (request, response) => {
  Buy.find({}).then((cars) => {
    response.json(cars);
  });
});

//getting a specific car
buyRouter.get("/:id", (request, response, next) => {
  Buy.findById(request.params.id)
    .then((car) => {
      if (car) {
        response.json(car);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => {
      next(error);
    });
});

//deleting a car
buyRouter.delete("/:id", (request, response, next) => {
  Buy.findByIdAndRemove(request.params.id)
    .then((result) => {
      console.log(result);
      response.status(204).end();
    })
    .catch((error) => {
      next(error);
    });
});

//adding a car
buyRouter.post("/", (request, response, next) => {
  const body = request.body;
  console.log(body);
  if (body.name === undefined) {
    return response.status(400).json({
      error: "content missing",
    });
  }
  const buy = new Buy({
    name: body.name,
    price: body.price,
    description: body.description,
    engine: body.engine,
    acceleration: body.acceleration,
    maxSpeed: body.maxSpeed,
    maxTorque: body.maxTorque,
    turbo: body.turbo,
    consumption: body.consumption,
    capacity: body.capacity,
    image: {
      image1: body.image.image1,
      image2: body.image.image2,
      image3: body.image.image3,
      image4: body.image.image4,
    },
    fuel: body.fuel,
  });
  buy
    .save()
    .then((savedandformated) => {
      response.json(savedandformated);
    })
    .catch((error) => {
      next(error);
    });
});

//data updating of a car
buyRouter.put(":id", (request, response, next) => {
  const body = request.body;
  const buy = {
    name: body.name,
    price: body.price,
    description: body.description,
    engine: body.engine,
    acceleration: body.acceleration,
    maxSpeed: body.maxSpeed,
    maxTorque: body.maxTorque,
    turbo: body.turbo,
    consumption: body.consumption,
    capacity: body.capacity,
    image: {
      image1: body.image.image1,
      image2: body.image.image2,
      image3: body.image.image3,
      image4: body.image.image4,
    },
    fuel: body.fuel,
  };
  Buy.findByIdAndUpdate(request.params.id, buy, {
    new: true,
    runValidators: true,
    context: "query",
  })
    .then((updatedcar) => {
      response.json(updatedcar);
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = buyRouter;
