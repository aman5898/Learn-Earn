var express = require("express");
var router = express.Router();
let requireJwtAuth = require("../middleware/requireJwtAuth");

// Require controller modules.
var profileController = require("../Controller/profileController");

//Add new function by using profileController.<function's name>

router.get("/", requireJwtAuth, profileController.get_profile);

router.patch("/update/name", requireJwtAuth, profileController.edit_profile_name);

router.patch("/update/phone_number", requireJwtAuth, profileController.edit_phone_number);

router.patch("/update/dob", requireJwtAuth, profileController.edit_dob);

module.exports = router;
