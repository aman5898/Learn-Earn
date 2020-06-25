var express = require("express");
var router = express.Router();
var requireJwtAuth = require("../middleware/requireJwtAuth");
// Require controller modules.
var eventController = require("../Controller/eventController");

router.get("/:event_Id", requireJwtAuth, eventController.get_event);
router.post("/comments", requireJwtAuth, eventController.comments);
router.post("/create", requireJwtAuth, eventController.create_event);
router.put("/:event_Id", requireJwtAuth, eventController.edit_event);
router.delete("/delete", requireJwtAuth, eventController.delete_event);

module.exports = router;