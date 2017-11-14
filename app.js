'use strict' 

// ALWAYS USE CONST -- this is ECMA2015/ES6 compliant, given that none of these should change or be altered in any way
// within the app running itself. Any changes need to be done on the back-end, file level. 

const express = require('express'), 
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	Wines = require('./api/model/schema'),
	bodyParser = require('body-parser');

	// Additional Modules
	// Auth and security - bcrypt and oAuth
	// + Hashing library.

	// angular/react library for front end web app
	// path
	// logger




// instantiating mongoose - did you know Mongoose are actually not related to weasels and are actually closer related to cats? Meow.
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/WineDB');

app.use(bodyParser.urlencoded({ extended: false })); // honestly, this doesn't need to be extended because I'm not doing anything beyond standard JSON
app.use(bodyParser.json()); 

const routes = require('./api/api') ; // importing the routes
routes(app);


app.listen(port);

console.log("Listening on port: " + port);