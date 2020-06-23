var express = require("express");
var router = express.Router();

// Require controller modules.
var followersController = require("../Controller/followersController");

//Add new function by using followsController.<function's name>

router.post("/:userId", followersController.get_followers);

module.exports = router;