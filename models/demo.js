var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var DemoSchema = new Schema({
  first_name: { type: String, required: true, max: 100 },
  family_name: { type: String, required: true, max: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

// Virtual for Demo's full name
DemoSchema.virtual("name").get(function () {
  // To avoid errors in cases where an Demo does not have either a family name or first name
  // We want to make sure we handle the exception by returning an empty string for that case

  var fullname = "";
  if (this.first_name && this.family_name) {
    fullname = this.family_name + ", " + this.first_name;
  }
  if (!this.first_name || !this.family_name) {
    fullname = "";
  }

  return fullname;
});

// Virtual for Demo's lifespan
DemoSchema.virtual("lifespan").get(function () {
  return (
    this.date_of_death.getYear() - this.date_of_birth.getYear()
  ).toString();
});

// Virtual for Demo's URL
DemoSchema.virtual("url").get(function () {
  return "/catalog/Demo/" + this._id;
});

//Export model
module.exports = mongoose.model("Demo", DemoSchema);
