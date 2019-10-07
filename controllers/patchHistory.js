const History = require('../models/history')
const User = require('../models/user')


module.exports = (req, res) => {

	History.findOne({_id: req.params.historyId}).lean()
  .then(history => {
		history.players.forEach( player => {
			if(String(player.user) === req.body.userId) {
				player.score = req.body.score
			}
		})

		console.log("===>", history)

		History.findByIdAndUpdate(req.params.historyId, history, {new:true})
		.then(updatedHistory => res.send(updatedHistory))
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
