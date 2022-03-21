//Importing needed packages
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/errorHandler");
connectDB();
const logger = require("morgan");
const connectDB = require("./config/db");
const passport = require("passport");
const cors = require("cors");
require("dotenv").config();

const app = express();

//Routes
app.use("/", express.static("./public"));
app.use("/api/user", userRouter);
app.use("/api/movies", catalogRouter);
app.use("/api/auth", authRouter);

//Method to catch not Found error
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(errorHandler);

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
