var express = require("express");
var demo = require("./demo");
var api = require("./api");
var router = express.Router();

router.use("/demo", demo);
router.use("/api", api);

module.exports = router;
