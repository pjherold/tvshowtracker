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
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  myShows: Array,
});

var Shows = mongoose.model('Shows', showSchema);
var Users = mongoose.model('Users', userSchema);

module.exports = Users;
module.exports = Shows;
