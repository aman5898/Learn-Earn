var express = require("express");
var router = express.Router();
// Require controller modules.
var feedController = require("../Controller/feedController");

router.get("/", feedController.get_feed);

module.exports = router;