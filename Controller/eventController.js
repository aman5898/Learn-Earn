//Add your model by inserting file in models folder and then import it here like the example given below
//var Demo = require("../models/demo");


//If redirection is needed use 'next'

exports.create_event = async function (req, res) {
  console.response(req);
  const me = req.user.toJSON();
  let user_id = me._id;

try {
  let request = await new Requests({
    "created_by": user_id,
    "request": req.body.request,
    "title": req.body.title,
    "description": req.body.description,
    "event_datetime" : req.body.event_datetime,
    "class_link" : req.body.class_link,
    "recording_link" : req.body.recording_link,
    "tags": JSON.parse(req.body.tags),
    "validity": req.body.validity,
    "prerequisites" : req.body.prerequisites,
  }).save();

  JSON.parse(req.body.tags).map(async (tag_id) => {
    try {
      let tag = await Tags.findByIdAndUpdate(tag_id, { $inc: { tag_count: 1 } }, { new: true }).exec();
    }
    catch(err) {
      console.log(err);
    }
  })
  JSON.parse(req.body.prerequisites.tags).map(async (tag_id) => {
    try {
      let tag = await Tags.findByIdAndUpdate(tag_id, { $inc: { tag_count: 1 } }, { new: true }).exec();
    }
    catch(err) {
      console.log(err);
    }
  })
  res.send({message: 'Event Created Successfuly'});
}
catch(err) {
  console.log(err);
  res.status(400).send({message: 'Error Occured while creating a event'});
}

};


exports.get_event = function (req, res) {
  
const req_id = req.params.event_Id;
const me = req.user.toJSON();
let user_id = me._id;

try {
  let request = await Requests.findOne({ _id: event_Id }).exec();
  res.send({
    "created_by": user_id,
    "request": Requests.body.request,
    "title": Requests.body.title,
    "description": Requests.body.description,
    "event_datetime" : Requests.body.event_datetime,
    "class_link" : Requests.body.class_link,
    "recording_link" : Requests.body.recording_link,
    "tags": JSON.parse(Requests.body.tags),
    "validity": Requests.body.validity,
    "prerequisites" : Requests.body.prerequisites,
  });
  // Flag is not sent, to be implemented later
}
catch(err) {
  console.log(err);
  res.status(400).send({message: 'Error Occured while fetching the request'});
}


};

exports.edit_event = function (req, res) {
  res.send("NOT IMPLEMENTED:  edit event fetching");
};

exports.delete_event = function (req, res) {
  res.send("NOT IMPLEMENTED:  delete event fetching");
};