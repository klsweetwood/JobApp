var mongoose = require('mongoose');

var User = mongoose.model('user', {
	username: String,
	admin: Boolean
});

module.exports = User;