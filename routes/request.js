var express = require("express");
var router = express.Router();
//var like = require("./like")
// Require controller modules.
var requestController = require("../Controller/requestController");

router.get("/:reqId", requestController.get_request);
router.post("/comments", requestController.comments);
router.post("/create", requestController.create_request);
router.put("/:reqId", requestController.edit_request);
router.delete("/:reqId", requestController.delete_request);
//router.use("/like", like);

module.exports = router;