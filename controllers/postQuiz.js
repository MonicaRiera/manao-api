const Quiz = require('../models/quiz')

module.exports = (req, res) => {
	Quiz.create(req.body)
	.then(data => {
		console.log(req.body);
		res.send(data)
	})
	.catch(error => {
		res.send(error)
	})
}
