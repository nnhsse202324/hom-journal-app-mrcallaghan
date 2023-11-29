/**
 * main Javascript file for the application
 *  this file is executed by the Node server
 */

// import the express module, which exports the express function
const express = require("express");

// invoke the express function to create an Express application
const app = express();

// pass a path (e.g., "/") and callback function to the get method
//  when the client makes an HTTP GET request to the specified path,
//  the callback function is executed
app.get("/", (req, res) => {
  // the req parameter references the HTTP request object, which has a number
  //  of properties
  console.log("path:" + req.path);

  // the res parameter references the HTTP response object
  res.send("Hello World!");
});

// start the server on port 8080
app.listen(8080, () => {
  console.log("server is listening on http://localhost:8080");
});
