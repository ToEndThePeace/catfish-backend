const express = require("express");
const bodyParser = require("body-parser");
const { addInstance } = require("../models/instanceModel");
const { getInstanceById } = require("../models/instanceModel");
const { getInstances } = require("../models/instanceModel");

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Create New Instance
router.post("/", (req, res) => {
  // Pull information from the body
  const title = req.body.title;
  // Store the new instance in a database
  addInstance({ title })
    .then((instance) => {
      res.status(201).json(instance);
    })
    .catch((err) => {
      res.status(400).json({
        status: 400,
        message: err,
      });
    });
});

// GET instances with a given id
router.get("/:iid", (req, res) => {
  // Pull the id parameter out of the url
  const getId = req.params.iid;

  // Knex nodel query to database
  getInstanceById(getId)
    .then((instance) => {
      res.status(200).json(instance);
    })
    .catch((err) => {
      res.status(404).json({
        status: 404,
        message: err,
      });
    });
});

module.exports = router;
