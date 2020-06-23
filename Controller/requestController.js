//Add your model by inserting file in models folder and then import it here like the example given below
//var Demo = require("../models/demo");
var Requests = require('../models/requests');
var Events = require('../models/events');
var Tags = require('../models/tags');

//If redirection is needed use 'next'

exports.get_request = async function (req, res) {

	const req_id = req.params.reqId;
	const me = req.user.toJSON();
	let user_id = me._id;

	Requests.findOne({
		_id: req_id
	}).populate('tags').populate('created_by').exec((err, request) => {
		if(err) {
			console.log(err);
			res.status(400).send({message: 'Error Occured while fetching the request'});
			return;
		}
		res.status(200).send({
			"comments": request.comments.length,
			"likes": request.likes.length,
			"interested": request.interested.length,
			"tags": request.tags,
			"events": request.events,
			"created_by_name": request.created_by.name,
			"created_by": request.created_by._id,
			"title": request.title,
			"description": request.description,
			"validity": request.validity,
			"created_at": request.created_at,
			"updated_at": request.updated_at,
		});
		return;
	})
};


exports.comments = function (req, res) {
    res.send("NOT IMPLEMENTED:  generic my requests fetching");
  };

exports.create_request = async function (req, res) {
  
    const me = req.user.toJSON();
    let user_id = me._id;

	if(!req.body.title) {
		res.status(400).send({ message: 'Invalid Title' });
		return;
	}

	if(!req.body.description) {
		res.status(400).send({ message: 'Invalid Description' });
		return;
	}

	if(!req.body.validity || new Date() > new Date(req.body.validity)) {
		res.status(400).send({ message: 'Invalid Date' });
		return;
	}

	if(JSON.parse(req.body.tags).length === 0 ){
		res.status(400).send({ message: 'Invalid Tags' });
		return;
	} 

	Requests.create({
		created_by: user_id,
		title: req.body.title,
		description: req.body.description,
		tags: JSON.parse(req.body.tags),
		validity: req.body.validity,
	}).then(request => {

		Tags.bulkWrite([{
				updateMany: {
					"filter": { '_id': { $in: JSON.parse(req.body.tags) } },
					"update": { $inc: { tag_count: 1 }}
				}
			}
		]).then(result => {
			res.status(200).send({message: 'Request Created Successfuly'});
			return;
		}).catch(err => {
			console.log(err);
			res.status(400).send({ message: 'Could not update tag count' });
			return;
		})

	}).catch(err => {
		console.log(err);
		res.status(400).send({message: 'Error Occured while creating a request'});
		return;
	})

};

exports.edit_request = function (req, res) {
	
	if(!req.body.title) {
		res.status(400).send({ message: 'Invalid Title' });
		return;
	}

	if(!req.body.description) {
		res.status(400).send({ message: 'Invalid Description' });
		return;
	}

	if(!req.body.validity || new Date() > new Date(req.body.validity)) {
		res.status(400).send({ message: 'Invalid Date' });
		return;
	}

	if(JSON.parse(req.body.tags).length === 0 ){
		res.status(400).send({ message: 'Invalid Tags' });
		return;
	} 

	Requests.findOne({ "_id": req.params.reqId }).then(async (request) => {
		request.title = req.body.title;
		request.validity = req.body.validity;
		request.description = req.body.description;

		try {
			// Decrease old tags count
			let old_tags = await Tags.bulkWrite([{
					updateMany: {
						"filter": { '_id': { $in: request.tags } },
						"update": { $inc: { tag_count: -1 }}
					}
				}
			]);

			// Increase new tags count
			let new_tags = await Tags.bulkWrite([{
					updateMany: {
						"filter": { '_id': { $in: JSON.parse(req.body.tags) } },
						"update": { $inc: { tag_count: 1 }}
					}
				}
			]);

			request.tags = JSON.parse(req.body.tags);
			await request.save();
			res.status(200).send({message: 'Request Updated Successfuly'});
			return;

		}
		catch(err) {
			console.log(err);
			res.status(400).send({message: 'Error Occured while updating the request'});
			return;
		}

	}).catch(err => {
		console.log(err);
		res.status(400).send({message: 'Error Occured while updating the request'});
		return;
	})

};

exports.delete_request = function (req, res) {
    res.send("NOT IMPLEMENTED:  delete requests fetching");
  };