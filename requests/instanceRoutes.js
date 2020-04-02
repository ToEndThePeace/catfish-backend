const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// POST new instance
router.post("/inst", (req, res) => {
  // Pull information from the body
  const title     = req.body.title;
  const timestamp = req.body.timestamp;
  const duration  = req.body.duration;

  const instID = 1; //*****Change this later to pull index from DB*****

  // Store the new instance in a database

  // Return the instance id generated by the table
  res.json({
    id: instID
  });
});

// GET instances linked to a certain profile
router.get("/inst/:uid", (req, res) => {
    // Pull the id parameter out of the url
    const curID = req.params.uid;

    // Query to pull instances from data_instances using xref_new_profile to filter

    // Return the array of instance objects
    res.json([
        {
            title      : "Instance 1",
            start_time : "Some time",
            duration   : 7
        }
    ])
})

module.exports = router;