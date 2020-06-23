var express = require("express");
var router = express.Router();
var requireJwtAuth = require("../middleware/requireJwtAuth");
var interestController = require("../Controller/interestedController")

router.get("/", interestController.interestcounts)
router.patch("/", requireJwtAuth, interestController.intReqEvn)

module.exports = router