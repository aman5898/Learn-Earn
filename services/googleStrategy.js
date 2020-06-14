var passport = require("passport");
var { Strategy } = require("passport-google-oauth2");

var GoogleStrategy = Strategy;

var User = require("../models/users");

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
      done(null, newUser);
    } catch (err) {
      console.log(err);
    }
  }
);

passport.use(googleLogin);
