



module.exports = {
	newApplicant: function(req, res){
		// console.log(req.body);
		// console.log(req.body.name);
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
		})

		
		res.send('Success!');
	}



}









