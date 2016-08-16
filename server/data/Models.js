let mongoose = require("mongoose");

let showSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  airsDayOfWeek: String,
  airsTime: String,
  firstAired: Date,
  genre: [String],
  network: String,
  overview: String,
  rating: Number,
  ratingCount: Number,
  status: String,
  poster: String,
  subscribers: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  }],
  episodes: [{
      season: Number,
      episodeNumber: Number,
      episodeName: String,
      firstAired: Date,
      overview: String
  }]
});

let userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String
});

let Show = mongoose.model('Show', showSchema);
let User = mongoose.model('User', userSchema);

let me = new User({
  email: 'pjhd',
  password: 'jpp'
});
console.log(3);
me.save(function(err, thor) {
  if (err) return console.error(err);
  console.dir(thor);
});

export default Show;
export default User;
