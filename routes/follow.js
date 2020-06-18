var express = require("express");
var router = express.Router();

// Require controller modules.
var followController = require("../Controller/followController");
const requireJwtAuth = require("../middleware/requireJwtAuth");

//Add new function by using followsController.<function's name>

router.post("/:followingId", requireJwtAuth, followController.follow);

module.exports = router;