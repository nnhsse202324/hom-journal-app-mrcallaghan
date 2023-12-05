const express = require("express");
const route = express.Router();

// easy way to assign static data (e.g., array of strings) to a variable
const habitsOfMind = require("../model/habitsOfMind.json");

// pass a path (e.g., "/") and callback function to the get method
//  when the client makes an HTTP GET request to the specified path,
//  the callback function is executed
route.get("/", (req, res) => {
  // the req parameter references the HTTP request object, which has a number
  //  of properties
  console.log("path requested:" + req.path);

  // the res parameter references the HTTP response object
  res.render("index");
});

route.get("/createEntry", (req, res) => {
  res.render("createEntry", { habits: habitsOfMind});
});

module.exports = route;
