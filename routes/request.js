var express = require("express");
var router = express.Router();
var requireJwtAuth = require("../middleware/requireJwtAuth");

//var like = require("./like")
// Require controller modules.
var requestController = require("../Controller/requestController");

router.get("/:reqId", requireJwtAuth, requestController.get_request);
router.post("/comments", requestController.comments);
router.post("/create", requireJwtAuth, requestController.create_request);
router.put("/:reqId", requireJwtAuth, requestController.edit_request);
router.delete("/:reqId", requestController.delete_request);
//router.use("/like", like);

module.exports = router;