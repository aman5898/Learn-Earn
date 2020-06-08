var express = require("express");
var router = express.Router();

// Require controller modules.
var demoController = require("../Controller/demoController");

/// BOOK ROUTES ///

// GET catalog home page.
router.get("/", demoController.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get("/book/create", demoController.demo_detail);

// POST request for creating Book.
router.post("/book/create", demoController.demo_create_post);



module.exports = router;
