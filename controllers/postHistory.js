const History = require('../models/history')

module.exports = (req, res) => {
	History.create(req.body)
	.then(data => {
		res.send(data)
	})
	.catch(error => {
		res.send(error)
	})
}
