var Follower_Following = require("../models/follower_following");
var Following = Follower_Following.Followers

exports.get_following = async function (req, res) {
  try{
    var user_following = await Following.findOne({ user_id: req.params.userId })
    res.send(user_following.connection_array)
    res.status(204)
  } catch {
    res.status(404)
    res.send({ error: "Could not fetch follow list!" })
  }
};