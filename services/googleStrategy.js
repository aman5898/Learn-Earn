var passport = require("passport");
var { Strategy } = require("passport-google-oauth2");

var GoogleStrategy = Strategy;

var User = require("../models/users");
var {Followers,Following}  = require("../models/follower_following");

const serverUrl = process.env.SERVER_URL;

// google strategy
const googleLogin = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${serverUrl}${process.env.GOOGLE_CALLBACK_URL}`,
    proxy: true,
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const oldUser = await User.findOne({ email: profile.email });

      if (oldUser) {
        return done(null, oldUser);
      }
    } catch (err) {
      console.log(err);
    }

    try {
      const newUser = await new User({
        googleId: profile.id,
        username: `user${profile.id}`,
        email: profile.email,
        name: profile.displayName,
        avatar: profile.picture,
      }).save();

      // follower schema creation -- bittoo
      const follower = new Followers({
        user_id : newUser.id,
        connection_array : []
      })

      follower.save(function (err, follow) {
        if (err) return console.error(err);
        console.log(follow);
      });

      // following is creating -- bittoo
      const following = new Following({
        user_id : newUser.id,
        connection_array : []
      });

      following.save(function (err, follow) {
        if (err) return console.error(err);
        console.log(follow);
      });

      console.log(follower);
      console.log(following);
      done(null, newUser);

    } catch (err) {
      console.log(err);
    }
  }
);

passport.use(googleLogin);
