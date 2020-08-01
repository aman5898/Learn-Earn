var Users = require('../models/users');

exports.getUser = async function (req, res) {
    try{
      const userId = req.params.userId;
      var user = await Users.findOne({ _id: userId });
      console.log("user is: " + user);
      res.send(user);
      res.status(204);
    } catch (e){
      res.status(404);
      res.send({ error: "User not fetched!" });
    }
  };