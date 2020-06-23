//Add your model by inserting file in models folder and then import it here like the example given below
var Events = require("../models/events");


//If redirection is needed use 'next'

exports.create_event = async function (req, res) {
  console.log(req.body);
  const me = req.user.toJSON();
  let user_id = me._id;
try {
  let event = await new Events({
    "created_by": user_id,
    "request": req.body.request,
    "title": req.body.title,
    "description": req.body.description,
    "event_datetime" : req.body.event_datetime,
    "class_link" : req.body.class_link,
    "recording_link" : req.body.recording_link,
    "tags": JSON.parse(req.body.tags),
    "validity": req.body.validity,
    "prerequisites" : JSON.parse(req.body.prerequisites),
  }).save();

  JSON.parse(req.body.tags).map(async (tag_id) => {
    try {
      let tag = await Tags.findByIdAndUpdate(tag_id, { $inc: { tag_count: 1 } }, { new: true }).exec();
    }
    catch(err) {
      console.log(err);
    }
    
  })
  res.send(200);

}
catch(err) {
  console.log(err);
  res.status(400).send({message: 'Error Occured while creating a event'});
}

};


exports.get_event = async function (req, res) {
  
console.log(req.params)
const event_Id = req.params.event_Id;
const me = req.user.toJSON();
let user_id = me._id;

try {
  let event = await Events.findOne({ _id: event_Id }).exec();
  console.log(event)
  res.send({
    "created_by": user_id,
    "request":event.request,
    "title": event.title,
    "description": event.description,
    "event_datetime" : event.event_datetime,
    "class_link" : event.class_link,
    "recording_link" : event.recording_link,
    "tags": event.tags,
    "validity": event.validity,
    "prerequisites" : event.prerequisites,
  });
  // Flag is not sent, to be implemented later
}
catch(err) {
  console.log(err);
  res.status(400).send({message: 'Error Occured while fetching the request'});
}


};

exports.edit_event = function (req, res) {

  console.log(req.params,req.body)

	if(!req.body.title) {
		res.status(400).send({ message: 'Invalid Title' });
		return;
	}

	if(!req.body.description) {
		res.status(400).send({ message: 'Invalid Description' });
		return;
	}

	if(!req.body.event_datetime || new Date() > new Date(req.body.event_datetime)) {
		res.status(400).send({ message: 'Invalid Date' });
		return;
  }
  
	Events.findOne({ "_id": req.params.event_Id }).then(async (event) => {
		event.title = req.body.title;
    event.description = req.body.description;
    event.event_datetime = req.body.event_datetime;
    event.class_link = req.body.class_link;
    event.recording_link = req.body.recording_link;
    
    event.save();
    res.status(200).send("updated");
  }).catch(err => {
		console.log(err);
		res.status(400).send({message: 'Error Occured while updating the request'});
		return;
	})

};



exports.delete_event = function (req, res) {
    res.send("NOT IMPLEMENTED:  delete event fetching");
  };

  exports.comments = function (req, res) {
    res.send("NOT IMPLEMENTED:  generic my events fetching");
  };
