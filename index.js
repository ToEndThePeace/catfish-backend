// Environment Variable Initialization
require("dotenv").config();
const port = process.env.PORT || 4000;

// Server Definitions
const express = require("express");

// Define Routers
const userRoutes     = require("./requests/userRoutes");
const instanceRoutes = require("./requests/instanceRoutes");
const profileRoutes  = require("./requests/profileRoutes");
const feedRoutes     = require("./requests/feedRoutes");
const postRoutes     = require("./requests/postRoutes");
const commentRoutes  = require("./requests/commentRoutes");

// Server Initialization
const server = express();
server.use(express.json());

//Dev endpoint testing // Drop Later ********
const testRoutes = require("./testing/testRoutes");
server.use("/test", testRoutes);

// Call Routers
server.use("/user", userRoutes);
server.use("/inst", instanceRoutes);
server.use("/prof", profileRoutes);
server.use("/feed", feedRoutes);
server.use("/p",    postRoutes);
server.use("/c",    commentRoutes);

server.use("/", (req, res) => {
  res.status(200).send("Hello World!!");
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
