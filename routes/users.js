const express = require("express");
const bodyParser = require("body-parser");
const { addUser } = require("../models/userModel");
const { getUserbyId } = require("../models/userModel");
const { updateUser } = require("../models/userModel");

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
    addUser({
      user_id: body.id,
      email: email,
      fname: firstName,
      lname: lastName,
      phone: phone,
    })
      .then((user) => {
        res.status(201).json(user);
      })
      .catch((err) => {
        res.status(400).json({
          status: 400,
          message: err,
        });
      });
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
  getUserbyId(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(400).json({
        status: 404,
        message: err,
      });
    });
});

// Update Existing User
router.patch("/:id", (req, res) => {
  /**** Body Example
   * {
   *   phone: "<newphonenum>",
   *   email: "<newemail>"
   * }
   *********** */
  updateUser(req.body, req.params.id)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(400).json({
        status: 400,
        message: err
      })
    })
});

module.exports = router;
