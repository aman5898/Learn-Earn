var express = require("express");
var router = express.Router();
//var like = require("./like")
// Require controller modules.
var eventController = require("../Controller/eventController");

router.get("/:event_Id", eventController.get_event);
router.post("/comments", eventController.comments);
router.post("/create", eventController.create_event);
router.put("/:event_Id", eventController.edit_event);
router.delete("/delete", eventController.delete_event);
//router.use("/like", like);

module.exports = router;