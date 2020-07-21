var express = require("express");
var router = express.Router();

var userController = require("../Controller/userController");
const requireJwtAuth = require("../middleware/requireJwtAuth");

router.get("/:userId", requireJwtAuth, userController.getUser);

module.exports = router;