var express = require("express");
var router = express.Router();
var requireJwtAuth = require("../middleware/requireJwtAuth");

// Require controller modules.
var myRequestsController = require("../Controller/myRequestsController");

router.post("/", requireJwtAuth, myRequestsController.generic_get_myRequests);

module.exports = router;