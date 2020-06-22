var Requests = require('../models/requests');
var Events = require('../models/events')
var mongoose = require('mongoose');


exports.intReqEvn = async function(req, res){
    try {
        const type = req.params.type
        const action = req.params.action
        const ReqEvnId = req.params.er_id
        const userId = req.user._id

        if (type == 'req') {
           
            var likedReq = await Requests.findOne({ _id : ReqEvnId })

            if(action == "like"){
                likedReq.interested.push(new mongoose.mongo.ObjectId(userId))
            } else {
                var index = likedReq.interested.indexOf(userId);  
                if (index !== -1) {
                    likedReq.interested.splice(index, 1);
                }
            }
            await likedReq.save()

        } else if (type == 'evn') {
           
            var likedEvn = await Events.findOne({ _id : ReqEvnId })

            if(action == "like"){
                likedEvn.interested.push(new mongoose.mongo.ObjectId(userId))
            } else {
                var index = likedEvn.interested.indexOf(userId);  
                if (index !== -1) {
                    likedEvn.interested.splice(index, 1);
                }
            }
            await linkedEvn.save()

        } else {
            res.send("Type not found")
            res.status(404)
        }
        
        res.send("Interest in Request/Event has been registered successfully!!")
        res.status(204)
    } catch {
        res.status(404)
        res.send({ error: "Request doesn't exist!" })
    }
}