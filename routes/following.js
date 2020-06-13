var express = require("express");
var router = express.Router();

// Require controller modules.
var followingController = require("../Controller/followingController");

//Add new function by using followsController.<function's name>

router.get("/", followingController.get_following);

module.exports = router;