require("dotenv").config();

const port = process.env.PORT || 4000;
const express = require("express");

//Dev enpoint testing
const testRoutes = require("./testing/testRoutes");

const instanceRoutes = require("./requests/instanceRoutes");
const profileRoutes  = require("./requests/profileRoutes");

const server = express();

server.use(express.json());
server.use("/test", testRoutes);
server.use("/inst", instanceRoutes);
server.use("/prof", profileRoutes);
server.use("/feed", postRoutes);

server.use("/", (req, res) => {
  res.status(200).send("Hello World!!");
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
