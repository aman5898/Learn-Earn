var Follower_Following = require("../models/follower_following");
var Followers = Follower_Following.Followers

exports.get_followers = async function (req, res) {
  try{
    var user_follower = await Followers.findOne({ user_id: req.params.userId })
    res.send(user_follower.connection_array)
    res.status(204)
  } catch {
    res.status(404)
    res.send({ error: "Could not fetch follow list!" })
  }
};