const createError = require("http-errors");
//Importing express and path package
const express = require("express");
const path = require("path");

//package to parse cookie values
const cookieParser = require("cookie-parser");
const app = express();

//Method to catch not Found error
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
