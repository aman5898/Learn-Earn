var {Followers, Following} = require("../models/follower_following");
var User = require("../models/users");
var mongoose = require('mongoose');

exports.follow = async function (req, res) {
    try{
      //saving following user's data in User's following list
      var user = await Following.findOne({ user_id: req.params.followerId })
      var followingUserProfile = await User.findOne({ _id : req.params.followingId })
      var followingUsername = followingUserProfile.name
      var followingUserData = {
        user_id: new mongoose.mongo.ObjectId(req.params.followingId),
        name: followingUsername
      }
      user.connection_array.indexOf(userData) === -1  ? user.connection_array.push(followingUserData) : console.log("Item already present");
      
      await user.save()
 
      //saving User's data in followinguser's followers list
      var followingUser = await Followers.findOne({ user_id: req.params.followingId })
      var userProfile = await User.findOne({ _id : req.params.followerId })
      var username = userProfile.name
      var userData = {
        user_id: new mongoose.mongo.ObjectId(req.params.followerId),
        name: username
      }
      followingUser.connection_array.indexOf(userData) === -1  ? followingUser.connection_array.push(userData) : console.log("Item already present")
      
      await followingUser.save()

      res.send(user)
    } catch {
      res.status(404)
      res.send({ error: "Could not complete follow request!" })
    }
  };