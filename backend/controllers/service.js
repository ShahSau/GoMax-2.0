const serviceRouter = require("express").Router();

const Service = require("../models/service");

//getting all the service
serviceRouter.get("/", (request, response) => {
  Service.find({}).then((service) => {
    response.json(service);
  });
});

//adding a service
serviceRouter.post("/", (request, response, next) => {
  const body = request.body;
  console.log(body);
  if (body.name === undefined) {
    return response.status(400).json({
      error: "content missing",
    });
  }
  const caservicer = new Service({
    name: body.name,
    price: body.price,
    image: body.image,
    description: body.description,
  });
  caservicer
    .save()
    .then((savedandformated) => {
      response.json(savedandformated);
    })
    .catch((error) => {
      next(error);
    });
});

//getting a specific service
serviceRouter.get("/:id", (request, response, next) => {
  Service.findById(request.params.id)
    .then((service) => {
      if (service) {
        response.json(service);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => {
      next(error);
    });
});

//deleting a service
serviceRouter.delete("/:id", (request, response, next) => {
    Service.findByIdAndRemove(request.params.id)
      .then((result) => {
        console.log(result);
        response.status(204).end();
      })
      .catch((error) => {
        next(error);
      });
  });


  //data updating of a car
  serviceRouter.put("/:id", (request, response, next) => {
    const body = request.body;
    const service = {
        name: body.name,
        price: body.price,
        image: body.image,
        description: body.description,
    };
    Service.findByIdAndUpdate(request.params.id, service, {
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

module.exports = serviceRouter;
