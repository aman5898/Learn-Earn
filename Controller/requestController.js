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
	
	try {
		let request = await Requests.findOne({ _id: req_id }).exec();
		res.send({
			"comments": request.comments,
			"likes": request.likes,
			"interested": request.interested,
			"tags": request.tags,
			"events": request.events,
			"created_by": request.created_by,
			"title": request.title,
			"description": request.description,
			"validity": request.validity,
			"created_at": request.created_at,
			"updated_at": request.updated_at,
		});
		// Flag is not sent, to be implemented later
	}
	catch(err) {
		console.log(err);
		res.status(400).send({message: 'Error Occured while fetching the request'});
	}

    res.send("NOT IMPLEMENTED:  default my requests fetching");
};


exports.comments = function (req, res) {
    res.send("NOT IMPLEMENTED:  generic my requests fetching");
  };

exports.create_request = async function (req, res) {
  
    const me = req.user.toJSON();
    let user_id = me._id;

	try {
		let request = await new Requests({
			created_by: user_id,
			title: req.body.title,
			description: req.body.description,
			tags: JSON.parse(req.body.tags),
			validity: req.body.validity,
		}).save();


		JSON.parse(req.body.tags).map(async (tag_id) => {
			try {
				let tag = await Tags.findByIdAndUpdate(tag_id, { $inc: { tag_count: 1 } }, { new: true }).exec();
			}
			catch(err) {
				console.log(err);
			}
		})

		res.send({message: 'Request Created Successfuly'});

	}
	catch(err) {
		console.log(err);
		res.status(400).send({message: 'Error Occured while creating a request'});
	}

};

exports.edit_request = function (req, res) {
    res.send("NOT IMPLEMENTED:  edit requests fetching");
  };

exports.delete_request = function (req, res) {
    res.send("NOT IMPLEMENTED:  delete requests fetching");
  };