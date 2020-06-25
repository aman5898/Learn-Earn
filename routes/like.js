var express = require("express");
var router = express.Router();
var requireJwtAuth = require("../middleware/requireJwtAuth");
var likeController = require("../Controller/likeController")

router.get("/", likeController.likecounts)
router.patch("/", requireJwtAuth, likeController.likeReqEvn)

module.exports = router;