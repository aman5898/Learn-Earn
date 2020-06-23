var express = require("express");
var router = express.Router();
var requireJwtAuth = require("../middleware/requireJwtAuth");

// Require controller modules.
var notificationsController = require("../Controller/notificationsController");

router.post("/:notificationId", requireJwtAuth, notificationsController.update_notification);
router.get("/", requireJwtAuth, notificationsController.get_notificatons);


module.exports = router;