var Requests = require('../models/requests');
var Events = require('../models/events');
var Interested = require('../models/interested')
var mongoose = require('mongoose');

exports.interestcounts = async function(req, res){
    try {
        const type = req.body.type
        const ReqEvnId = req.body.er_id
        if (type == 'req') {
            var ReqEvn = await Requests.findOne({ _id : ReqEvnId })
        } else if (type == 'evn') {
            var ReqEvn = await Events.findOne({ _id : ReqEvnId })
        } else {
            res.send("Type not found")
            res.status(404)
        }

        var count = ReqEvn.interested.length
        res.send({ count })
        res.status(204)

    } catch {
        res.status(404)
        res.send({ error: "Request/Event doesn't exist!" })
    }
}

exports.intReqEvn = async function(req, res){
    try {
        const type = req.body.type
        const action = req.body.action
        const ReqEvnId = req.body.er_id
        const userId = req.user._id
        
        if (type == 'req') {
            var interestedReqEvn = await Requests.findOne({ _id : ReqEvnId })
        } else if (type == 'evn') {
            var interestedReqEvn = await Events.findOne({ _id : ReqEvnId })
        } else {
            res.send("Type not found")
            res.status(404)
        }
        
        if(action == "like"){
            if ( interestedReqEvn.interested.includes(userId) ){
                res.send("Already Interested")
                return
            } else {
                interestedReqEvn.interested.push(new mongoose.mongo.ObjectId(userId))
                if(type == 'evn'){
                    console.log(ReqEvnId + " --- " + userId) 
                    var interest = new Interested()
                    interest.eventId = new mongoose.Types.ObjectId(ReqEvnId)
                    interest.userId = new mongoose.Types.ObjectId(userId) 
                    await interest.save()
                }
            }
        } else {
            var index = interestedReqEvn.interested.indexOf(userId);       
            if (index !== -1) {
                interestedReqEvn.interested.splice(index, 1);
                if( type == 'evn' ){
                    await Interested.deleteOne({ eventId: ReqEvnId })
                }
            }
        }
       await interestedReqEvn.save()

        res.send("Interest in Request/Event has been registered successfully!!")
        res.status(204)
    } catch {
        res.status(404)
        res.send({ error: "Request/Event doesn't exist!" })
    }
}