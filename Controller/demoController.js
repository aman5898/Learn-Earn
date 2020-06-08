var Demo = require("../models/demo");

// Display list of all demos.
exports.index = function (req, res) {
  res.send("NOT IMPLEMENTED: demo list");
};

// Display detail page for a specific demo.
exports.demo_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: demo detail: " + req.params.id);
};

// Handle demo create on POST.
exports.demo_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: demo create POST");
};
