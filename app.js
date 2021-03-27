const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });
require("./db/conn")
const PORT = process.env.PORT;


// middleware
const middleware = (req, res, next) => {
  console.log("Hello");
  next();
};

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", middleware, (req, res) => {
  res.send("Hello World from about");
});

app.get("/contact", (req, res) => {
  res.send("Hello World from contact");
});

app.get("/signin", (req, res) => {
  res.send("Hello World login");
});

app.get("/signup", (req, res) => {
  res.send("Hello World signup");
});

app.get("*", (req, res) => {
  res.send("404 page not found"); 
});

app.listen(PORT, () => {
  console.log(`Server is running on at port number ${PORT} and at http://localhost:${PORT}`);
});
