const Game = require('../models/game')

module.exports = (req, res) => {
	Game.find({})
	.populate('tags')
	.then(games => res.send(games))
	.catch(error => res.send(error))
}
