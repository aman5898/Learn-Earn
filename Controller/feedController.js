var Requests = require('../models/requests');

exports.get_feed = function (req, res) {

	const me = req.user.toJSON();
	let user_id = me._id;
	let skip = parseInt(req.query.skip);
	let limit = parseInt(req.query.count);

	if(!Number.isInteger(skip) || !Number.isInteger(limit)) {
		res.status(400).send({message: 'Incorrect params'});
		return;
	}

	Requests.find().populate('tags').populate('created_by').sort({ created_at: -1 }).limit(limit).skip(skip).exec((err, requests) => {
		if(err) {
			console.log(err);
			res.status(400).send({message: 'Error Occured while fetching the request'});
			return;
		}
		res.status(200).send(requests.map(request => { 
			return {
				"id": request._id,
				"comments": request.comments.length,
				"likes": request.likes.length,
				"interested": request.interested.length,
				"tags": request.tags,
				"events": request.events,
				"created_by": request.created_by,
				"title": request.title,
				"description": request.description,
				"validity": request.validity,
				"created_at": request.created_at,
				"updated_at": request.updated_at,
			}
		}));
		return;
	})

};