var mongoose = require("mongoose");

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
  email: { type: String, unique: true },
  password: String
});

var Show = mongoose.model('Show', showSchema);
var User = mongoose.model('User', userSchema);

module.exports = User;
module.exports = Show;
