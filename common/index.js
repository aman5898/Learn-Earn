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
