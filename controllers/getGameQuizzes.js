const Game = require('../models/game')

module.exports = (req, res) => {
	Game.findOne({_id: req.params.id})
	.select('quizzes').populate('quizzes.quiz')
	.then(game => res.send(game))
	.catch(error => res.send(error))
}
