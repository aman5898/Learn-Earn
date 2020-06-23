//Add your model by inserting file in models folder and then import it here like the example given below
//var Demo = require("../models/demo");
var Requests = require('../models/requests');
var Tags = require('../models/tags');
const { tags } = require('joi');

//If redirection is needed use 'next'

exports.generic_get_myRequests = function (req, res) {

	let skipCount = parseInt(req.body.skipCount);
	let postsCount = parseInt(req.body.postsCount);
	let user_id = req.user.toJSON()._id;
	console.log(skipCount, postsCount);

	Requests.find({ created_by: user_id }).sort({ created_at: -1 }).limit(postsCount).skip(skipCount).populate("tags").exec(async (err, requests) => {
		if(err) {
			console.log(err);
			res.status(400).send({ message: 'Error Occured while fetching requests' });
			return;
		}

		res.status(200).send(requests.map(request => {
			return {
				"comments_count": request.comments.length,
				"like_count": request.likes.length,
				"interested_count": request.interested.length,
				"tags": request.tags,
				"events": request.events,
				"title": request.title,
				"description": request.description,
				"validity": request.validity,
				"created_at": request.created_at,
				"updated_at": request.updated_at
			}
		}));
		return;

	});
};