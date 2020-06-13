var express = require("express");
var demo = require("./demo");
var router = express.Router();

router.use("/demo", demo);

module.exports = router;
