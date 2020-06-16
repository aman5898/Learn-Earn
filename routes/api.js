var express = require("express");
var profile = require("./profile");
var following = require("./following");
var followers = require("./followers");
var follow = require("./follow");
var myRequests = require("./myRequests");
var comments = require("./comments");
var upcoming_webinar = require("./upcoming_webinar");
var request = require("./request");
var event = require("./event");
var feed = require("./feed");
var tag = require("./tag");
var notifications = require("./notifications");
var googleAuthRoutes = require("./googleAuth");

var router = express.Router();

router.use("/auth", googleAuthRoutes);
router.use("/profile", profile);
router.use("/following", following);
router.use("/followers", followers);
router.use("/follow", follow);
router.use("/myRequests", myRequests);
router.use("/comments", comments);
router.use("/upcoming_webinar", upcoming_webinar);
router.use("/request", request);
router.use("/event", event);
router.use("/feed", feed);
router.use("/tag", tag);
router.use("/notifications", notifications);

module.exports = router;
