var express = require("express");
var router = express.Router();

// Require controller modules.
var myRequestsController = require("../Controller/myRequestsController");

router.get("/", myRequestsController.default_get_myRequests);

router.post("/", myRequestsController.generic_get_myRequests);

module.exports = router;