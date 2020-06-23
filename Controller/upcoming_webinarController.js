var Interested = require("../models/interested");
var Events = require("../models/events");
var common = require("../common");

exports.get_webinars = async function (req, res) {
    try{
      var userId = req.user._id
      var interested_webinars = await Interested.find({ userId : userId })
      var upcoming_webinar_array = []

      for(let i in interested_webinars){
        var event = await Events.findOne({ _id : interested_webinars[i].eventId })
        
        if(event != null){
          var datetime = event.event_datetime
          if(common.compareDate(datetime)){
            upcoming_webinar_array.push(interested_webinars[i].eventId)
          }
        } 
      }

      res.send(upcoming_webinar_array)
    } catch {
      res.status(404)
      res.send("Could not fetch upcoming webinars")
    }
};