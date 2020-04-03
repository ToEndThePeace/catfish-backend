const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());


router.get("/", (req, res) => {
	let uid = req.uid
	// Search for uid in database
	// If uid doesn't exists
	res.status(404).json({
		status: 404,
		message: `User doesn't exist`
	})

    const inst_id = req.params.inst_id;

})

// Create new user
router.post("/", (req, res) => {
	let body = req.body
	// firstName as String
    // lastName as String
    // email as String
    // phone as  String
    // id as String
	// store user details in database
})