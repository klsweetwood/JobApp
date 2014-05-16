var User = require('../models/user.js');

module.exports = {
	createUser: function (req, res) {
		var newUser = new User({
			username: req.body.username,
			admin: false
		})
		res.send(newUser);
	}

	// createAdminUser: function (req, res) {
	// 	var newUser = new User({
	// 		username: req.body.username,
	// 		admin: true
	// 	})
	// }

	// deleteUser: function (req, res) {
	// 	User.remove({ _id : req.params. }).exec();
	// 	res.redirect('/users');
	// }

}
