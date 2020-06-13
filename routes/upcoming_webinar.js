var express = require("express");
var router = express.Router();

// Require controller modules.
var upcoming_webinarController = require("../Controller/upcoming_webinarController");

router.get("/", upcoming_webinarController.get_webinars);

module.exports = router;