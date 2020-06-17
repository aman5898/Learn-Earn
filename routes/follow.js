var express = require("express");
var router = express.Router();

// Require controller modules.
var followController = require("../Controller/followController");

//Add new function by using followsController.<function's name>

router.post("/:followerId/:followingId", followController.follow);

module.exports = router;