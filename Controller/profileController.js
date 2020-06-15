//Add your model by inserting file in models folder and then import it here like the example given below
//var Demo = require("../models/demo");


let User = require("../models/users");
var validator = require("validator");
var common = require("../common");

exports.get_profile = function (req, res) {
  const me = req.user.toJSON();
  res.send(me);
};

exports.edit_profile_name = function (req, res) {
  req.body.name = req.body.name.trim();
  if (!req.body.name) {
    res.status(400).send("Empty Name Value");
    return;
  }

  if (common.validateName(req.body.name) == false) {
    res.status(400).send("Please Enter Valid Name");
    return;
  }

  let me = req.user.toJSON();
  let newName = req.body.name;

  User.updateOne(
    { email: me.email },
    { $set: { name: newName } },
    (err, obj) => {
      if (err) {
        res.send(err);
        return;
      }
      res.send("Name has been Updated");
    }
  );
};

exports.edit_phone_number = function (req, res) {
  if (!req.body.phone_number || !req.body.isd_code) {
    res.status(400).send("Missing Phone Number or Isd Code");
    return;
  }
  if (common.validatePhonenumber(req.body.phone_number) == false) {
    res.status(400).send("Invalid Phone Number");
    return;
  }
  let me = req.user.toJSON();
  let newContact = {
    isd_code: req.body.isd_code,
    phone_number: req.body.phone_number,
  };

  User.updateOne(
    { email: me.email },
    { $set: { contact: newContact } },
    (err, obj) => {
      if (err) {
        res.send(err);
        return;
      }
      res.send("Phone Number has been Updated");
    }
  );
};

exports.edit_dob = function (req, res) {
  // rem To use methods getDate,getMonth and getYear while extracting date and also month is
  //stored via 0 index in js so january is 0 not 1
  if (!req.body.dob) {
    res.status(400).send("Missing Date of Birth");
    return;
  }

  if (validator.isDate(req.body.dob, "DD/MM/YYYY") == false) {
    res.status(400).send("Invalid date");
    return;
  }

  let parts = req.body.dob.split("/");
  // passing data in format year, month(0 index based) and date
  let newDob = new Date(parts[2], parts[1] - 1, parts[0]);
  console.log(newDob.getDate());

  let me = req.user.toJSON();

  User.updateOne(
    { email: me.email },
    { $set: { date_of_birth: newDob } },
    (err, obj) => {
      if (err) {
        console.log(err);

        res.send(err);
        return;
      }
      res.send("Date of Birth has been Updated");
    }
  );
};
