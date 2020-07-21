var Requests = require('../models/requests');
var Events = require('../models/events')
var mongoose = require('mongoose');

exports.likecounts = async function(req, res){
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

        var count = ReqEvn.likes.length
        res.send({ count })
        res.status(204)
    } catch {
        res.status(404)
        res.send({ error: "Request/Event doesn't exist!" })
    }
}

exports.likeReqEvn = async function(req, res){
    try {
        const type = req.body.type
        const action = req.body.action
        const ReqEvnId = req.body.er_id
        const userId = req.user._id

        if (type == 'req') {
            var likedReqEvn = await Requests.findOne({ _id : ReqEvnId })
        } else if (type == 'evn') {
            var likedReqEvn = await Events.findOne({ _id : ReqEvnId })
        } else {
            res.send("Type not found")
            res.status(404)
        }

        if(action == "like"){
            if ( likedReqEvn.likes.includes(userId) ){
                res.send("Already liked")
                return
            } else {
                likedReqEvn.likes.push(new mongoose.mongo.ObjectId(userId))
            }
        } else {
            var index = likedReqEvn.likes.indexOf(userId);  
            if (index !== -1) {
                likedReqEvn.likes.splice(index, 1);
            }
        }
        await likedReqEvn.save();
        
        res.send("Request/Event has been liked/disliked successfully!!")
        res.status(204)
    } catch(err) {
        res.status(404);
        console.log(err);
        res.send({ error: "Request/Event doesn't exist!" })
    }
}