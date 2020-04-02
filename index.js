require("dotenv").config();

const port = process.env.PORT || 4000;
const express = require("express");
const testRoutes = require("./testing/testRoutes")

const server = express();

server.use(express.json());
server.use("/test", testRoutes);

server.use("/", (req, res) => {
  res.status(200).send("Hello World!!");
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
