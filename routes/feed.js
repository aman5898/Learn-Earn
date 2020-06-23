var express = require("express");
var router = express.Router();
var requireJwtAuth = require("../middleware/requireJwtAuth");

// Require controller modules.
var feedController = require("../Controller/feedController");

router.get("/", requireJwtAuth, feedController.get_feed);

module.exports = router;