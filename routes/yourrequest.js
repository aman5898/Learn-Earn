var express = require("express");
var router = express.Router();
var requireJwtAuth = require("../middleware/requireJwtAuth");


// controller module import here
var yourRequestsController = require("../Controller/yourRequestController");


router.post("/", requireJwtAuth,yourRequestsController.yourrequest);
