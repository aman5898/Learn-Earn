var express = require("express");
var router = express.Router();
var requireJwtAuth = require("../middleware/requireJwtAuth");
var interestController = require("../Controller/interestedController")

router.patch("/:er_id/:type/:action", requireJwtAuth, interestController.intReqEvn)

module.exports = router