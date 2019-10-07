const History = require('../models/history')
const User = require('../models/user')


module.exports = (req, res) => {

	History.findOne({_id: req.params.historyId})
  .then(history => {
    console.log('hello')
    res.send('hello')
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
