var express = require("express");
var router = express.Router();
var requireJwtAuth = require("../middleware/requireJwtAuth");


// controller module import here
var trendingController = require("../Controller/trendingController");


router.post("/", requireJwtAuth,trendingController.trending);

module.exports = router;