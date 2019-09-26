const History = require('../models/history')

module.exports = (req, res) => {
	History.find({}).lean()
	.then(data => {
		let userHistory = []
		data.map(his => {
			his.players.map(p => {
				if (p.user == req.params.userId) {
					userHistory.push(his)
				}
			})
		})
		res.send(userHistory)
	})
	.catch(error => res.send(error))
}
