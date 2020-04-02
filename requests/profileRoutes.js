const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// POST new profile
// Should run automatically after a new instance is created (ideally)
router.post("/:inst_id", (req, res) => {
    // Pull the instance id from parameter
    const inst_id = req.params.inst_id;

    // Pull profile information from the body
    const display_name = req.body.name;
    const about = req.body.bio;
    const dob = req.body.dob;

    // Store the profile info in data_profiles

    // Store the id index from the database
    const newProfID = 1; //*****Change the 1*****
    
    // Store the image sent up as well???

    // Add a new entry into xref_new_profile to map the user,
    // instance, and profile together

    // Return the profile index from db
    res.json(newProfID);
});

// GET all profiles linked to a game instance
router.get("/:inst_id", (req, res) => {
    // Pull instance ID from parameter
    const inst_id = req.params.inst_id;

    // Query the database to return an array of profile objects
    const instProfs = [
        {
            display_name: "Barbra Streisand",
            about: "If you know, you know",
            dob: "Some date"
            // Then somehow pull the picture URL from our cloud storage?
        },
        {}
    ];

    // send back the array of profile objects in json
    res.json(instProfs);
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
})

module.exports = router;
