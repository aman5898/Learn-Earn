var mongoose = require("mongoose");
var jwt = require("jsonwebtoken");

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contact: {
    isd_code: {
      type: String,
    },
    phone_number: {
      type: Number,
      validate: {
        validator: function (v) {
          return /d{10}/.test(v);
        },
        message: "`{VALUE}` is not a valid 10 digit number!",
      },
    },
  },
  date_of_birth: {
    type: Date,
  },
  avatar: String,
  googleId: {
    type: String,
    unique: true,
    sparse: true,
  },
  tags_for_learning: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tags",
    },
  ],
  tags_for_teaching: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tags",
    },
  ],
  interested_events: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Events",
    },
  ],
  notifications: {
    notification_count: {
      type: Number,
      default: 0
    },
    notification_ids: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Notifications",
      },
    ],
  },
  created_requests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Requests",
    },
  ],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
  ],
  rating: {
    rating_count: {
      type: Number,
    },
    total_rating: {
      type: Number,
    },
  },
});

let secretOrKey = process.env.JWT_SECRET;

UserSchema.methods.generateJWT = function () {
  const token = jwt.sign(
    {
      expiresIn: "12h",
      id: this._id,
      email: this.email,
    },
    secretOrKey
  );
  return token;
};

module.exports = mongoose.model("Users", UserSchema);
