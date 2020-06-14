var passport = require("passport");
var { Strategy, ExtractJwt } = require("passport-jwt");
var JwtStrategy = Strategy;

var User = require("../models/users");

const secretOrKey = process.env.JWT_SECRET;

// JWT strategy
const jwtLogin = new JwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromHeader("x-auth-token"),
    secretOrKey,
  },
  async (payload, done) => {
    try {
      const user = await User.findById(payload.id);
      console.log(user);
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    } catch (err) {
      done(err, false);
    }
  }
);

passport.use(jwtLogin);
