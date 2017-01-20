var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var ShowController = require("./controllers/ShowController");

//Express request pipeline
var app = express();

app.use(express.static(path.join(__dirname, "../app/dist")));
app.use(bodyParser.json());
app.use("/api", ShowController);


var server_port = process.env.PORT || 3000;
app.listen(server_port, function() {
	console.log("Started listening on port", server_port);
});

// Connect to mongodb database
mongoose.connect("mongodb://localhost/tvshowtracker");
