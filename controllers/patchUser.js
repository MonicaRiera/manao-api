const User = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {

	User.findOne({_id: req.params.id}).lean()
	.then(user => {
		user.name = req.body.name
		user.email = req.body.email
		user.nationality = req.body.nationality
		User.findByIdAndUpdate(user._id, user, {new:true})
		.then(updatedUser => res.send(updatedUser))
	})
	.catch(error => res.send(error))
}
