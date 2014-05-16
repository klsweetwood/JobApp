var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var ApplicantController = require('./controllers/applicant.js');
var UserController = require('./controllers/user.js');

mongoose.connect('mongodb://localhost/omega3');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});

// application page
app.get('/application', function(req, res) {
	res.render('application');
});

// displays a list of applicants
app.get('/applicants', ApplicantController.showApplicants);

// creates an applicant
app.post('/applicants', ApplicantController.createApplicant);

//
app.get('/applicants/:userid', ApplicantController.showApplicants);

// deletes an applicant
app.get('/delete/:applicantID', ApplicantController.deleteApplicant);

// creates a user
app.post('/user', UserController.createUser);

// // sign in
// app.get('/user', UserController.createUser);




var server = app.listen(3000, function() {
	console.log('Express server listening on port ' + server.address().port);
});
