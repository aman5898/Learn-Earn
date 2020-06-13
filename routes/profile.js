var express = require("express");
var router = express.Router();

// Require controller modules.
var profileController = require("../Controller/profileController");

//Add new function by using profileController.<function's name>

router.get("/", profileController.get_profile);

router.patch("/", profileController.edit_profile);

module.exports = router;