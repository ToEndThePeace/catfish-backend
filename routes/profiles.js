const express = require("express");
const bodyParser = require("body-parser");
const {
  addProfile,
  getProfilesByInstanceId
} = require("../models/profileModel");
const { findInstance } = require("../models/instanceModel");
const upload = require("../utils/cloudinary");
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// POST new profile
// Should run automatically after a new instance is created (ideally)
router.post("/:inst_id", upload.single("pic_url"), async (req, res) => {
  // Pull the instance id from parameter
  const inst_id = req.params.inst_id;
  // Pull user_id from token
  const user_id = 1;

  const ref = {
    instance_id: inst_id,
    user_id
  };

  // Pull profile information from the body

  const profile = {
    display_name: req.body.name,
    about: req.body.bio,
    dob: req.body.dob,
    pic_url: !req.file ? "" : req.file.secure_url
  };

  // Verify game instance before storing data
  try {
    const instance = await findInstance(inst_id);

    // Store the profile info in data_profiles
    if (!instance || !instance.length) {
      res
        .status(400)
        .json({ errorMessage: "No instance of that id available" });
    } else {
      addProfile(profile, ref)
        .then(newProfile => {
          res.status(201).json(newProfile);
        })
        .catch(err => {
          console.log(err);
        });
    }
  } catch (error) {
    console.log(error);
  }

  // Store the id index from the database
  //   const newProfID = 1; //*****Change the 1*****

  // Store the image sent up as well???

  // Add a new entry into xref_new_profile to map the user,
  // instance, and profile together

  // Return the profile index from db
  //   res.json(newProfID);
});

// GET all profiles linked to a game instance
router.get("/:inst_id", async (req, res) => {
  // Pull instance ID from parameter
  const inst_id = req.params.inst_id;

  // Query the database to return an array of profile objects

  // Verify game instance before storing data
  try {
    const instance = await findInstance(inst_id);

    // Store the profile info in data_profiles
    if (!instance || !instance.length) {
      res
        .status(400)
        .json({ errorMessage: "No instance of that id available" });
    } else {
      getProfilesByInstanceId(inst_id)
        .then(profiles => {
          res.status(200).json(profiles);
        })
        .catch(err => {
          console.log(err);
        });
    }
  } catch (error) {
    console.log(error);
  }

  // send back the array of profile objects in json
  //   res.json(instProfs);
});

// GET a profile by id within a game instance
router.get("/:inst_id/:prof_id", (req, res) => {
  // Pull parameters
  const inst_id = req.params.inst_id;
  const prof_id = req.params.prof_id;

  // Query the database to return the desired profile object
  const curProf = {
    display_name: "Barbra Streisand",
    about: "If you know, you know",
    dob: "Some date"
    // Then somehow pull the picture URL from our cloud storage?
  };

  // Send back the profile object in JSON
  res.json(curProf);

  /* 
        What this in reality needs to do is to query the db,
        and send back an array of objects - the first object 
        being the profile object, and the rest being the
        posts associated with the given profile
    */
});

module.exports = router;
