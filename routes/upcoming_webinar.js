var express = require("express");
var router = express.Router();
var requireJwtAuth = require("../middleware/requireJwtAuth");

// Require controller modules.
var upcoming_webinarController = require("../Controller/upcoming_webinarController");

router.get("/", requireJwtAuth, upcoming_webinarController.get_webinars);

module.exports = router;