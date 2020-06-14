//Add your model by inserting file in models folder and then import it here like the example given below
//var Demo = require("../models/demo");

//If redirection is needed use 'next'

exports.edit_comments = function (req, res) {
  res.send("NOT IMPLEMENTED:  edit comment");
};

exports.edit_comments_private = function (req, res) {
  const me = req.user.toJSON();
  res.send(me);
  // res.send("NOT IMPLEMENTED:  edit comment");
};

exports.edit_comments_public = function (req, res) {
  // res.send("Public Api");
  res.send("NOT IMPLEMENTED:  edit comment");
};

exports.delete_comments = function (req, res) {
  res.send("NOT IMPLEMENTED:  delete comment");
};
