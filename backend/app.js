const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Car = require("./models/car");
const cors = require("cors");
const logger = require("./utils/logger");
const middleware = require("./utils/middleware");
const carsRouter = require("./controllers/car");
const usersRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");
const bookingRouter = require("./controllers/bookings")
const serviceRouter = require("./controllers/service")
const config = require("./utils/config");
mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    logger.info("connceted to mongodb");
  })
  .catch(() => {
    logger.error("error connecting to mongoDB", error.message);
  });
app.use(cors());
app.use(express.json());
app.use("/api/getallcars", carsRouter);
app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);
app.use("/api/bookings", bookingRouter)
app.use("/api/service", serviceRouter)

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.use(middleware.unknownEndpoint);

app.use(middleware.errorHandler);

module.exports = app;
