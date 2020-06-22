var express = require("express");
var router = express.Router();
var requireJwtAuth = require("../middleware/requireJwtAuth");
var likeController = require("../Controller/likeController")

router.get("/:er_id/:type", likeController.likecounts)
router.patch("/:er_id/:type/:action", requireJwtAuth, likeController.likeReqEvn)

module.exports = router;