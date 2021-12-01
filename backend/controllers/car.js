const carsRouter = require("express").Router();

const Car = require("../models/car");

//getting all the cars
carsRouter.get("/", (request, response) => {
  Car.find({}).then((cars) => {
    response.json(cars);
  });
});

//getting a specific car
carsRouter.get("/:id", (request, response, next) => {
  Car.findById(request.params.id)
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
carsRouter.delete("/:id", (request, response, next) => {
  Car.findByIdAndRemove(request.params.id)
    .then((result) => {
      console.log(result);
      response.status(204).end();
    })
    .catch((error) => {
      next(error);
    });
});

//adding a car
carsRouter.post("/", (request, response, next) => {
  const body = request.body;
  console.log(body);
  if (body.name === undefined) {
    return response.status(400).json({
      error: "content missing",
    });
  }
  const car = new Car({
    name: body.name,
    price: body.price,
    image: body.image,
    engine: body.engine,
    acceleration: body.acceleration,
    maxSpeed: body.maxSpeed,
    maxTorque: body.maxTorque,
    turbo: body.turbo,
    consumption: body.consumption,
    capacity:body.capacity,
  });
  car
    .save()
    .then((savedandformated) => {
      response.json(savedandformated);
    })
    .catch((error) => {
      next(error);
    });
});

//data updating of a car
carsRouter.put("/api/getallcars/:id", (request, response, next) => {
  const body = request.body;
  const car = {
    name: body.name,
    price: body.price,
    image: body.image,
    engine: body.engine,
    acceleration: body.acceleration,
    maxSpeed: body.maxSpeed,
    maxTorque: body.maxTorque,
    turbo: body.turbo,
    consumption: body.consumption,
  };
  Car.findByIdAndUpdate(request.params.id, car, {
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
module.exports = carsRouter;
