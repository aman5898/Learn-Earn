const moment = require("moment")

exports.validateName = function (name) {
  var regex = /^[a-zA-Z ]{2,30}$/;
  var ctrl = name;

  if (regex.test(ctrl)) {
    return true;
  } else {
    return false;
  }
};

exports.validatePhonenumber = function (inputtxt) {
  var phoneno = /^\d{10}$/;
  if (inputtxt.match(phoneno)) {
    return true;
  } else {
    return false;
  }
};

exports.compareDate = function(datetime) {
  date = datetime.toString()
  diff = moment(date,'llll').fromNow(true)
  var dur = diff.split(" ")
  var timeleft = moment.duration(dur[0], dur[1])._milliseconds
  if( timeleft < 86400000 ){
    return true
  } else {
    return false
  }
}