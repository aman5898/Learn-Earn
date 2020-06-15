var express = require("express");
var router = express.Router();

// Require controller modules.
var tagController = require("../Controller/tagController");

router.get("/", tagController.get_tags);
router.patch("/:tagId", tagController.edit_tag)
router.post("/", tagController.add_tag)
router.delete("/:tagId", tagController.delete_tag)

module.exports = router;