const Quiz = require('../models/quiz')

module.exports = (req, res) => {
	Quiz.create(req.body)
	.then(data => {
		res.send(data)
	})
	.catch(error => {
		res.send(error)
	})
}
