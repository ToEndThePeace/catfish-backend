require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const routes = require("../routes");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api", routes);

server.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Hello from Catfish backend!"
  });
});

// Catch all for invalid routes

server.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "Invalid route!"
  });
});

server.post("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "Invalid route!"
  });
});

module.exports = server;
