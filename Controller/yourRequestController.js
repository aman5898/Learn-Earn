//Add your model by inserting file in models folder and then import it here like the example given below
var Events = require("../models/events");
const mongoose = require("mongoose");
var Requests = require("../models/requests");
//If redirection is needed use 'next'

exports.yourrequest = async function (req, res) {
    res.status(200).send('need to be implemented');
};




