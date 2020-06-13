var express = require("express");
var router = express.Router();

// Require controller modules.
var tagController = require("../Controller/tagController");

router.get("/", tagController.get_tags);
router.patch("/", tagController.edit_tags);

module.exports = router;