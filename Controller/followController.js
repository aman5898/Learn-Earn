var {Followers, Following} = require("../models/follower_following");
var User = require("../models/users");
var mongoose = require('mongoose');

exports.follow = async function (req, res) {
    try{
      //saving following user's data in User's following list
      var user = await Following.findOne({ user_id: req.user._id })
      var followingUserProfile = await User.findOne({ _id : req.params.followingId })
      var followingUsername = followingUserProfile.name
      var followingUserData = {
        user_id: new mongoose.mongo.ObjectId(req.params.followingId),
        name: followingUsername
      }
      
      if(user.connection_array.some( array => array['user_id'] == req.params.followingId )){
        res.send("Item already present")
      } else {
        user.connection_array.push(followingUserData)
      }

      await user.save()
 
      //saving User's data in followinguser's followers list
      var followingUser = await Followers.findOne({ user_id: req.params.followingId })
      var userProfile = await User.findOne({ _id : req.user._id })
      var username = userProfile.name
      var userData = {
        user_id: new mongoose.mongo.ObjectId(req.user._id),
        name: username
      }

      if(followingUser.connection_array.some( array => array['user_id'] == req.user._id )){
        res.send("Item already present")
      } else {
        followingUser.connection_array.push(userData)
      }

      await followingUser.save()

      res.send(user)
    } catch {
      res.status(404)
    }
  };