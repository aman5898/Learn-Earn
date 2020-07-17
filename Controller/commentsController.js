let Comments = require("../models/comments");

exports.get_comments_request = function (req, res) {

	let skip = parseInt(req.query.skip);
	let limit = parseInt(req.query.count);

	Comments.find({ request_id: req.params.request_id }).populate('created_by').populate('referenced_to').sort({ created_at: -1 }).limit(limit).skip(skip).exec((err, comments) => {
		if(err) {
			console.log(err);
      res.status(400).send({message: 'Error Occured, cannot fetch comments'});
      return;
		}

		res.send(comments.map(comment => {
			return {
				_id: comment.id,
				created_by: {
					avatar: comment.created_by.avatar,
					_id: comment.created_by._id,
					name: comment.created_by.name
				},
				text: comment.text,
				created_at: comment.created_at,
				referenced_to: (comment.referenced_to) ? {
					_id: comment.referenced_to._id,
					name: comment.referenced_to.name
				} : null
			}
		}));

	});

};

exports.get_comments_event = function (req, res) {

	let skip = parseInt(req.query.skip);
	let limit = parseInt(req.query.count);

	Comments.find({ event_id: req.params.event_id }).populate('created_by').populate('referenced_to').sort({ created_at: -1 }).limit(limit).skip(skip).exec((err, comments) => {
		if(err) {
			console.log(err);
      res.status(400).send({message: 'Error Occured, cannot fetch comments'});
      return;
		}

		res.send(comments.map(comment => {
			return {
				_id: comment.id,
				created_by: {
					avatar: comment.created_by.avatar,
					_id: comment.created_by._id,
					name: comment.created_by.name
				},
				text: comment.text,
				created_at: comment.created_at,
				referenced_to: (comment.referenced_to) ? {
					_id: comment.referenced_to._id,
					name: comment.referenced_to.name
				} : null
			}
		}));

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
		referenced_to: req.body.referenced_to
	};

	let comment = new Comments(commentDetail);

	comment.save(function (err, obj) {
		if (err) {
			res.status(500).send(err);
			return;
		}
		Comments.findOne({ _id: obj._id }).populate('created_by').populate('referenced_to').then(comment => {
			res.send({
				message: "Comment has been created",
				comment: {
					_id: comment.id,
					created_by: {
						avatar: comment.created_by.avatar,
						_id: comment.created_by._id,
						name: comment.created_by.name
					},
					text: comment.text,
					created_at: comment.created_at,
					referenced_to: (comment.referenced_to) ? {
						_id: comment.referenced_to._id,
						name: comment.referenced_to.name
					} : null
				}
			});
		}).catch(err => {
			res.status(500).send(err);
			return;
		})
		
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
		referenced_to: req.body.referenced_to
	};

	let comment = new Comments(commentDetail);

	comment.save(function (err, obj) {
		if (err) {
			res.status(500).send(err);
			return;
		}
		Comments.findOne({ _id: obj._id }).populate('created_by').populate('referenced_to').then(comment => {
			res.send({
				message: "Comment has been created",
				comment: {
					_id: comment.id,
					created_by: {
						avatar: comment.created_by.avatar,
						_id: comment.created_by._id,
						name: comment.created_by.name
					},
					text: comment.text,
					created_at: comment.created_at,
					referenced_to: (comment.referenced_to) ? {
						_id: comment.referenced_to._id,
						name: comment.referenced_to.name
					} : null
				}
			});
		}).catch(err => {
			res.status(500).send(err);
			return;
		})
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
          res.status(500).send(err);
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
