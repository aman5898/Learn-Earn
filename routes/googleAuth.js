var express = require("express");
var router = express.Router();
var passport = require("passport");

let token = null;
const clientUrl = process.env.CLIENT_URL;

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);


router.get("/tokenPage", (req, res) => {
  // const token = req.user.generateJWT();
  res.send({
    token,
  });
});

router.get(
  "/google/callback",
  [
    passport.authenticate("google", {
      failureRedirect: "/",
      session: false,
    }),
  ],
  (req, res) => {
    const tokenGenerated = req.user.generateJWT();
    res.cookie("x-auth-cookie", tokenGenerated);
    token = tokenGenerated;
    // When client side will be ready instead of redirecting to /api/auth/tokenPage which is
    // just another api to send token for server side work, we will redirect to a
    // client page with token in cookies so the below written two lines will be removed and
    // the res.redirect(clientUrl); will be uncommented
    res.redirect("/api/auth/tokenPage");
    // The above written line will be replaced by the below line once client side is ready
    // -> res.redirect(clientUrl);
  }
);

module.exports = router;
