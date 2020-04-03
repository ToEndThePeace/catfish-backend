const express = require("express");
const bodyParser = require("body-parser");
const userFunc = require("../models/userModel");

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Create New User
router.post("/", (req, res) => {
  let body = req.body;
  // firstName as String
  // lastName as String
  // email as String
  // phone as  String
  // id as String
  // store user details in database
  if (req.uid === body.id) {
    // User is authenticated and we can store their info?
    const newUser = userFunc.addUser({
      user_id: body.id,
      email: email,
      fname: firstName,
      lname: lastName,
      phone: phone,
    });
    if (newUser) {
      // Created successfully
      res.status(201).json(newUser);
    } else {
      // Failed
      res.status(400).json({
        status: 400,
        message: "User creation failed",
      });
    }
  } else {
    // Error? User isn't authenticated
    res.status(403).json({
      status: 403,
      message: "Not authenticated", // **********
    });
  }
});

// Get User By ID
router.get("/:id", (req, res) => {
  const curID = req.params.id;

  const response = userFunc.getUserbyId(curID);
  // Not sure if this is correct? *****
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({
      status: 404,
      message: `User doesn't exist`,
    });
  }
});

// Update Existing User
router.patch("/:id", (req, res) => {
  /**** Body Example
   * {
   *   phone: "<newphonenum>",
   *   email: "<newemail>"
   * }
   *********** */
  const changes = req.params.body;

  const response = userFunc.updateUser(changes, id);
  if (response) {
    res.status(201).json(response);
  } else {
    res.status(400).json({
      status: 400,
      message: "Update failed"
    })
  }
});

module.exports = router;
