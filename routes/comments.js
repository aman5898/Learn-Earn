var express = require("express");
var router = express.Router();

// Require controller modules.
var commentsController = require("../Controller/commentsController");

//Add new function by using commentssController.<function's name>

//router.get("/", commentsController.get_comments);
//router.post("/", commentsController.post_comments);
router.patch("/", commentsController.edit_comments);
router.delete("/", commentsController.delete_comments);

module.exports = router;