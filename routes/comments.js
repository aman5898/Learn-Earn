var express = require("express");
var router = express.Router();
var requireJwtAuth = require("../middleware/requireJwtAuth");

// Require controller modules.
var commentsController = require("../Controller/commentsController");

router.get("/request/:request_id", commentsController.get_comments_request);

router.get("/event/:event_id", commentsController.get_comments_event);

router.post(
  "/request",
  requireJwtAuth,
  commentsController.create_comments_request
);

router.post(
  "/event",
  requireJwtAuth,
  commentsController.create_comments_event
);

router.patch(
  "/",
  requireJwtAuth,
  commentsController.update_comments
);

router.delete(
  "/",
  requireJwtAuth,
  commentsController.delete_comments
);

module.exports = router;
