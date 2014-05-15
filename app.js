var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Applicant = require('./models/applicant.js');

mongoose.connect('mongodb://localhost/omega3');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});

// displays a list of applicants
app.get('/applicants', function(req, res){
	res.render('applicants');
});

// creates and applicant
app.post('/applicant', );

var server = app.listen(3000, function() {
	console.log('Express server listening on port ' + server.address().port);
});
