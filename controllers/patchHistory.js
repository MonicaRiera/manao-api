const History = require('../models/history')
const User = require('../models/user')


module.exports = (req, res) => {

	History.findById(req.params.historyId).lean()
  .then(history => {
    console.log(history)
    res.send(history)
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
