const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

// GET newsfeed
// - all posts and comments in an instance
// - paginated
router.get("/:inst_id", (req, res) => {
    // Pull parameters
    const inst_id = req.params.inst_id;
     
    /************ Example Response Array ***************//*
    >>> [
    >>>     {   // POST 1
    >>>         post_id   : <id of the post>,
    >>>         poster    : <id of the poster>,
    >>>         content   : <post content>,
    >>>         imageURL  : <optional url of image in storage>,
    >>>         timestamp : <date/time created>,
    >>>         comments  : <number of comments on post>,
    >>>         likes     : <number of likes>,
    >>>         loves     : <number of loves>,
    >>>         dislikes  : <number of dislikes>
    >>>     },
    >>>     { // POST 2 },
    >>>     { // POST 3 },
    >>>     ........
    >>> ] 
    >>> **************************************************/
    
    // Big complex database query w/ pagination
    const newsfeed = [/* that thing up there */];

    // return the newsfeed array object
    res.send(newsfeed);
});

module.exports = router;