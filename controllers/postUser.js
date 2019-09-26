const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {

	User.findOne({email: req.body.email})
	.then(data => {
		if (data) {
			res.send('USER ALREADY EXISTS')
		} else {
			req.body.password = bcrypt.hashSync(req.body.password, 10)
			User.create(req.body).then(data => {
				let object = data.toObject()
				delete object.avatar
				delete object.name
				delete object.nationality
				delete object.password
				let token = jwt.sign(object, process.env.SECRET)
				res.send({token: token})
			})
		}
	})

}
