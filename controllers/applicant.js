var Applicant = require('../models/applicant.js');



module.exports = {
	createApplicant: function(req, res){
		// Creates a new applicant from the form data
		var newApp = new Applicant.applicant({
			name: req.body.name,
			bio: req.body.bio,
			skills: req.body.skills
								.split(',')
								.map(function(skill) {
									return skill.trim()
								}),
			years: +req.body.years,
			why: req.body.why
		});

		// Saves the new applicant to the database
		newApp.save(function(err, newApp) {
			if (err) {
				console.log('Error saving new applicant.');
				res.send(500, 'There was an error saving your application.');
			}
			res.redirect('/applicants');
		})
	},

	showApplicants: function(req, res) {
		console.log(req.params.userid);
		var applicantToFind;
		if (req.params.userid === undefined) {
			applicantToFind = {};
		}
		else {
			applicantToFind = { _id : req.params.userid };
		}

		Applicant.applicant.find(applicantToFind, function(err, applicants) {
			if (err) {
				console.log('Error retrieving applicants.');
				res.send(500, 'There was an error retrieving applicants.');
			}
			res.render('applicants', { applicants: applicants });
		})
	},

	deleteApplicant: function(req, res) {
		Applicant.applicant.remove({ _id : req.params.applicantID }).exec();
		res.redirect('/applicants');
	}

}









