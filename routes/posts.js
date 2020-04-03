const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

// GET newsfeed
// - all posts and comments in an instance - paginated
router.get("/:inst_id", (req, res) => {
    // Pull parameters
    const inst_id = req.params.inst_id;

    
    
    // Big complex database query w/ pagination
    const newsfeed = [[/* profiles */], [/* posts */]];

    // return the newsfeed array object
    res.send(newsfeed);
});

// POST a new post
router.post("/:inst_id/new/:prof_id", (req, res) => {
    // Pull from params
    const inst_id = req.params.inst_id;
    const prof_id = req.params.prof_id;

    // Pull the post info from the body
    const post_content   = req.body.content;
    const post_timestamp = req.body.time;

    // Store the image? ~optional~

    // Store post info in data_posts

    // Store the new id index from db
    const newPostID = 1; //*****change later*****

    // Add new entry to xref_new_post,
    // mapping profile and post together

    // Return the index of the new post
    res.json(newPostID);
});

// POST new reaction on a post
router.post("/:inst_id/new/:prof_id/:react_id", (req, res) => {
    // Pull from params
    const inst_id  = req.params.inst_id;
    const prof_id  = req.params.prof_id;
    const react_id = req.params.react_id;

    // Store react info info in xref_post_likes

    // Nothing to return?
    res.status(200);
});

module.exports = router;