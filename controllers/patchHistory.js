const History = require('../models/history')
const User = require('../models/user')


module.exports = (req, res) => {
	console.log("heyyyyyy")
	History.findOne({_id: req.params.historyId})..populate('players.user').lean()
  .then(history => {

		let updatedHistory = history.players.forEach( player => {
			if(player.user === req.body.userId) {
				player.score = req.body.score
			}
		})

		console.log("===>", updatedHistory)

		History.findByIdAndUpdate(req.params.historyId, updatedHistory)
		.then(updatedHistory => res.send(updatedHistory))
			.catch(error => res.send(error))
  })

	.catch(error => res.send(error))
}

//
// GOAL
// update user score
//
// with history id => find History (req.body.history_id)
//
// with userid => find players with user_id  (req.body.user_id)
//
// update player.score with given params (req.body.score)
//   score
