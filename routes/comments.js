const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

// POST a new comment
router.post("/:inst_id/new/:prof_id/:post_id", (req, res) => {
    // Pull from params
    const inst_id = req.params.inst_id;
    const prof_id = req.params.prof_id;
    const post_id = req.params.post_id;

    // Pull the post info from the body
    const comment_content   = req.body.content;
    const comment_timestamp = req.body.time;

    // Store comment info in data_comments

    // Store the new id index from db
    const newCommentID = 1; //*****change later*****

    // Add new entry to xref_new_comment,
    // mapping profile, post, and comment together

    // Return the index of the new comment
    res.json(newCommentID);
});

// POST new reaction on a post
router.post("/:inst_id/new/:prof_id/:comment_id/:react_id", (req, res) => {
    // Pull from params
    const inst_id    = req.params.inst_id;
    const prof_id    = req.params.prof_id;
    const comment_id = req.params.comment_id;
    const react_id   = req.params.react_id;

    // Store react info in xref_comment_likes

    // Nothing to return??
    res.status(200);
});

module.exports = router;