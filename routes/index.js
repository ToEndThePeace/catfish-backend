const { Router } = require("express");
const commentsRoute = require("./comments");
const instancesRoute = require("./instances");
const postsRoute = require("./posts");
const profilesRoute = require("./profiles");

const router = Router();

// Combine routes in a single file

router.use("/instances", instancesRoute);
router.use("/profiles", profilesRoute);
router.use("/feed", postsRoute);
router.use("/commemnts", postsRoute);

module.exports = router;
