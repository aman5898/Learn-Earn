var mongoose = require("mongoose");

var followerFollowingSchema = new mongoose.Schema({
  user_id: [
    {
      user_id: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
      name: { type: String, required: true, trim: true },
    },
  ],
});

module.exports.Followers = mongoose.model("Followers", followerFollowingSchema);
module.exports.Following = mongoose.model("Following", followerFollowingSchema);
