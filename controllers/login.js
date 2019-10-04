const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

module.exports = (req, res) => {
	User.findOne({email: req.body.email}).select('email password name avatar')
	.then(data => {
		let match = bcrypt.compareSync(req.body.password, data.password)
		if(match) {
			let object = data.toObject()
			delete object.password
			let token = jwt.sign(object, process.env.SECRET)
			res.send({token: token})
		} else {
			res.send('WRONG PASSWORD')
		}
	})
	.catch(error => res.send('USER NOT FOUND'))
}
