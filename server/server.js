let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let path = require("path");
let UserController = require("./controllers/UserController");
let ShowController = require("./controllers/ShowController");

//Express request pipeline
let app = express();
app.use(express.static(path.join(__dirname, "../app/dist")));
app.use(bodyParser.json())
app.use("/api", UserController);
app.use("/api", ShowController);


let server_port = process.env.PORT || 3000;
app.listen(server_port, function() {
	console.log("Started listening on port", server_port);
});


// Connect to mongodb database
mongoose.connect("mongodb://localhost/tvshowtracker");
