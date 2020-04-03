const { Router }     = require("express");

const userRoute      = require("./users");
const feedRoute      = require("./feed");
const commentsRoute  = require("./comments");
const instancesRoute = require("./instances");
const postsRoute     = require("./posts");
const profilesRoute  = require("./profiles");

const router = Router();

// Combine routes in a single file

router.use("/user",     userRoute);
router.use("/instance", instancesRoute);
router.use("/profile",  profilesRoute);
router.use("/feed",     feedRoute);
router.use("/post",     postsRoute);
router.use("/comment",  commentsRoute);

module.exports = router;
