var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

var showSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name:{ type: String, unique: true },
  language: String,
  genres: Array,
  status: String,
  runtime: Number,
  premiered: String,
  rating: Object,
  network: Object,
  image: Object,
  summary: String,
});

var userSchema = new mongoose.Schema({
  name: {
    firstName: String,
    lastName: String
  },
  email: { type: String, unique: true },
  password: String,
  shows: Array,
});


userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};


var Shows = mongoose.model('Shows', showSchema);
var Users = mongoose.model('Users', userSchema);

module.exports = {
  Shows,
  Users
}
