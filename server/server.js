var express = require("express");
var ejs = require("ejs");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var passport = require("passport");
var morgan = require("morgan");
var session = require("express-session");
var flash = require("connect-flash");
var cookieParser = require('cookie-parser');
var ShowController = require("./controllers/ShowController");

require('./config/passport')(passport);

var app = express();
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../app/dist")));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use("/api", ShowController);

// for passport
app.use(session({ secret: 'hablahkabajo' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


app.post('/signup', passport.authenticate('local-signup', {
  successRedirect : '/',
  failureRedirect : '/login',
  failureFlash : true
}));

app.post('/login', passport.authenticate('local-login', {
  successRedirect : '/',
  failureRedirect : '/login',
  failureFlash : true
}));


app.get('*', (req, res) => {
	let data = {};
	if (req.user) {
		data['name'] = req.user.name.firstName + ' ' + req.user.name.lastName;
		data['email'] = req.user.email;
		data['shows'] = req.user.shows;
	}
	res.render(path.join(__dirname, "../app/dist/index.ejs"), { userData: JSON.stringify(data) })
})

var server_port = process.env.PORT || 3000;
app.listen(server_port, function() {
	console.log("Started listening on port", server_port);
});


// Connect to mongodb database
mongoose.connect("mongodb://localhost/tvshowtracker");
