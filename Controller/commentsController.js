let Comments = require("../models/comments");

exports.get_comments_request = function (req, res) {
  Comments.find({ request_id: req.params.request_id }, (err, documents) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send(documents);
  });
};

exports.get_comments_event = function (req, res) {
  Comments.find({ request_id: req.params.event_id }, (err, documents) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send(documents);
  });
};

exports.create_comments_request = function (req, res) {
  const me = req.user.toJSON();

  let commentDetail = {
    created_by: me._id,
    text: req.body.text,
    type: "request",
    event_id: null,
    request_id: req.body.request_id,
  };

  let comment = new Comments(commentDetail);

  comment.save(function (err, obj) {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send({
      message: "Comment has been created",
      comment_id: obj._id,
    });
  });
};

exports.create_comments_event = function (req, res) {
  const me = req.user.toJSON();

  let commentDetail = {
    created_by: me._id,
    text: req.body.text,
    type: "event",
    event_id: req.body.event_id,
    request_id: null,
  };

  let comment = new Comments(commentDetail);

  comment.save(function (err, obj) {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send({
      message: "Comment has been created",
      comment_id: obj._id,
    });
  });
};

exports.update_comments = function (req, res) {
  const me = req.user.toJSON();

  Comments.findOne({ _id: req.body.comment_id }, function (err, document) {
    if (err) {
      res.status(500).send(err);
      return;
    }

    if (document == null) {
      res.status(500).send("No Comment with this id found");
      return;
    }
    console.log(me);

    console.log(me._id);
    console.log(document.created_by);

    if (JSON.stringify(me._id) != JSON.stringify(document.created_by)) {
      res.status(400).send("You can't edit someone else's comment");
      return;
    }

    Comments.updateOne(
      { _id: req.body.comment_id },
      { $set: { text: req.body.text } },
      (err, document) => {
        if (err) {
          res.status(500)(err);
          return;
        }
        res.send("Comment has been updated");
      }
    );
  });
};

exports.delete_comments = function (req, res) {
  const me = req.user.toJSON();

  Comments.findOne({ _id: req.body.comment_id }, function (err, document) {
    if (err) {
      res.status(500).send(err);
      return;
    }

    if (document == null) {
      res.status(500).send("No Comment with this id found");
      return;
    }

    if (JSON.stringify(me._id) != JSON.stringify(document.created_by)) {
      res.status(400).send("You can't delete someone else's comment");
      return;
    }

    Comments.remove({ _id: req.body.comment_id }, (err, document) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.send("Comment has been deleted");
    });
  });
};
