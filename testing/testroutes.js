const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


//// Variables for Temp Storage
// #region Test DB
// Counter to assign id to new users
let numUsers  = 0;
// Array of users
let testUsers = [];
// Counter to assign id to new instances
let numInsts  = 0;
// Array of instances
let testInsts = [];
// Id counter for profiles
let numProfs  = 0;
// Array of profiles
let tempProfs = [];
// Id counter for posts
let numPosts  = 0;
// Array of posts
let tempPosts = [];
// Id counter for comments
let numComms  = 0;
// Array of comments
let tempComms = [];
// #endregion Test DB

//// Users
// #region GET Users
router.get("/user", (req, res) => {      //Show all users
    res.json(testUsers);
})
router.get("/user/:id", (req, res) => {  //Get user based on id
    res.json(testUsers[req.params.id]);
})
// #endregion GET Users
// #region POST Users
router.post("/user", (req, res) => {     //New user
    //Add user to database
    testUsers.push({
    user_id   : numUsers++,
    firstname : req.body.fname,
    lastname  : req.body.lname,
    password  : req.body.pass,
    email     : req.body.email
    });
    //Get a login token??
    testUsers[numUsers - 1].token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    //Send back userid and login token
    res.json({
        id    : numUsers - 1,
        token : testUsers[numUsers - 1].token
    });
})
// #endregion POST Users

//// Instances
// #region GET Instances
router.get('/instances', (req, res) => {
    res.json(testInsts);
});
router.get('/instances/:id', (req, res) => {
    res.json(testInsts[req.params.id]);
});
// #endregion GET Instances
// #region POST Instances
router.post('/instances', (req, res) => {
    // Store the new instance in db and assign a n index
    testInsts.push({
        title      : req.body.title,
        start_time : req.body.timestamp,
        duration   : req.body.duration,
        id         : numInsts++
    });
    // Send back instance id
    res.json({
        id : numInsts - 1
    })
})
// #endregion POST Instances

//// Profiles
// #region GET Profiles
router.get("/game", (req, res) => {
    res.json(tempProfs);
})
router.get("/game/:id", (req, res) => {  
    res.json(tempProfs[req.params.id]);
})
// #endregion GET Profiles
// #region POST Profiles
router.post('/game', (req, res) => {
    tempProfs.push({
        profile_id   : numProfs++,
        display_name : req.body.name,
        about        : req.body.bio,
        dob          : req.body.dob,
        pic_url      : req.body.pic,
        user_id      : req.body.user,
        instance_id  : req.body.inst
    });
    res.json({
        id: numProfs - 1
    })
})
// #endregion POST Profiles

//// Posts
// #region GET Posts
router.get("/game/:inst/feed", (req, res) => {
    //Get all posts from a certain game instance
    //This will basically be our news feed and will show posts and comments
    let tempRes = tempPosts.filter(x => {
        return x.instance_id == req.params.inst;
    })
    //Include pagination
    
    res.json(tempRes);                
})
router.get("/game/:inst/post/:id", (req, res) => {
    //Get all posts from a certain profile
    //This would be used when viewing a profile to see their post history
    let tempRes = tempPosts.filter(x => {
        return x.instance_id == req.params.inst &&
               x.profile_id  == req.params.id;
    })
    //Include pagination
    
    res.json(tempRes);
})
// #endregion GET Posts
// #region POST Posts
router.post("/game/:inst/post", (req, res) => {
    tempPosts.push({
        post_id        : numPosts++,
        post_content   : req.body.content,
        post_image_url : req.body.img,
        post_timestamp : req.body.time,
        instance_id    : req.body.inst,
        profile_id     : req.body.prof
    });
    res.json({
        id : numPosts - 1,
    });
})
// #endregion POST Posts

//// Comments
// #region GET Comments
router.get("/game/:inst/", (req, res) => {
    //Get all comments for a specific post
    //Include pagination
    
    res.json(tempRes);
})
// #endregion GET Comments
// #region POST Comments
router.post("/game/:inst/post", (req, res) => {
    tempPosts.push({
        post_id        : numPosts++,
        post_content   : req.body.content,
        post_image_url : req.body.img,
        post_timestamp : req.body.time,
        instance_id    : req.body.inst,
        profile_id     : req.body.prof
    });
    res.json({
        id : numPosts - 1,
    });
})
// #endregion POST Posts

module.exports = router;